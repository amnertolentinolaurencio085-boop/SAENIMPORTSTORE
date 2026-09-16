/* ==========================================================
   SAEN IMPORT — app.js  (motor principal v5)
   Mejoras v5:
   - Sección de reseñas eliminada
   - Nav resalta la página activa correctamente
   - Toast de bienvenida si hay productos en el carrito
   - Tipos "Caja x*" detectados dinámicamente
   - Contador de productos en stats sincronizado con datos reales
   - Animación de entrada en tarjetas con IntersectionObserver
   - Modo oscuro en topbar
   - Breadcrumb en páginas de categoría
   - Filtro rápido por badge en páginas de categoría
   ========================================================== */

/* ── Estado global ── */
let DATA     = null;
let CART     = [];
let PAGE_CAT = null;

/* ── Colores por categoría ── */
const CAT_COLOR = {
  accesorios:'purple', cuidado:'green', higiene:'blue',
  mochilas:'orange',   novedades:'red',
  cocina:'amber',      juguetes:'pink',  escolar:'indigo',
  maquillaje:'rose'
};

/* TIPO_SOV dinámico — detecta "Caja x*" automáticamente */
function getTipoSov(tipo) {
  if (tipo.startsWith('Caja')) return 'cx';
  if (tipo.startsWith('Box')) return 'bx';

  const map = {
    'Unidad':'u',
    'Mayor':'m',
    'Paquete':'p',
    'Pack':'pk',
    'Docena':'d',
    'Ciento':'c',
    'Tira':'t',
    'Oferta':'of'
  };

  return map[tipo] || 'u';
}

/* getPriceCls dinámico */
function getPriceCls(tipo) {
  if (tipo.startsWith('Caja')) return 'pr-caja';
  if (tipo.startsWith('Box')) return 'pr-box';

  const map = {
    'Unidad':'pr-Unidad',
    'Mayor':'pr-mayor',
    'Docena':'pr-docena',
    'Ciento':'pr-ciento',
    'Tira':'pr-tira',
    'Paquete':'pr-paquete',
    'Pack':'pr-pack',
    'Oferta':'pr-oferta'
  };

  return map[tipo] || '';
}

/* ══════════════════════════════════════════════════
   BOOT
══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', async () => {
  await loadData();
  detectPage();
  initCart();
  initNav();
  initSearch();
  initScroll();
  initQuickView();
  initImageLightbox();
  if (PAGE_CAT) renderCategoryPage();
  else          renderIndexPage();
  initRevealObserver();
  showCartWelcomeToast();
});

async function loadData() {
  DATA = window.SaenPublicData
    ? await window.SaenPublicData.merge(SAEN_DATA)
    : SAEN_DATA;
  const repair = value => {
    if (typeof value === 'string' && /Ã|Â|â€|â€”|â†/.test(value)) {
      const known = {
        'Ã‘':'Ñ','Ã±':'ñ','Ã':'Á','Ã¡':'á','Ã‰':'É','Ã©':'é',
        'Ã':'Í','Ã­':'í','Ã“':'Ó','Ã³':'ó','Ãš':'Ú','Ãº':'ú',
        'Â°':'°','â€”':'—','â€“':'–','â†’':'→'
      };
      let fixed = value;
      Object.entries(known).forEach(([bad, good]) => { fixed = fixed.split(bad).join(good); });
      try { return decodeURIComponent(escape(fixed)); } catch (_) { return fixed; }
    }
    if (Array.isArray(value)) return value.map(repair);
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k,v]) => [k, repair(v)]));
    return value;
  };
  DATA = repair(DATA);
  DATA.productos = DATA.productos.filter(p => p.estado !== 'oculto' && p.visible !== false);
}

function detectPage() {
  const path = window.location.pathname.split('/').pop();
  const match = DATA.categorias.find(c => c.id + '.html' === path);
  PAGE_CAT = match ? match.id : null;
}

/* ══════════════════════════════════════════════════
   RENDER INDEX
══════════════════════════════════════════════════ */
function renderIndexPage() {
  buildHeroSlider();
  buildCategoriesGrid();
  const allSec = document.getElementById('allSections');
  if (allSec) allSec.style.display = 'none';
  initSlider();
  initStats();
  /* SIN initReviews() — sección eliminada */
  hideReviewsSection();
}

function hideReviewsSection() {
  const rs = document.getElementById('reviewsSection');
  if (rs) rs.style.display = 'none';
}

/* ── Hero Slider ── */
function renderHeroSlides() {
  const gradients = [
    'linear-gradient(135deg,#001233 0%,#003087 55%,#cc0000 100%)',
    'linear-gradient(135deg,#001233 0%,#003087 55%,#004ccc 100%)',
    'linear-gradient(135deg,#001233 0%,#cc0000 55%,#6c2bd9 100%)',
    'linear-gradient(135deg,#001233 0%,#007a45 55%,#003087 100%)',
    'linear-gradient(135deg,#001233 0%,#b85c00 55%,#003087 100%)',
    'linear-gradient(135deg,#001233 0%,#006b75 55%,#003087 100%)',
    'linear-gradient(135deg,#001233 0%,#a01060 55%,#003087 100%)',
    'linear-gradient(135deg,#001233 0%,#2b3a8c 55%,#003087 100%)',
    'linear-gradient(135deg,#001233 0%,#991050 55%,#cc0000 100%)',
    'linear-gradient(135deg,#001233 0%,#b85c00 55%,#cc0000 100%)',
  ];
  return DATA.categorias.map((cat, i) => {
    const banner = cat.banner || cat.imagenBanner || '';
    return `
    <div class="hero-slide${banner ? ' has-banner' : ''}" style="background:${gradients[i % gradients.length]};">
      ${banner ? `<img class="hero-banner-image" src="${banner}" alt="" aria-hidden="true">` : ''}
      <div class="hero-content">
        <span class="hero-tag">Catálogo SAEN IMPORT 2026</span>
        <h1 class="hero-title">${cat.nombre}</h1>
        <p class="hero-desc">${cat.descripcion} — Precios unitarios y mayoristas desde 3 Unidades.</p>
        <div class="hero-actions">
          <a href="${cat.id}.html" class="btn-hero-p">Ver Catálogo</a>
          <a href="https://wa.me/${DATA.empresa.telefono1}" target="_blank" class="btn-hero-s">
            <i class="fab fa-whatsapp"></i> Consultar
          </a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-icon-big"><i class="${cat.icono}"></i></div>
        <div class="hero-badge">${i === 0 ? 'NUEVO' : 'TOP'}</div>
      </div>
    </div>`;
  }).join('');
}

function buildHeroSlider() {
  const slider = document.getElementById('heroSlider');
  if (!slider) return;
  slider.innerHTML = renderHeroSlides();
  const dotsEl = document.getElementById('sliderDots');
  if (dotsEl) {
    dotsEl.innerHTML = DATA.categorias.map((_, i) =>
      `<span class="dot ${i===0?'active':''}" onclick="goSlide(${i})"></span>`).join('');
  }
}

function buildCategoriesGrid() {
  const grid = document.getElementById('catsGrid');
  if (!grid) return;
  grid.innerHTML = DATA.categorias.map(cat => `
    <a href="${cat.id}.html" class="cat-card cc-${cat.color}">
      <div class="cat-icon-box"><i class="${cat.icono}"></i></div>
      <div class="cat-info"><h3>${cat.nombre}</h3><p>${cat.descripcion}</p></div>
      <div class="cat-arrow"><i class="fas fa-arrow-right"></i></div>
    </a>`).join('');
}

