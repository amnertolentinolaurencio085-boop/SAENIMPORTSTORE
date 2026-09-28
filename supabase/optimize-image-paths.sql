-- Cambia únicamente imágenes locales que ya tienen una copia WebP publicada.
-- MOC008 y JOY004 conservan su ruta original porque todavía no tienen fotografía.

update public.catalogo_productos
set imagen_principal = regexp_replace(imagen_principal, '\.png$', '.webp', 'i'),
    updated_at = now()
where imagen_principal ~* '^IMAGENES .+\.png$'
  and sku not in ('MOC008', 'JOY004');
