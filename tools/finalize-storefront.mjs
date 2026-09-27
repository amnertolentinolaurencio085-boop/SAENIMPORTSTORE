import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const pages=['accesorios','cuidado','higiene','mochilas','novedades','cocina','juguetes','escolar','maquillaje','perfumes'];
for(const page of pages){
  const file=path.join(root,`${page}.html`);
  let html=fs.readFileSync(file,'utf8');
  html=html.replace(/<div class="preview-ribbon">[\s\S]*?<\/div>\s*/,'');
  html=html.replace(/styles\.css\?v=[^"']+/g,'styles.css?v=commerce2');
  html=html.replace(/storefront-preview\.css\?v=[^"']+/g,'storefront-preview.css?v=commerce2');
  html=html.replace(/storefront-concept\.css\?v=[^"']+/g,'storefront-concept.css?v=commerce2');
  html=html.replace(/app\.js\?v=[^"']+/g,'app.js?v=commerce2');
  if(!html.includes('rel="canonical"')){
    const title=(html.match(/<title>(.*?)<\/title>/i)||[])[1]||'SAEN IMPORT';
    const seo=`  <link rel="canonical" href="https://saenimport.com/${page}.html"/>\n  <meta property="og:type" content="website"/><meta property="og:title" content="${title}"/><meta property="og:url" content="https://saenimport.com/${page}.html"/><meta property="og:image" content="https://saenimport.com/saen-logo-admin.png"/>\n  <meta name="theme-color" content="#03152f"/>\n`;
    html=html.replace(/(<meta name="description"[^>]*>\s*)/i,`$1\n${seo}`);
  }
  fs.writeFileSync(file,html,'utf8');
}
console.log(`finalized=${pages.length}`);