/* ══════════════════════════════════════════════════
   RENDER CATEGORY PAGE
══════════════════════════════════════════════════ */
function renderCategoryPage() {
  const cat   = DATA.categorias.find(c => c.id === PAGE_CAT);
  const prods = DATA.productos.filter(p => p.categoria === PAGE_CAT);
  const sec   = document.getElementById('catSection');
  if (!sec || !cat) return;

  document.title = `${cat.nombre} - SAEN IMPORT`;

  /* Insertar breadcrumb */
  insertBreadcrumb(cat);

  const icEl  = sec.querySelector('.sec-cat-icon');
  const tagEl = sec.querySelector('.sec-tag');
  const titEl = sec.querySelector('.sec-title');
  const desEl = sec.querySelector('.sec-desc');
  if (icEl)  { icEl.innerHTML = `<i class="${cat.icono}"></i>`; icEl.className = `sec-cat-icon ic-${cat.color}`; }
  if (tagEl) { tagEl.textContent = cat.nombre; tagEl.className = `sec-tag tg-${cat.color}`; }
  if (titEl) titEl.textContent = cat.nombre;
  if (desEl) desEl.textContent = cat.descripcion + ' — Precios unitarios y mayoristas desde 3 Unidades.';

  /* Filtros rápidos por badge */
  insertQuickFilters(prods, sec);

  const grid = sec.querySelector('.products-grid');
  if (grid) { grid.innerHTML = prods.map(p => buildCard(p)).join(''); bindCardEvents(); }

  const ctaEl = sec.querySelector('.sec-cta a');
  if (ctaEl) {
    const msg = encodeURIComponent(`Hola SAEN IMPORT! Quiero ver más productos de ${cat.nombre}. ¿Me pueden ayudar?`);
    ctaEl.href = `https://wa.me/${DATA.empresa.telefono1}?text=${msg}`;
  }

  buildCategorySuggestions(prods);
  hideReviewsSection();
}

/* ── Breadcrumb ── */
function insertBreadcrumb(cat) {
  if (document.getElementById('saen-breadcrumb')) return;
  const bc = document.createElement('div');
  bc.id = 'saen-breadcrumb';
  bc.className = 'breadcrumb-bar';
  bc.innerHTML = `
    <div class="bc-inner">
      <a href="index.html"><i class="fas fa-home"></i> Inicio</a>
      <i class="fas fa-chevron-right bc-sep"></i>
      <span><i class="${cat.icono}"></i> ${cat.nombre}</span>
    </div>`;
  const sec = document.getElementById('catSection');
  if (sec) sec.parentNode.insertBefore(bc, sec);
}

/* ── Filtros rápidos ── */
function insertQuickFilters(prods, sec) {
  if (document.getElementById('quickFilters')) return;
  const badges = [...new Set(prods.filter(p => p.badge).map(p => p.badge))];
  if (!badges.length) return;

  const wrap = document.createElement('div');
  wrap.id = 'quickFilters';
  wrap.className = 'quick-filters';
  wrap.innerHTML = `
    <button class="qf-btn active" onclick="filterCards('all', this)">
      <i class="fas fa-border-all"></i> Todos
    </button>
    ${badges.map(b => `
      <button class="qf-btn qf-${b.toLowerCase()}" onclick="filterCards('${b}', this)">
        ${badgeIcon(b)} ${b}
      </button>`).join('')}
    <button class="qf-btn" onclick="filterCards('disponible', this)">
      <i class="fas fa-check-circle"></i> Disponibles
    </button>`;

  const secHdr = sec.querySelector('.sec-hdr');
  if (secHdr) secHdr.after(wrap);
}

function badgeIcon(badge) {
  const icons = { NUEVO:'<i class="fas fa-sparkles"></i>', HOT:'<i class="fas fa-fire"></i>',
    OFERTA:'<i class="fas fa-tag"></i>', VIRAL:'<i class="fas fa-bolt"></i>' };
  return icons[badge] || '<i class="fas fa-circle"></i>';
}

function filterCards(filter, btn) {
  document.querySelectorAll('.qf-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.product-card').forEach(card => {
    const pid    = card.dataset.pid;
    const prod   = DATA.productos.find(p => p.id === pid);
    if (!prod) return;
    let show = true;
    if (filter === 'all') show = true;
    else if (filter === 'disponible') show = prod.estado === 'disponible';
    else show = prod.badge === filter;
    card.style.display = show ? '' : 'none';
  });
}

function buildCategorySuggestions(prods) {
  const inp = document.getElementById('searchInput');
  if (!inp) return;
  inp.addEventListener('focus', () => {
    const sr = document.getElementById('searchResults');
    if (!sr || inp.value.trim().length > 0) return;
    sr.innerHTML = '<div style="padding:10px 18px;font-family:\'Josefin Sans\',sans-serif;font-size:.72rem;letter-spacing:1px;color:var(--gray);text-transform:uppercase;">Productos en esta categoría</div>' +
      prods.slice(0, 6).map(p => srItem(p)).join('');
    sr.classList.add('active');
  });
}

/* ── Filas de precio reutilizables (tarjeta + vista rápida) ── */
function buildPriceRowsHtml(p, descuento, agotado) {
  if (agotado) {
    return `<div class="price-row pr-agotado"><span class="pr-badge">🚫</span><span class="pr-label">Producto agotado</span></div>`;
  }
  return p.precios.map(pr => {
    const val    = descuento ? +(pr.valor * (1 - p.descuento / 100)).toFixed(2) : pr.valor;
    const minQty = getMinQty(pr.tipo, pr.minimo);
    const label  = getPriceLabel(pr.tipo, pr.label, pr.minimo);
    const cls    = getPriceCls(pr.tipo);
    return `
      <div class="price-row ${cls}" data-tipo="${pr.tipo}" data-min="${minQty}" data-val="${val}" data-pid="${p.id}">
        <div class="price-row-left">
          <span class="pr-badge">${getBadgeTipo(pr.tipo)}</span>
          <span class="pr-label">${label}</span>
        </div>
        <div class="price-row-right">
          <strong class="pr-val">S/ ${val.toFixed(2)}</strong>
          <button class="btn-add-tipo" onclick="addToCartTipo('${p.id}','${pr.tipo}',${val},${minQty})" title="Agregar al pedido">
            <i class="fas fa-cart-plus"></i>
          </button>
        </div>
      </div>`;
  }).join('');
}

