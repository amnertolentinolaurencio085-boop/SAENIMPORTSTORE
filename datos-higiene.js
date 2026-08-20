/* ================================================
   SAEN IMPORT — datos-higiene.js
   Categoría: Higiene y Limpieza
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

const PRODS_HIGIENE = [
  {
    "id": "HIG001",
    "categoria": "higiene",
    "nombre": "CEPILLO DE NIÑO X3 CH8035",
    "descripcion": "",
    "imagen": "IMAGENES HIGIENE/IMGHIG001.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 100,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.90 }
    ]
  },
  {
    "id": "HIG002",
    "categoria": "higiene",
    "nombre": "CEPILLO UTIL PREMIER CLEAN",
    "descripcion": "",
    "imagen": "IMAGENES HIGIENE/IMGHIG002.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 100,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Tira x12", "valor": 16.00 }
    ]
  },
  {
    "id": "HIG003",
    "categoria": "higiene",
    "nombre": "PAPEL TOALLA NOVA",
    "descripcion": "",
    "imagen": "IMAGENES HIGIENE/IMGHIG003.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 100,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 },
      { "tipo": "Paquete", "valor": 25.00 }
    ]
  },
  {
    "id": "HIG004",
    "categoria": "higiene",
    "nombre": "JABONERA TACO AJ312084",
    "descripcion": "",
    "imagen": "IMAGENES HIGIENE/IMGHIG004.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 100,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 2.00 }
    ]
  },
  {
    "id": "HIG005",
    "categoria": "higiene",
    "nombre": "ALCOHOL PURO 96° 120ML",
    "descripcion": "",
    "imagen": "IMAGENES HIGIENE/IMGHIG005.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 100,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Docena", "valor": 11.50 }
    ]
  },
  {
    "id": "HIG006",
    "categoria": "higiene",
    "nombre": "JABON VENEZIA FRUTAS",
    "descripcion": "",
    "imagen": "IMAGENES HIGIENE/IMGHIG006.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 100,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Mayor", "valor": 1.00 }
    ]
  },
  {
    "id": "HIG007",
    "categoria": "higiene",
    "nombre": "JABON LIQUIDO ALKO",
    "descripcion": "",
    "imagen": "IMAGENES HIGIENE/IMGHIG007.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 100,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 3.00 },
      { "tipo": "Docena", "valor": 35.00}
    ]
  },
  {
    "id": "HIG008",
    "categoria": "higiene",
    "nombre": "MONDADIENTES MAS HISOPO AJ312846",
    "descripcion": "",
    "imagen": "IMAGENES HIGIENE/IMGHIG008.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 100,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "HIG009",
    "categoria": "higiene",
    "nombre": "MONDADIENTES GATITO AJ312845",
    "descripcion": "",
    "imagen": "IMAGENES HIGIENE/IMGHIG009.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 100,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "HIG010",
    "categoria": "higiene",
    "nombre": "ESTUCHE MONDADIENTES AJ312367",
    "descripcion": "",
    "imagen": "IMAGENES HIGIENE/IMGHIG010.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 100,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 2.00 }
    ]
  },
  {
    "id": "HIG011",
    "categoria": "higiene",
    "nombre": "LEJIA CONCENTRADA 1LT",
    "descripcion": "",
    "imagen": "IMAGENES HIGIENE/IMGHIG011.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 100,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "HIG012",
    "categoria": "higiene",
    "nombre": "JABON VENEZIA FRUTAS",
    "descripcion": "",
    "imagen": "IMAGENES HIGIENE/IMGHIG012.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 100,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Mayor", "valor": 1.00 }
    ]
  },
  {
    "id": "HIG013",
    "categoria": "higiene",
    "nombre": "ALMHADILLA DE HINODORO",
    "descripcion": "",
    "imagen": "IMAGENES HIGIENE/IMGHIG013.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 100,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
]