/* ================================================
   SAEN IMPORT — datos-accesorios.js
   Categoría: Accesorios y Joyas
   Para agregar un producto, copia un bloque
   existente, cambia el "id" (debe ser único
   en TODO el catálogo) y ajusta los campos.

   TIPOS DE PRECIO válidos:
     "Unidad"  → precio por 1 pieza
     "Mayor"   → precio x3 Unidades en adelante
     "Docena"  → precio por 12 Unidades
     "Ciento"  → precio por 100 Unidades
     "Tira"    → precio por tira (tú defines cantidad)
     "Paquete" → precio por paquete (tú defines cantidad)
     "Caja"    → precio por caja (tú defines cantidad)
     "Oferta"  → ej: label:"2x1", valor: precio especial

   BADGES válidos: "NUEVO" | "HOT" | "OFERTA" | "VIRAL" | ""
   ESTADO válidos: "disponible" | "agotado"
   ================================================ */

const PRODS_ACCESORIOS = [
  {
    "id": "JOY001",
    "categoria": "accesorios",
    "nombre": "CEPILLO DE BAMBU",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC001.PNG",
    "badge": "Destacado",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 127,
    "precios": [
      { "tipo": "Unidad", "valor": 8.00 },
      { "tipo": "Mayor", "valor": 6.80 }
    ]
  },
  {
    "id": "JOY002",
    "categoria": "accesorios",
    "nombre": "PEDRERIA PARA CABELLO HAIR CHARMS",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC002.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 84,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.90 }
    ]
  },
  {
    "id": "JOY003",
    "categoria": "accesorios",
    "nombre": "CEPILLO MP 32025",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC003.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5.0,
    "resenas": 143,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.90 }
    ]
  },
  {
    "id": "JOY004",
    "categoria": "accesorios",
    "nombre": "SET DE LIGAS MAS ESPONJA Y GANCHITOS",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC004.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 91,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.90 }
    ]
  },
  {
    "id": "JOY005",
    "categoria": "accesorios",
    "nombre": "COLET EN TUBO KD-3390",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC005.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 118,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
  {
    "id": "JOY006",
    "categoria": "accesorios",
    "nombre": "PULSERA PANDORA SE1221",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC006.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 76,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.90 }
    ]
  },
  {
    "id": "JOY007",
    "categoria": "accesorios",
    "nombre": "ARETE COLGADO SE1280",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC007.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 132,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.90 }
    ]
  },
  {
    "id": "JOY008",
    "categoria": "accesorios",
    "nombre": "PULSERA DE PERLAS ANKLET SE1448",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC008.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 97,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.90 }
    ]
  },
  {
    "id": "JOY009",
    "categoria": "accesorios",
    "nombre": "ARETE PEGADO SE1279",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC009.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 65,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Docena", "valor": 12.00 }
    ]
  },
  {
    "id": "JOY010",
    "categoria": "accesorios",
    "nombre": "SET PARA CABELLO PLANCHA MAS RIZADOR EP-9880",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC010.PNG",
    "badge": "Popular",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5.0,
    "resenas": 149,
    "precios": [
      { "tipo": "Unidad", "valor": 40.00 },
      { "tipo": "Mayor", "valor": 35.00 }
    ]
  },
  {
    "id": "JOY011",
    "categoria": "accesorios",
    "nombre": "COLET LIGA AJ420208",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC011.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 88,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Docena", "valor": 14.50 }
    ]
  },
  {
    "id": "JOY012",
    "categoria": "accesorios",
    "nombre": "COLET X2 CON DISEÑO KD-3539",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC012.PNG",
    "badge": "Oferta",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 121,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
  {
    "id": "JOY013",
    "categoria": "accesorios",
    "nombre": "COLET DE COLORES KD-3546",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC013.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 73,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "DOCENA", "valor": 14.50 }
    ]
  },
  {
    "id": "JOY014",
    "categoria": "accesorios",
    "nombre": "GANCHO NEGRO PARA CABELLO SC1020 SC1183",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC014.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 136,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
  {
    "id": "JOY015",
    "categoria": "accesorios",
    "nombre": "SET DE PEINE Y ESPEJO AKOYA KD-2815",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC015.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 104,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "JOY016",
    "categoria": "accesorios",
    "nombre": "GANCHO PIEL DE DURAZNO EP-2794",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC016.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5.0,
    "resenas": 147,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 2.00 }
    ]
  },
  {
    "id": "JOY017",
    "categoria": "accesorios",
    "nombre": "COLET DE LIGAS GEMAS KD-3256",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC017.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 82,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Docena", "valor": 3.50 }
    ]
  },
  {
    "id": "JOY018",
    "categoria": "accesorios",
    "nombre": "GANCHO PERLAS X3 GEMAS EP-2753",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC018.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 114,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
  {
    "id": "JOY019",
    "categoria": "accesorios",
    "nombre": "MINI SECADORA KD1025",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC019.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.2,
    "resenas": 69,
    "precios": [
      { "tipo": "Unidad", "valor": 10.00 },
      { "tipo": "Docena", "valor": 8.80 }
    ]
  },
  {
    "id": "JOY020",
    "categoria": "accesorios",
    "nombre": "ARETE X6 3345",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC020.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 125,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 3.90 }
    ]
  },
  {
    "id": "JOY021",
    "categoria": "accesorios",
    "nombre": "LAZO CORTO SC1896",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC021.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 95,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.80 }
    ]
  },
  {
    "id": "JOY022",
    "categoria": "accesorios",
    "nombre": "COLET CON RAYAS",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC022.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 87,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 },
      { "tipo": "Docena", "valor": 15.90 }
    ]
  },
  {
    "id": "JOY023",
    "categoria": "accesorios",
    "nombre": "GANCHO FLORES",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC023.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 95,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 3.00 }
    ]
  },
  {
    "id": "JOY024",
    "categoria": "accesorios",
    "nombre": "LIGAS DE CABELLO COLORES",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC024.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 93,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Docena", "valor": 6.00 }
    ]
  },
  {
    "id": "JOY025",
    "categoria": "accesorios",
    "nombre": "LIGAS NEGRAS EN TUBO",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC025.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 58,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Docena", "valor": 6.00 }
    ]
  },
  {
    "id": "JOY026",
    "categoria": "accesorios",
    "nombre": "ANILLO DE NIÑOS LOZAN",
    "descripcion": "",
    "imagen": "IMAGENES ACCESORIOS/IMGACC026.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5.0,
    "resenas": 64,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
];