/* ══════════════════════════════════════════════════
   PRODUCT CARD BUILDER
══════════════════════════════════════════════════ */
function buildCard(p) {
  const color   = CAT_COLOR[p.categoria] || 'blue';
  const agotado = p.estado === 'agotado';
  const descuento = p.descuento > 0;

  let badgeHtml = '';
  if (agotado) {
    badgeHtml = `<div class="p-badge agotado">AGOTADO</div>`;
  } else if (p.badge) {
    badgeHtml = `<div class="p-badge ${p.badge.toLowerCase()}">${p.badge}</div>`;
  }

  const discBadge = descuento ? `<div class="p-discount">-${p.descuento}%</div>` : '';

  let imgHtml = '';
  if (p.imagen && p.imagen.trim() !== '') {
    imgHtml = `<img src="${p.imagen}" alt="${p.nombre}" loading="lazy"/>`;
  } else {
    const cat = DATA.categorias.find(c => c.id === p.categoria);
    imgHtml = `<i class="${cat ? cat.icono : 'fas fa-box'}"></i>`;
  }

  // Protección: si el producto no tiene precios, se omite sin romper la página
  if (!p.precios || p.precios.length === 0) {
    console.warn(`Producto sin precios omitido: ${p.id} - ${p.nombre}`);
    return '';
  }

  const precioUnidadObj = p.precios.find(pr => pr.tipo === 'Unidad') || p.precios[0];
  const precioMayorObj  = p.precios.find(pr => pr.tipo === 'Mayor');

  const precioUnidad = descuento
    ? +(precioUnidadObj.valor * (1 - p.descuento / 100)).toFixed(2)
    : precioUnidadObj.valor;

  const precioMayor = precioMayorObj
    ? (descuento
        ? +(precioMayorObj.valor * (1 - p.descuento / 100)).toFixed(2)
        : precioMayorObj.valor)
    : null;

  const stars = Array(5).fill(0).map((_, i) =>
    i < p.estrellas
      ? '<i class="fas fa-star"></i>'
      : i < p.estrellas + 0.5
        ? '<i class="fas fa-star-half-alt"></i>'
        : '<i class="far fa-star"></i>'
  ).join('');

  const agotadoOverlay = agotado
    ? `<div class="agotado-ribbon"><span><i class="fas fa-ban"></i> AGOTADO</span></div>`
    : '';

  /* Chip de precio mayor en la imagen si existe */
  const mayorBadgeImg = (!agotado && precioMayor)
    ? `<div class="card-mayor-badge"><i class="fas fa-boxes-stacked"></i> Mayor S/${precioMayor.toFixed(2)}</div>`
    : '';

  return `
  <div class="product-card ${agotado ? 'card-agotado' : ''}" data-pid="${p.id}">

    ${badgeHtml}
    ${discBadge}

    <div class="p-img-wrap" role="button" tabindex="0" aria-label="Ver ${p.nombre}"
         onclick="openQuickView('${p.id}')"
         onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openQuickView('${p.id}');}">
      <div class="p-img-ph bg-${color}">${imgHtml}</div>
      ${agotadoOverlay}
      ${mayorBadgeImg}
      ${!agotado ? `
        <div class="p-overlay">
          <span class="p-overlay-hint"><i class="fas fa-expand"></i> Ver producto</span>
        </div>` : ''}
    </div>

    <div class="p-info">
      <span class="p-cat">${DATA.categorias.find(c => c.id===p.categoria)?.nombre || ''}</span>
      <h3 class="p-name">${p.nombre}</h3>
      <p class="p-desc">${p.descripcion}</p>
      <div class="p-stars">${stars}<span>(${p.resenas.toLocaleString()} reseñas)</span></div>

      <div class="p-prices-auto">
        ${buildPriceRowsHtml(p, descuento, agotado)}
      </div>

      <div class="p-footer" style="margin-top:10px;">
        <span class="p-selected-price" id="sp-${p.id}" style="font-size:.78rem;color:var(--gray);">
          Elige un tipo de precio arriba
        </span>
      </div>
    </div>
  </div>`;
}

function bindCardEvents() {
  document.querySelectorAll('.price-chip').forEach(chip => {
    chip.addEventListener('click', e => {
      e.stopPropagation();
      const pid   = chip.dataset.pid;
      const price = chip.dataset.precio;
      document.querySelectorAll(`.price-chip[data-pid="${pid}"]`).forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      const sp = document.getElementById(`sp-${pid}`);
      if (sp) sp.textContent = `S/ ${parseFloat(price).toFixed(2)}`;
    });
  });
}

/* ══════════════════════════════════════════════════
   VISTA RÁPIDA (Quick View) — se abre al hacer click en la
   imagen de cualquier producto. Muestra la imagen en grande,
   la info del producto y sugerencias de otros artículos.
══════════════════════════════════════════════════ */
function initQuickView() {
  if (document.getElementById('qvOverlay')) return;

  const ov = document.createElement('div');
  ov.id = 'qvOverlay';
  ov.className = 'qv-overlay';
  ov.innerHTML = `
    <div class="qv-box" id="qvBox">
      <button class="qv-close" onclick="closeQuickView()" aria-label="Cerrar">
        <i class="fas fa-times"></i>
      </button>
      <div class="qv-content" id="qvContent"></div>
    </div>`;
  document.body.appendChild(ov);

  /* Cerrar al hacer click fuera de la tarjeta */
  ov.addEventListener('click', e => { if (e.target === ov) closeQuickView(); });
}

/* ── Lightbox: ver la imagen del producto a pantalla completa ── */
function initImageLightbox() {
  if (document.getElementById('imgLightbox')) return;
  const ov = document.createElement('div');
  ov.id = 'imgLightbox';
  ov.className = 'img-lightbox';
  ov.innerHTML = `
    <button class="il-close" onclick="closeImageLightbox()" aria-label="Cerrar imagen">
      <i class="fas fa-times"></i>
    </button>
    <img id="ilImg" src="" alt="">`;
  document.body.appendChild(ov);
  ov.addEventListener('click', e => { if (e.target === ov) closeImageLightbox(); });
}

