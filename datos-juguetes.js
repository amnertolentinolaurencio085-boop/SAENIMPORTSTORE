/* ================================================
   SAEN IMPORT â€” datos-juguetes.js
   CategorÃ­a: Juguetes
   Para agregar un producto, copia un bloque
   existente, cambia el "id" (debe ser Ãºnico
   en TODO el catÃ¡logo) y ajusta los campos.

   TIPOS DE PRECIO vÃ¡lidos:
     "Unidad"  â†’ precio por 1 pieza
     "Mayor"   â†’ precio x3 Unidades en adelante
     "Docena"  â†’ precio por 12 Unidades
     "Ciento"  â†’ precio por 100 Unidades
     "Tira"    â†’ precio por tira (tÃº defines cantidad)
     "Paquete" â†’ precio por paquete (tÃº defines cantidad)
     "Caja"    â†’ precio por caja (tÃº defines cantidad)
     "Oferta"  â†’ ej: label:"2x1", valor: precio especial

   BADGES vÃ¡lidos: "NUEVO" | "HOT" | "OFERTA" | "VIRAL" | ""
   ESTADO vÃ¡lidos: "disponible" | "agotado"
   ================================================ */

const PRODS_JUGUETES = [
  {
    "id": "JUG001",
    "categoria": "juguetes",
    "nombre": "BURBUJA",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG001.png",
    "badge": "Popular",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 124,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Paquete", "valor": 14.50 }
    ]
  },
  {
    "id": "JUG002",
    "categoria": "juguetes",
    "nombre": "DOG FUNNY",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG002.png",
    "badge": "Nuevo",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 98,
    "precios": [
      { "tipo": "Unidad", "valor": 19.00 },
      { "tipo": "Mayor", "valor": 16.50 }
    ]
  },
  {
    "id": "JUG003",
    "categoria": "juguetes",
    "nombre": "LEGO YUMBO",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG003.png",
    "badge": "Top Ventas",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 143,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.50 }
    ]
  },
  {
    "id": "JUG004",
    "categoria": "juguetes",
    "nombre": "FELIZ CUMPLEAÃ‘OS",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG004.png",
    "badge": "Oferta",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 67,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 2.00 },
      { "tipo": "DOCENA", "valor": 18.00 }
    ]
  },
  {
    "id": "JUG005",
    "categoria": "juguetes",
    "nombre": "MOLDES PARA PLASTILINA 202-11",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG005.png",
    "badge": "Popular",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 102,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.90 }
    ]
  },
  {
    "id": "JUG006",
    "categoria": "juguetes",
    "nombre": "MUÃ‘ECA BABY DOLL EN CAJA",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG006.png",
    "badge": "Top Ventas",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 136,
    "precios": [
      { "tipo": "Unidad", "valor":60.00 },
      { "tipo": "Mayor", "valor": 55.00 }
    ]
  },
  {
    "id": "JUG007",
    "categoria": "juguetes",
    "nombre": "CARRO CONSTRUCTOR MEZCLADORA YH118",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG007.png",
    "badge": "Nuevo",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 89,
    "precios": [
      { "tipo": "Unidad", "valor": 15.00 },
      { "tipo": "Mayor", "valor": 12.00 }
    ]
  },
  {
    "id": "JUG008",
    "categoria": "juguetes",
    "nombre": "CARRON A METAL DEPORTIVO",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG008.png",
    "badge": "Popular",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 111,
    "precios": [
      { "tipo": "Unidad", "valor": 11.00 },
      { "tipo": "Mayor", "valor": 9.50 }
    ]
  },
  {
    "id": "JUG009",
    "categoria": "juguetes",
    "nombre": "CAMIONETA METAL BOTA HUMO",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG009.png",
    "badge": "Oferta",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 72,
    "precios": [
      { "tipo": "Unidad", "valor": 15.50 },
      { "tipo": "Mayor", "valor": 12.90 }
    ]
  },
  {
    "id": "JUG010",
    "categoria": "juguetes",
    "nombre": "DECORACIÃ“N FELIZ CUMPLEAÃ‘OS",
    "descripcion": "DISPONIBLE EN TODOS LOS COLORES Y DISEÃ‘OS",
    "imagen": "IMAGENES JUGUETES/IMGJUG010.png",
    "badge": "Nuevo",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.2,
    "resenas": 58,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Mayor", "valor": 0.80 }
    ]
  },
  {
    "id": "JUG011",
    "categoria": "juguetes",
    "nombre": "HELICOPTERO A CONTROL REMOTO JYX",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG011.png",
    "badge": "Top Ventas",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5.0,
    "resenas": 149,
    "precios": [
      { "tipo": "Unidad", "valor": 20.00 },
      { "tipo": "Mayor", "valor": 16.90 }
    ]
  },
  {
    "id": "JUG012",
    "categoria": "juguetes",
    "nombre": "JUEGO DE MESA CHESS GAMES",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG012.png",
    "badge": "Popular",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 118,
    "precios": [
      { "tipo": "Unidad", "valor": 12.00 },
      { "tipo": "Mayor", "valor": 9.90 }
    ]
  },
  {
    "id": "JUG013",
    "categoria": "juguetes",
    "nombre": "TUN TUN VOLADOR",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG013.png",
    "badge": "Nuevo",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 94,
    "precios": [
      { "tipo": "Unidad", "valor": 15.00 },
      { "tipo": "Mayor", "valor": 12.50 }
    ]
  },
  {
    "id": "JUG014",
    "categoria": "juguetes",
    "nombre": "CORTINAS DE CUMPLEAÃ‘OS",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG014.png",
    "badge": "Oferta",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 63,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
  {
    "id": "JUG015",
    "categoria": "juguetes",
    "nombre": "VELA X3",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG015.png",
    "badge": "Popular",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 87,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.60 }
    ]
  },
  {
    "id": "JUG016",
    "categoria": "juguetes",
    "nombre": "PULPO SQUID",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG016.png",
    "badge": "Top Ventas",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 141,
    "precios": [
      { "tipo": "Unidad", "valor": 30.00 },
      { "tipo": "Mayor", "valor": 25.00 }
    ]
  },
  {
    "id": "JUG017",
    "categoria": "juguetes",
    "nombre": "HUEVO SORPRESA TRALALA",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG017.png",
    "badge": "Popular",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 122,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 4.50 }
    ]
  },
  {
    "id": "JUG018",
    "categoria": "juguetes",
    "nombre": "VARITA DE PRINCESA",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG018.png",
    "badge": "Nuevo",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 96,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 },
      { "tipo": "DOCENA", "valor": 12.00 }
    ]
  },
  {
    "id": "JUG019",
    "categoria": "juguetes",
    "nombre": "CHOCOLATE CAMISA 80GR",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG019.png",
    "badge": "Oferta",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 71,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.50 }
    ]
  },
  {
    "id": "JUG020",
    "categoria": "juguetes",
    "nombre": "CHOCOLATE PERFUME 40GR",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG020.png",
    "badge": "Popular",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 117,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.90 }
    ]
  },
  {
    "id": "JUG021",
    "categoria": "juguetes",
    "nombre": "CHOCOLATE CORAZÃ“N 80GR",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG021.png",
    "badge": "Top Ventas",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 145,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00 },
      { "tipo": "Mayor", "valor": 5.20 }
    ]
  },
  {
    "id": "JUG022",
    "categoria": "juguetes",
    "nombre": "CHOCOLATE GRADUACIÃ“N 100GR",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG022.png",
    "badge": "Nuevo",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 83,
    "precios": [
      { "tipo": "Unidad", "valor": 9.50 },
      { "tipo": "Mayor", "valor": 7.90 }
    ]
  },
  {
    "id": "JUG023",
    "categoria": "juguetes",
    "nombre": "BURRO PARA MONTAR",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG023.png",
    "badge": "Popular",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 126,
    "precios": [
      { "tipo": "Unidad", "valor": 20.00 },
      { "tipo": "Mayor", "valor": 17.50 }
    ]
  },
  {
    "id": "JUG024",
    "categoria": "juguetes",
    "nombre": "CHOCOLATE CARTERA 100GR",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG024.png",
    "badge": "Oferta",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 68,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.50 }
    ]
  },
  {
    "id": "JUG025",
    "categoria": "juguetes",
    "nombre": "CHOCOLATE CAJA INGLESA 100GR",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG025.png",
    "badge": "Top Ventas",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 139,
    "precios": [
      { "tipo": "Unidad", "valor": 9.50 },
      { "tipo": "Mayor", "valor": 7.90 }
    ]
  },
  {
    "id": "JUG026",
    "categoria": "juguetes",
    "nombre": "INFLADOR DE GLOBO",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG026.png",
    "badge": "Nuevo",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.2,
    "resenas": 55,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
  {
    "id": "JUG027",
    "categoria": "juguetes",
    "nombre": "HUEVO DINOSARIO",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG027.png",
    "badge": "Popular",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 92,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.30 }
    ]
  },
  {
    "id": "JUG028",
    "categoria": "juguetes",
    "nombre": "CHOCOLATE VESTIDO 80GR",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG028.png",
    "badge": "Oferta",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 76,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.50 }
    ]
  },
  {
    "id": "JUG029",
    "categoria": "juguetes",
    "nombre": "CHOCOLATE CAJA GRANDE 150GR",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG029.png",
    "badge": "Top Ventas",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5.0,
    "resenas": 150,
    "precios": [
      { "tipo": "Unidad", "valor": 14.50 },
      { "tipo": "Mayor", "valor": 12.50 }
    ]
  },
  {
    "id": "JUG030",
    "categoria": "juguetes",
    "nombre": "CHOCOLATE CAJA MEDIANA 80GR",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG030.png",
    "badge": "Popular",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 113,
    "precios": [
      { "tipo": "Unidad", "valor": 7.00 },
      { "tipo": "Mayor", "valor": 5.90 }
    ]
  },
  {
    "id": "JUG031",
    "categoria": "juguetes",
    "nombre": "TRAILER DE METAL",
    "descripcion": "",
    "imagen": "IMAGENES JUGUETES/IMGJUG031.png",
    "badge": "Nuevo",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 107,
    "precios": [
      { "tipo": "Unidad", "valor": 16.00 },
      { "tipo": "Mayor", "valor": 13.90 }
    ]
  }
];

