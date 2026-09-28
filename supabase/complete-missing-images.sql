-- Activa las dos imágenes referenciales que faltaban en el catálogo.
update public.catalogo_productos
set imagen_principal = case sku
  when 'JOY004' then 'IMAGENES ACCESORIOS/IMGACC004.webp'
  when 'MOC008' then 'IMAGENES MOCHILAS/IMGMOC008.webp'
  else imagen_principal
end,
descripcion = case
  when sku = 'JOY004' and coalesce(descripcion,'') = '' then 'Imagen referencial del set de ligas, esponja y ganchitos.'
  else descripcion
end,
updated_at = now()
where sku in ('JOY004','MOC008');