function openImageLightbox(src, alt) {
  if (!src) return;
  const ov  = document.getElementById('imgLightbox');
  const img = document.getElementById('ilImg');
  if (!ov || !img) return;
  img.src = src;
  img.alt = alt || '';
  ov.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeImageLightbox() {
  document.getElementById('imgLightbox')?.classList.remove('active');
  /* Solo restaura el scroll si el quick view tampoco está abierto */
  if (!document.getElementById('qvOverlay')?.classList.contains('active')) {
    document.body.style.overflow = '';
  }
}

function openQuickView(pid) {
  const p = DATA.productos.find(x => x.id === pid);
  if (!p) return;
  renderQuickView(p);
  document.getElementById('qvOverlay')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  document.getElementById('qvOverlay')?.classList.remove('active');
  document.body.style.overflow = '';
}

function renderQuickView(p) {
  const content = document.getElementById('qvContent');
  if (!content) return;

  const color     = CAT_COLOR[p.categoria] || 'blue';
  const cat       = DATA.categorias.find(c => c.id === p.categoria);
  const agotado   = p.estado === 'agotado';
  const descuento = p.descuento > 0;

  let imgHtml = '';
  if (p.imagen && p.imagen.trim() !== '') {
    imgHtml = `<img src="${p.imagen}" alt="${p.nombre}" loading="lazy"/>`;
  } else {
    imgHtml = `<i class="${cat ? cat.icono : 'fas fa-box'}"></i>`;
  }

  const stars = Array(5).fill(0).map((_, i) =>
    i < p.estrellas
      ? '<i class="fas fa-star"></i>'
      : i < p.estrellas + 0.5
        ? '<i class="fas fa-star-half-alt"></i>'
        : '<i class="far fa-star"></i>'
  ).join('');

  const badgeHtml = agotado
    ? `<div class="p-badge agotado">AGOTADO</div>`
    : (p.badge ? `<div class="p-badge ${p.badge.toLowerCase()}">${p.badge}</div>` : '');
  const discBadge = descuento ? `<div class="p-discount">-${p.descuento}%</div>` : '';
  const agotadoOverlay = agotado
    ? `<div class="agotado-ribbon"><span><i class="fas fa-ban"></i> AGOTADO</span></div>`
    : '';

  const suggestions = getSuggestions(p, 40);

  const tieneImagen = !!(p.imagen && p.imagen.trim() !== '');
  const nombreEsc    = p.nombre.replace(/'/g, "\\'");

  content.innerHTML = `
    <div class="qv-main">
      <div class="qv-img-wrap bg-${color} ${tieneImagen ? 'qv-img-zoomable' : ''}"
           ${tieneImagen ? `onclick="openImageLightbox('${p.imagen}','${nombreEsc}')" role="button" tabindex="0" aria-label="Ver imagen completa"
           onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openImageLightbox('${p.imagen}','${nombreEsc}');}"` : ''}>
        ${badgeHtml}${discBadge}
        ${imgHtml}
        ${agotadoOverlay}
        ${tieneImagen ? `<span class="qv-zoom-hint"><i class="fas fa-magnifying-glass-plus"></i> Ver imagen</span>` : ''}
      </div>
      <div class="qv-info">
        <span class="qv-cat">${cat ? cat.nombre : ''}</span>
        <h2 class="qv-name">${p.nombre}</h2>
        <div class="qv-stars">${stars}<span>(${p.resenas.toLocaleString()} reseñas)</span></div>
        <p class="qv-desc">${p.descripcion}</p>
        <div class="qv-prices">${buildPriceRowsHtml(p, descuento, agotado)}</div>
        <button class="btn-wa-cart" onclick="consultWA('${p.id}')">
          <i class="fab fa-whatsapp"></i> Consultar por WhatsApp
        </button>
      </div>
    </div>
    ${suggestions.length ? `
    <div class="qv-suggestions">
      <h3><i class="fas fa-shapes"></i> También te puede interesar <span class="qv-sugg-count">(${suggestions.length})</span></h3>
      <div class="qv-sugg-grid">
        ${suggestions.map(sp => suggCardHtml(sp)).join('')}
      </div>
    </div>` : ''}
  `;

  const box = document.getElementById('qvBox');
  if (box) box.scrollTop = 0;
}

/* Tarjeta compacta de sugerencia dentro del quick view */
function suggCardHtml(p) {
  const color = CAT_COLOR[p.categoria] || 'blue';
  const cat   = DATA.categorias.find(c => c.id === p.categoria);
  const agotado = p.estado === 'agotado';

  let imgHtml = '';
  if (p.imagen && p.imagen.trim() !== '') {
    imgHtml = `<img src="${p.imagen}" alt="${p.nombre}" loading="lazy"/>`;
  } else {
    imgHtml = `<i class="${cat ? cat.icono : 'fas fa-box'}"></i>`;
  }

  const precioObj = p.precios?.find(pr => pr.tipo === 'Unidad') || p.precios?.[0];
  const val = precioObj
    ? (p.descuento > 0 ? +(precioObj.valor * (1 - p.descuento / 100)).toFixed(2) : precioObj.valor)
    : null;

  return `
    <div class="qv-sugg-card" onclick="openQuickView('${p.id}')" role="button" tabindex="0"
         onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openQuickView('${p.id}');}">
      <div class="qv-sugg-img bg-${color}">
        ${imgHtml}
        ${agotado ? `<span class="qv-sugg-agotado">Agotado</span>` : ''}
      </div>
      <div class="qv-sugg-info">
        <span class="qv-sugg-name">${p.nombre}</span>
        ${val !== null ? `<span class="qv-sugg-price">S/ ${val.toFixed(2)}</span>` : ''}
      </div>
    </div>`;
}

/* Sugerencias: primero mismo categoría (disponibles), luego rellena
   con productos populares de otras categorías si hacen falta */
function getSuggestions(p, max = 40) {
  if (!DATA) return [];

  const disponibles = DATA.productos.filter(x =>
    x.id !== p.id && x.estado !== 'agotado' && x.precios?.length);
  const agotados = DATA.productos.filter(x =>
    x.id !== p.id && x.estado === 'agotado' && x.precios?.length);

  /* Agrupa por categoría y baraja cada grupo para que la variedad
     sea real y distinta cada vez que se abre la vista rápida */
  const porCategoria = {};
  disponibles.forEach(x => { (porCategoria[x.categoria] ||= []).push(x); });
  Object.keys(porCategoria).forEach(cat => {
    porCategoria[cat] = shuffleArray(porCategoria[cat]);
  });

  /* Reparto "round robin": toma uno de cada categoría por turno,
     dando la vuelta varias veces si hace falta, así SIEMPRE se
     mezclan todas las categorías del catálogo, no solo la actual */
  const categorias = shuffleArray(Object.keys(porCategoria));
  let lista = [];
  let quedanProductos = true;
  while (lista.length < max && quedanProductos) {
    quedanProductos = false;
    for (const cat of categorias) {
      if (lista.length >= max) break;
      const grupo = porCategoria[cat];
      if (grupo && grupo.length) {
        lista.push(grupo.shift());
        quedanProductos = true;
      }
    }
  }

  /* Si el catálogo disponible no alcanza el mínimo pedido,
     rellena con productos agotados como último recurso */
  if (lista.length < max) {
    const yaIds = new Set(lista.map(x => x.id));
    const restoAgotados = shuffleArray(agotados.filter(x => !yaIds.has(x.id)));
    lista = lista.concat(restoAgotados.slice(0, max - lista.length));
  }

  return shuffleArray(lista).slice(0, max);
}

/* Baraja un arreglo (Fisher-Yates) sin mutar el original */
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ══════════════════════════════════════════════════
   CARRITO
══════════════════════════════════════════════════ */
function initCart() {
  const saved = localStorage.getItem('saen_cart');
  if (saved) try { CART = JSON.parse(saved); } catch(_){}
  initCheckoutFields();
  updateCartUI();
}
function saveCart() { localStorage.setItem('saen_cart', JSON.stringify(CART)); }

function initCheckoutFields() {
  const footer = document.querySelector('.cart-footer');
  if (!footer || document.getElementById('orderCustomer')) return;
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem('saen_customer') || '{}'); } catch (_) {}
  footer.insertAdjacentHTML('afterbegin', `
    <section class="order-customer" id="orderCustomer">
      <h4><i class="fas fa-user"></i> Datos para registrar el pedido</h4>
      <div class="order-customer-grid">
        <label>Nombre *<input id="orderName" autocomplete="name" maxlength="100" placeholder="Nombre del cliente"></label>
        <label>Teléfono *<input id="orderPhone" inputmode="tel" autocomplete="tel" maxlength="25" placeholder="987 654 321"></label>
        <label class="span-2">Ciudad o distrito<input id="orderCity" autocomplete="address-level2" maxlength="80" placeholder="Huánuco"></label>
        <label class="span-2">Nota opcional<textarea id="orderNotes" rows="2" maxlength="300" placeholder="Dirección, referencia o indicación"></textarea></label>
      </div>
      <p class="order-message" id="orderMessage" role="alert"></p>
    </section>`);
  document.getElementById('orderName').value = saved.nombre || '';
  document.getElementById('orderPhone').value = saved.telefono || '';
  document.getElementById('orderCity').value = saved.ciudad || '';
}

/* Toast de bienvenida si hay carrito guardado */
function showCartWelcomeToast() {
  if (CART.length > 0) {
    const total = CART.reduce((s, i) => s + i.qty, 0);
    setTimeout(() => {
      showToast(`<i class="fas fa-shopping-cart"></i> Tienes ${total} producto${total>1?'s':''} en tu pedido`);
    }, 1200);
  }
}

/* ── Helpers de tipos de precio ── */

/*
  REGLAS DE CANTIDAD MÍNIMA:
  - "Unidad" → mínimo 1. Si el cliente llega a 3, se convierte
    automáticamente a precio Mayor (ver addToCartTipo / changeQty).
  - "Mayor"  → mínimo 3 (precio por mayor desde 3 unid).
  - "Docena" → mínimo 1 DOCENA (el cliente elige cuántas docenas quiere).
  - "Ciento" → mínimo 1 CIENTO.
  - "Caja x*"→ mínimo 1 CAJA (el cliente elige cuántas cajas quiere).
  - El resto  → mínimo 1 Unidad del tipo (1 tira, 1 paquete, etc.).
*/
function getMinQty(tipo) {
  if (tipo === 'Mayor') return 3;

  if (
    tipo === 'Docena' ||
    tipo === 'Ciento' ||
    tipo === 'Pack' ||
    tipo.startsWith('Caja') ||
    tipo.startsWith('Box')
  ) {
    return 1;
  }

  return 1;
}

function getPriceLabel(tipo, label) {
  if (tipo === 'Oferta' && label) return label;
  switch(tipo) {
    case 'Unidad':  return 'Precio por Unidad (×3 aplica precio mayor)';
    case 'Mayor':   return 'Por mayor (mín. 3 unid.)';
    case 'Docena':  return 'Por docena — elige cuántas docenas';
    case 'Ciento':  return 'Por ciento — elige cuántos cientos';
    case 'Tira':    return 'Por tira — elige cuántas tiras';
    case 'Paquete': return 'Por paquete — elige cuántos paquetes';
    case 'Oferta':  return 'Precio oferta';
    case 'Pack': return 'Por pack';
    default:
      if (tipo.startsWith('Caja')) return `${tipo} — elige cuántas cajas`;
      return tipo;
    if (tipo.startsWith('Box')) return `${tipo} — elige cuántas cajas`;
  }
}
function getBadgeTipo(tipo) {
  if (tipo.startsWith('Caja')) return '🗃️';
  if (tipo.startsWith('Box')) return '📦';
  switch(tipo) {
    case 'Unidad':  return '1️⃣';
    case 'Mayor':   return '📦';
    case 'Docena':  return '🔢';
    case 'Ciento':  return '💯';
    case 'Tira':    return '📋';
    case 'Paquete': return '🎁';
    case 'Oferta':  return '🏷️';
    case 'Pack':    return '📦';
    default:        return '•';
    
  }
}

function addToCartTipo(pid, tipo, precio, minQty) {
  const prod = DATA.productos.find(p => p.id === pid);
  if (!prod || prod.estado === 'agotado') return;

  let item = CART.find(i => i.pid === pid && i.tipo === tipo);
  if (item) {
    item.qty += 1;
  } else {
    const qtyInicial = (tipo === 'Mayor') ? 3 : 1;
    item = { pid, tipo, precio, qty: qtyInicial, min: (tipo === 'Mayor') ? 3 : 1 };
    CART.push(item);
  }

  /* Regla Unidad -> Mayor: si llega a 3 Unidades y existe precio Mayor */
  if (tipo === 'Unidad') {
    const mayorPrecioObj = prod.precios.find(pr => pr.tipo === 'Mayor');
    if (mayorPrecioObj && item.qty >= 3) {
      const descuento = prod.descuento > 0;
      const precioMayor = descuento
        ? +(mayorPrecioObj.valor * (1 - prod.descuento / 100)).toFixed(2)
        : mayorPrecioObj.valor;
      const qtyAcumulada = item.qty;
      CART = CART.filter(i => !(i.pid === pid && i.tipo === 'Unidad'));
      let mayorItem = CART.find(i => i.pid === pid && i.tipo === 'Mayor');
      if (mayorItem) {
        mayorItem.qty += qtyAcumulada;
      } else {
        mayorItem = { pid, tipo: 'Mayor', precio: precioMayor, qty: qtyAcumulada, min: 3 };
        CART.push(mayorItem);
      }
      saveCart(); updateCartUI(); renderCartPanel();
      showToast(`🎉 ¡Precio mayor aplicado! ${prod.nombre} x${mayorItem.qty} — S/ ${precioMayor.toFixed(2)} c/u`);
      return;
    }
  }

  saveCart(); updateCartUI(); renderCartPanel();
  showToast(`<i class="fas fa-check"></i> ${prod.nombre} x${item.qty}`);
}

function removeFromCart(pid, tipo) {
  CART = CART.filter(i => !(i.pid === pid && i.tipo === tipo));
  saveCart(); updateCartUI(); renderCartPanel();
}

function changeQty(pid, tipo, delta) {
  const item = CART.find(i => i.pid === pid && i.tipo === tipo);
  if (!item) return;
  const newQty = item.qty + delta;
  const prod = DATA.productos.find(p => p.id === pid);

  /* Bajar a 0 o menos: eliminar */
  if (newQty < 1) {
    CART = CART.filter(i => !(i.pid === pid && i.tipo === tipo));
    saveCart(); updateCartUI(); renderCartPanel();
    return;
  }

  /* Subir Unidad a 3+: convertir a Mayor */
  if (tipo === 'Unidad' && prod) {
    const mayorObj = prod.precios.find(pr => pr.tipo === 'Mayor');
    if (mayorObj && newQty >= 3) {
      const pm = prod.descuento > 0
        ? +(mayorObj.valor * (1 - prod.descuento / 100)).toFixed(2)
        : mayorObj.valor;
      CART = CART.filter(i => !(i.pid === pid && i.tipo === 'Unidad'));
      let mi = CART.find(i => i.pid === pid && i.tipo === 'Mayor');
      if (mi) { mi.qty += newQty; }
      else { mi = { pid, tipo:'Mayor', precio:pm, qty:newQty, min:3 }; CART.push(mi); }
      saveCart(); updateCartUI(); renderCartPanel();
      showToast('🎉 Precio mayor aplicado! x' + mi.qty + ' — S/ ' + pm.toFixed(2) + ' c/u');
      return;
    }
  }

  /* Bajar Mayor a menos de 3: volver a Unidad */
  if (tipo === 'Mayor' && newQty < 3 && prod) {
    const unidObj = prod.precios.find(pr => pr.tipo === 'Unidad');
    if (unidObj) {
      const pu = prod.descuento > 0
        ? +(unidObj.valor * (1 - prod.descuento / 100)).toFixed(2)
        : unidObj.valor;
      CART = CART.filter(i => !(i.pid === pid && i.tipo === 'Mayor'));
      let ui = CART.find(i => i.pid === pid && i.tipo === 'Unidad');
      if (ui) { ui.qty = newQty; ui.precio = pu; }
      else { CART.push({ pid, tipo:'Unidad', precio:pu, qty:newQty, min:1 }); }
      saveCart(); updateCartUI(); renderCartPanel();
      showToast('ℹ️ Precio por Unidad (menos de 3)');
      return;
    }
  }

  /* Caso normal */
  item.qty = newQty;
  saveCart(); updateCartUI(); renderCartPanel();
}
function clearCart() {
  if (!confirm('¿Vaciar el pedido?')) return;
  CART = []; saveCart(); updateCartUI(); renderCartPanel();
}
function updateCartUI() {
  const total = CART.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}
function openCart() {
  renderCartPanel();
  document.getElementById('cartPanel').classList.add('active');
  document.getElementById('cartOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartPanel').classList.remove('active');
  document.getElementById('cartOverlay').classList.remove('active');
  document.body.style.overflow = '';
}
function renderCartPanel() {
  const body  = document.getElementById('cartBody');
  const total = document.getElementById('cartTotal');
  if (!body) return;

  if (CART.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-cart"></i>
        <p>Tu pedido está vacío.<br>Agrega productos para continuar.</p>
      </div>`;
    if (total) total.textContent = 'S/ 0.00';
    return;
  }

  let sum = 0;
  body.innerHTML = CART.map(item => {
    const prod = DATA.productos.find(p => p.id === item.pid);
    if (!prod) return '';
    const color    = CAT_COLOR[prod.categoria] || 'blue';
    const cat      = DATA.categorias.find(c => c.id === prod.categoria);
    const subtotal = item.precio * item.qty;
    sum += subtotal;
    const imgEl = prod.imagen
      ? `<img src="${prod.imagen}" alt="${prod.nombre}" style="width:100%;height:100%;object-fit:cover;border-radius:var(--r-sm);">`
      : `<i class="${cat?.icono || 'fas fa-box'}"></i>`;
    return `
      <div class="cart-item">
        <div class="ci-icon bg-${color}">${imgEl}</div>
        <div class="ci-info">
          <div class="ci-name">${prod.nombre}</div>
          <div class="ci-tipo">
            ${item.tipo} · S/ ${item.precio.toFixed(2)} c/u
            ${(() => {
              if (item.tipo === 'Unidad') {
                const prod2 = DATA.productos.find(p => p.id === item.pid);
                const mayorObj = prod2 && prod2.precios.find(pr => pr.tipo === 'Mayor');
                if (mayorObj) {
                  const restante = 3 - item.qty;
                  if (restante > 0) {
                    return `<span class="ci-hint">+${restante} más → precio mayor S/ ${mayorObj.valor.toFixed(2)}</span>`;
                  }
                }
              }
              return '';
            })()}
          </div>
          <div class="ci-qty">
            <button onclick="changeQty('${item.pid}','${item.tipo}',-1)"><i class="fas fa-minus"></i></button>
            <span>${item.qty}</span>
            <button onclick="changeQty('${item.pid}','${item.tipo}',1)"><i class="fas fa-plus"></i></button>
          </div>
          <div class="ci-price">Subtotal: S/ ${subtotal.toFixed(2)}</div>
        </div>
        <button class="ci-remove" onclick="removeFromCart('${item.pid}','${item.tipo}')">
          <i class="fas fa-times"></i>
        </button>
      </div>`;
  }).join('');

  if (total) total.textContent = `S/ ${sum.toFixed(2)}`;
}

