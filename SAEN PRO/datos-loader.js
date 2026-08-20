/* ================================================
   SAEN IMPORT — datos-loader.js
   Este archivo une todos los datos en SAEN_DATA.
   NO modificar — se actualiza automáticamente
   al agregar o quitar archivos de categoría.
   ================================================ */

const SAEN_DATA = {
  ...SAEN_EMPRESA,
  productos: [
    ...PRODS_ACCESORIOS,
    ...PRODS_CUIDADO,
    ...PRODS_HIGIENE,
    ...PRODS_MOCHILAS,
    ...PRODS_NOVEDADES,
    ...PRODS_COCINA,
    ...PRODS_JUGUETES,
    ...PRODS_ESCOLAR,
    ...PRODS_MAQUILLAJE,
    ...PRODS_PERFUMES
  ]
};
