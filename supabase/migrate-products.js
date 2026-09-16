/* Ejecutar en la consola del navegador DESPUÉS de iniciar sesión en admin.html.
   Carga antes los datos-*.js y datos-loader.js, y luego pega:
   await migrateSaenProducts(SAEN_DATA.productos)
*/
window.migrateSaenProducts = async function (legacyProducts) {
  const cfg=window.SAEN_SUPABASE, db=window.supabase.createClient(cfg.url,cfg.anonKey);
  const clean=s=>{try{return decodeURIComponent(escape(s))}catch{return s}};
  const rows=legacyProducts.map(p=>{const estado=String(p.estado||'disponible').toLowerCase();return {sku:p.id,categoria:p.categoria,nombre:clean(p.nombre),descripcion:clean(p.descripcion||''),imagen_principal:p.imagen||'',galeria:p.galeria||[],badge:p.badge||null,estado:['disponible','agotado','oculto'].includes(estado)?estado:'disponible',visible:estado!=='oculto',descuento:Number(p.descuento||0),estrellas:Number(p.estrellas||0),resenas:Number(p.resenas||0),stock:Number(p.stock||0),unidad_medida:p.unidad_medida||'unidad',precios:p.precios||[],variantes:p.variantes||[]}});
  const {data,error}=await db.from('catalogo_productos').upsert(rows,{onConflict:'sku'}).select('sku');
  if(error)throw error; console.info(`Migrados ${data.length} productos.`); return data;
};
