(function () {
  const cfg = window.SAEN_SUPABASE || {};
  const configured = /^https:\/\/.+\.supabase\.co$/.test(cfg.url || '') && (cfg.anonKey || '').length > 40;
  const client = configured && window.supabase ? window.supabase.createClient(cfg.url, cfg.anonKey) : null;

  function normalize(row) {
    const physicalStock = Number(row.stock || 0);
    const reservedStock = Number(row.stock_reservado || 0);
    return {
      id: row.sku,
      categoria: row.categoria,
      nombre: row.nombre,
      descripcion: row.descripcion || '',
      imagen: row.imagen_principal || '',
      galeria: row.galeria || [],
      badge: row.badge || '',
      estado: row.estado || 'disponible',
      descuento: Number(row.descuento || 0),
      estrellas: Number(row.estrellas || 0),
      resenas: Number(row.resenas || 0),
      stock: Math.max(0, physicalStock - reservedStock),
      stock_fisico: physicalStock,
      stock_reservado: reservedStock,
      unidad_medida: row.unidad_medida || 'unidad',
      variantes: row.variantes || [],
      precios: row.precios || []
    };
  }

  window.SaenPublicData = {
    configured,
    async merge(localData) {
      if (!client) return localData;
      try {
        const { data, error } = await client.from('catalogo_productos').select('*').eq('visible', true).neq('estado', 'oculto');
        if (error) throw error;
        const remote = (data || []).map(normalize);
        const bySku = new Map(localData.productos.map(p => [p.id, p]));
        remote.forEach(p => bySku.set(p.id, p));
        return { ...localData, productos: [...bySku.values()].filter(p => p.estado !== 'oculto') };
      } catch (error) {
        console.warn('Supabase no disponible; se usan los datos locales.', error.message);
        return localData;
      }
    }
  };
})();
