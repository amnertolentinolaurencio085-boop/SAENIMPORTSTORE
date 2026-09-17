(function () {
  const cfg = window.SAEN_SUPABASE || {};
  const demo = new URLSearchParams(location.search).get('demo') === '1';
  const db = !demo && window.supabase && cfg.url && cfg.anonKey
    ? window.supabase.createClient(cfg.url, cfg.anonKey)
    : null;
  const $ = id => document.getElementById(id);
  let orders = [];
  let profiles = [];
  let clients = [];

  async function bootClients() {
    if (!$('clientsLink')) return;
    $('clientsLink').onclick = async event => {
      event.preventDefault();
      showClients();
      await loadClients();
    };
    $('refreshClients').onclick = loadClients;
    $('clientSearch').oninput = renderClients;
    $('clientFilter').onchange = renderClients;

    if (demo) {
      orders = demoOrders();
      buildClients();
    } else if (db) {
      const { data } = await db.auth.getSession();
      if (data.session && location.hash === '#clientes') await loadClients();
    }
    if (location.hash === '#clientes') showClients();
  }

  function showClients() {
    $('dashboardMain').hidden = true;
    $('productsMain').hidden = true;
    $('ordersMain').hidden = true;
    $('clientsMain').hidden = false;
    document.querySelectorAll('.sidebar nav a').forEach(item => item.classList.remove('active'));
    $('clientsLink').classList.add('active');
    $('sidebar').classList.remove('open');
    history.replaceState(null, '', location.pathname + location.search + '#clientes');
    renderClients();
  }

  async function loadClients() {
    if (demo) { buildClients(); return; }
    if (!db) return notify('Supabase no está configurado.');
    $('refreshClients').disabled = true;
    const [profilesResult,ordersResult] = await Promise.all([
      db.from('cliente_perfiles').select('user_id,nombre,telefono,ciudad,created_at,updated_at').order('created_at',{ascending:false}),
      db.from('pedidos').select('id,cliente_user_id,cliente_nombre,telefono,ciudad,total,estado,created_at').order('created_at',{ascending:false})
    ]);
    $('refreshClients').disabled = false;
    const error = profilesResult.error || ordersResult.error;
    if (error) return notify(`No se pudieron cargar los clientes: ${error.message}`);
    profiles = profilesResult.data || [];
    orders = ordersResult.data || [];
    buildClients();
  }

  function buildClients() {
    const grouped = new Map();
    const phoneToKey = new Map();
    profiles.forEach(profile => {
      const key = `user:${profile.user_id}`;
      const registeredAt = new Date(profile.created_at);
      grouped.set(key, {
        userId: profile.user_id,
        nombre: profile.nombre || 'Cliente',
        telefono: profile.telefono || '',
        ciudad: profile.ciudad || '',
        pedidos: 0,
        total: 0,
        registeredAt,
        primeraCompra: null,
        ultimaCompra: null
      });
      const phone = normalizePhone(profile.telefono);
      if (phone) phoneToKey.set(phone,key);
    });
    orders.forEach(order => {
      const phone = normalizePhone(order.telefono);
      const key = order.cliente_user_id ? `user:${order.cliente_user_id}` : phoneToKey.get(phone) || `phone:${phone}`;
      if (!order.cliente_user_id && !phone) return;
      const date = new Date(order.created_at);
      const current = grouped.get(key) || {
        userId: order.cliente_user_id || null,
        nombre: order.cliente_nombre || 'Cliente',
        telefono: order.telefono || phone,
        ciudad: order.ciudad || '',
        pedidos: 0,
        total: 0,
        registeredAt: null,
        primeraCompra: date,
        ultimaCompra: date
      };
      if (!current.ultimaCompra || date > current.ultimaCompra) {
        current.ultimaCompra = date;
        if (!current.userId) {
          current.nombre = order.cliente_nombre || current.nombre;
          current.telefono = order.telefono || current.telefono;
          current.ciudad = order.ciudad || current.ciudad;
        }
      }
      if (!current.primeraCompra || date < current.primeraCompra) current.primeraCompra = date;
      if (order.estado !== 'cancelado') {
        current.pedidos += 1;
        current.total += Number(order.total || 0);
      }
      grouped.set(key, current);
    });
    clients = [...grouped.values()].sort((a,b) => clientDate(b) - clientDate(a));
    renderClients();
  }

  function renderClients() {
    const query = ($('clientSearch').value || '').trim().toLowerCase();
    const filter = $('clientFilter').value;
    const filtered = clients.filter(client => {
      const matches = !query || `${client.nombre} ${client.telefono} ${client.ciudad}`.toLowerCase().includes(query);
      const segment = !filter || (filter === 'frecuente' && client.pedidos >= 2) || (filter === 'nuevo' && isCurrentMonth(client.registeredAt || client.primeraCompra));
      return matches && segment;
    });

    $('clientsTotal').textContent = clients.length;
    $('clientsNew').textContent = clients.filter(client => isCurrentMonth(client.registeredAt || client.primeraCompra)).length;
    $('clientsFrequent').textContent = clients.filter(client => client.pedidos >= 2).length;
    $('clientsResultCount').textContent = `${filtered.length} cliente${filtered.length === 1 ? '' : 's'}`;
    $('clientsEmpty').hidden = filtered.length > 0;
    $('clientRows').innerHTML = filtered.map(client => {
      const frequent = client.pedidos >= 2 ? '<small class="client-tag"><i class="fas fa-star"></i> Frecuente</small>' : client.userId ? '<small>Cuenta registrada</small>' : '<small>Registrado por pedido</small>';
      const wa = whatsappPhone(client.telefono);
      return `<tr>
        <td><div class="client-cell"><span>${escapeHtml(initials(client.nombre))}</span><div><strong>${escapeHtml(client.nombre)}</strong>${frequent}</div></div></td>
        <td>${wa ? `<a class="client-phone" href="https://wa.me/${wa}" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> ${escapeHtml(client.telefono)}</a>` : '<span>Sin teléfono</span>'}</td>
        <td>${escapeHtml(client.ciudad || 'Sin ciudad')}</td>
        <td><strong>${client.pedidos}</strong></td>
        <td><strong>${money(client.total)}</strong></td>
        <td>${client.ultimaCompra ? formatDate(client.ultimaCompra) : 'Sin compras'}</td>
      </tr>`;
    }).join('');
  }

  function demoOrders() {
    const now = new Date();
    return [
      {cliente_nombre:'María López',telefono:'987 111 222',ciudad:'Huánuco',total:86.5,estado:'entregado',created_at:now.toISOString()},
      {cliente_nombre:'Carlos Ríos',telefono:'986 333 444',ciudad:'Lima',total:42,estado:'nuevo',created_at:now.toISOString()},
      {cliente_nombre:'María López',telefono:'987 111 222',ciudad:'Huánuco',total:55,estado:'confirmado',created_at:new Date(now-86400000).toISOString()}
    ];
  }

  function isCurrentMonth(date) { if (!date || Number.isNaN(date.getTime())) return false; const now=new Date(); return date.getFullYear()===now.getFullYear() && date.getMonth()===now.getMonth(); }
  function clientDate(client) { return client.ultimaCompra || client.registeredAt || new Date(0); }
  function normalizePhone(value) { return String(value || '').replace(/\D/g, ''); }
  function whatsappPhone(value) { const phone=normalizePhone(value); return phone.length===9 ? `51${phone}` : phone; }
  function initials(value) { return String(value || 'C').trim().split(/\s+/).slice(0,2).map(part => part[0]).join('').toUpperCase(); }
  function money(value) { return `S/ ${Number(value || 0).toFixed(2)}`; }
  function formatDate(value) { return new Intl.DateTimeFormat('es-PE',{dateStyle:'medium'}).format(new Date(value)); }
  function escapeHtml(value) { const node=document.createElement('div'); node.textContent=value??''; return node.innerHTML; }
  function notify(message) { const toast=$('toast'); toast.textContent=message; toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),3500); }

  bootClients();
})();
