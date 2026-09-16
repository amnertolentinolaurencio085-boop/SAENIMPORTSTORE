# Configurar el administrador de SAEN IMPORT

La tienda sigue funcionando con `datos-*.js` aunque Supabase todavía no esté configurado. Cuando Supabase está activo, sus productos reemplazan por SKU a los productos locales y los productos nuevos se agregan al catálogo.

## 1. Crear y asegurar Supabase

1. Crea un proyecto en Supabase.
2. Abre **SQL Editor**, pega todo `supabase/schema.sql` y ejecútalo.
3. En **Authentication > Users**, crea el usuario administrador con correo y contraseña.
4. Copia el UUID de ese usuario y ejecuta en SQL Editor (reemplazando el valor):

```sql
insert into public.admin_users (user_id)
values ('UUID-DEL-USUARIO');
```

No agregues cualquier usuario registrado a `admin_users`: esta tabla es la autorización real del panel.

## 2. Conectar el sitio

En **Project Settings > API** copia **Project URL** y la clave pública **anon/publishable**. Colócalas en `supabase-config.js`:

```js
window.SAEN_SUPABASE = {
  url: 'https://TU-PROYECTO.supabase.co',
  anonKey: 'TU-CLAVE-PUBLICA-ANON',
  bucket: 'productos'
};
```

La clave `anon` es pública por diseño. Nunca copies `service_role`, contraseñas ni secretos al repositorio. Las políticas RLS de `schema.sql` impiden que visitantes escriban o vean productos ocultos.

## 3. Probar antes de publicar

Sirve la carpeta mediante un servidor local (no abras el HTML con doble clic), entra a `/admin-login.html`, inicia sesión y crea un producto de prueba. Comprueba que aparece en su página de categoría, que editar funciona y que **Ocultar** lo retira de la tienda sin borrarlo. Antes de conectar Supabase puedes revisar la interfaz, sin capacidad de guardar, en `/admin.html?demo=1`.

## 4. Migrar los productos existentes (opcional y reversible)

La migración usa `upsert` por SKU y no borra `datos-*.js`.

1. Inicia sesión en `admin.html`.
2. Abre `/migrar-productos.html`, revisa la cantidad detectada y pulsa **Migrar a Supabase** una sola vez.
4. Verifica cantidades e imágenes en Supabase y en la tienda.
5. Mantén los archivos locales durante la transición. Los registros remotos reemplazan los locales que tengan el mismo SKU.

La migración aplica una reparación conservadora de mojibake (`MUÃ‘ECA` → `MUÑECA`) solo cuando la cadena puede recodificarse limpiamente.

## 5. GitHub Pages

Haz commit y push de los archivos. GitHub Pages puede servir este panel porque toda la comunicación se hace directamente con Supabase usando la clave pública y RLS. Añade la URL publicada a **Authentication > URL Configuration > Site URL / Redirect URLs** si luego habilitas recuperación de contraseña.

## 6. Pedidos y control de inventario

Después de actualizar el proyecto, vuelve a ejecutar completo `supabase/schema.sql` en **SQL Editor**. El script es idempotente y añadirá las tablas `pedidos`, `pedido_items` y las funciones necesarias sin borrar productos.

El flujo queda así:

1. El cliente completa nombre y teléfono en **Mi Pedido**.
2. Al pulsar **Enviar pedido por WhatsApp**, primero se registra el pedido con estado `nuevo` y después se abre WhatsApp con su código.
3. En el panel, abre **Pedidos** y cambia el estado a `confirmado` cuando la venta sea aceptada.
4. Supabase descuenta el stock una sola vez y marca como agotado cualquier producto que llegue a cero.
5. `enviado` y `entregado` no vuelven a descontar. Si un pedido confirmado se marca `cancelado`, el stock se devuelve automáticamente.

No cambies manualmente `stock_aplicado`: esa protección evita descuentos duplicados.
