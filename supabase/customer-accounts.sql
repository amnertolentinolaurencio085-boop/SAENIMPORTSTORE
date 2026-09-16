-- SAEN IMPORT: cuentas de clientes y pedidos vinculados.
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

alter table public.pedidos add column if not exists cliente_user_id uuid references auth.users(id) on delete set null;
create index if not exists pedidos_cliente_user_idx on public.pedidos(cliente_user_id, created_at desc);
drop policy if exists "clientes leen sus pedidos" on public.pedidos;
create policy "clientes leen sus pedidos" on public.pedidos for select to authenticated
using (cliente_user_id=auth.uid());
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
