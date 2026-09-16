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
