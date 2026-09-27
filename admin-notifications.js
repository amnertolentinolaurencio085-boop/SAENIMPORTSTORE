(function(){
  const cfg=window.SAEN_SUPABASE||{};
  const demo=new URLSearchParams(location.search).get('demo')==='1';
  const db=!demo&&window.supabase&&cfg.url&&cfg.anonKey?window.supabase.createClient(cfg.url,cfg.anonKey):null;
  const $=id=>document.getElementById(id);
  let notifications=[];

  async function boot(){
    if(!$('notificationBtn'))return;
    $('notificationBtn').onclick=async event=>{event.stopPropagation();$('notificationPanel').hidden=!$('notificationPanel').hidden;if(!$('notificationPanel').hidden)await load();};
    $('notificationPanel').onclick=event=>event.stopPropagation();
    document.addEventListener('click',()=>{$('notificationPanel').hidden=true;});
    $('markNotificationsRead').onclick=markRead;
    if(demo){notifications=[{id:'demo',titulo:'Nuevo pedido SAE-DEMO01',mensaje:'Cliente de prueba registró un pedido.',created_at:new Date().toISOString(),leida:false}];render([{nombre:'Producto con stock bajo',sku:'DEMO01',stock:3,stock_reservado:0}]);return;}
    if(!db)return;
    const {data:{session}}=await db.auth.getSession();if(!session)return;
    await load();
    setInterval(load,60000);
  }
  async function load(){
    if(!db)return;
    const [noticeResult,productResult]=await Promise.all([
      db.from('notificaciones').select('*').eq('destinatario','admin').order('created_at',{ascending:false}).limit(12),
      db.from('catalogo_productos').select('sku,nombre,stock,stock_reservado,estado').neq('estado','oculto')
    ]);
    if(!noticeResult.error)notifications=noticeResult.data||[];
    render((productResult.data||[]).filter(product=>product.stock-Number(product.stock_reservado||0)<=5));
  }
  function render(lowStock){
    const unread=notifications.filter(item=>!item.leida).length;
    $('notificationDot').hidden=unread+lowStock.length===0;
    const alerts=[...notifications.map(item=>`<article class="${item.leida?'':'unread'}"><i class="fas fa-cart-shopping"></i><div><strong>${escapeHtml(item.titulo)}</strong><span>${escapeHtml(item.mensaje)}</span><small>${formatDate(item.created_at)}</small></div></article>`),...lowStock.slice(0,6).map(product=>`<article class="stock-alert"><i class="fas fa-triangle-exclamation"></i><div><strong>Stock bajo: ${escapeHtml(product.nombre)}</strong><span>${Math.max(0,product.stock-Number(product.stock_reservado||0))} unidades disponibles · ${escapeHtml(product.sku)}</span></div></article>`)];
    $('notificationList').innerHTML=alerts.join('')||'<p>No hay notificaciones pendientes.</p>';
  }
  async function markRead(){
    const unread=notifications.filter(item=>!item.leida).map(item=>item.id);if(!unread.length)return;
    const {error}=await db.from('notificaciones').update({leida:true}).in('id',unread);if(!error)await load();
  }
  function formatDate(value){return new Intl.DateTimeFormat('es-PE',{dateStyle:'short',timeStyle:'short'}).format(new Date(value));}
  function escapeHtml(value){const node=document.createElement('div');node.textContent=value??'';return node.innerHTML;}
  boot();
})();
