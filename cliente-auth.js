(function () {
  const cfg = window.SAEN_SUPABASE || {};
  const loginForm = document.getElementById('customerLoginForm');
  const registerForm = document.getElementById('customerRegisterForm');
  if (!window.supabase || !cfg.url || !cfg.anonKey) return show('loginMessage','No se pudo conectar con el sistema de cuentas.');
  const db = window.supabase.createClient(cfg.url,cfg.anonKey);

  document.getElementById('loginTab').onclick = () => switchForm('login');
  document.getElementById('registerTab').onclick = () => switchForm('register');
  db.auth.getSession().then(async ({data}) => {
    if (!data.session) return;
    const {data:isAdmin} = await db.rpc('is_admin');
    location.replace(isAdmin?'admin.html':'mi-cuenta.html');
  });

  loginForm.onsubmit = async event => {
    event.preventDefault();
    setBusy(loginForm,true); show('loginMessage','Ingresando…');
    const { error } = await db.auth.signInWithPassword({email:value('loginEmail'),password:value('loginPassword')});
    setBusy(loginForm,false);
    if (error) return show('loginMessage',error.message==='Invalid login credentials'?'Correo o contraseña incorrectos.':error.message);
    location.replace('mi-cuenta.html');
  };

  registerForm.onsubmit = async event => {
    event.preventDefault();
    const password=value('registerPassword');
    if (password !== value('registerConfirm')) return show('registerMessage','Las contraseñas no coinciden.');
    setBusy(registerForm,true); show('registerMessage','Creando tu cuenta…');
    const { data,error } = await db.auth.signUp({
      email:value('registerEmail'),password,
      options:{emailRedirectTo:`${location.origin}/mi-cuenta.html`,data:{nombre:value('registerName'),telefono:value('registerPhone'),ciudad:value('registerCity')}}
    });
    setBusy(registerForm,false);
    if (error) return show('registerMessage',friendly(error.message));
    if (data.session) return location.replace('mi-cuenta.html');
    registerForm.reset();
    show('registerMessage','Cuenta creada. Revisa tu correo y confirma el enlace para ingresar.','success');
  };

  function switchForm(mode) {
    const login=mode==='login';
    loginForm.hidden=!login; registerForm.hidden=login;
    document.getElementById('loginTab').classList.toggle('active',login);
    document.getElementById('registerTab').classList.toggle('active',!login);
  }
  function value(id){return document.getElementById(id).value.trim();}
  function show(id,message,type=''){const el=document.getElementById(id);if(el){el.textContent=message;el.className=`auth-message ${type}`;}}
  function setBusy(form,busy){form.querySelector('button[type="submit"]').disabled=busy;}
  function friendly(message){if(message.includes('already registered'))return 'Este correo ya tiene una cuenta.';if(message.includes('Password'))return 'La contraseña debe tener al menos 8 caracteres.';return message;}
})();