async function sendCartWA() {
  if (CART.length === 0) { showToast('Tu pedido está vacío'); return; }
  const nombre = document.getElementById('orderName')?.value.trim() || '';
  const telefono = document.getElementById('orderPhone')?.value.trim() || '';
  const ciudad = document.getElementById('orderCity')?.value.trim() || '';
  const notas = document.getElementById('orderNotes')?.value.trim() || '';
  const orderMessage = document.getElementById('orderMessage');
  if (nombre.length < 2 || telefono.replace(/\D/g,'').length < 6) {
    if (orderMessage) orderMessage.textContent = 'Completa tu nombre y teléfono para continuar.';
    document.getElementById(nombre.length < 2 ? 'orderName' : 'orderPhone')?.focus();
    return;
  }
  const cfg = window.SAEN_SUPABASE || {};
  if (!window.supabase || !cfg.url || !cfg.anonKey) {
    if (orderMessage) orderMessage.textContent = 'No se pudo conectar para registrar el pedido. Inténtalo nuevamente.';
    return;
  }
  localStorage.setItem('saen_customer', JSON.stringify({nombre,telefono,ciudad}));
  if (orderMessage) orderMessage.textContent = 'Registrando pedido…';
  const button = document.querySelector('.cart-footer .btn-wa-cart');
  if (button) button.disabled = true;
  const waWindow = window.open('', '_blank');
  const orderClient = window.supabase.createClient(cfg.url, cfg.anonKey);
  const rpcItems = CART.map(item => ({sku:item.pid,tipo:item.tipo,cantidad:item.qty}));
  let order;
  try {
    const { data, error } = await orderClient.rpc('crear_pedido', {
      p_cliente_nombre:nombre,
      p_telefono:telefono,
      p_ciudad:ciudad,
      p_notas:notas,
      p_items:rpcItems
    });
    if (error) throw error;
    order = Array.isArray(data) ? data[0] : data;
    if (!order?.pedido_codigo) throw new Error('No se recibió el código del pedido.');
  } catch (error) {
    if (waWindow) waWindow.close();
    if (orderMessage) orderMessage.textContent = `No se registró el pedido: ${error.message}`;
    if (button) button.disabled = false;
    return;
  }

  let msg = `🛍️ *PEDIDO ${order.pedido_codigo} - SAEN IMPORT*\n\n`;
  msg += `👤 *Cliente:* ${nombre}\n📱 *Teléfono:* ${telefono}\n`;
  if (ciudad) msg += `📍 *Ciudad:* ${ciudad}\n`;
  if (notas) msg += `📝 *Nota:* ${notas}\n`;
  msg += '\n';
  let total = 0;
  CART.forEach(item => {
    const prod = DATA.productos.find(p => p.id === item.pid);
    if (!prod) return;
    const sub = item.precio * item.qty;
    total += sub;
    msg += `▪️ *${prod.nombre}*\n`;
    msg += `   Tipo: ${item.tipo} | Precio: S/ ${item.precio.toFixed(2)} | Cant: ${item.qty}\n`;
    msg += `   Subtotal: S/ ${sub.toFixed(2)}\n\n`;
  });
  msg += `────────────────────\n*TOTAL: S/ ${total.toFixed(2)}*\n\n`;
  msg += `📍 ${DATA.empresa.direccion}\n`;
  msg += `⏰ ${DATA.empresa.horario}`;
  const waUrl = `https://wa.me/${DATA.empresa.telefono1}?text=${encodeURIComponent(msg)}`;
  if (waWindow) waWindow.location.href = waUrl;
  else window.location.href = waUrl;
  CART = [];
  saveCart(); updateCartUI(); renderCartPanel();
  if (button) button.disabled = false;
  showToast(`Pedido ${order.pedido_codigo} registrado correctamente`);
}

