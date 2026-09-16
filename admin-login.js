(function () {
  const form = document.getElementById('loginForm');
  const msg = document.getElementById('loginMessage');
  const cfg = window.SAEN_SUPABASE || {};
  if (!cfg.url || !cfg.anonKey || !window.supabase) {
    msg.textContent = 'Falta configurar Supabase. Consulta SUPABASE-SETUP.md.';
    form.querySelector('button').disabled = true;
    return;
  }
  const db = window.supabase.createClient(cfg.url, cfg.anonKey);
  db.auth.getSession().then(({ data }) => { if (data.session) location.replace('admin.html'); });
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); msg.textContent = 'Verificando…';
    const { error } = await db.auth.signInWithPassword({ email: document.getElementById('email').value.trim(), password: document.getElementById('password').value });
    if (error) { msg.textContent = error.message === 'Invalid login credentials' ? 'Correo o contraseña incorrectos.' : error.message; return; }
    location.replace('admin.html');
  });
})();
