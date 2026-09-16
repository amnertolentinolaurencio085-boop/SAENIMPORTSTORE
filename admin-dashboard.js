(function () {
  const cfg = window.SAEN_SUPABASE || {};
  const demo = new URLSearchParams(location.search).get('demo') === '1';
  const db = !demo && window.supabase && cfg.url && cfg.anonKey
    ? window.supabase.createClient(cfg.url, cfg.anonKey)
    : null;
  const $ = id => document.getElementById(id);
  let orders = [];
  let products = [];
  let metrics = [];

  async function bootDashboard() {
    $('dashboardLink').onclick = event => { event.preventDefault(); showDashboard(); loadDashboard(); };
    $('refreshDashboard').onclick = loadDashboard;
    $('viewAllOrders').onclick = () => $('ordersLink').click();
    if (location.hash === '#products') $('productsLink').click();
    else if (location.hash === '#pedidos') $('ordersLink').click();
    else if (location.hash === '#clientes') $('clientsLink').click();
    else showDashboard();

    if (demo) {
      orders = demoOrders();
      products = [
        {sku:'JUG031',nombre:'TRAILER DE METAL',stock:18,estado:'disponible'},
        {sku:'JUG001',nombre:'BURBUJA',stock:0,estado:'agotado'},
        {sku:'MAQ010',nombre:'SET DE BROCHAS',stock:4,estado:'disponible'}
      ];
      metrics = [
        {sku:'JUG031',consultas:84,whatsapp_clicks:17},
        {sku:'JUG001',consultas:62,whatsapp_clicks:11},
        {sku:'MAQ010',consultas:47,whatsapp_clicks:9}
      ];
      renderDashboard();
      return;
    }
    if (!db) return dashboardError('Supabase no está configurado.');
    const { data } = await db.auth.getSession();
    if (data.session) await loadDashboard();
  }

  function showDashboard() {
    $('dashboardMain').hidden = false;
    $('productsMain').hidden = true;
    $('ordersMain').hidden = true;
    $('clientsMain').hidden = true;
    document.querySelectorAll('.sidebar nav a').forEach(item => item.classList.remove('active'));
    $('dashboardLink').classList.add('active');
    $('sidebar').classList.remove('open');
    history.replaceState(null,'',location.pathname + location.search + '#dashboard');
  }

  async function loadDashboard() {
    if (demo) { renderDashboard(); return; }
    $('refreshDashboard').disabled = true;
    const [ordersResult,productsResult,metricsResult] = await Promise.all([
      db.from('pedidos').select('id,codigo,cliente_nombre,telefono,total,estado,created_at').order('created_at',{ascending:false}),
      db.from('catalogo_productos').select('sku,nombre,stock,estado,imagen_principal'),
      db.from('producto_metricas').select('sku,consultas,whatsapp_clicks').order('consultas',{ascending:false}).limit(10)
    ]);
    $('refreshDashboard').disabled = false;
    const error = ordersResult.error || productsResult.error || metricsResult.error;
    if (error) return dashboardError(`No se pudo cargar el dashboard: ${error.message}`);
    orders = ordersResult.data || [];
    products = productsResult.data || [];
    metrics = metricsResult.data || [];
    renderDashboard();
  }

  function renderDashboard() {
    const validSales = orders.filter(order => ['confirmado','enviado','entregado'].includes(order.estado));
    const today = new Date();
    const todayOrders = orders.filter(order => sameDay(new Date(order.created_at),today));
    const phones = new Set(orders.map(order => normalizePhone(order.telefono)).filter(Boolean));
    $('dashboardSales').textContent = money(validSales.reduce((sum,order) => sum + Number(order.total),0));
    $('dashboardToday').textContent = todayOrders.length;
    $('dashboardTodaySales').textContent = `${money(todayOrders.reduce((sum,order) => sum + Number(order.total),0))} en pedidos`;
    $('dashboardOut').textContent = products.filter(product => product.stock <= 0 || product.estado === 'agotado').length;
    $('dashboardClients').textContent = phones.size;
    renderTopProducts();
    renderFrequentClients();
    renderRecentOrders();
  }

  function renderTopProducts() {
    const bySku = new Map(products.map(product => [product.sku,product]));
    const top = metrics.filter(metric => Number(metric.consultas) > 0).slice(0,5);
    $('topProducts').innerHTML = top.length ? top.map((metric,index) => {
      const product = bySku.get(metric.sku) || {nombre:metric.sku};
      return `<div class="ranking-item"><span class="rank">${index+1}</span><div><strong>${escapeHtml(product.nombre)}</strong><small>${escapeHtml(metric.sku)}</small></div><p><b>${Number(metric.consultas).toLocaleString('es-PE')}</b> consultas<small>${Number(metric.whatsapp_clicks).toLocaleString('es-PE')} clics en WhatsApp</small></p></div>`;
    }).join('') : '<p class="empty-mini">Las consultas aparecerán cuando los visitantes abran productos.</p>';
  }

  function renderFrequentClients() {
    const grouped = new Map();
    orders.filter(order => order.estado !== 'cancelado').forEach(order => {
      const key = normalizePhone(order.telefono);
      if (!key) return;
      const current = grouped.get(key) || {nombre:order.cliente_nombre,telefono:order.telefono,pedidos:0,total:0};
      current.pedidos += 1;
      current.total += Number(order.total);
      grouped.set(key,current);
    });
    const clients = [...grouped.values()].sort((a,b) => b.pedidos-a.pedidos || b.total-a.total).slice(0,5);
    $('frequentClients').innerHTML = clients.length ? clients.map((client,index) => `<div class="ranking-item"><span class="rank client">${index+1}</span><div><strong>${escapeHtml(client.nombre)}</strong><small>${escapeHtml(client.telefono)}</small></div><p><b>${client.pedidos}</b> pedido${client.pedidos===1?'':'s'}<small>${money(client.total)} acumulado</small></p></div>`).join('') : '<p class="empty-mini">Los clientes aparecerán al registrar pedidos.</p>';
  }

  function renderRecentOrders() {
    $('dashboardRecentOrders').innerHTML = orders.slice(0,5).map(order => `<tr><td><strong>${escapeHtml(order.codigo)}</strong></td><td>${escapeHtml(order.cliente_nombre)}</td><td><strong>${money(order.total)}</strong></td><td>${formatDate(order.created_at)}</td><td><span class="status status-${order.estado}">${title(order.estado)}</span></td></tr>`).join('') || '<tr><td colspan="5" class="empty-mini">Todavía no hay pedidos.</td></tr>';
  }

  function dashboardError(message) {
    ['topProducts','frequentClients'].forEach(id => $(id).innerHTML = `<p class="empty-mini">${escapeHtml(message)}</p>`);
  }
  function demoOrders() {
    const now = new Date().toISOString();
    return [
      {id:'1',codigo:'SAE-DEMO01',cliente_nombre:'María López',telefono:'987 111 222',total:86.5,estado:'entregado',created_at:now},
      {id:'2',codigo:'SAE-DEMO02',cliente_nombre:'Carlos Ríos',telefono:'986 333 444',total:42,estado:'nuevo',created_at:now},
      {id:'3',codigo:'SAE-DEMO03',cliente_nombre:'María López',telefono:'987 111 222',total:55,estado:'confirmado',created_at:new Date(Date.now()-86400000).toISOString()}
    ];
  }
  function sameDay(a,b) { return a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate(); }
  function normalizePhone(value) { return String(value||'').replace(/\D/g,''); }
  function money(value) { return `S/ ${Number(value||0).toFixed(2)}`; }
  function title(value) { return value.charAt(0).toUpperCase()+value.slice(1); }
  function formatDate(value) { return new Intl.DateTimeFormat('es-PE',{dateStyle:'short',timeStyle:'short'}).format(new Date(value)); }
  function escapeHtml(value) { const node=document.createElement('div'); node.textContent=value??''; return node.innerHTML; }

  bootDashboard();
})();