/* ══════════════════════════════════════════════════
   BÚSQUEDA
══════════════════════════════════════════════════ */
function initSearch() {
  const inp = document.getElementById('searchInput');
  const res = document.getElementById('searchResults');
  if (!inp || !res) return;
  inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase();
    if (q.length < 2) { res.classList.remove('active'); return; }
    const prods = DATA.productos.filter(p =>
      p.nombre.toLowerCase().includes(q) ||
      p.descripcion.toLowerCase().includes(q) ||
      DATA.categorias.find(c => c.id === p.categoria)?.nombre.toLowerCase().includes(q)
    );
    const cats = DATA.categorias.filter(c =>
      c.nombre.toLowerCase().includes(q) || c.descripcion.toLowerCase().includes(q)
    );
    if (!prods.length && !cats.length) {
      res.innerHTML = `<div class="sr-item"><div class="sr-info" style="width:100%;text-align:center;"><strong>Sin resultados para "${inp.value}"</strong></div></div>`;
    } else {
      let html = '';
      cats.forEach(c => {
        html += `<div class="sr-item" onclick="location.href='${c.id}.html'">
          <div class="sr-icon bg-${c.color}"><i class="${c.icono}"></i></div>
          <div class="sr-info">
            <strong>${highlight(c.nombre, q)}</strong>
            <span>Categoría — ${c.descripcion}</span>
          </div>
        </div>`;
      });
      prods.slice(0, 6).forEach(p => { html += srItem(p, q); });
      res.innerHTML = html;
    }
    res.classList.add('active');
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrapper')) res.classList.remove('active');
  });
}

