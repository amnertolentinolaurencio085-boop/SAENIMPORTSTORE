const fs = require('fs');
const path = require('path');

const filepath = process.argv[2];
if (!filepath) {
  console.error('Uso: node rename_ids.js <ruta/a/datos-maquillaje.js>');
  process.exit(1);
}

if (!fs.existsSync(filepath)) {
  console.error('Archivo no encontrado:', filepath);
  process.exit(1);
}

const text = fs.readFileSync(filepath, 'utf8');
fs.writeFileSync(filepath + '.bak', text, 'utf8');

let i = 1;
const newText = text.replace(/("id"\s*:\s*")([^\"]*)(")/g, (_, p1, p2, p3) => {
  const id = 'MAQ' + String(i).padStart(3, '0');
  i++;
  return p1 + id + p3;
});

fs.writeFileSync(filepath, newText, 'utf8');
console.log('IDs renombrados:', i - 1);
console.log('Backup creado en:', filepath + '.bak');
