/* ================================================
   SAEN IMPORT â€” datos-novedades.js
   CategorÃ­a: Novedades
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

const PRODS_NOVEDADES = [
  {
    "id": "NOV001",
    "categoria": "novedades",
    "nombre": "ZAPATILLA BLANCA PARA DAMA",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV001.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 127,
    "precios": [
      { "tipo": "Unidad", "valor": 36.00 },
      { "tipo": "Mayor", "valor": 32.00 }
    ]
  },
  {
    "id": "NOV002",
    "categoria": "novedades",
    "nombre": "PAPEL TIZZU",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV002.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 84,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Paquete x10", "valor": 11.90 }
    ]
  },
  {
    "id": "NOV003",
    "categoria": "novedades",
    "nombre": "SOPORTE DE CELULAR IMANTADO GF-5724",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV003.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 143,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 4.80 }
    ]
  },
  {
    "id": "NOV004",
    "categoria": "novedades",
    "nombre": "LLAVERO DISNEY GRANDE",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV004.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 72,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 4.80 }
    ]
  },
  {
    "id": "NOV005",
    "categoria": "novedades",
    "nombre": "LANZA CONFETI CHICO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV005.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 111,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 2.00 }
    ]
  },
  {
    "id": "NOV006",
    "categoria": "novedades",
    "nombre": "LANZA CONFETI GRANDE",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV006.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 136,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.90 }
    ]
  },
  {
    "id": "NOV007",
    "categoria": "novedades",
    "nombre": "PAÃ‘O VIRUTEX",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV007.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 98,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Paquete x20", "valor": 13.00 }
    ]
  },
  {
    "id": "NOV008",
    "categoria": "novedades",
    "nombre": "ESCOBILLA CON AZA",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV008.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 65,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.90 }
    ]
  },
  {
    "id": "NOV009",
    "categoria": "novedades",
    "nombre": "ESCOBILLA SIN AZA",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV009.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 120,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
  {
    "id": "NOV010",
    "categoria": "novedades",
    "nombre": "PASTA DENTAL CARBON ACTIVADO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV010.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 89,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 4.90 }
    ]
  },
  {
    "id": "NOV011",
    "categoria": "novedades",
    "nombre": "CUADRO DE PAISAJE GRANDE 380037",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV011.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 108,
    "precios": [
      { "tipo": "Unidad", "valor": 28.00 },
      { "tipo": "Mayor", "valor": 24.00 }
    ]
  },
  {
    "id": "NOV012",
    "categoria": "novedades",
    "nombre": "ESPEJO CUADRO FLEXIBLE 220194",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV012.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.2,
    "resenas": 58,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "NOV013",
    "categoria": "novedades",
    "nombre": "PARAGUA KAWAI 2501739",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV013.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 149,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.50 }
    ]
  },
  {
    "id": "NOV014",
    "categoria": "novedades",
    "nombre": "DISPENSADOR DE JABON DE VODRIO 110214 01102",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV014.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.1,
    "resenas": 53,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "NOV015",
    "categoria": "novedades",
    "nombre": "AUDIFONO OREJITAS 150183",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV015.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 96,
    "precios": [
      { "tipo": "Unidad", "valor": 15.00 },
      { "tipo": "Mayor", "valor": 12.90 }
    ]
  },
  {
    "id": "NOV016",
    "categoria": "novedades",
    "nombre": "SOPORTE DE CELULAR CAR 513098",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV016.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 132,
    "precios": [
      { "tipo": "Unidad", "valor":7.00 },
      { "tipo": "Mayor", "valor": 6.00 }
    ]
  },
  {
    "id": "NOV017",
    "categoria": "novedades",
    "nombre": "SOPORTE DE CELULAR HOLDER CZ-3142W",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV017.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 77,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00 },
      { "tipo": "Mayor", "valor": 5.50 }
    ]
  },
  {
    "id": "NOV018",
    "categoria": "novedades",
    "nombre": "TOMATODO SMILE SPORTS 400359",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV018.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 114,
    "precios": [
      { "tipo": "Unidad", "valor": 8.00 },
      { "tipo": "Mayor", "valor": 6.90 }
    ]
  },
  {
    "id": "NOV019",
    "categoria": "novedades",
    "nombre": "COLGADOR DE ROPA DE MADERA 190127",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV019.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 81,
    "precios": [
      { "tipo": "Unidad", "valor": 8.00 },
      { "tipo": "Mayor", "valor": 7.00 }
    ]
  },
  {
    "id": "NOV020",
    "categoria": "novedades",
    "nombre": "PERCHERO X3 STICK HOOK",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV020.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 122,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
  {
    "id": "NOV021",
    "categoria": "novedades",
    "nombre": "PARLANTE CON MICROFONO CHICO Z051480",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV021.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 118,
    "precios": [
      { "tipo": "Unidad", "valor": 24.00 },
      { "tipo": "Mayor", "valor": 21.00 }
    ]
  },
  {
    "id": "NOV022",
    "categoria": "novedades",
    "nombre": "SOPORTE DE CELULAR WALL K4",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV022.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 145,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "NOV023",
    "categoria": "novedades",
    "nombre": "INFLADOR DE CARRO 150094",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV023.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 132,
    "precios": [
      { "tipo": "Unidad", "valor": 19.00 },
      { "tipo": "Mayor", "valor": 16.50 }
    ]
  },
  {
    "id": "NOV024",
    "categoria": "novedades",
    "nombre": "BOLSOS PELUCHE GF-1326",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV024.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 101,
    "precios": [
      { "tipo": "Unidad", "valor": 8.00 },
      { "tipo": "Mayor", "valor": 6.80 }
    ]
  },
  {
    "id": "NOV025",
    "categoria": "novedades",
    "nombre": "VASO STANLEY 1200ML LEFTIES",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV025.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 88,
    "precios": [
      { "tipo": "Unidad", "valor": 17.70 },
      { "tipo": "Mayor", "valor": 14.50 }
    ]
  },
  {
    "id": "NOV026",
    "categoria": "novedades",
    "nombre": "AGUJA EN DISCO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV026.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 79,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Caja x24", "valor": 10.50 }
    ]
  },
  {
    "id": "NOV027",
    "categoria": "novedades",
    "nombre": "SILBATO NEGRO GRANDE PITO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV027.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 74,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Docena", "valor": 9.50 }
    ]
  },
  {
    "id": "NOV028",
    "categoria": "novedades",
    "nombre": "SET DE VASOS SPIRIX 2609-G",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV028.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 126,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Caja x6", "valor": 12.00 }
    ]
  },
  {
    "id": "NOV029",
    "categoria": "novedades",
    "nombre": "IMPERDIBLE DORADO CHICO CAJA 1728 ",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV029.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 117,
    "precios": [
      { "tipo": "Unidad", "valor": 11.00 }
    ]
  },
  {
    "id": "NOV030",
    "categoria": "novedades",
    "nombre": "IMPERDIBLE PLATEADO GRANDE CAJA 864 U",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV030.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.2,
    "resenas": 61,
    "precios": [
      { "tipo": "Unidad", "valor": 16.50 }
    ]
  },
  {
    "id": "NOV031",
    "categoria": "novedades",
    "nombre": "LLAVERO CORAZON PELUCHE",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV031.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 103,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "NOV032",
    "categoria": "novedades",
    "nombre": "INFLADOR DE GLOBOS DIALE INFP1",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV032.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.1,
    "resenas": 57,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.80 }
    ]
  },
  {
    "id": "NOV033",
    "categoria": "novedades",
    "nombre": "TOMATODO GORRITA Z-10769",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV033.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 69,
    "precios": [
      { "tipo": "Unidad", "valor": 6.50 },
      { "tipo": "Mayor", "valor": 5.80 }
    ]
  },
  {
    "id": "NOV034",
    "categoria": "novedades",
    "nombre": "TOMATODO ECONOMICO B-50632",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV034.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.0,
    "resenas": 52,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "NOV035",
    "categoria": "novedades",
    "nombre": "TOMATODO KAWAI TREND CUP GP-50718",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV035.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 76,
    "precios": [
      { "tipo": "Unidad", "valor": 7.00 },
      { "tipo": "Mayor", "valor": 5.90 }
    ]
  },
  {
    "id": "NOV036",
    "categoria": "novedades",
    "nombre": "RELOJ DE NIÃ‘O EN ESTUCHE 08TM-2316",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV036.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 112,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.80 }
    ]
  },
  {
    "id": "NOV037",
    "categoria": "novedades",
    "nombre": "TRIPIE DE LUCES LED 08TX-2859",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV037.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 91,
    "precios": [
      { "tipo": "Unidad", "valor": 10.00 },
      { "tipo": "Mayor", "valor": 8.00 }
    ]
  },
  {
    "id": "NOV038",
    "categoria": "novedades",
    "nombre": "BILLETERA DAMA GRANDE CON BOTON",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV038.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.2,
    "resenas": 63,
    "precios": [
      { "tipo": "Unidad", "valor": 9.00 },
      { "tipo": "Mayor", "valor": 7.90 }
    ]
  },
  {
    "id": "NOV039",
    "categoria": "novedades",
    "nombre": "PELUCHE PATO 133-1",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV039.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 87,
    "precios": [
      { "tipo": "Unidad", "valor": 7.00 },
      { "tipo": "Mayor", "valor": 6.00 }
    ]
  },
  {
    "id": "NOV040",
    "categoria": "novedades",
    "nombre": "MORRAL JINGPIN 140388",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV040.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 71,
    "precios": [
      { "tipo": "Unidad", "valor": 7.00 },
      { "tipo": "Mayor", "valor": 5.90 }
    ]
  },
  {
    "id": "NOV041",
    "categoria": "novedades",
    "nombre": "CESTA DE PLASTICO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV041.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 118,
    "precios": [
      { "tipo": "Unidad", "valor": 11.50},
      { "tipo": "Mayor", "valor": 9.90 }
    ]
  },
  {
    "id": "NOV042",
    "categoria": "novedades",
    "nombre": "GORRA DE SOL 250133",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV042.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 96,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.90 }
    ]
  },
  {
    "id": "NOV043",
    "categoria": "novedades",
    "nombre": "PARLANTE SPEAKER MS 3634",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV043.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 133,
    "precios": [
      { "tipo": "Unidad", "valor": 30.00 },
      { "tipo": "Mayor", "valor": 26.00 }
    ]
  },
  {
    "id": "NOV044",
    "categoria": "novedades",
    "nombre": "PARLANTE SPEAKER MS-3628BT",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV044.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 81,
    "precios": [
      { "tipo": "Unidad", "valor": 40.00 },
      { "tipo": "Mayor", "valor": 36.00 }
    ]
  },
  {
    "id": "NOV045",
    "categoria": "novedades",
    "nombre": "CABLE USB-C CARGA RAPIDA TCD0703",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV045.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 67,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "NOV046",
    "categoria": "novedades",
    "nombre": "PORTA FOTO 380025",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV046.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 142,
    "precios": [
      { "tipo": "Unidad", "valor":3.50 },
      { "tipo": "Mayor", "valor": 2.80 }
    ]
  },
  {
    "id": "NOV047",
    "categoria": "novedades",
    "nombre": "ESCOBA LORITO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV047.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 73,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.50 }
    ]
  },
  {
    "id": "NOV048",
    "categoria": "novedades",
    "nombre": "HERVIDORA HOGALIA",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV048.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 124,
    "precios": [
      { "tipo": "Unidad", "valor": 17.00 },
      { "tipo": "Mayor", "valor": 14.00 }
    ]
  },
  {
    "id": "NOV049",
    "categoria": "novedades",
    "nombre": "ENCENDEDOR ELECTRICO TIPO C 150093",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV049.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 89,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 4.80 }
    ]
  },
  {
    "id": "NOV050",
    "categoria": "novedades",
    "nombre": "INFLADOR DE GLOBO ELECTRICO C73005",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV050.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 104,
    "precios": [
      { "tipo": "Unidad", "valor": 35.00 },
      { "tipo": "Mayor", "valor": 30.00 }
    ]
  },
  {
    "id": "NOV051",
    "categoria": "novedades",
    "nombre": "EXPRIMIDOR DE NARANNJA ",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV051.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 121,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "NOV052",
    "categoria": "novedades",
    "nombre": "HISOPO COTTON CF1094",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV052.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 78,
    "precios": [
      { "tipo": "Unidad", "valor": 1.80 },
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
  {
    "id": "NOV053",
    "categoria": "novedades",
    "nombre": "PELUCHE TIBURON ZC1167",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV053.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 145,
    "precios": [
      { "tipo": "Unidad", "valor": 11.00 },
      { "tipo": "Mayor", "valor": 9.50 }
    ]
  },
  {
    "id": "NOV054",
    "categoria": "novedades",
    "nombre": "MINI PARLANTE PORTATIL",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV054.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 112,
    "precios": [
      { "tipo": "Unidad", "valor": 15.00 },
      { "tipo": "Mayor", "valor": 13.90 }
    ]
  },
  {
    "id": "NOV055",
    "categoria": "novedades",
    "nombre": "VENTILADOR DE CARRO 06TB-2415",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV055.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 137,
    "precios": [
      { "tipo": "Unidad", "valor": 21.00 },
      { "tipo": "Mayor", "valor": 18.50 }
    ]
  },
  {
    "id": "NOV056",
    "categoria": "novedades",
    "nombre": "REJILLA DE FLORES MD-56571",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV056.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 98,
    "precios": [
      { "tipo": "Unidad", "valor": 28.00 },
      { "tipo": "Mayor", "valor": 24.00 }
    ]
  },
  {
    "id": "NOV057",
    "categoria": "novedades",
    "nombre": "SET DE TERMO HOGALIA MAS TRES TAZAS GF-3",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV057.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 69,
    "precios": [
      { "tipo": "Unidad", "valor": 10.00 },
      { "tipo": "Mayor", "valor": 8.90 }
    ]
  },
  {
    "id": "NOV058",
    "categoria": "novedades",
    "nombre": "UÃ‘AS EN ESTUCHE DISEÃ‘O 3D",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV058.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 148,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.90 }
    ]
  },
  {
    "id": "NOV059",
    "categoria": "novedades",
    "nombre": "UÃ‘AS EN ESTUCHE DISEÃ‘O 3D",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV059.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 103,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.90 }
    ]
  },
  {
    "id": "NOV060",
    "categoria": "novedades",
    "nombre": "UÃ‘AS EN ESTUCHE DISEÃ‘O 3D",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV060.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 126,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.90 }
    ]
  },
  {
    "id": "NOV061",
    "categoria": "novedades",
    "nombre": "TOMATODO MULTICOLORO KD-3335",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV061.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 84,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.80 }
    ]
  },
  {
    "id": "NOV062",
    "categoria": "novedades",
    "nombre": "ALFOMBRA GENERICO P1218",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV062.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 117,
    "precios": [
      { "tipo": "Unidad", "valor":13.00 },
      { "tipo": "Mayor", "valor":11.50 }
    ]
  },
  {
    "id": "NOV063",
    "categoria": "novedades",
    "nombre": "CARGADOR TURBO POWER TCC0622",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV063.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.2,
    "resenas": 55,
    "precios": [
      { "tipo": "Unidad", "valor": 17.50 },
      { "tipo": "Mayor", "valor": 15.00 }
    ]
  },
  {
    "id": "NOV064",
    "categoria": "novedades",
    "nombre": "CABLE CC CARGA RAPIDA 6A TCD0936",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV064.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 141,
    "precios": [
      { "tipo": "Unidad", "valor": 6.50 },
      { "tipo": "Mayor", "valor": 5.50 }
    ]
  },
  {
    "id": "NOV065",
    "categoria": "novedades",
    "nombre": "AUDIFONO F29 L29",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV065.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 91,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.80 }
    ]
  },
  {
    "id": "NOV066",
    "categoria": "novedades",
    "nombre": "AUDIFONO M10",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV066.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 129,
    "precios": [
      { "tipo": "Unidad", "valor": 11.00 },
      { "tipo": "Mayor", "valor": 9.90 }
    ]
  },
  {
    "id": "NOV067",
    "categoria": "novedades",
    "nombre": "AUDIFONO E7S",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV067.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 108,
    "precios": [
      { "tipo": "Unidad", "valor": 12.00 },
      { "tipo": "Mayor", "valor": 10.50 }
    ]
  },
  {
    "id": "NOV068",
    "categoria": "novedades",
    "nombre": "AUDIFONO F9-5",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV068.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 82,
    "precios": [
      { "tipo": "Unidad", "valor": 11.50 },
      { "tipo": "Mayor", "valor": 9.90 }
    ]
  },
  {
    "id": "NOV069",
    "categoria": "novedades",
    "nombre": "AUDIFONO M88 PLUS",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV069.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 134,
    "precios": [
      { "tipo": "Unidad", "valor": 18.00 },
      { "tipo": "Mayor", "valor": 15.80 }
    ]
  },
  {
    "id": "NOV070",
    "categoria": "novedades",
    "nombre": "AUDIFONO M28",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV070.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 150,
    "precios": [
      { "tipo": "Unidad", "valor": 15.00 },
      { "tipo": "Mayor", "valor": 13.00 }
    ]
  },
  {
    "id": "NOV071",
    "categoria": "novedades",
    "nombre": "AUDIFONO M25",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV071.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 72,
    "precios": [
      { "tipo": "Unidad", "valor": 15.00 },
      { "tipo": "Mayor", "valor": 13.00 }
    ]
  },
  {
    "id": "NOV072",
    "categoria": "novedades",
    "nombre": "AUDIFONO M90 PRO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV072.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 111,
    "precios": [
      { "tipo": "Unidad", "valor": 13.50 },
      { "tipo": "Mayor", "valor": 11.80 }
    ]
  },
  {
    "id": "NOV073",
    "categoria": "novedades",
    "nombre": "AUDIFONO M19",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV073.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 95,
    "precios": [
      { "tipo": "Unidad", "valor": 13.50 },
      { "tipo": "Mayor", "valor": 11.90 }
    ]
  },
  {
    "id": "NOV074",
    "categoria": "novedades",
    "nombre": "SANDALIA TIBURON GP46",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV074.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 122,
    "precios": [
      { "tipo": "Unidad", "valor": 11.00 },
      { "tipo": "Mayor", "valor": 9.00 }
    ]
  },
  {
    "id": "NOV075",
    "categoria": "novedades",
    "nombre": "SET DE TE COFFEE GP-124",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV075.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 130,
    "precios": [
      { "tipo": "Unidad", "valor":26.00 },
      { "tipo": "Mayor", "valor": 23.50 }
    ]
  },
  {
    "id": "NOV076",
    "categoria": "novedades",
    "nombre": "PALIGLOBO DELGADO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV076.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.1,
    "resenas": 51,
    "precios": [
      { "tipo": "Unidad X3", "valor": 1.00 },
      { "tipo": "Docena", "valor": 3.00 },
      { "tipo": "Ciento", "valor": 6.00 }
    ]
  },
  {
    "id": "NOV077",
    "categoria": "novedades",
    "nombre": "ALCOHOL PURO 96 120ML",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV077.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.2,
    "resenas": 54,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Docena", "valor": 11.50 }
    ]
  },
  {
    "id": "NOV078",
    "categoria": "novedades",
    "nombre": "ALGODON HIDROFILO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV078.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 57,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Docena", "valor": 11.90 }
    ]
  },
  {
    "id": "NOV079",
    "categoria": "novedades",
    "nombre": "ALUMINIO DE 5 METROS",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV079.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 60,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "NOV080",
    "categoria": "novedades",
    "nombre": "ALUMINIO DE 8 METROS",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV080.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 63,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.90 }
    ]
  },
  {
    "id": "NOV081",
    "categoria": "novedades",
    "nombre": "LETRERO 28 DE JULIO GRANDE MJLG1-12",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV081.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 66,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor":2.90 }
    ]
  },
  {
    "id": "NOV082",
    "categoria": "novedades",
    "nombre": "BARRA HORA LOCA I LOVE THIS GAME BEL48-4",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV082.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 69,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
  {
    "id": "NOV083",
    "categoria": "novedades",
    "nombre": "STAND DE BAÃ‘O",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV083.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 72,
    "precios": [
      { "tipo": "Unidad", "valor": 17.00 },
      { "tipo": "Mayor", "valor": 15.00 }
    ]
  },
  {
    "id": "NOV084",
    "categoria": "novedades",
    "nombre": "COLGADOR DE MEDIAS AJASON VD3032",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV084.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 75,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.90 }
    ]
  },
  {
    "id": "NOV085",
    "categoria": "novedades",
    "nombre": "ADORNO CERAMICA AVE CHICO AQ1082",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV085.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5.0,
    "resenas": 78,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.80 }
    ]
  },
  {
    "id": "NOV086",
    "categoria": "novedades",
    "nombre": "ADORNO CERAMICA GRANDE AQ1067",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV086.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.11,
    "resenas": 81,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 4.50 }
    ]
  },
  {
    "id": "NOV087",
    "categoria": "novedades",
    "nombre": "GLOBOS ONDULADOS FF1189",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV087.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.12,
    "resenas": 84,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 4.00 }
    ]
  },
  {
    "id": "NOV088",
    "categoria": "novedades",
    "nombre": "CEPILLO DE TOMATODO DF1001",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV088.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.13,
    "resenas": 87,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.80 }
    ]
  },
  {
    "id": "NOV089",
    "categoria": "novedades",
    "nombre": "MOLDE DE GELATINA DB2293",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV089.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.14,
    "resenas": 90,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 4.80 }
    ]
  },
  {
    "id": "NOV090",
    "categoria": "novedades",
    "nombre": "AFEITADOR LQ HD1014 HD1013",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV090.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.15,
    "resenas": 93,
    "precios": [
      { "tipo": "Unidad", "valor":1.00},
      { "tipo": "Docena", "valor": 4.90 }
    ]
  },
  {
    "id": "NOV091",
    "categoria": "novedades",
    "nombre": "PANTY EFECTO PIEL UNICA FASHION",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV091.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.16,
    "resenas": 96,
    "precios": [
      { "tipo": "Unidad", "valor": 11.00 },
      { "tipo": "Mayor", "valor": 9.00 }
    ]
  },
  {
    "id": "NOV092",
    "categoria": "novedades",
    "nombre": "PANTUFLAS ECONOMICO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV092.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.17,
    "resenas": 99,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.80 }
    ]
  },
  {
    "id": "NOV093",
    "categoria": "novedades",
    "nombre": "DINO MOLDELONES JDL012",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV093.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.18,
    "resenas": 102,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.80 }
    ]
  },
  {
    "id": "NOV094",
    "categoria": "novedades",
    "nombre": "BRASIER ADHERENTE INVISIBLE GF-2410",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV094.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.19,
    "resenas": 105,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 3.90 }
    ]
  },
  {
    "id": "NOV095",
    "categoria": "novedades",
    "nombre": "GANCHO DE ROPA MAS CORDEL GF-5376",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV095.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.21,
    "resenas": 108,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "NOV096",
    "categoria": "novedades",
    "nombre": "PLANCHA DE MANUALIDADES",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV096.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.22,
    "resenas": 111,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.90 }
    ]
  },
  {
    "id": "NOV097",
    "categoria": "novedades",
    "nombre": "CORTINAS PARA CUMPLEAÃ‘OS",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV097.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.23,
    "resenas": 114,
    "precios": [
      { "tipo": "Unidad", "valor": 10.00 },
      { "tipo": "Mayor", "valor": 8.90 }
    ]
  },
  {
    "id": "NOV098",
    "categoria": "novedades",
    "nombre": "CHICHARRA AIR HORN 351846",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV098.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.24,
    "resenas": 117,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.90 }
    ]
  },
  {
    "id": "NOV099",
    "categoria": "novedades",
    "nombre": "MONEDERO K POP MAS LLAVERO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV099.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.25,
    "resenas": 120,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 3.90 }
    ]
  },
  {
    "id": "NOV100",
    "categoria": "novedades",
    "nombre": "RELOJ DE DAMA EN CAJA ROSADA",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV100.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.26,
    "resenas": 123,
    "precios": [
      { "tipo": "Unidad", "valor": 10.00 },
      { "tipo": "Mayor", "valor": 8.80 }
    ]
  },
  {
    "id": "NOV101",
    "categoria": "novedades",
    "nombre": "VASO STANLEY PARLANTE 900 M L BJ-192",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV101.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.27,
    "resenas": 126,
    "precios": [
      { "tipo": "Unidad", "valor": 23.00 },
      { "tipo": "Mayor", "valor": 19.50 }
    ]
  },
  {
    "id": "NOV102",
    "categoria": "novedades",
    "nombre": "CASACA CORTAVIENTO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV102.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.28,
    "resenas": 129,
    "precios": [
      { "tipo": "Unidad", "valor": 34.00 },
      { "tipo": "Mayor", "valor": 30.00 }
    ]
  },
  {
    "id": "NOV103",
    "categoria": "novedades",
    "nombre": "UÃ‘AS PARA PIES BLANCO Y COLORES",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV103.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.29,
    "resenas": 132,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Docena", "valor": 8.50 }
    ]
  },
  {
    "id": "NOV104",
    "categoria": "novedades",
    "nombre": "LAMPARA CERAMIC CA-B26782",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV104.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.30,
    "resenas": 135,
    "precios": [
      { "tipo": "Unidad", "valor": 20.00 },
      { "tipo": "Mayor", "valor": 16.00 }
    ]
  },
  {
    "id": "NOV105",
    "categoria": "novedades",
    "nombre": "LAMPARA DE MESA CA-B26781",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV105.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.31,
    "resenas": 138,
    "precios": [
      { "tipo": "Unidad", "valor": 18.00 },
      { "tipo": "Mayor", "valor": 15.00 }
    ]
  },
  {
    "id": "NOV106",
    "categoria": "novedades",
    "nombre": "ALBUM DE FOTOS CHICO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV106.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.32,
    "resenas": 141,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 4.50 }
    ]
  },
  {
    "id": "NOV107",
    "categoria": "novedades",
    "nombre": "ALBUM DE FOTOS GRANDE",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV107.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.33,
    "resenas": 144,
    "precios": [
      { "tipo": "Unidad", "valor": 6.50 },
      { "tipo": "Mayor", "valor": 6.00 }
    ]
  },
  {
    "id": "NOV108",
    "categoria": "novedades",
    "nombre": "RASURADOR ELECTRICO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV108.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.34,
    "resenas": 147,
    "precios": [
      { "tipo": "Unidad", "valor": 15.00 },
      { "tipo": "Mayor", "valor": 13.00 }
    ]
  },
  {
    "id": "NOV109",
    "categoria": "novedades",
    "nombre": "MAQUINA DE CORTAR CABELLO AJ340232",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV109.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.35,
    "resenas": 150,
    "precios": [
      { "tipo": "Unidad", "valor": 10.00 },
      { "tipo": "Mayor", "valor": 8.50 }
    ]
  },
  {
    "id": "NOV110",
    "categoria": "novedades",
    "nombre": "Organizador con Espejo",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV251.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.36,
    "resenas": 53,
    "precios": [
      { "tipo": "Unidad", "valor": 21.00 },
      { "tipo": "Mayor", "valor": 18.00 }
    ]
  },
  {
    "id": "NOV111",
    "categoria": "novedades",
    "nombre": "ORGANIZADOR CIRCULAR AJ330093",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV110.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.37,
    "resenas": 56,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.90 }
    ]
  },
  {
    "id": "NOV112",
    "categoria": "novedades",
    "nombre": "LEGO DEL MUNDIAL FIFA",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV111.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.38,
    "resenas": 59,
    "precios": [
      { "tipo": "Unidad", "valor": 7.00 },
      { "tipo": "Mayor", "valor": 6.00 }
    ]
  },
  {
    "id": "NOV113",
    "categoria": "novedades",
    "nombre": "LETREROS CON BROCHETA",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV112.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.39,
    "resenas": 62,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Docena", "valor": 5.00 }
    ]
  },
  {
    "id": "NOV114",
    "categoria": "novedades",
    "nombre": "JOYERO CIRCULAR EP-3000",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV113.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.40,
    "resenas": 65,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.80 }
    ]
  },
  {
    "id": "NOV115",
    "categoria": "novedades",
    "nombre": "JOYERO CIRCULAR EP-2998",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV114.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.41,
    "resenas": 68,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00 },
      { "tipo": "Mayor", "valor": 5.00 }
    ]
  },
  {
    "id": "NOV116",
    "categoria": "novedades",
    "nombre": "JOYERO GF-3253",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV115.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.42,
    "resenas": 71,
    "precios": [
      { "tipo": "Unidad", "valor": 8.50 },
      { "tipo": "Mayor", "valor": 7.50 }
    ]
  },
  {
    "id": "NOV117",
    "categoria": "novedades",
    "nombre": "JOYERO GF-3254",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV116.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.43,
    "resenas": 74,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.50 }
    ]
  },
  {
    "id": "NOV118",
    "categoria": "novedades",
    "nombre": "BILLETERA RENZO COSTA RC",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV117.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.44,
    "resenas": 77,
    "precios": [
      { "tipo": "Unidad", "valor": 16.00 },
      { "tipo": "Mayor", "valor": 14.00 }
    ]
  },
  {
    "id": "NOV119",
    "categoria": "novedades",
    "nombre": "VELA MAGICA X10 LUYAN",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV118.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.45,
    "resenas": 80,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Mayor", "valor": 1.00 },
      { "tipo": "Docena", "valor": 8.50 }
    ]
  },
  {
    "id": "NOV120",
    "categoria": "novedades",
    "nombre": "VELA LARGOS BIRTHDAY CANDLE",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV119.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.46,
    "resenas": 83,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
  {
    "id": "NOV121",
    "categoria": "novedades",
    "nombre": "VELA LARGOS BIRTHDAY CANDLE",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV120.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.47,
    "resenas": 86,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
  {
    "id": "NOV122",
    "categoria": "novedades",
    "nombre": "VELA VOLCANICA DE 12 CM",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV121.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.48,
    "resenas": 89,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00 },
      { "tipo": "Mayor", "valor": 5.00 }
    ]
  },
  {
    "id": "NOV123",
    "categoria": "novedades",
    "nombre": "SACACORCHOS DE VINO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV122.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.49,
    "resenas": 92,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Docena", "valor": 6.00 }
    ]
  },
  {
    "id": "NOV124",
    "categoria": "novedades",
    "nombre": "PARCHE MUSCULAR B-82",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV123.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.50,
    "resenas": 95,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
  {
    "id": "NOV125",
    "categoria": "novedades",
    "nombre": "FOCO PLANO 70W AJ440566",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV124.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.51,
    "resenas": 98,
    "precios": [
      { "tipo": "Unidad", "valor": 16.00 },
      { "tipo": "Mayor", "valor": 14.80 }
    ]
  },
  {
    "id": "NOV126",
    "categoria": "novedades",
    "nombre": "FOCO PLANO PERLA 50W AJ440570",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV125.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.52,
    "resenas": 101,
    "precios": [
      { "tipo": "Unidad", "valor":17.00 },
      { "tipo": "Mayor", "valor": 14.80 }
    ]
  },
  {
    "id": "NOV127",
    "categoria": "novedades",
    "nombre": "FOCO PLANO 50W AJ440565",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV126.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.53,
    "resenas": 104,
    "precios": [
      { "tipo": "Unidad", "valor": 14.00 },
      { "tipo": "Mayor", "valor": 12.00 }
    ]
  },
  {
    "id": "NOV128",
    "categoria": "novedades",
    "nombre": "FOCO PLANO 40W AJ440564",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV127.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.54,
    "resenas": 107,
    "precios": [
      { "tipo": "Unidad", "valor": 11.00 },
      { "tipo": "Mayor", "valor": 9.50 }
    ]
  },
  {
    "id": "NOV129",
    "categoria": "novedades",
    "nombre": "FOCO PLANO PERLA 40W AJ440569",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV128.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.55,
    "resenas": 110,
    "precios": [
      { "tipo": "Unidad", "valor": 14.00 },
      { "tipo": "Mayor", "valor": 11.50 }
    ]
  },
  {
    "id": "NOV130",
    "categoria": "novedades",
    "nombre": "FOCO PLANO 30W AJ440563",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV129.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.56,
    "resenas": 113,
    "precios": [
      { "tipo": "Unidad", "valor": 8.00 },
      { "tipo": "Mayor", "valor": 7.00 }
    ]
  },
  {
    "id": "NOV131",
    "categoria": "novedades",
    "nombre": "FOCO PLANO PERLA 30W AJ440568",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV130.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.57,
    "resenas": 116,
    "precios": [
      { "tipo": "Unidad", "valor": 10.00 },
      { "tipo": "Mayor", "valor": 8.80 }
    ]
  },
  {
    "id": "NOV132",
    "categoria": "novedades",
    "nombre": "FOCO PLANO 18W AJ440558",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV131.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.58,
    "resenas": 119,
    "precios": [
      { "tipo": "Unidad", "valor": 7.00 },
      { "tipo": "Mayor", "valor": 5.80 }
    ]
  },
  {
    "id": "NOV133",
    "categoria": "novedades",
    "nombre": "MOCHILA TRALALERO GRANDE",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV132.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.59,
    "resenas": 122,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor":3.50 }
    ]
  },
  {
    "id": "NOV134",
    "categoria": "novedades",
    "nombre": "CONJUNTO DE NIÃ‘O 260179",
    "descripcion": "TALLAS DEL 2 AL 6",
    "imagen": "IMAGENES NOVEDADES/IMGNOV133.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.60,
    "resenas": 125,
    "precios": [
      { "tipo": "Unidad", "valor": 14.00 },
      { "tipo": "Mayor", "valor": 11.50 }
    ]
  },
  {
    "id": "NOV135",
    "categoria": "novedades",
    "nombre": "PARAGUAS DE MANO 10T-1680",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV134.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.61,
    "resenas": 128,
    "precios": [
      { "tipo": "Unidad", "valor": 8.00 },
      { "tipo": "Mayor", "valor": 6.80 }
    ]
  },
  {
    "id": "NOV136",
    "categoria": "novedades",
    "nombre": "HERVIDORA DE COLORES AJ340305",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV135.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.62,
    "resenas": 131,
    "precios": [
      { "tipo": "Unidad", "valor": 25.00 },
      { "tipo": "Mayor", "valor": 21.90 }
    ]
  },
  {
    "id": "NOV137",
    "categoria": "novedades",
    "nombre": "LENTEJUELAS HE1560",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV136.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.63,
    "resenas": 134,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.80 }
    ]
  },
  {
    "id": "NOV138",
    "categoria": "novedades",
    "nombre": "MINI INFLADOR",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV137.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.64,
    "resenas": 137,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Docena", "valor": 6.00 }
    ]
  },
  {
    "id": "NOV139",
    "categoria": "novedades",
    "nombre": "RAMO EN CAJA TRANSPARENTE MQ-25019",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV138.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.65,
    "resenas": 140,
    "precios": [
      { "tipo": "Unidad", "valor": 26.00 },
      { "tipo": "Mayor", "valor": 23.00 }
    ]
  },
  {
    "id": "NOV140",
    "categoria": "novedades",
    "nombre": "POLERA DAMA EP-2824",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV139.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.66,
    "resenas": 143,
    "precios": [
      { "tipo": "Unidad", "valor": 15.00 },
      { "tipo": "Mayor", "valor": 13.00 }
    ]
  },
  {
    "id": "NOV141",
    "categoria": "novedades",
    "nombre": "MEDIAS MIXTO GF 3162 GF-3155",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV140.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.67,
    "resenas": 146,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Mayor", "valor": 12.00 }
    ]
  },
  {
    "id": "NOV142",
    "categoria": "novedades",
    "nombre": "PEINE PEZ Y LARGO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV141.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.68,
    "resenas": 149,
    "precios": [
      { "tipo": "Unidad", "valor": 0.50 },
      { "tipo": "Docena", "valor": 4.00 }
    ]
  },
  {
    "id": "NOV143",
    "categoria": "novedades",
    "nombre": "PERCHERO X3 CONEJITO AJ314530",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV142.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.69,
    "resenas": 52,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
  {
    "id": "NOV144",
    "categoria": "novedades",
    "nombre": "FLOR CASITA MD-56554",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV143.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.70,
    "resenas": 55,
    "precios": [
      { "tipo": "Unidad", "valor": 10.00 },
      { "tipo": "Mayor", "valor": 8.50 }
    ]
  },
  {
    "id": "NOV145",
    "categoria": "novedades",
    "nombre": "FOCO 40W",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV144.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.71,
    "resenas": 58,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00 },
      { "tipo": "Mayor", "valor": 5.50 }
    ]
  },
  {
    "id": "NOV146",
    "categoria": "novedades",
    "nombre": "FOCO 50W",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV145.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.72,
    "resenas": 61,
    "precios": [
      { "tipo": "Unidad", "valor": 7.00 },
      { "tipo": "Mayor", "valor": 6.00 }
    ]
  },
  {
    "id": "NOV147",
    "categoria": "novedades",
    "nombre": "FLOR ORQUIDIAS RR-152",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV146.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.73,
    "resenas": 64,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.90 }
    ]
  },
  {
    "id": "NOV148",
    "categoria": "novedades",
    "nombre": "FLOR DE CEREZO DE 7 RAMAS RR-114",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV147.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.74,
    "resenas": 67,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 4.00 }
    ]
  },
  {
    "id": "NOV149",
    "categoria": "novedades",
    "nombre": "CINTA SATINADA 7MM",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV148.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.75,
    "resenas": 70,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00},
      { "tipo": "Mayor", "valor": 1.50 },
      { "tipo": "Docena","valor": 15.00}
    ]
  },
  {
    "id": "NOV150",
    "categoria": "novedades",
    "nombre": "CANGURO JHNIAO 8412",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV149.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.76,
    "resenas": 73,
    "precios": [
      { "tipo": "Unidad", "valor": 9.00 },
      { "tipo": "Mayor", "valor": 7.90 }
    ]
  },
  {
    "id": "NOV151",
    "categoria": "novedades",
    "nombre": "GIRASOL UNITARIO RR-164",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV150.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.77,
    "resenas": 76,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "NOV152",
    "categoria": "novedades",
    "nombre": "PONCHO DE LLUVIA NIÃ‘OS ADULTO EVA J011",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV151.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.78,
    "resenas": 79,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.90 }
    ]
  },
  {
    "id": "NOV153",
    "categoria": "novedades",
    "nombre": "FLOR CLAVEL RR-106",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV152.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.79,
    "resenas": 82,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "NOV154",
    "categoria": "novedades",
    "nombre": "RAMO DE ROSAS DELGADAS FRECO12",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV153.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.80,
    "resenas": 85,
    "precios": [
      { "tipo": "Unidad", "valor": 6.50 },
      { "tipo": "Mayor", "valor": 5.50 }
    ]
  },
  {
    "id": "NOV155",
    "categoria": "novedades",
    "nombre": "GLOBO CORAZON #10",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV154.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.81,
    "resenas": 88,
    "precios": [
      { "tipo": "Unidad", "valor": 11.50 },
      { "tipo": "Mayor", "valor": 10.00 }
    ]
  },
  {
    "id": "NOV156",
    "categoria": "novedades",
    "nombre": "GLOBOS CARNAVAL",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV155.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.82,
    "resenas": 91,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Mayor", "valor": 1.00 }
    ]
  },
  {
    "id": "NOV157",
    "categoria": "novedades",
    "nombre": "ROSA FELIZ DIA MAMA CORAZON DE BASE AMPVC1",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV156.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.83,
    "resenas": 94,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.80 }
    ]
  },
  {
    "id": "NOV158",
    "categoria": "novedades",
    "nombre": "BANDERA CHICO FPBC12-1",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV157.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.84,
    "resenas": 97,
    "precios": [
      { "tipo": "Unidad", "valor": 0.50 },
      { "tipo": "Docena", "valor": 3.90 }
    ]
  },
  {
    "id": "NOV159",
    "categoria": "novedades",
    "nombre": "BANDERA GRANDE FPBPE12-1",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV158.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.85,
    "resenas": 100,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Docena", "valor": 15.00 }
    ]
  },
  {
    "id": "NOV160",
    "categoria": "novedades",
    "nombre": "LETRERO MAMA CHICO MMC1-12",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV159.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.86,
    "resenas": 103,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Mayor", "valor": 1.00 }
    ]
  },
  {
    "id": "NOV161",
    "categoria": "novedades",
    "nombre": "LETRERO MAMA GRANDE",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV160.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.87,
    "resenas": 106,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
  {
    "id": "NOV162",
    "categoria": "novedades",
    "nombre": "ROSA CON CORAZON MAMA FRACI",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV161.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.88,
    "resenas": 109,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Mayor", "valor": 7.00 },
      { "tipo": "Ciento", "valor": 55.00}
    ]
  },
  {
    "id": "NOV163",
    "categoria": "novedades",
    "nombre": "LETRERO LARGO MAMA",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV162.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.89,
    "resenas": 112,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "NOV164",
    "categoria": "novedades",
    "nombre": "ROSA BORDE ESCARCHADO TE AMO DE TELA FRACEI",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV163.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.90,
    "resenas": 115,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Docena", "valor": 4.90 },
      { "tipo": "Ciento", "valor": 39.00}
    ]
  },
  {
    "id": "NOV165",
    "categoria": "novedades",
    "nombre": "ROSA FELIZ DIA MAMA CHICO AMPVC3",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV164.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.91,
    "resenas": 118,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 2.00 }
    ]
  },
  {
    "id": "NOV166",
    "categoria": "novedades",
    "nombre": "ROSA FELIZ DIA MAMA MEDIANO AMPVC2",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV165.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.92,
    "resenas": 121,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "NOV167",
    "categoria": "novedades",
    "nombre": "ROSA FELIZ DIA MAMA GRANDE AMPVC6",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV166.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.93,
    "resenas": 124,
    "precios": [
      { "tipo": "Unidad", "valor": 7.00 },
      { "tipo": "Mayor", "valor": 6.00 }
    ]
  },
  {
    "id": "NOV168",
    "categoria": "novedades",
    "nombre": "RAMO DE ROSAS GRUESAS FREST9",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV167.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.94,
    "resenas": 127,
    "precios": [
      { "tipo": "Unidad", "valor": 10.00 },
      { "tipo": "Mayor", "valor": 8.00 }
    ]
  },
  {
    "id": "NOV169",
    "categoria": "novedades",
    "nombre": "SET DE GLOBOS MAMA SLIME",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV168.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.95,
    "resenas": 130,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "NOV170",
    "categoria": "novedades",
    "nombre": "PALIGLOBO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV169.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.96,
    "resenas": 133,
    "precios": [
      { "tipo": "Unidad", "valor": 0.50 },
      { "tipo": "Docena", "valor": 3.00 },
      { "tipo": "Ciento", "valor": 20.50}
    ]
  },
  {
    "id": "NOV171",
    "categoria": "novedades",
    "nombre": "CABLE DE DATOS ANTIGUO TCD0322",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV170.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.97,
    "resenas": 136,
    "precios": [
      { "tipo": "Unidad", "valor": 6.50 },
      { "tipo": "Mayor", "valor": 5.50 }
    ]
  },
  {
    "id": "NOV172",
    "categoria": "novedades",
    "nombre": "ZAPATILLA URBANA",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV171.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.98,
    "resenas": 139,
    "precios": [
      { "tipo": "Unidad", "valor": 45.00 },
      { "tipo": "Mayor", "valor": 39.00 }
    ]
  },
  {
    "id": "NOV173",
    "categoria": "novedades",
    "nombre": "ZAPATILLA URBANA",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV172.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.99,
    "resenas": 142,
    "precios": [
      { "tipo": "Unidad", "valor": 45.00 },
      { "tipo": "Mayor", "valor": 39.00 }
    ]
  },
  {
    "id": "NOV174",
    "categoria": "novedades",
    "nombre": "ZAPATILLA URBANA",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV173.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.21,
    "resenas": 145,
    "precios": [
      { "tipo": "Unidad", "valor": 45.00 },
      { "tipo": "Mayor", "valor": 39.00 }
    ]
  },
  {
    "id": "NOV175",
    "categoria": "novedades",
    "nombre": "ZAPATILLA URBANA",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV174.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.22,
    "resenas": 148,
    "precios": [
      { "tipo": "Unidad", "valor": 45.00 },
      { "tipo": "Mayor", "valor": 39.00 }
    ]
  },
  {
    "id": "NOV176",
    "categoria": "novedades",
    "nombre": "CANDADO CHICO 264",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV175.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.23,
    "resenas": 51,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Docena", "valor": 2.50 }
    ]
  },
  {
    "id": "NOV177",
    "categoria": "novedades",
    "nombre": "CESTA DE PLASTICO AJ312850",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV176.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.24,
    "resenas": 54,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.00 }
    ]
  },
  {
    "id": "NOV178",
    "categoria": "novedades",
    "nombre": "CEPILLO PARA INODORO CON PORTA CEPILLO AJ314697",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV177.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.25,
    "resenas": 57,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "NOV179",
    "categoria": "novedades",
    "nombre": "SHAMPOO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV178.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.26,
    "resenas": 60,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Caja x7", "valor": 7.50 }
    ]
  },
  {
    "id": "NOV180",
    "categoria": "novedades",
    "nombre": "ESPIRAL",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV179.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.27,
    "resenas": 63,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
  {
    "id": "NOV181",
    "categoria": "novedades",
    "nombre": "RELOJ MAS PULSERA FASHION 170011",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV180.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.28,
    "resenas": 66,
    "precios": [
      { "tipo": "Unidad", "valor": 11.00 },
      { "tipo": "Mayor", "valor": 9.00 }
    ]
  },
  {
    "id": "NOV182",
    "categoria": "novedades",
    "nombre": "HERVIDORA SILVER LOVE",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV181.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.29,
    "resenas": 69,
    "precios": [
      { "tipo": "Unidad", "valor": 18.00 },
      { "tipo": "Mayor", "valor": 15.50 }
    ]
  },
  {
    "id": "NOV183",
    "categoria": "novedades",
    "nombre": "BOLSA DE COLORES GRANDE BA1002",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV182.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.30,
    "resenas": 72,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 2.00 }
    ]
  },
  {
    "id": "NOV184",
    "categoria": "novedades",
    "nombre": "BOLSA DE COLORES GRANDE BA1010",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV183.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.31,
    "resenas": 75,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 2.00 }
    ]
  },
  {
    "id": "NOV185",
    "categoria": "novedades",
    "nombre": "SANDALIA ECONOMICO 2878",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV184.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.32,
    "resenas": 78,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 5.90 }
    ]
  },
  {
    "id": "NOV186",
    "categoria": "novedades",
    "nombre": "HERVIDORA TRANSPARENTE 95153",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV185.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.33,
    "resenas": 81,
    "precios": [
      { "tipo": "Unidad", "valor": 29.00 },
      { "tipo": "Mayor", "valor": 26.00}
    ]
  },
  {
    "id": "NOV187",
    "categoria": "novedades",
    "nombre": "TOMATODO ICE CREAM GP24",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV186.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.34,
    "resenas": 84,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.00 }
    ]
  },
  {
    "id": "NOV188",
    "categoria": "novedades",
    "nombre": "VELA HAPPY OLEGO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV187.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.35,
    "resenas": 87,
    "precios": [
      { "tipo": "Unidad", "valor": 8.50 },
      { "tipo": "Mayor", "valor": 5.00 }
    ]
  },
  {
    "id": "NOV189",
    "categoria": "novedades",
    "nombre": "CABLE DE DATOS ANTIGUO TCD0322",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV188.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.36,
    "resenas": 90,
    "precios": [
      { "tipo": "Unidad", "valor": 6.50 },
      { "tipo": "Mayor", "valor": 5.50 }
    ]
  },
  {
    "id": "NOV190",
    "categoria": "novedades",
    "nombre": "PERCHERO PANDA AJ-313730",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV189.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.37,
    "resenas": 93,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
  {
    "id": "NOV191",
    "categoria": "novedades",
    "nombre": "FAJA RELOJ DE ARENA AJ5920V",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV190.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.38,
    "resenas": 96,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 4.80 }
    ]
  },
  {
    "id": "NOV192",
    "categoria": "novedades",
    "nombre": "PARLANTE TRIANGULO V2",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV191.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.39,
    "resenas": 99,
    "precios": [
      { "tipo": "Unidad", "valor": 8.00 },
      { "tipo": "Mayor", "valor": 6.90 }
    ]
  },
  {
    "id": "NOV193",
    "categoria": "novedades",
    "nombre": "GORRO CON CUELLLERA",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV192.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.40,
    "resenas": 102,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 4.00 }
    ]
  },
  {
    "id": "NOV194",
    "categoria": "novedades",
    "nombre": "FLOR DE CHENILLE BEST WISHES",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV193.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.41,
    "resenas": 105,
    "precios": [
      { "tipo": "Unidad", "valor": 10.00 },
      { "tipo": "Mayor", "valor": 8.50 }
    ]
  },
  {
    "id": "NOV195",
    "categoria": "novedades",
    "nombre": "SANDALIA DIBUJOS DAMA GP45",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV194.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.42,
    "resenas": 108,
    "precios": [
      { "tipo": "Unidad", "valor": 10.00 },
      { "tipo": "Mayor", "valor": 8.90 }
    ]
  },
  {
    "id": "NOV196",
    "categoria": "novedades",
    "nombre": "GORRO SURTIDO DAMA",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV195.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.43,
    "resenas": 111,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.80 }
    ]
  },
  {
    "id": "NOV197",
    "categoria": "novedades",
    "nombre": "PON PON",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV196.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.44,
    "resenas": 114,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Docena", "valor": 5.50 }
    ]
  },
  {
    "id": "NOV198",
    "categoria": "novedades",
    "nombre": "ROSAS EN TUBO BEST WISHES 2438",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV197.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.45,
    "resenas": 117,
    "precios": [
      { "tipo": "Unidad", "valor": 12.00 },
      { "tipo": "Mayor", "valor": 10.50 }
    ]
  },
  {
    "id": "NOV199",
    "categoria": "novedades",
    "nombre": "FPLATO AJICERO 2896",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV198.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.46,
    "resenas": 120,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.90 }
    ]
  },
  {
    "id": "NOV200",
    "categoria": "novedades",
    "nombre": "CINTA SATINADA 25MM",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV199.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.47,
    "resenas": 123,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "NOV201",
    "categoria": "novedades",
    "nombre": "SANDALIA NICE DAMA GP507",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV200.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.48,
    "resenas": 126,
    "precios": [
      { "tipo": "Unidad", "valor": 11.00 },
      { "tipo": "Mayor", "valor": 9.00 }
    ]
  },
  {
    "id": "NOV202",
    "categoria": "novedades",
    "nombre": "SANDALIA VARON GP506",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV201.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.49,
    "resenas": 129,
    "precios": [
      { "tipo": "Unidad", "valor": 11.00 },
      { "tipo": "Mayor", "valor": 9.00 }
    ]
  },
  {
    "id": "NOV203",
    "categoria": "novedades",
    "nombre": "ALCOHOL EN GEL 70Â° ANTIBACTERIAL",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV202.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.50,
    "resenas": 132,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
  {
    "id": "NOV204",
    "categoria": "novedades",
    "nombre": "PEINE PESCADO Y LARGO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV203.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.51,
    "resenas": 135,
    "precios": [
      { "tipo": "Unidad", "valor": 0.50 },
      { "tipo": "Docena", "valor": 4.00 }
    ]
  },
  {
    "id": "NOV205",
    "categoria": "novedades",
    "nombre": "ROSAS + TOALLA",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV204.png",
    "badge": "OFERTA",
    "estado": "disponible",
    "descuento": 50,
    "estrellas": 4.52,
    "resenas": 138,
    "precios": [
      { "tipo": "Unidad", "valor": 20.00 }
    ]
  },
  {
    "id": "NOV206",
    "categoria": "novedades",
    "nombre": "RECOGEDOR LORITO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV205.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.53,
    "resenas": 141,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.90 }
    ]
  },
  {
    "id": "NOV207",
    "categoria": "novedades",
    "nombre": "PORTA LAPICERO AJ450130",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV206.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.54,
    "resenas": 144,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 },
      { "tipo": "Docena", "valor": 13.50}
    ]
  },
  {
    "id": "NOV208",
    "categoria": "novedades",
    "nombre": "CHOCOLATE CORAZON MOÃ‘O 100GR",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV207.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.55,
    "resenas": 147,
    "precios": [
      { "tipo": "Unidad", "valor": 11.00 },
      { "tipo": "Mayor", "valor": 9.00 }
    ]
  },
  {
    "id": "NOV209",
    "categoria": "novedades",
    "nombre": "PEGATINA 35CM X 50CM",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV208.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.56,
    "resenas": 150,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "NOV210",
    "categoria": "novedades",
    "nombre": "PILA AAA HICELL",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV209.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.57,
    "resenas": 53,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Caja x12", "valor": 12.90 }
    ]
  },
  {
    "id": "NOV211",
    "categoria": "novedades",
    "nombre": "LUCES LOVE",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV210.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.58,
    "resenas": 56,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 3.90 }
    ]
  },
  {
    "id": "NOV212",
    "categoria": "novedades",
    "nombre": "LONCHERA KAWAI RI2408-227",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV211.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.59,
    "resenas": 59,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 4.00 }
    ]
  },
  {
    "id": "NOV213",
    "categoria": "novedades",
    "nombre": "MORRAL FASHION FE65-U59",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV212.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.60,
    "resenas": 62,
    "precios": [
      { "tipo": "Unidad", "valor": 29.00 },
      { "tipo": "Mayor", "valor": 25.00 }
    ]
  },
  {
    "id": "NOV214",
    "categoria": "novedades",
    "nombre": "BOLSA FLORES CHICO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV213.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.61,
    "resenas": 65,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
  {
    "id": "NOV215",
    "categoria": "novedades",
    "nombre": "BOLSA FLORES GRANDE",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV214.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.62,
    "resenas": 68,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "NOV216",
    "categoria": "novedades",
    "nombre": "GUATE DE LAVAR VIVEMAX HX-0004",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV215.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.63,
    "resenas": 71,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.90 }
    ]
  },
  {
    "id": "NOV217",
    "categoria": "novedades",
    "nombre": "PORTA LAPICEROO AJ3144V",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV216.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.64,
    "resenas": 74,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "NOV218",
    "categoria": "novedades",
    "nombre": "EXTENCION VULCANIZADO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV217.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.65,
    "resenas": 77,
    "precios": [
      { "tipo": "Unidad", "valor": 13.00 },
      { "tipo": "Mayor", "valor": 11.00 }
    ]
  },
  {
    "id": "NOV219",
    "categoria": "novedades",
    "nombre": "BOLSA CON DISEÃ‘O",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV218.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.66,
    "resenas": 80,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.80 }
    ]
  },
  {
    "id": "NOV220",
    "categoria": "novedades",
    "nombre": "BOLSA SIN DISEÃ‘O",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV219.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.67,
    "resenas": 83,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.80 }
    ]
  },
  {
    "id": "NOV221",
    "categoria": "novedades",
    "nombre": "CHOCOLATE CAJA PEQUEÃ‘A 50GR",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV220.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.68,
    "resenas": 86,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "NOV222",
    "categoria": "novedades",
    "nombre": "CHOCOLATE CAJA KISS 100GR",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV221.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.69,
    "resenas": 89,
    "precios": [
      { "tipo": "Unidad", "valor": 9.00 },
      { "tipo": "Mayor", "valor": 8.00 }
    ]
  },
  {
    "id": "NOV223",
    "categoria": "novedades",
    "nombre": "CHOCOLATE CAJA MOÃ‘O 110GR",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV222.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.70,
    "resenas": 92,
    "precios": [
      { "tipo": "Unidad", "valor": 11.00 },
      { "tipo": "Mayor", "valor": 9.00 }
    ]
  },
  {
    "id": "NOV224",
    "categoria": "novedades",
    "nombre": "ASPIRADORA INALAMBRICO MELA-138",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV223.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.71,
    "resenas": 95,
    "precios": [
      { "tipo": "Unidad", "valor": 34.00 },
      { "tipo": "Mayor", "valor": 29.00 }
    ]
  },
  {
    "id": "NOV225",
    "categoria": "novedades",
    "nombre": "CHOCOLATE CAJAS LARGAS 120GR",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV224.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 86,
    "precios": [
      { "tipo": "Unidad", "valor": 13.00 },
      { "tipo": "Mayor", "valor": 11.00 }
    ]
  },
  {
    "id": "NOV226",
    "categoria": "novedades",
    "nombre": "CHOCOLATE CAJA BOX",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV225.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.87,
    "resenas": 91,
    "precios": [
      { "tipo": "Unidad", "valor": 8.50 },
      { "tipo": "Mayor", "valor": 7.50 }
    ]
  },
  {
    "id": "NOV227",
    "categoria": "novedades",
    "nombre": "CHOCOLATE CAJA HEXAGONAL 100GR",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV226.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 95,
    "precios": [
      { "tipo": "Unidad", "valor": 9.50 },
      { "tipo": "Mayor", "valor": 8.50 }
    ]
  },
  {
    "id": "NOV228",
    "categoria": "novedades",
    "nombre": "CHOCOLATE CARTERA CLASICA 100GR",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV227.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.67,
    "resenas": 105,
    "precios": [
      { "tipo": "Unidad", "valor": 9.00 },
      { "tipo": "Mayor", "valor": 7.80 }
    ]
  },
  {
    "id": "NOV229",
    "categoria": "novedades",
    "nombre": "PANTUFLAS CAPIBARA",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV228.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.50,
    "resenas": 67,
    "precios": [
      { "tipo": "Unidad", "valor": 15.00 },
      { "tipo": "Mayor", "valor": 13.00 }
    ]
  },
  {
    "id": "NOV230",
    "categoria": "novedades",
    "nombre": "CUCHILLO Y SERVIDOR PARA PASTEL",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV229.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 98,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 4.80 }
    ]
  },
  {
    "id": "NOV231",
    "categoria": "novedades",
    "nombre": "SERVILLETERO AJ313539",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV230.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.71,
    "resenas": 95,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "NOV232",
    "categoria": "novedades",
    "nombre": "FLORES AE1141",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV231.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.67,
    "resenas": 59,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 4.00 }
    ]
  },
  {
    "id": "NOV233",
    "categoria": "novedades",
    "nombre": "FLORES AE1134",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV232.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 148,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 4.00 }
    ]
  },
  {
    "id": "NOV234",
    "categoria": "novedades",
    "nombre": "BROCHAS PARA CABELLO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV233.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.56,
    "resenas": 123,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "NOV235",
    "categoria": "novedades",
    "nombre": "ESCURRIDOR DE PLATO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV234.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.67,
    "resenas": 67,
    "precios": [
      { "tipo": "Unidad", "valor": 13.00 },
      { "tipo": "Mayor", "valor": 10.50 }
    ]
  },
  {
    "id": "NOV236",
    "categoria": "novedades",
    "nombre": "ORGANIZADOR CON ESPEJO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV235.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.71,
    "resenas": 95,
    "precios": [
      { "tipo": "Unidad", "valor": 14.00 },
      { "tipo": "Mayor", "valor": 11.80 }
    ]
  },
  {
    "id": "NOV237",
    "categoria": "novedades",
    "nombre": "FAJA BODY",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV236.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.29,
    "resenas": 104,
    "precios": [
      { "tipo": "Unidad", "valor": 19.00 },
      { "tipo": "Mayor", "valor": 16.50 }
    ]
  },
  {
    "id": "NOV238",
    "categoria": "novedades",
    "nombre": "FLORES AE1140",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV237.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 95,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor":4.00 }
    ]
  },
  {
    "id": "NOV239",
    "categoria": "novedades",
    "nombre": "LIGA TOÃ‘ITO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV238.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.17,
    "resenas": 68,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 2.00 }
    ]
  },
  {
    "id": "NOV240",
    "categoria": "novedades",
    "nombre": "CARGADOR DE AUTO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV239.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 75,
    "precios": [
      { "tipo": "Unidad", "valor": 16.50 },
      { "tipo": "Mayor", "valor": 13.80 }
    ]
  },
  {
    "id": "NOV241",
    "categoria": "novedades",
    "nombre": "ORGANIZADOR CHICO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV240.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 56,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 4.80 }
    ]
  },
  {
    "id": "NOV242",
    "categoria": "novedades",
    "nombre": "TITERE MEDIO CUERPO",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV241.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.61,
    "resenas": 83,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "NOV243",
    "categoria": "novedades",
    "nombre": "MACETERO COCA 311019",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV242.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 80,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "NOV244",
    "categoria": "novedades",
    "nombre": "ESPONJA VERDE X10",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV243.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.71,
    "resenas": 95,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "NOV245",
    "categoria": "novedades",
    "nombre": "MASETERO CON FLORES",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV244.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 71,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.70 }
    ]
  },
  {
    "id": "NOV246",
    "categoria": "novedades",
    "nombre": "CINTA SATINADA 40MM",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV245.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 107,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00 },
      { "tipo": "Mayor", "valor": 5.50 }
    ]
  },
  {
    "id": "NOV247",
    "categoria": "novedades",
    "nombre": "LENTES DE NIÃ‘O",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV246.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 59,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Mayor", "valor": 1.00 }
    ]
  },{
    "id": "NOV248",
    "categoria": "novedades",
    "nombre": "CUADRO CERTIFICADO A4",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV247.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.86,
    "resenas": 47,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.80 }
    ]
  },
  {
    "id": "NOV249",
    "categoria": "novedades",
    "nombre": "CAFETERA",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV248.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 87,
    "precios": [
      { "tipo": "Unidad", "valor": 9.00 },
      { "tipo": "Mayor", "valor": 7.80 }
    ]
  },
  {
    "id": "NOV250",
    "categoria": "novedades",
    "nombre": "PIJAMA",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV249.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 115,
    "precios": [
      { "tipo": "Unidad", "valor": 20.00 },
      { "tipo": "Mayor", "valor": 17.00 }
    ]
  },
  {
    "id": "NOV251",
    "categoria": "novedades",
    "nombre": "ZAPATILLA ECONOMICA",
    "descripcion": "",
    "imagen": "IMAGENES NOVEDADES/IMGNOV250.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas":107,
    "precios": [
      { "tipo": "Unidad", "valor": 28.00 },
      { "tipo": "Mayor", "valor": 25.00 }
    ]
  },
];