function srItem(p, q = '') {
  const cat   = DATA.categorias.find(c => c.id === p.categoria);
  const color = CAT_COLOR[p.categoria] || 'blue';
  const chips = p.precios.map(pr =>
    `<span class="sov-chip ${getTipoSov(pr.tipo)}">${pr.tipo}: S/${pr.valor.toFixed(2)}</span>`).join('');
  const dest  = PAGE_CAT === p.categoria ? `#prod-${p.id}` : `${p.categoria}.html`;
  return `
    <div class="sr-item" onclick="location.href='${dest}'" style="flex-wrap:wrap;gap:6px;">
      <div class="sr-icon bg-${color}"><i class="${cat?.icono||'fas fa-box'}"></i></div>
      <div class="sr-info" style="flex:1;">
        <strong>${q ? highlight(p.nombre,q) : p.nombre}</strong>
        <span>${cat?.nombre || ''} ${p.estado==='agotado'?'· <span style="color:var(--red)">AGOTADO</span>':''}</span>
        <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:4px;">${chips}</div>
      </div>
    </div>`;
}

function handleSearch(e) {
  e.preventDefault();
  const q = document.getElementById('searchInput')?.value.trim();
  if (q && q.length >= 2) showSearchOverlay(q);
}

function showSearchOverlay(query) {
  const ov  = document.getElementById('searchOverlay');
  const res = document.getElementById('sovResults');
  if (!ov || !res) return;
  const q     = query.toLowerCase();
  const prods = DATA.productos.filter(p =>
    p.nombre.toLowerCase().includes(q) ||
    p.descripcion.toLowerCase().includes(q) ||
    DATA.categorias.find(c => c.id === p.categoria)?.nombre.toLowerCase().includes(q)
  );
  const cats = DATA.categorias.filter(c =>
    c.nombre.toLowerCase().includes(q) || c.descripcion.toLowerCase().includes(q)
  );
  if (!prods.length && !cats.length) {
    res.innerHTML = `
      <div class="sov-nores">
        <i class="fas fa-search"></i>
        <p>Sin resultados para <strong>"${query}"</strong></p>
        <a href="https://wa.me/${DATA.empresa.telefono1}?text=${encodeURIComponent('Hola, estoy buscando: '+query)}"
           target="_blank" style="display:inline-flex;align-items:center;gap:8px;margin-top:16px;padding:12px 24px;background:#25d366;color:#fff;border-radius:50px;font-family:'Josefin Sans',sans-serif;font-weight:700;font-size:.85rem;">
          <i class="fab fa-whatsapp"></i> Buscar en WhatsApp
        </a>
      </div>`;
  } else {
    let html = '';
    cats.forEach(c => {
      html += `<div class="sov-item" onclick="location.href='${c.id}.html'">
        <div class="sov-icon bg-${c.color}"><i class="${c.icono}"></i></div>
        <div class="sov-info">
          <strong>${highlight(c.nombre,q)}</strong>
          <span>Categoría · ${c.descripcion}</span>
        </div>
      </div>`;
    });
    prods.forEach(p => {
      const cat   = DATA.categorias.find(c => c.id === p.categoria);
      const chips = p.precios.map(pr => `<span class="sov-chip ${getTipoSov(pr.tipo)}">${pr.tipo}: S/${pr.valor.toFixed(2)}</span>`).join('');
      const dest  = PAGE_CAT === p.categoria ? `#prod-${p.id}` : `${p.categoria}.html`;
      const msg   = encodeURIComponent(`Hola SAEN IMPORT! Quiero información sobre: *${p.nombre}*`);
      html += `
        <div class="sov-item">
          <div class="sov-icon bg-${CAT_COLOR[p.categoria]||'blue'}"><i class="${cat?.icono||'fas fa-box'}"></i></div>
          <div class="sov-info">
            <strong>${highlight(p.nombre,q)}</strong>
            <span>${cat?.nombre||''} ${p.estado==='agotado'?'· <strong style="color:var(--red)">AGOTADO</strong>':''}</span>
            <div class="sov-chips">${chips}</div>
          </div>
          <a href="https://wa.me/${DATA.empresa.telefono1}?text=${msg}" target="_blank" class="sov-wa">
            <i class="fab fa-whatsapp"></i> Pedir
          </a>
        </div>`;
    });
    res.innerHTML = html;
  }
  ov.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSearchOverlay() {
  document.getElementById('searchOverlay')?.classList.remove('active');
  document.body.style.overflow = '';
}

function highlight(text, q) {
  return text.replace(new RegExp(`(${q})`, 'gi'),
    '<mark style="background:rgba(0,48,135,.15);color:#003087;border-radius:2px;padding:0 2px;">$1</mark>');
}

/* ══════════════════════════════════════════════════
   SLIDER
══════════════════════════════════════════════════ */
let sliderIdx   = 0;
let sliderTimer;

function initSlider() {
  const slider = document.getElementById('heroSlider');
  if (!slider) return;
  sliderTimer = setInterval(() => changeSlide(1), 5500);

  /* Swipe touch en móvil */
  let touchStartX = 0;
  slider.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive:true });
  slider.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) changeSlide(dx < 0 ? 1 : -1);
  });
}
function changeSlide(dir) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.dot');
  if (!slides.length) return;
  sliderIdx = (sliderIdx + dir + slides.length) % slides.length;
  document.getElementById('heroSlider').style.transform = `translateX(-${sliderIdx * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === sliderIdx));
}
function goSlide(idx) {
  sliderIdx = idx;
  document.getElementById('heroSlider').style.transform = `translateX(-${sliderIdx * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === sliderIdx));
  clearInterval(sliderTimer);
  sliderTimer = setInterval(() => changeSlide(1), 5500);
}

/* ══════════════════════════════════════════════════
   NAV CON FLECHAS Y NAV ACTIVO
══════════════════════════════════════════════════ */
function initNav() {
  buildNavWithArrows();
}

