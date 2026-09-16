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
  $('accountEmail').textContent=user.email;
  $('customerLogout').onclick=async()=>{await db.auth.signOut();location.replace('index.html');};
  $('profileForm').onsubmit=saveProfile;
  await Promise.all([loadProfile(),loadOrders()]);

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
    const {data,error}=await db.from('pedidos').select('id,codigo,total,estado,created_at,pedido_items(nombre,cantidad,tipo_precio,subtotal)').eq('cliente_user_id',user.id).order('created_at',{ascending:false});
    if(error){$('customerOrders').innerHTML=`<p class="account-empty">${escapeHtml(error.message)}</p>`;return;}
    $('customerOrders').innerHTML=(data||[]).map(order=>`<article class="customer-order"><header><div><strong>${escapeHtml(order.codigo)}</strong><small>${formatDate(order.created_at)}</small></div><span class="account-status status-${order.estado}">${title(order.estado)}</span></header><div>${(order.pedido_items||[]).map(item=>`<p><span>${escapeHtml(item.nombre)} · ${escapeHtml(item.tipo_precio)} ×${item.cantidad}</span><b>S/ ${Number(item.subtotal).toFixed(2)}</b></p>`).join('')}</div><footer><span>Total</span><b>S/ ${Number(order.total).toFixed(2)}</b></footer></article>`).join('')||'<p class="account-empty"><i class="fas fa-bag-shopping"></i>Aún no tienes pedidos vinculados a tu cuenta.</p>';
  }
  function updateWelcome(name){$('accountName').textContent=name;$('accountAvatar').textContent=String(name||'C').trim()[0].toUpperCase();}
  function message(text,type=''){$('profileMessage').textContent=text;$('profileMessage').className=`auth-message ${type}`;}
  function title(value){return String(value||'').charAt(0).toUpperCase()+String(value||'').slice(1);}
  function formatDate(value){return new Intl.DateTimeFormat('es-PE',{dateStyle:'medium',timeStyle:'short'}).format(new Date(value));}
  function escapeHtml(value){const node=document.createElement('div');node.textContent=value??'';return node.innerHTML;}
})();
