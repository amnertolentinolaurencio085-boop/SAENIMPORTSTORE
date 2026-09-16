(function () {
  const CATEGORIES = ['accesorios','cuidado','higiene','mochilas','novedades','cocina','juguetes','escolar','maquillaje','perfumes','papeleria'];
  const PREFIX = { accesorios:'ACC',cuidado:'CUI',higiene:'HIG',mochilas:'MOC',novedades:'NOV',cocina:'COC',juguetes:'JUG',escolar:'ESC',maquillaje:'MAQ',perfumes:'PER',papeleria:'PAP' };
  const PRICE_TYPES = ['Unidad','Mayor','Docena','Caja','Paquete','Ciento'];
  const $ = id => document.getElementById(id); let db, products = [], filtered = [], editing = null, session;
  const cfg = window.SAEN_SUPABASE || {}, demo = new URLSearchParams(location.search).get('demo') === '1';
  if (!cfg.url || !cfg.anonKey || !window.supabase) {
    if (!demo) { location.replace('admin-login.html'); return; }
  } else db = window.supabase.createClient(cfg.url, cfg.anonKey);

  async function boot() {
    if (demo) {
      session={user:{email:'vista.previa@saenimport.pe'}};
      products=[{id:'demo-1',sku:'JUG031',categoria:'juguetes',nombre:'TRAILER DE METAL',descripcion:'Juguete de metal con detalles resistentes.',stock:18,unidad_medida:'unidad',imagen_principal:'IMAGENES JUGUETES/IMGJUG031.png',galeria:[],badge:'Nuevo',estado:'disponible',visible:true,descuento:0,precios:[{tipo:'Unidad',valor:16},{tipo:'Mayor',valor:13.9,cantidad_minima:3}],variantes:[{tipo:'Color',valor:'Rojo'}]}];
    } else { const { data } = await db.auth.getSession(); session = data.session; }
    if (!session) { location.replace('admin-login.html'); return; }
    $('userEmail').textContent = session.user.email; $('userInitial').textContent = session.user.email[0].toUpperCase();
    CATEGORIES.forEach(c => { $('categoria').add(new Option(title(c), c)); $('categoryFilter').add(new Option(title(c), c)); });
    bind(); resetForm(); if (demo) filter(); else await loadProducts();
  }
  function bind() {
    $('logoutBtn').onclick = async () => { if (db) await db.auth.signOut(); location.replace('admin-login.html'); };
    $('menuBtn').onclick = () => $('sidebar').classList.toggle('open');
    document.querySelectorAll('[data-section]:not(#ordersLink):not([data-section="Dashboard"])').forEach(a => a.onclick = e => { e.preventDefault(); toast(`${a.dataset.section}: módulo preparado para una siguiente etapa.`); });
    $('newBtn').onclick = () => { resetForm(); openDrawer(); }; $('closeDrawer').onclick = closeDrawer; $('cancelBtn').onclick = closeDrawer; $('drawerBackdrop').onclick = closeDrawer;
    $('search').oninput = filter; $('categoryFilter').onchange = filter; $('statusFilter').onchange = filter;
    $('addPrice').onclick = () => addPrice(); $('addVariant').onclick = () => addVariant(); $('productForm').onsubmit = saveProduct;
    ['nombre','descripcion','categoria','stock','badge','estado'].forEach(id => $(id).addEventListener('input', updatePreview));
    $('mainImage').onchange = previewSelectedImage;
    if (demo) $('productForm').onsubmit = event => { event.preventDefault(); showMessage('Vista previa: configura Supabase para guardar.'); };
  }
  async function loadProducts() {
    const { data, error } = await db.from('catalogo_productos').select('*').order('updated_at', { ascending:false });
    if (error) return showMessage(error.message); products = repairText(data || []); filter();
  }
  function filter() { const q=$('search').value.toLowerCase(), cat=$('categoryFilter').value, st=$('statusFilter').value; filtered=products.filter(p=>(!q||`${p.nombre} ${p.sku}`.toLowerCase().includes(q))&&(!cat||p.categoria===cat)&&(!st||p.estado===st)); render(); }
  function render() {
    $('totalCount').textContent=products.length; $('availableCount').textContent=products.filter(p=>p.estado==='disponible'&&p.visible).length; $('lowCount').textContent=products.filter(p=>p.stock<=5&&p.estado!=='oculto').length; $('resultCount').textContent=`${filtered.length} resultado${filtered.length===1?'':'s'}`;
    $('emptyState').hidden=filtered.length>0; $('productRows').innerHTML=filtered.map(p=>`<tr><td><div class="prod-cell"><img src="${escapeAttr(p.imagen_principal||'')}" alt=""><div><strong>${escapeHtml(p.nombre)}</strong><small class="muted">${escapeHtml(p.descripcion||'').slice(0,52)}</small></div></div></td><td>${escapeHtml(p.sku)}</td><td>${title(p.categoria)}</td><td>${p.stock} ${escapeHtml(p.unidad_medida)}</td><td>${formatPrice(p.precios?.[0]?.valor)}</td><td><span class="status ${p.estado}">${p.estado}</span></td><td class="row-actions"><button data-edit="${p.id}">Editar</button><button class="danger" data-hide="${p.id}">${p.visible?'Ocultar':'Mostrar'}</button></td></tr>`).join('');
    [...$('productRows').querySelectorAll('tr')].forEach((row,i)=>{const p=filtered[i],badge=row.querySelector('.status');if(p&&badge&&p.stock===0&&p.estado==='disponible'){badge.textContent='agotado';badge.classList.add('agotado')}});
    document.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>editProduct(b.dataset.edit)); document.querySelectorAll('[data-hide]').forEach(b=>b.onclick=()=>toggleVisible(b.dataset.hide));
  }
  function resetForm() { editing=null; $('productForm').reset(); $('recordId').value=''; $('currentImage').value=''; $('formEyebrow').textContent='NUEVO PRODUCTO'; $('formTitle').textContent='Agregar producto'; $('priceRows').innerHTML=''; $('variantRows').innerHTML=''; addPrice({tipo:'Unidad',valor:''}); addPrice({tipo:'Mayor',valor:'',cantidad_minima:3}); $('estado').value='disponible'; updatePreview(); }
  function editProduct(id) { const p=products.find(x=>x.id===id); if(!p)return; resetForm(); editing=p; $('recordId').value=p.id; ['nombre','descripcion','categoria','stock','unidad_medida','badge','estado','descuento'].forEach(k=>{ const el=$(k==='unidad_medida'?'unidad':k); if(el)el.value=p[k]??''; }); $('sku').value=p.sku; $('currentImage').value=p.imagen_principal||''; $('priceRows').innerHTML=''; (p.precios||[]).forEach(addPrice); $('variantRows').innerHTML=''; (p.variantes||[]).forEach(addVariant); $('formEyebrow').textContent='EDITAR PRODUCTO'; $('formTitle').textContent=p.nombre; updatePreview(); openDrawer(); }
  function addPrice(p={}) { const row=document.createElement('div'); row.className='price-row'; row.innerHTML=`<select class="price-type">${PRICE_TYPES.map(t=>`<option ${p.tipo===t?'selected':''}>${t}</option>`).join('')}</select><input class="price-value" type="number" min="0" step=".01" placeholder="Precio S/" value="${p.valor??''}"><input class="price-detail" type="number" min="1" placeholder="Cant. mínima / unidades" value="${p.cantidad_minima??p.unidades??p.cantidad??''}"><button type="button" class="remove-row">×</button>`; row.querySelector('.remove-row').onclick=()=>{row.remove();updatePreview()}; row.querySelectorAll('input,select').forEach(e=>e.oninput=updatePreview); $('priceRows').append(row); updatePreview(); }
  function addVariant(v={}) { const row=document.createElement('div'); row.className='variant-row'; row.innerHTML=`<select class="variant-type"><option ${v.tipo==='Color'?'selected':''}>Color</option><option ${v.tipo==='Diseño'?'selected':''}>Diseño</option><option ${v.tipo==='Tamaño'?'selected':''}>Tamaño</option><option ${v.tipo==='Modelo'?'selected':''}>Modelo</option></select><input class="variant-name" placeholder="Ej. Rojo" value="${escapeAttr(v.valor||v.nombre||'')}"><input class="variant-stock" type="number" min="0" placeholder="Stock opcional" value="${v.stock??''}"><button type="button" class="remove-row">×</button>`; row.querySelector('.remove-row').onclick=()=>row.remove(); $('variantRows').append(row); }
  function collectPrices(){return [...document.querySelectorAll('.price-row')].map(r=>{const tipo=r.querySelector('.price-type').value,valor=Number(r.querySelector('.price-value').value),detail=Number(r.querySelector('.price-detail').value)||null,o={tipo,valor};if(tipo==='Mayor')o.cantidad_minima=detail;if(tipo==='Caja'||tipo==='Paquete')o.unidades=detail;if(tipo==='Docena')o.cantidad=12;if(tipo==='Ciento')o.cantidad=100;return o}).filter(p=>p.valor>=0)}
  function collectVariants(){return [...document.querySelectorAll('.variant-row')].map(r=>({tipo:r.querySelector('.variant-type').value,valor:r.querySelector('.variant-name').value.trim(),stock:r.querySelector('.variant-stock').value===''?null:Number(r.querySelector('.variant-stock').value)})).filter(v=>v.valor)}
  async function nextSku(category){const prefix=PREFIX[category];const {data,error}=await db.rpc('next_product_sku',{category_slug:category});if(!error&&data)return data;const max=products.filter(p=>p.sku?.startsWith(prefix)).reduce((n,p)=>Math.max(n,Number(p.sku.slice(3))||0),0);return prefix+String(max+1).padStart(3,'0')}
  async function upload(file, sku, suffix='principal'){if(!file)return null;if(file.size>5*1024*1024)throw new Error('Cada imagen debe pesar menos de 5 MB.');const ext=file.name.split('.').pop().toLowerCase();const path=`${sku}/${Date.now()}-${suffix}.${ext}`;const {error}=await db.storage.from(cfg.bucket||'productos').upload(path,file,{upsert:false});if(error)throw error;return db.storage.from(cfg.bucket||'productos').getPublicUrl(path).data.publicUrl}
  async function saveProduct(e){e.preventDefault();const btn=$('saveBtn');btn.disabled=true;showMessage('Guardando…');try{const category=$('categoria').value;const sku=editing?.sku||await nextSku(category);let image=$('currentImage').value;const main=$('mainImage').files[0];if(main)image=await upload(main,sku);if(!image)throw new Error('Selecciona una imagen principal.');const gallery=editing?.galeria?[...editing.galeria]:[];for(const [i,file] of [...$('gallery').files].entries())gallery.push(await upload(file,sku,`galeria-${i}`));const payload={sku,categoria:category,nombre:$('nombre').value.trim(),descripcion:$('descripcion').value.trim(),stock:Number($('stock').value),unidad_medida:$('unidad').value,imagen_principal:image,galeria:gallery,badge:$('badge').value||null,estado:$('estado').value,visible:$('estado').value!=='oculto',descuento:Number($('descuento').value||0),precios:collectPrices(),variantes:collectVariants(),updated_at:new Date().toISOString()};if(!payload.precios.length)throw new Error('Agrega al menos un precio.');const query=editing?db.from('catalogo_productos').update(payload).eq('id',editing.id):db.from('catalogo_productos').insert(payload);const {error}=await query;if(error)throw error;toast('Producto guardado correctamente.');closeDrawer();await loadProducts()}catch(err){showMessage(err.message)}finally{btn.disabled=false}}
  async function toggleVisible(id){const p=products.find(x=>x.id===id);if(!p)return;const visible=!p.visible;const {error}=await db.from('catalogo_productos').update({visible,estado:visible?(p.estado==='oculto'?'disponible':p.estado):'oculto'}).eq('id',id);if(error)return toast(error.message);toast(visible?'Producto visible.':'Producto ocultado; no se eliminó.');await loadProducts()}
  function previewSelectedImage(){const file=$('mainImage').files[0];if(file)$('previewImage').src=URL.createObjectURL(file);updatePreview()}
  function updatePreview(){ $('previewName').textContent=$('nombre').value||'Nombre del producto';$('previewDescription').textContent=$('descripcion').value||'La descripción aparecerá aquí.';$('previewCategory').textContent=title($('categoria').value||'categoría').toUpperCase();$('previewBadge').textContent=$('badge').value;$('previewBadge').style.display=$('badge').value?'block':'none';if(!$('mainImage').files[0])$('previewImage').src=$('currentImage').value||'';$('previewPrices').innerHTML=collectPrices().map(p=>`<div class="preview-price"><span>${p.tipo}</span><b>${formatPrice(p.valor)}</b></div>`).join('');$('previewStock').textContent=$('estado').value==='agotado'?'Agotado':`${$('stock').value||0} en stock`;}
  function openDrawer(){$('productDrawer').classList.add('open');$('drawerBackdrop').classList.add('open');$('productDrawer').setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}function closeDrawer(){$('productDrawer').classList.remove('open');$('drawerBackdrop').classList.remove('open');$('productDrawer').setAttribute('aria-hidden','true');document.body.style.overflow=''}
  function repairText(value){
    if(typeof value==='string'&&/Ã|Â|â€|â€”|â†/.test(value)){
      const known={'Ã‘':'Ñ','Ã±':'ñ','Ã':'Á','Ã¡':'á','Ã‰':'É','Ã©':'é','Ã':'Í','Ã­':'í','Ã“':'Ó','Ã³':'ó','Ãš':'Ú','Ãº':'ú','Â°':'°','â€”':'—','â€“':'–','â†’':'→'};
      known['\u00c3\u2018']='Ñ';
      let fixed=value;Object.entries(known).forEach(([bad,good])=>{fixed=fixed.split(bad).join(good)});
      try{return decodeURIComponent(escape(fixed))}catch(_){return fixed}
    }
    if(Array.isArray(value))return value.map(repairText);
    if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([key,item])=>[key,repairText(item)]));
    return value;
  }
  function showMessage(s){$('formMessage').textContent=s}function toast(s){$('toast').textContent=s;$('toast').classList.add('show');setTimeout(()=>$('toast').classList.remove('show'),2800)}function title(s){return(s||'').charAt(0).toUpperCase()+(s||'').slice(1)}function formatPrice(n){return Number.isFinite(Number(n))?`S/ ${Number(n).toFixed(2)}`:'—'}function escapeHtml(s){const d=document.createElement('div');d.textContent=s??'';return d.innerHTML}function escapeAttr(s){return escapeHtml(s).replace(/"/g,'&quot;')}
  boot();
})();
