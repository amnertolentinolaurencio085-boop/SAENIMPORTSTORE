-- SAEN IMPORT: ejecutar completo en Supabase > SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.catalogo_productos (
  id uuid primary key default gen_random_uuid(),
  sku text not null unique check (length(trim(sku)) between 2 and 40),
  categoria text not null check (categoria in ('accesorios','cuidado','higiene','mochilas','novedades','cocina','juguetes','escolar','maquillaje','perfumes','papeleria')),
  nombre text not null check (length(nombre) between 1 and 120),
  descripcion text not null default '',
  stock integer not null default 0 check (stock >= 0),
  unidad_medida text not null default 'unidad',
  imagen_principal text not null,
  galeria jsonb not null default '[]'::jsonb check (jsonb_typeof(galeria) = 'array'),
  badge text,
  estado text not null default 'disponible' check (estado in ('disponible','agotado','oculto')),
  visible boolean not null default true,
  descuento numeric(5,2) not null default 0 check (descuento between 0 and 100),
  estrellas numeric(2,1) not null default 0 check (estrellas between 0 and 5),
  resenas integer not null default 0 check (resenas >= 0),
  precios jsonb not null default '[]'::jsonb check (jsonb_typeof(precios) = 'array'),
  variantes jsonb not null default '[]'::jsonb check (jsonb_typeof(variantes) = 'array'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists catalogo_productos_categoria_idx on public.catalogo_productos(categoria);
create index if not exists catalogo_productos_visible_idx on public.catalogo_productos(visible, estado);

alter table public.admin_users enable row level security;
alter table public.catalogo_productos enable row level security;

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from admin_users where user_id = auth.uid());
$$;
revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

drop policy if exists "catalogo publico visible" on public.catalogo_productos;
create policy "catalogo publico visible" on public.catalogo_productos for select
using (visible = true and estado <> 'oculto');
drop policy if exists "admins leen todo" on public.catalogo_productos;
create policy "admins leen todo" on public.catalogo_productos for select to authenticated
using (public.is_admin());
drop policy if exists "admins insertan" on public.catalogo_productos;
create policy "admins insertan" on public.catalogo_productos for insert to authenticated
with check (public.is_admin());
drop policy if exists "admins actualizan" on public.catalogo_productos;
create policy "admins actualizan" on public.catalogo_productos for update to authenticated
using (public.is_admin())
with check (public.is_admin());
drop policy if exists "admins eliminan" on public.catalogo_productos;
create policy "admins eliminan" on public.catalogo_productos for delete to authenticated
using (public.is_admin());

create or replace function public.next_product_sku(category_slug text)
returns text language plpgsql security definer set search_path = public as $$
declare prefix text; next_number int;
begin
  if not public.is_admin() then raise exception 'No autorizado'; end if;
  prefix := case category_slug when 'accesorios' then 'ACC' when 'cuidado' then 'CUI' when 'higiene' then 'HIG' when 'mochilas' then 'MOC' when 'novedades' then 'NOV' when 'cocina' then 'COC' when 'juguetes' then 'JUG' when 'escolar' then 'ESC' when 'maquillaje' then 'MAQ' when 'perfumes' then 'PER' when 'papeleria' then 'PAP' else null end;
  if prefix is null then raise exception 'Categoría no válida'; end if;
  perform pg_advisory_xact_lock(hashtext(category_slug));
  select coalesce(max(substring(sku from 4)::int),0)+1 into next_number from catalogo_productos where sku like prefix || '%';
  return prefix || lpad(next_number::text,3,'0');
end $$;
revoke all on function public.next_product_sku(text) from public;
grant execute on function public.next_product_sku(text) to authenticated;

-- Cuentas de clientes. El perfil se crea automáticamente al registrarse
-- y cada cliente solo puede leer o editar sus propios datos.
create table if not exists public.cliente_perfiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  nombre text not null default '',
  telefono text not null default '',
  ciudad text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.cliente_perfiles enable row level security;
drop policy if exists "clientes leen su perfil" on public.cliente_perfiles;
create policy "clientes leen su perfil" on public.cliente_perfiles for select to authenticated
using (auth.uid()=user_id or public.is_admin());
drop policy if exists "clientes crean su perfil" on public.cliente_perfiles;
create policy "clientes crean su perfil" on public.cliente_perfiles for insert to authenticated
with check (auth.uid()=user_id);
drop policy if exists "clientes actualizan su perfil" on public.cliente_perfiles;
create policy "clientes actualizan su perfil" on public.cliente_perfiles for update to authenticated
using (auth.uid()=user_id) with check (auth.uid()=user_id);

create or replace function public.crear_perfil_cliente()
returns trigger language plpgsql security definer set search_path=public as $$
begin
  insert into public.cliente_perfiles(user_id,nombre,telefono,ciudad)
  values(new.id,coalesce(new.raw_user_meta_data->>'nombre',''),coalesce(new.raw_user_meta_data->>'telefono',''),coalesce(new.raw_user_meta_data->>'ciudad',''))
  on conflict(user_id) do nothing;
  return new;
end $$;
drop trigger if exists crear_perfil_cliente_al_registrarse on auth.users;
create trigger crear_perfil_cliente_al_registrarse after insert on auth.users
for each row execute function public.crear_perfil_cliente();

-- Pedidos: se registran antes de abrir WhatsApp. El stock se descuenta
-- una sola vez cuando el administrador confirma la venta.
create table if not exists public.pedidos (
  id uuid primary key default gen_random_uuid(),
  codigo text not null unique default ('SAE-' || upper(substr(replace(gen_random_uuid()::text,'-',''),1,8))),
  cliente_nombre text not null check (length(trim(cliente_nombre)) between 2 and 100),
  telefono text not null check (length(trim(telefono)) between 6 and 25),
  ciudad text not null default '',
  notas text not null default '',
  total numeric(12,2) not null default 0 check (total >= 0),
  estado text not null default 'nuevo' check (estado in ('nuevo','confirmado','enviado','entregado','cancelado')),
  stock_aplicado boolean not null default false,
  confirmado_at timestamptz,
  enviado_at timestamptz,
  entregado_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.pedidos add column if not exists cliente_user_id uuid references auth.users(id) on delete set null;

create table if not exists public.pedido_items (
  id uuid primary key default gen_random_uuid(),
  pedido_id uuid not null references public.pedidos(id) on delete cascade,
  producto_id uuid not null references public.catalogo_productos(id),
  sku text not null,
  nombre text not null,
  tipo_precio text not null,
  cantidad integer not null check (cantidad > 0),
  unidades_stock integer not null check (unidades_stock > 0),
  precio_unitario numeric(12,2) not null check (precio_unitario >= 0),
  subtotal numeric(12,2) not null check (subtotal >= 0)
);

create index if not exists pedidos_estado_created_idx on public.pedidos(estado, created_at desc);
create index if not exists pedidos_cliente_user_idx on public.pedidos(cliente_user_id, created_at desc);
create index if not exists pedido_items_pedido_idx on public.pedido_items(pedido_id);
alter table public.pedidos enable row level security;
alter table public.pedido_items enable row level security;

drop policy if exists "admins leen pedidos" on public.pedidos;
create policy "admins leen pedidos" on public.pedidos for select to authenticated
using (public.is_admin());
drop policy if exists "clientes leen sus pedidos" on public.pedidos;
create policy "clientes leen sus pedidos" on public.pedidos for select to authenticated
using (cliente_user_id=auth.uid());
drop policy if exists "admins leen items" on public.pedido_items;
create policy "admins leen items" on public.pedido_items for select to authenticated
using (public.is_admin());
drop policy if exists "clientes leen items de sus pedidos" on public.pedido_items;
create policy "clientes leen items de sus pedidos" on public.pedido_items for select to authenticated
using (exists(select 1 from public.pedidos where pedidos.id=pedido_items.pedido_id and pedidos.cliente_user_id=auth.uid()));

create or replace function public.crear_pedido(
  p_cliente_nombre text,
  p_telefono text,
  p_ciudad text,
  p_notas text,
  p_items jsonb
)
returns table (pedido_id uuid, pedido_codigo text, pedido_total numeric)
language plpgsql security definer set search_path = public as $$
declare
  v_pedido_id uuid;
  v_codigo text;
  v_total numeric(12,2) := 0;
  v_item jsonb;
  v_producto public.catalogo_productos%rowtype;
  v_precio jsonb;
  v_tipo text;
  v_cantidad integer;
  v_factor integer;
  v_unidades integer;
  v_unitario numeric(12,2);
  v_subtotal numeric(12,2);
begin
  if length(trim(coalesce(p_cliente_nombre,''))) < 2 then raise exception 'Ingresa tu nombre'; end if;
  if length(trim(coalesce(p_telefono,''))) < 6 then raise exception 'Ingresa un teléfono válido'; end if;
  if p_items is null or jsonb_typeof(p_items) <> 'array' or jsonb_array_length(p_items) = 0 then
    raise exception 'El pedido está vacío';
  end if;

  if auth.uid() is not null then
    insert into public.cliente_perfiles(user_id,nombre,telefono,ciudad,updated_at)
    values(auth.uid(),trim(p_cliente_nombre),trim(p_telefono),trim(coalesce(p_ciudad,'')),now())
    on conflict(user_id) do update set nombre=excluded.nombre,telefono=excluded.telefono,ciudad=excluded.ciudad,updated_at=now();
  end if;

  insert into public.pedidos(cliente_nombre,telefono,ciudad,notas,cliente_user_id)
  values (trim(p_cliente_nombre),trim(p_telefono),trim(coalesce(p_ciudad,'')),trim(coalesce(p_notas,'')),auth.uid())
  returning id,codigo into v_pedido_id,v_codigo;

  for v_item in select value from jsonb_array_elements(p_items)
  loop
    v_tipo := trim(v_item->>'tipo');
    v_cantidad := greatest(1,coalesce((v_item->>'cantidad')::integer,1));
    select * into v_producto from public.catalogo_productos
      where sku = trim(v_item->>'sku') and visible = true and estado <> 'oculto';
    if not found then raise exception 'Producto no disponible: %', coalesce(v_item->>'sku','sin SKU'); end if;

    select value into v_precio from jsonb_array_elements(v_producto.precios)
      where lower(value->>'tipo') = lower(v_tipo) limit 1;
    if v_precio is null then raise exception 'Precio no disponible para %', v_producto.sku; end if;

    v_unitario := round(((v_precio->>'valor')::numeric * (1 - v_producto.descuento / 100))::numeric,2);
    v_factor := case
      when lower(v_tipo) = 'docena' then 12
      when lower(v_tipo) = 'ciento' then 100
      when lower(v_tipo) like 'caja%' or lower(v_tipo) like 'box%' or lower(v_tipo) in ('paquete','pack')
        then greatest(1,coalesce((v_precio->>'unidades')::integer,(v_precio->>'cantidad')::integer,1))
      else 1 end;
    v_unidades := v_cantidad * v_factor;
    if v_unidades > v_producto.stock then raise exception 'Stock insuficiente para %', v_producto.nombre; end if;
    v_subtotal := round(v_unitario * v_cantidad,2);
    v_total := v_total + v_subtotal;

    insert into public.pedido_items(pedido_id,producto_id,sku,nombre,tipo_precio,cantidad,unidades_stock,precio_unitario,subtotal)
    values(v_pedido_id,v_producto.id,v_producto.sku,v_producto.nombre,v_tipo,v_cantidad,v_unidades,v_unitario,v_subtotal);
  end loop;

  update public.pedidos set total=v_total,updated_at=now() where id=v_pedido_id;
  return query select v_pedido_id,v_codigo,v_total;
end $$;
revoke all on function public.crear_pedido(text,text,text,text,jsonb) from public;
grant execute on function public.crear_pedido(text,text,text,text,jsonb) to anon, authenticated;

create or replace function public.cambiar_estado_pedido(p_pedido_id uuid,p_estado text)
returns void language plpgsql security definer set search_path = public as $$
declare
  v_pedido public.pedidos%rowtype;
  v_item public.pedido_items%rowtype;
  v_rows integer;
begin
  if not public.is_admin() then raise exception 'No autorizado'; end if;
  if p_estado not in ('nuevo','confirmado','enviado','entregado','cancelado') then raise exception 'Estado no válido'; end if;
  select * into v_pedido from public.pedidos where id=p_pedido_id for update;
  if not found then raise exception 'Pedido no encontrado'; end if;

  if v_pedido.stock_aplicado and p_estado='nuevo' then
    raise exception 'Un pedido confirmado no puede volver a Nuevo';
  end if;

  if not v_pedido.stock_aplicado and p_estado in ('confirmado','enviado','entregado') then
    for v_item in select * from public.pedido_items where pedido_id=p_pedido_id loop
      update public.catalogo_productos
        set stock=stock-v_item.unidades_stock,
            estado=case when stock-v_item.unidades_stock=0 then 'agotado' else estado end,
            updated_at=now()
        where id=v_item.producto_id and stock>=v_item.unidades_stock;
      get diagnostics v_rows = row_count;
      if v_rows=0 then raise exception 'Stock insuficiente para %', v_item.nombre; end if;
    end loop;
    v_pedido.stock_aplicado := true;
  elsif v_pedido.stock_aplicado and p_estado='cancelado' then
    for v_item in select * from public.pedido_items where pedido_id=p_pedido_id loop
      update public.catalogo_productos
        set stock=stock+v_item.unidades_stock,
            estado=case when estado='agotado' and visible then 'disponible' else estado end,
            updated_at=now()
        where id=v_item.producto_id;
    end loop;
    v_pedido.stock_aplicado := false;
  end if;

  update public.pedidos set estado=p_estado,stock_aplicado=v_pedido.stock_aplicado,
    confirmado_at=case when p_estado='confirmado' and confirmado_at is null then now() else confirmado_at end,
    enviado_at=case when p_estado='enviado' and enviado_at is null then now() else enviado_at end,
    entregado_at=case when p_estado='entregado' and entregado_at is null then now() else entregado_at end,
    updated_at=now()
  where id=p_pedido_id;
end $$;
revoke all on function public.cambiar_estado_pedido(uuid,text) from public;
grant execute on function public.cambiar_estado_pedido(uuid,text) to authenticated;

-- Métricas anónimas del catálogo para el dashboard. Solo se guarda el SKU
-- consultado y un contador; no se almacenan IP, cookies ni datos personales.
create table if not exists public.producto_metricas (
  sku text primary key references public.catalogo_productos(sku) on update cascade on delete cascade,
  consultas bigint not null default 0 check (consultas >= 0),
  whatsapp_clicks bigint not null default 0 check (whatsapp_clicks >= 0),
  updated_at timestamptz not null default now()
);
alter table public.producto_metricas enable row level security;
drop policy if exists "admins leen metricas" on public.producto_metricas;
create policy "admins leen metricas" on public.producto_metricas for select to authenticated
using (public.is_admin());

create or replace function public.registrar_consulta(p_sku text,p_tipo text default 'vista')
returns void language plpgsql security definer set search_path = public as $$
begin
  if not exists(select 1 from public.catalogo_productos where sku=p_sku and visible=true and estado<>'oculto') then return; end if;
  insert into public.producto_metricas(sku,consultas,whatsapp_clicks)
  values(p_sku,case when p_tipo='vista' then 1 else 0 end,case when p_tipo='whatsapp' then 1 else 0 end)
  on conflict(sku) do update set
    consultas=producto_metricas.consultas + case when p_tipo='vista' then 1 else 0 end,
    whatsapp_clicks=producto_metricas.whatsapp_clicks + case when p_tipo='whatsapp' then 1 else 0 end,
    updated_at=now();
end $$;
revoke all on function public.registrar_consulta(text,text) from public;
grant execute on function public.registrar_consulta(text,text) to anon,authenticated;

insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('productos','productos',true,5242880,array['image/jpeg','image/png','image/webp'])
on conflict (id) do update set public=true,file_size_limit=5242880,allowed_mime_types=array['image/jpeg','image/png','image/webp'];
drop policy if exists "imagenes publicas" on storage.objects;
create policy "imagenes publicas" on storage.objects for select using (bucket_id='productos');
drop policy if exists "admins suben imagenes" on storage.objects;
create policy "admins suben imagenes" on storage.objects for insert to authenticated
with check (bucket_id='productos' and public.is_admin());
drop policy if exists "admins actualizan imagenes" on storage.objects;
create policy "admins actualizan imagenes" on storage.objects for update to authenticated
using (bucket_id='productos' and public.is_admin());
drop policy if exists "admins eliminan imagenes" on storage.objects;
create policy "admins eliminan imagenes" on storage.objects for delete to authenticated
using (bucket_id='productos' and public.is_admin());