function buildNavWithArrows() {
  const path  = window.location.pathname.split('/').pop() || 'index.html';
  const items = [{ id:'index', href:'index.html', icono:'fas fa-home', nombre:'Inicio' }, ...DATA.categorias];

  const oldNav = document.getElementById('mainNav');

  const wrap = document.createElement('nav');
  wrap.className = 'main-nav-wrap';
  wrap.id = 'mainNavWrap';
  wrap.setAttribute('aria-label', 'Categorías');

  const btnL = document.createElement('button');
  btnL.className = 'nav-arrow nav-arrow-l';
  btnL.innerHTML = '<i class="fas fa-chevron-left"></i>';
  btnL.setAttribute('aria-label','Scroll izquierda');
  btnL.onclick = () => scrollNav(-160);

  const inner = document.createElement('div');
  inner.className = 'nav-inner';
  inner.id = 'navInner';

  const ul = document.createElement('ul');
  ul.className = 'nav-list';
  ul.id = 'desktopNav';
  ul.innerHTML = items.map(c => {
    const href   = c.href || `${c.id}.html`;
    /* Marca activo: coincide con la URL actual */
    const active = (href === path || (path === '' && href === 'index.html')) ? 'active-nav' : '';
    return `<li><a href="${href}" class="nav-link ${active}"><i class="${c.icono}"></i> ${c.nombre}</a></li>`;
  }).join('');

  inner.appendChild(ul);

  const btnR = document.createElement('button');
  btnR.className = 'nav-arrow nav-arrow-r';
  btnR.innerHTML = '<i class="fas fa-chevron-right"></i>';
  btnR.setAttribute('aria-label','Scroll derecha');
  btnR.onclick = () => scrollNav(160);

  wrap.appendChild(btnL);
  wrap.appendChild(inner);
  wrap.appendChild(btnR);

  if (oldNav && oldNav.parentNode) {
    oldNav.parentNode.insertBefore(wrap, oldNav);
    oldNav.style.display = 'none';
  }

  initNavDrag(inner);

  /* Auto-scroll al ítem activo */
  setTimeout(() => {
    const activeLink = ul.querySelector('.active-nav');
    if (activeLink) activeLink.scrollIntoView({ inline:'center', behavior:'smooth' });
  }, 300);

  /* Mobile menu */
  const mobUl = document.getElementById('mobileNav');
  if (mobUl) {
    mobUl.innerHTML = items.map(c => {
      const href   = c.href || `${c.id}.html`;
      const active = href === path ? 'active-nav' : '';
      return `<li><a href="${href}" onclick="closeMobMenu()" class="${active}"><i class="${c.icono}"></i> ${c.nombre}</a></li>`;
    }).join('');
  }
}

function scrollNav(delta) {
  const inner = document.getElementById('navInner');
  if (inner) inner.scrollBy({ left: delta, behavior: 'smooth' });
}

function initNavDrag(nav) {
  if (!nav) return;
  let isDown = false, startX, scrollLeft;
  nav.addEventListener('mousedown', e => {
    isDown = true; nav.classList.add('grabbing');
    startX = e.pageX - nav.offsetLeft; scrollLeft = nav.scrollLeft;
  });
  nav.addEventListener('mouseleave', () => { isDown = false; nav.classList.remove('grabbing'); });
  nav.addEventListener('mouseup',    () => { isDown = false; nav.classList.remove('grabbing'); });
  nav.addEventListener('mousemove',  e => {
    if (!isDown) return;
    e.preventDefault();
    nav.scrollLeft = scrollLeft - (e.pageX - nav.offsetLeft - startX);
  });
  let touchStart;
  nav.addEventListener('touchstart', e => { touchStart = e.touches[0].pageX; scrollLeft = nav.scrollLeft; }, { passive:true });
  nav.addEventListener('touchmove',  e => {
    nav.scrollLeft = scrollLeft - (e.touches[0].pageX - touchStart);
  }, { passive:true });
}

function toggleMobMenu() {
  document.getElementById('mobMenu')?.classList.toggle('active');
  document.getElementById('mobOverlay')?.classList.toggle('active');
  document.body.style.overflow =
    document.getElementById('mobMenu')?.classList.contains('active') ? 'hidden' : '';
}
function closeMobMenu() {
  document.getElementById('mobMenu')?.classList.remove('active');
  document.getElementById('mobOverlay')?.classList.remove('active');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════════════════
   SCROLL
══════════════════════════════════════════════════ */
function initScroll() {
  window.addEventListener('scroll', () => {
    document.getElementById('header')?.classList.toggle('scrolled', window.scrollY > 60);
    document.getElementById('backTop')?.classList.toggle('visible', window.scrollY > 400);
    checkStats();
  }, { passive:true });
}
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

/* ── Stats con conteo real de productos ── */
let statsRan = false;
function initStats() {}
function checkStats() {
  if (statsRan) return;
  const el = document.querySelector('.stats-banner');
  if (!el) return;
  if (el.getBoundingClientRect().top < window.innerHeight - 100) {
    /* Sincroniza el contador de productos con datos reales */
    const prodCountEl = document.querySelector('.stat-num[data-target="30"]');
    if (prodCountEl && DATA) prodCountEl.dataset.target = DATA.productos.length;

    document.querySelectorAll('.stat-num').forEach(n => {
      const target = parseInt(n.dataset.target);
      let curr = 0; const inc = target / (2000 / 16);
      const t = setInterval(() => {
        curr += inc;
        if (curr >= target) { curr = target; clearInterval(t); }
        n.textContent = Math.floor(curr).toLocaleString();
      }, 16);
    });
    statsRan = true;
  }
}

/* ── IntersectionObserver para animación de entrada ── */
function initRevealObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  /* Observa las tarjetas actuales y futuras */
  function observeCards() {
    document.querySelectorAll('.product-card, .cat-card, .testi-card').forEach(el => {
      if (!el.classList.contains('revealed')) {
        el.classList.add('reveal-pending');
        observer.observe(el);
      }
    });
  }

  observeCards();
  /* También observa después de que se rendericen las tarjetas de categoría */
  setTimeout(observeCards, 500);
}

/* ── UTILS ── */
function consultWA(pid) {
  const prod = DATA.productos.find(p => p.id === pid);
  if (!prod) return;
  const msg = encodeURIComponent(`Hola SAEN IMPORT! 👋\nMe interesa el producto: *${prod.nombre}*\n¿Me pueden dar información sobre precio, disponibilidad y envío? Gracias! 🛍️`);
  window.open(`https://wa.me/${DATA.empresa.telefono1}?text=${msg}`, '_blank');
}
function showToast(html) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.innerHTML = html; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeSearchOverlay(); closeCart(); closeMobMenu(); closeQuickView(); closeImageLightbox();
    document.getElementById('searchResults')?.classList.remove('active');
  }
});
/* =========================
   MODO OSCURO
========================= */

function applySavedTheme() {
  const savedTheme = localStorage.getItem("saenTheme");
  const darkIcon = document.getElementById("darkIcon");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    if (darkIcon) {
      darkIcon.classList.remove("fa-moon");
      darkIcon.classList.add("fa-sun");
    }
  } else {
    document.body.classList.remove("dark-mode");

    if (darkIcon) {
      darkIcon.classList.remove("fa-sun");
      darkIcon.classList.add("fa-moon");
    }
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  const darkIcon = document.getElementById("darkIcon");

  if (isDark) {
    localStorage.setItem("saenTheme", "dark");

    if (darkIcon) {
      darkIcon.classList.remove("fa-moon");
      darkIcon.classList.add("fa-sun");
    }
  } else {
    localStorage.setItem("saenTheme", "light");

    if (darkIcon) {
      darkIcon.classList.remove("fa-sun");
      darkIcon.classList.add("fa-moon");
    }
  }
}

document.addEventListener("DOMContentLoaded", applySavedTheme);
