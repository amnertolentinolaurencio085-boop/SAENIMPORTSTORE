(async function () {
  const cfg=window.SAEN_SUPABASE||{};
  if(!window.supabase||!cfg.url||!cfg.anonKey)return location.replace('cliente-login.html');
  const db=window.supabase.createClient(cfg.url,cfg.anonKey);
  const $=id=>document.getElementById(id);
  const {data:{session}}=await db.auth.getSession();
  if(!session)return location.replace('cliente-login.html');
  const {data:isAdmin}=await db.rpc('is_admin');
  if(isAdmin)return location.replace('admin.html');
  const user=session.user;
  let customerOrders=[];
  $('accountEmail').textContent=user.email;
  $('customerLogout').onclick=async()=>{await db.auth.signOut();location.replace('index.html');};
  $('profileForm').onsubmit=saveProfile;
  await Promise.all([loadProfile(),loadOrders(),loadNotifications()]);

  async function loadProfile(){
    const {data,error}=await db.from('cliente_perfiles').select('*').eq('user_id',user.id).maybeSingle();
    if(error)return message(error.message);
    const meta=user.user_metadata||{};
    const profile=data||{nombre:meta.nombre||'',telefono:meta.telefono||'',ciudad:meta.ciudad||''};
    $('profileName').value=profile.nombre||'';$('profilePhone').value=profile.telefono||'';$('profileCity').value=profile.ciudad||'';
    updateWelcome(profile.nombre||user.email.split('@')[0]);
  }
  async function saveProfile(event){
    event.preventDefault();
    const button=$('profileForm').querySelector('button');button.disabled=true;message('Guardando…');
    const payload={user_id:user.id,nombre:$('profileName').value.trim(),telefono:$('profilePhone').value.trim(),ciudad:$('profileCity').value.trim(),updated_at:new Date().toISOString()};
    const {error}=await db.from('cliente_perfiles').upsert(payload);
    button.disabled=false;
    if(error)return message(error.message);
    updateWelcome(payload.nombre);message('Datos guardados correctamente.','success');
  }
  async function loadOrders(){
    const {data,error}=await db.from('pedidos').select('id,codigo,total,estado,created_at,pedido_items(sku,nombre,cantidad,tipo_precio,precio_unitario,subtotal)').eq('cliente_user_id',user.id).order('created_at',{ascending:false});
    if(error){$('customerOrders').innerHTML=`<p class="account-empty">${escapeHtml(error.message)}</p>`;return;}
    customerOrders=data||[];
    $('customerOrders').innerHTML=customerOrders.map(order=>`<article class="customer-order"><header><div><strong>${escapeHtml(order.codigo)}</strong><small>${formatDate(order.created_at)}</small></div><span class="account-status status-${order.estado}">${statusTitle(order.estado)}</span></header><div class="order-tracking">${tracking(order.estado)}</div><div>${(order.pedido_items||[]).map(item=>`<p><span>${escapeHtml(item.nombre)} · ${escapeHtml(item.tipo_precio)} ×${item.cantidad}</span><b>S/ ${Number(item.subtotal).toFixed(2)}</b></p>`).join('')}</div><footer><span>Total <b>S/ ${Number(order.total).toFixed(2)}</b></span><button class="repeat-order" data-repeat="${order.id}"><i class="fas fa-rotate-right"></i> Repetir compra</button></footer></article>`).join('')||'<p class="account-empty"><i class="fas fa-bag-shopping"></i>Aún no tienes pedidos vinculados a tu cuenta.</p>';
    document.querySelectorAll('[data-repeat]').forEach(button=>button.onclick=()=>repeatOrder(button.dataset.repeat));
  }
  async function loadNotifications(){
    const {data,error}=await db.from('notificaciones').select('id,titulo,mensaje,created_at,leida').eq('destinatario','cliente').order('created_at',{ascending:false}).limit(5);
    if(error||!data?.length)return;
    const wrap=$('accountNotifications');wrap.hidden=false;
    wrap.innerHTML=`<header><b><i class="far fa-bell"></i> Actualizaciones de tus pedidos</b></header>${data.map(item=>`<article class="${item.leida?'':'unread'}"><strong>${escapeHtml(item.titulo)}</strong><span>${escapeHtml(item.mensaje)}</span><small>${formatDate(item.created_at)}</small></article>`).join('')}`;
    const unread=data.filter(item=>!item.leida).map(item=>item.id);
    if(unread.length)await db.from('notificaciones').update({leida:true}).in('id',unread);
  }
  function repeatOrder(orderId){
    const order=customerOrders.find(item=>item.id===orderId);if(!order)return;
    const cart=(order.pedido_items||[]).map(item=>({pid:item.sku,tipo:item.tipo_precio,precio:Number(item.precio_unitario),qty:Number(item.cantidad),min:item.tipo_precio==='Mayor'?3:1}));
    localStorage.setItem('saen_cart',JSON.stringify(cart));
    location.href='index.html?repetir='+encodeURIComponent(order.codigo);
  }
  function tracking(status){
    if(status==='cancelado')return '<p class="tracking-cancelled"><i class="fas fa-circle-xmark"></i> Pedido cancelado</p>';
    const steps=[['nuevo','Recibido'],['pago_pendiente','Pago pendiente'],['confirmado','Confirmado'],['enviado','Enviado'],['entregado','Entregado']];
    const current=Math.max(0,steps.findIndex(step=>step[0]===status));
    return steps.map((step,index)=>`<span class="${index<=current?'done':''}${index===current?' current':''}"><i class="fas ${index<current?'fa-check':'fa-circle'}"></i>${step[1]}</span>`).join('');
  }
  function updateWelcome(name){$('accountName').textContent=name;$('accountAvatar').textContent=String(name||'C').trim()[0].toUpperCase();}
  function message(text,type=''){$('profileMessage').textContent=text;$('profileMessage').className=`auth-message ${type}`;}
  function title(value){return String(value||'').charAt(0).toUpperCase()+String(value||'').slice(1);}
  function statusTitle(value){return title(String(value||'').replace('_',' '));}
  function formatDate(value){return new Intl.DateTimeFormat('es-PE',{dateStyle:'medium',timeStyle:'short'}).format(new Date(value));}
  function escapeHtml(value){const node=document.createElement('div');node.textContent=value??'';return node.innerHTML;}
})();
