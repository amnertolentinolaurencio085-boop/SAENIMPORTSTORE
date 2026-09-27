-- SAEN IMPORT: pedidos, reservas, notificaciones y métricas.
-- Ejecutar una sola vez en Supabase > SQL Editor.

alter table public.catalogo_productos
  add column if not exists stock_reservado integer not null default 0 check (stock_reservado >= 0);

alter table public.pedidos
  add column if not exists stock_reservado boolean not null default false,
  add column if not exists pago_confirmado_at timestamptz;

alter table public.pedidos drop constraint if exists pedidos_estado_check;
alter table public.pedidos add constraint pedidos_estado_check
  check (estado in ('nuevo','pago_pendiente','confirmado','enviado','entregado','cancelado'));

create table if not exists public.notificaciones (
  id uuid primary key default gen_random_uuid(),
  destinatario text not null check (destinatario in ('admin','cliente')),
  user_id uuid references auth.users(id) on delete cascade,
  titulo text not null,
  mensaje text not null,
  tipo text not null default 'info',
  enlace text not null default '',
  leida boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists notificaciones_admin_idx on public.notificaciones(destinatario,leida,created_at desc);
create index if not exists notificaciones_cliente_idx on public.notificaciones(user_id,leida,created_at desc);
alter table public.notificaciones enable row level security;
drop policy if exists "admins leen notificaciones" on public.notificaciones;
create policy "admins leen notificaciones" on public.notificaciones for select to authenticated
using (destinatario='admin' and public.is_admin());
drop policy if exists "admins actualizan notificaciones" on public.notificaciones;
create policy "admins actualizan notificaciones" on public.notificaciones for update to authenticated
using (destinatario='admin' and public.is_admin()) with check (destinatario='admin' and public.is_admin());
drop policy if exists "clientes leen notificaciones" on public.notificaciones;
create policy "clientes leen notificaciones" on public.notificaciones for select to authenticated
using (destinatario='cliente' and user_id=auth.uid());
drop policy if exists "clientes actualizan notificaciones" on public.notificaciones;
create policy "clientes actualizan notificaciones" on public.notificaciones for update to authenticated
using (destinatario='cliente' and user_id=auth.uid()) with check (destinatario='cliente' and user_id=auth.uid());

create table if not exists public.sitio_metricas (
  fecha date not null default current_date,
  pagina text not null,
  visitas bigint not null default 0 check (visitas >= 0),
  primary key(fecha,pagina)
);
alter table public.sitio_metricas enable row level security;
drop policy if exists "admins leen visitas" on public.sitio_metricas;
create policy "admins leen visitas" on public.sitio_metricas for select to authenticated using (public.is_admin());

create or replace function public.registrar_visita(p_pagina text)
returns void language plpgsql security definer set search_path=public as $$
declare v_pagina text := left(regexp_replace(coalesce(p_pagina,'inicio'),'[^a-zA-Z0-9_-]','','g'),80);
begin
  if v_pagina='' then v_pagina := 'inicio'; end if;
  insert into public.sitio_metricas(fecha,pagina,visitas) values(current_date,v_pagina,1)
  on conflict(fecha,pagina) do update set visitas=public.sitio_metricas.visitas+1;
end $$;
revoke all on function public.registrar_visita(text) from public;
grant execute on function public.registrar_visita(text) to anon,authenticated;

create or replace function public.crear_pedido(
  p_cliente_nombre text,p_telefono text,p_ciudad text,p_notas text,p_items jsonb
)
returns table (pedido_id uuid,pedido_codigo text,pedido_total numeric)
language plpgsql security definer set search_path=public as $$
declare
  v_pedido_id uuid; v_codigo text; v_total numeric(12,2):=0; v_item jsonb;
  v_producto public.catalogo_productos%rowtype; v_precio jsonb; v_tipo text;
  v_cantidad integer; v_factor integer; v_unidades integer;
  v_unitario numeric(12,2); v_subtotal numeric(12,2);
begin
  if length(trim(coalesce(p_cliente_nombre,'')))<2 then raise exception 'Ingresa tu nombre'; end if;
  if length(trim(coalesce(p_telefono,'')))<6 then raise exception 'Ingresa un teléfono válido'; end if;
  if p_items is null or jsonb_typeof(p_items)<>'array' or jsonb_array_length(p_items)=0 then raise exception 'El pedido está vacío'; end if;
  if auth.uid() is not null then
    insert into public.cliente_perfiles(user_id,nombre,telefono,ciudad,updated_at)
    values(auth.uid(),trim(p_cliente_nombre),trim(p_telefono),trim(coalesce(p_ciudad,'')),now())
    on conflict(user_id) do update set nombre=excluded.nombre,telefono=excluded.telefono,ciudad=excluded.ciudad,updated_at=now();
  end if;
  insert into public.pedidos(cliente_nombre,telefono,ciudad,notas,cliente_user_id)
  values(trim(p_cliente_nombre),trim(p_telefono),trim(coalesce(p_ciudad,'')),trim(coalesce(p_notas,'')),auth.uid())
  returning id,codigo into v_pedido_id,v_codigo;
  for v_item in select value from jsonb_array_elements(p_items) loop
    v_tipo:=trim(v_item->>'tipo'); v_cantidad:=greatest(1,coalesce((v_item->>'cantidad')::integer,1));
    select * into v_producto from public.catalogo_productos where sku=trim(v_item->>'sku') and visible=true and estado<>'oculto' for update;
    if not found then raise exception 'Producto no disponible: %',coalesce(v_item->>'sku','sin SKU'); end if;
    select value into v_precio from jsonb_array_elements(v_producto.precios) where lower(value->>'tipo')=lower(v_tipo) limit 1;
    if v_precio is null then raise exception 'Precio no disponible para %',v_producto.sku; end if;
    v_unitario:=round(((v_precio->>'valor')::numeric*(1-v_producto.descuento/100))::numeric,2);
    v_factor:=case when lower(v_tipo)='docena' then 12 when lower(v_tipo)='ciento' then 100
      when lower(v_tipo) like 'caja%' or lower(v_tipo) like 'box%' or lower(v_tipo) in ('paquete','pack')
      then greatest(1,coalesce((v_precio->>'unidades')::integer,(v_precio->>'cantidad')::integer,1)) else 1 end;
    v_unidades:=v_cantidad*v_factor;
    if v_unidades>(v_producto.stock-v_producto.stock_reservado) then raise exception 'Stock disponible insuficiente para %',v_producto.nombre; end if;
    v_subtotal:=round(v_unitario*v_cantidad,2); v_total:=v_total+v_subtotal;
    insert into public.pedido_items(pedido_id,producto_id,sku,nombre,tipo_precio,cantidad,unidades_stock,precio_unitario,subtotal)
    values(v_pedido_id,v_producto.id,v_producto.sku,v_producto.nombre,v_tipo,v_cantidad,v_unidades,v_unitario,v_subtotal);
  end loop;
  update public.pedidos set total=v_total,updated_at=now() where id=v_pedido_id;
  insert into public.notificaciones(destinatario,titulo,mensaje,tipo,enlace)
  values('admin','Nuevo pedido '||v_codigo,trim(p_cliente_nombre)||' registró un pedido por S/ '||to_char(v_total,'FM999999990.00'),'pedido','#pedidos');
  return query select v_pedido_id,v_codigo,v_total;
end $$;
revoke all on function public.crear_pedido(text,text,text,text,jsonb) from public;
grant execute on function public.crear_pedido(text,text,text,text,jsonb) to anon,authenticated;

create or replace function public.cambiar_estado_pedido(p_pedido_id uuid,p_estado text)
returns void language plpgsql security definer set search_path=public as $$
declare v_pedido public.pedidos%rowtype; v_item public.pedido_items%rowtype; v_rows integer;
begin
  if not public.is_admin() then raise exception 'No autorizado'; end if;
  if p_estado not in ('nuevo','pago_pendiente','confirmado','enviado','entregado','cancelado') then raise exception 'Estado no válido'; end if;
  select * into v_pedido from public.pedidos where id=p_pedido_id for update;
  if not found then raise exception 'Pedido no encontrado'; end if;
  if v_pedido.stock_aplicado and p_estado in ('nuevo','pago_pendiente') then raise exception 'El pago ya fue confirmado y el stock fue descontado'; end if;

  if p_estado='pago_pendiente' and not v_pedido.stock_reservado and not v_pedido.stock_aplicado then
    for v_item in select * from public.pedido_items where pedido_id=p_pedido_id loop
      update public.catalogo_productos set stock_reservado=stock_reservado+v_item.unidades_stock,updated_at=now()
      where id=v_item.producto_id and stock-stock_reservado>=v_item.unidades_stock;
      get diagnostics v_rows=row_count;
      if v_rows=0 then raise exception 'Stock disponible insuficiente para %',v_item.nombre; end if;
    end loop;
    v_pedido.stock_reservado:=true;
  end if;

  if p_estado='nuevo' and v_pedido.stock_reservado and not v_pedido.stock_aplicado then
    for v_item in select * from public.pedido_items where pedido_id=p_pedido_id loop
      update public.catalogo_productos set stock_reservado=greatest(0,stock_reservado-v_item.unidades_stock),updated_at=now() where id=v_item.producto_id;
    end loop;
    v_pedido.stock_reservado:=false;
  end if;

  if p_estado in ('confirmado','enviado','entregado') and not v_pedido.stock_aplicado then
    for v_item in select * from public.pedido_items where pedido_id=p_pedido_id loop
      update public.catalogo_productos set
        stock=stock-v_item.unidades_stock,
        stock_reservado=greatest(0,stock_reservado-case when v_pedido.stock_reservado then v_item.unidades_stock else 0 end),
        estado=case when stock-v_item.unidades_stock=0 then 'agotado' else estado end,updated_at=now()
      where id=v_item.producto_id and stock-stock_reservado+case when v_pedido.stock_reservado then v_item.unidades_stock else 0 end>=v_item.unidades_stock;
      get diagnostics v_rows=row_count;
      if v_rows=0 then raise exception 'Stock disponible insuficiente para %',v_item.nombre; end if;
    end loop;
    v_pedido.stock_aplicado:=true; v_pedido.stock_reservado:=false;
  elsif p_estado='cancelado' then
    for v_item in select * from public.pedido_items where pedido_id=p_pedido_id loop
      if v_pedido.stock_aplicado then
        update public.catalogo_productos set stock=stock+v_item.unidades_stock,estado=case when estado='agotado' and visible then 'disponible' else estado end,updated_at=now() where id=v_item.producto_id;
      elsif v_pedido.stock_reservado then
        update public.catalogo_productos set stock_reservado=greatest(0,stock_reservado-v_item.unidades_stock),updated_at=now() where id=v_item.producto_id;
      end if;
    end loop;
    v_pedido.stock_aplicado:=false; v_pedido.stock_reservado:=false;
  end if;

  update public.pedidos set estado=p_estado,stock_aplicado=v_pedido.stock_aplicado,stock_reservado=v_pedido.stock_reservado,
    pago_confirmado_at=case when p_estado='confirmado' and pago_confirmado_at is null then now() else pago_confirmado_at end,
    confirmado_at=case when p_estado='confirmado' and confirmado_at is null then now() else confirmado_at end,
    enviado_at=case when p_estado='enviado' and enviado_at is null then now() else enviado_at end,
    entregado_at=case when p_estado='entregado' and entregado_at is null then now() else entregado_at end,updated_at=now()
  where id=p_pedido_id;

  if v_pedido.cliente_user_id is not null and p_estado<>v_pedido.estado then
    insert into public.notificaciones(destinatario,user_id,titulo,mensaje,tipo,enlace)
    values('cliente',v_pedido.cliente_user_id,'Pedido '||v_pedido.codigo,
      'Tu pedido ahora está '||replace(initcap(p_estado),'_',' ')||'.','estado','mi-cuenta.html');
  end if;
end $$;
revoke all on function public.cambiar_estado_pedido(uuid,text) from public;
grant execute on function public.cambiar_estado_pedido(uuid,text) to authenticated;
