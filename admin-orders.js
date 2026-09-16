(function () {
  const cfg = window.SAEN_SUPABASE || {};
  const demo = new URLSearchParams(location.search).get('demo') === '1';
  const db = !demo && window.supabase && cfg.url && cfg.anonKey
    ? window.supabase.createClient(cfg.url, cfg.anonKey)
    : null;
  const $ = id => document.getElementById(id);
  let orders = [];
  let stockChanged = false;

  async function bootOrders() {
    const ordersLink = $('ordersLink');
    const productsLink = $('productsLink');
    const dashboardLink = document.querySelector('[data-section="Dashboard"]');
    if (!ordersLink || !productsLink) return;

    ordersLink.onclick = async event => {
      event.preventDefault();
      showOrders();
      await loadOrders();
    };
    productsLink.onclick = event => {
      event.preventDefault();
      if (stockChanged) return location.reload();
      showProducts();
    };
    if (dashboardLink) dashboardLink.onclick = event => {
      event.preventDefault();
      if (stockChanged) return location.reload();
      showProducts();
    };
    $('refreshOrders').onclick = loadOrders;
    $('orderSearch').oninput = renderOrders;
    $('orderStatusFilter').onchange = renderOrders;

    if (demo) {
      orders = [{
        id:'demo-order',codigo:'SAE-DEMO001',cliente_nombre:'Cliente de prueba',telefono:'987 654 321',
        ciudad:'Huánuco',notas:'Entregar por la tarde',total:45.5,estado:'nuevo',stock_aplicado:false,
        created_at:new Date().toISOString(),pedido_items:[
          {nombre:'TRAILER DE METAL',sku:'JUG031',tipo_precio:'Mayor',cantidad:3,subtotal:41.7},
          {nombre:'BURBUJA',sku:'JUG001',tipo_precio:'Unidad',cantidad:1,subtotal:3.8}
        ]
      }];
      updateBadge();
    } else if (db) {
      const { data } = await db.auth.getSession();
      if (data.session) await loadOrders();
    }
    if (location.hash === '#pedidos') showOrders();
  }

  function showOrders() {
    $('dashboardMain').hidden = true;
    $('productsMain').hidden = true;
    $('ordersMain').hidden = false;
    $('clientsMain').hidden = true;
    setActive($('ordersLink'));
    location.hash = 'pedidos';
    renderOrders();
  }

  function showProducts() {
    $('dashboardMain').hidden = true;
    $('ordersMain').hidden = true;
    $('clientsMain').hidden = true;
    $('productsMain').hidden = false;
    setActive($('productsLink'));
    history.replaceState(null,'',location.pathname + location.search + '#products');
  }

  function setActive(link) {
    document.querySelectorAll('.sidebar nav a').forEach(item => item.classList.remove('active'));
    link?.classList.add('active');
    $('sidebar').classList.remove('open');
  }

  async function loadOrders() {
    if (demo) { renderOrders(); return; }
    if (!db) return notify('Supabase no está configurado.');
    $('refreshOrders').disabled = true;
    const { data, error } = await db.from('pedidos')
      .select('*,pedido_items(*)')
      .order('created_at',{ascending:false});
    $('refreshOrders').disabled = false;
    if (error) return notify(`No se pudieron cargar los pedidos: ${error.message}`);
    orders = data || [];
    updateBadge();
    renderOrders();
  }

  function updateBadge() {
    const count = orders.filter(order => order.estado === 'nuevo').length;
    $('newOrdersBadge').textContent = count;
    $('newOrdersBadge').hidden = count === 0;
  }

  function renderOrders() {
    const query = ($('orderSearch').value || '').trim().toLowerCase();
    const status = $('orderStatusFilter').value;
    const filtered = orders.filter(order => {
      const haystack = `${order.codigo} ${order.cliente_nombre} ${order.telefono}`.toLowerCase();
      return (!query || haystack.includes(query)) && (!status || order.estado === status);
    });
    $('newOrdersCount').textContent = orders.filter(order => order.estado === 'nuevo').length;
    $('processOrdersCount').textContent = orders.filter(order => ['confirmado','enviado'].includes(order.estado)).length;
    $('deliveredOrdersCount').textContent = orders.filter(order => order.estado === 'entregado').length;
    $('ordersResultCount').textContent = `${filtered.length} pedido${filtered.length === 1 ? '' : 's'}`;
    $('ordersEmpty').hidden = filtered.length > 0;
    $('orderRows').innerHTML = filtered.map(order => {
      const items = order.pedido_items || [];
      const summary = items.slice(0,2).map(item => `${escapeHtml(item.nombre)} ×${item.cantidad}`).join('<br>');
      const more = items.length > 2 ? `<small>+${items.length-2} producto${items.length-2===1?'':'s'}</small>` : '';
      return `<tr>
        <td><strong>${escapeHtml(order.codigo)}</strong>${order.stock_aplicado?'<small class="stock-deducted"><i class="fas fa-check"></i> Stock descontado</small>':''}</td>
        <td><strong>${escapeHtml(order.cliente_nombre)}</strong><small>${escapeHtml(order.telefono)}</small><small>${escapeHtml(order.ciudad||'')}</small></td>
        <td class="order-products">${summary}${more}</td>
        <td><strong>S/ ${Number(order.total).toFixed(2)}</strong></td>
        <td>${formatDate(order.created_at)}</td>
        <td><select class="order-status status-${order.estado}" data-order-id="${order.id}" data-current="${order.estado}">
          ${['nuevo','confirmado','enviado','entregado','cancelado'].map(value => `<option value="${value}" ${value===order.estado?'selected':''}>${title(value)}</option>`).join('')}
        </select></td>
      </tr>`;
    }).join('');
    document.querySelectorAll('.order-status').forEach(select => select.onchange = () => changeStatus(select));
  }

  async function changeStatus(select) {
    const order = orders.find(item => item.id === select.dataset.orderId);
    if (!order) return;
    const next = select.value;
    const previous = select.dataset.current;
    if (demo) {
      select.value = previous;
      return notify('Vista previa: configura Supabase para cambiar pedidos.');
    }
    if (next === 'confirmado' && !order.stock_aplicado && !confirm('Al confirmar se descontará el stock de este pedido. ¿Continuar?')) {
      select.value = previous;
      return;
    }
    if (next === 'cancelado' && order.stock_aplicado && !confirm('Al cancelar se devolverá el stock descontado. ¿Continuar?')) {
      select.value = previous;
      return;
    }
    select.disabled = true;
    const { error } = await db.rpc('cambiar_estado_pedido',{p_pedido_id:order.id,p_estado:next});
    select.disabled = false;
    if (error) {
      select.value = previous;
      return notify(error.message);
    }
    if ((!order.stock_aplicado && ['confirmado','enviado','entregado'].includes(next)) || (order.stock_aplicado && next === 'cancelado')) stockChanged = true;
    notify(`Pedido ${order.codigo}: ${title(next)}.`);
    await loadOrders();
  }

  function notify(message) {
    const toast = $('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'),3500);
  }
  function title(value) { return value.charAt(0).toUpperCase() + value.slice(1); }
  function formatDate(value) { return new Intl.DateTimeFormat('es-PE',{dateStyle:'short',timeStyle:'short'}).format(new Date(value)); }
  function escapeHtml(value) { const node=document.createElement('div'); node.textContent=value??''; return node.innerHTML; }

  bootOrders();
})();
