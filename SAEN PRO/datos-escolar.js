/* ================================================
   SAEN IMPORT — datos-escolar.js
   Categoría: Escolar
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

const PRODS_ESCOLAR = [
  {
    "id": "ESC001",
    "categoria": "escolar",
    "nombre": "LAPICERO ARCOIRIS A100-6",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC001.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 124,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "ESC002",
    "categoria": "escolar",
    "nombre": "LAPICERO ECONOMICO X10",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC002.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 98,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.90 }
    ]
  },
  {
    "id": "ESC003",
    "categoria": "escolar",
    "nombre": "BORRADOR PALTA MAS TAJADOR AVOCADO 1998",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC003.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 133,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50},
      { "tipo": "Mayor", "valor": 2.00 }
    ]
  },
  {
    "id": "ESC004",
    "categoria": "escolar",
    "nombre": "TAJADOR MAS BORRADOR MANDO 3301 3034",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC004.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 76,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50},
      { "tipo": "Mayor", "valor": 2.00 }
    ]
  },
  {
    "id": "ESC005",
    "categoria": "escolar",
    "nombre": "LAPICERO ROVIS X3 RV-03L",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC005.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 112,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Mayor", "valor": 1.00 }
    ]
  },
  {
    "id": "ESC006",
    "categoria": "escolar",
    "nombre": "BORRADOR EN BLISTER ERASER E-66 ER 9007",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC006.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 89,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
  {
    "id": "ESC007",
    "categoria": "escolar",
    "nombre": "PLUMON METALICO X8 AUTLINER MARKER FL-80200",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC007.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 145,
    "precios": [
      { "tipo": "Unidad", "valor": 8.00 },
      { "tipo": "Mayor", "valor": 6.90 }
    ]
  },
  {
    "id": "ESC008",
    "categoria": "escolar",
    "nombre": "PINCELES NEGROS GEANDES X12 GFYS-220740",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC008.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 58,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00 },
      { "tipo": "Mayor", "valor": 5.50 }
    ]
  },
  {
    "id": "ESC009",
    "categoria": "escolar",
    "nombre": "SET DE PINCELES DELGADOS X6 GFYS-220764",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC009.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 101,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "ESC010",
    "categoria": "escolar",
    "nombre": "TIJERA DE ENCAJE FORMAS CK-5208",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC010.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 93,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.90 }
    ]
  },
  {
    "id": "ESC011",
    "categoria": "escolar",
    "nombre": "SET DE ENGRAMPADOR STAPLER BBL-124",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC011.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 67,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 4.50 }
    ]
  },
  {
    "id": "ESC012",
    "categoria": "escolar",
    "nombre": "SET DE PINCELES MORANDI BBL-727",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC012.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 117,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Docena", "valor": 3.50 }
    ]
  },
  {
    "id": "ESC013",
    "categoria": "escolar",
    "nombre": "TAJADOR 2 ORIFICIOS FEY 2609 9484 9476 9477",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC013.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 149,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Docena", "valor": 9.50 }
    ]
  },
  {
    "id": "ESC014",
    "categoria": "escolar",
    "nombre": "TAJADOR 2 ORIFICIOS FEY 2609 9484 9476 9477",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC014.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 82,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Docena", "valor": 9.50 }
    ]
  },
  {
    "id": "ESC015",
    "categoria": "escolar",
    "nombre": "TAJADOR 2 ORIFICIOS FEY 2609 9484 9476 9477",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC015.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 105,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Docena", "valor": 9.50 }
    ]
  },
  {
    "id": "ESC016",
    "categoria": "escolar",
    "nombre": "TAJADOR 2 ORIFICIOS FEY 2609 9484 9476 9477",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC016.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 120,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Docena", "valor": 9.50 }
    ]
  },
  {
    "id": "ESC017",
    "categoria": "escolar",
    "nombre": "MOTA PARA PIZARRA SUELTA WJHF-W24043",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC017.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 138,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Mayor", "valor": 1.00}
    ]
  },
  {
    "id": "ESC018",
    "categoria": "escolar",
    "nombre": "HILO DE PESCAR DHP100-10",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC018.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 54,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50},
      { "tipo": "Docena", "valor": 21.60 }
    ]
  },
  {
    "id": "ESC019",
    "categoria": "escolar",
    "nombre": "TANGRAM DELGADO DJDTD20",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC019.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 87,
    "precios": [
      { "tipo": "Unidad", "valor":4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "ESC020",
    "categoria": "escolar",
    "nombre": "BORRADOR NEGRO X20 BD-NGG20 DIALE",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC020.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 114,
    "precios": [
      { "tipo": "Unidad", "valor": 10.00 },
      { "tipo": "Mayor", "valor": 8.50 }
    ]
  },
  {
    "id": "ESC021",
    "categoria": "escolar",
    "nombre": "BORRADOR BLANCO X20 BD-BLG20 DIALE",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC021.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 121,
    "precios": [
      { "tipo": "Unidad", "valor": 11.00 },
      { "tipo": "Mayor", "valor": 9.50 }
    ]
  },
  {
    "id": "ESC022",
    "categoria": "escolar",
    "nombre": "LAPICERO TINTA LIQUIDA BORRABLE DIALE",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC022.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 94,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Docena", "valor": 16.90 }
    ]
  },
  {
    "id": "ESC023",
    "categoria": "escolar",
    "nombre": "ARENA MAGICA 1KG AMD-1000",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC023.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 110,
    "precios": [
      { "tipo": "Unidad", "valor": 24.00 },
      { "tipo": "Mayor", "valor": 20.00 }
    ]
  },
  {
    "id": "ESC024",
    "categoria": "escolar",
    "nombre": "ARENA MAGICA 500G AMD-500",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC024.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 143,
    "precios": [
      { "tipo": "Unidad", "valor":11.50 },
      { "tipo": "Mayor", "valor": 9.80 }
    ]
  },
  {
    "id": "ESC025",
    "categoria": "escolar",
    "nombre": "ARENA MAGICA 250G AMD6-250",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC025.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 73,
    "precios": [
      { "tipo": "Unidad", "valor": 6.50 },
      { "tipo": "Mayor", "valor": 5.90 }
    ]
  },
  {
    "id": "ESC026",
    "categoria": "escolar",
    "nombre": "CALCULADORA LQ HE1049",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC026.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 132,
    "precios": [
      { "tipo": "Unidad", "valor": 8.00 },
      { "tipo": "Mayor", "valor": 7.50 }
    ]
  },
  {
    "id": "ESC027",
    "categoria": "escolar",
    "nombre": "LAPIZ DIALE CHEQUEO DL-CHD12",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC027.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 97,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.90 }
    ]
  },
  {
    "id": "ESC028",
    "categoria": "escolar",
    "nombre": "MARCADOR ACRILICO X24PCS DMAC-DUO24",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC028.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 106,
    "precios": [
      { "tipo": "Unidad", "valor": 18.00 },
      { "tipo": "Mayor", "valor": 15.80 }
    ]
  },
  {
    "id": "ESC029",
    "categoria": "escolar",
    "nombre": "PISTOLA DE SILICONA",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC029.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 65,
    "precios": [
      { "tipo": "Unidad", "valor": 6.50 },
      { "tipo": "Mayor", "valor": 5.90 }
    ]
  },
  {
    "id": "ESC030",
    "categoria": "escolar",
    "nombre": "ROMPECABEZA HE1556",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC030.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 126,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 3.00 }
    ]
  },
  {
    "id": "ESC031",
    "categoria": "escolar",
    "nombre": "PIZARRA MAGICA MAS CARTUCHERA HE1593",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC031.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 88,
    "precios": [
      { "tipo": "Unidad", "valor": 6.50 },
      { "tipo": "Mayor", "valor": 5.80 }
    ]
  },
    {
    "id": "ESC032",
    "categoria": "escolar",
    "nombre": "PIZARRA MAGICA LCD PANEL HE1592",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC032.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 89,
    "precios": [
      { "tipo": "Unidad", "valor": 8.00 },
      { "tipo": "Mayor", "valor": 7.00 }
    ]
  },
  {
    "id": "ESC033",
    "categoria": "escolar",
    "nombre": "CALCULADORA CIENTIFICA HE1438",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC033.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 118,
    "precios": [
      { "tipo": "Unidad", "valor": 10.00 },
      { "tipo": "Mayor", "valor": 8.50 }
    ]
  },
  {
    "id": "ESC034",
    "categoria": "escolar",
    "nombre": "PERFORADOR EN FORMAS 802A",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC034.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 91,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.80 }
    ]
  },
  {
    "id": "ESC035",
    "categoria": "escolar",
    "nombre": "FLAUTA DULCE NEON DFD-N1",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC035.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 129,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 4.00 }
    ]
  },
  {
    "id": "ESC036",
    "categoria": "escolar",
    "nombre": "FLAUTA DULCE MARFIL DFD-M1",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC036.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 62,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Docena", "valor": 3.90 }
    ]
  },
  {
    "id": "ESC037",
    "categoria": "escolar",
    "nombre": "ESCARAPELA DE TELA",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC037.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 147,
    "precios": [
      { "tipo": "Unidad", "valor": 0.50 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "ESC038",
    "categoria": "escolar",
    "nombre": "ESCARAPELA DE METAL",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC038.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 115,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Mayor", "valor": 5.00 },
      { "tipo": "Ciento", "valor": 39.00 }
    ]
  },
  {
    "id": "ESC039",
    "categoria": "escolar",
    "nombre": "PALITO BROCHETA DIALE",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC039.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 95,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Docena", "valor": 14.50 }
    ]
  },
  {
    "id": "ESC040",
    "categoria": "escolar",
    "nombre": "MAASITA MOLDEABLE X7",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC040.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 123,
    "precios": [
      { "tipo": "Unidad", "valor": 10.00 },
      { "tipo": "Mayor", "valor": 8.90 }
    ]
  },
  {
    "id": "ESC041",
    "categoria": "escolar",
    "nombre": "MICA MERCYFAN 1536",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC041.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 141,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50},
      { "tipo": "Mayor", "valor": 3.80 },
      { "tipo": "Caja x100", "valor": 350.00 }
    ]
  },
  {
    "id": "ESC042",
    "categoria": "escolar",
    "nombre": "FASTER DFM8-50 DIALE",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC042.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 81,
    "precios": [
      { "tipo": "Unidad", "valor": 3.30 }
    ]
  },
  {
    "id": "ESC043",
    "categoria": "escolar",
    "nombre": "LAPICERO M-38",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC043.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 107,
    "precios": [
      { "tipo": "Unidad", "valor": 0.50 },
      { "tipo": "Caja x50", "valor": 13.90 }
    ]
  },
  {
    "id": "ESC044",
    "categoria": "escolar",
    "nombre": "LAPICERO M-034",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC044.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 90,
    "precios": [
      { "tipo": "Unidad", "valor": 0.50 },
      { "tipo": "Caja x50", "valor": 10.00 }
    ]
  },
  {
    "id": "ESC045",
    "categoria": "escolar",
    "nombre": "LAPICERO ESCARCHADO MERCYFAN X36",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC45.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 59,
    "precios": [
      { "tipo": "Unidad", "valor": 13.00 },
      { "tipo": "Mayor", "valor": 11.00 }
    ]
  },
  {
    "id": "ESC046",
    "categoria": "escolar",
    "nombre": "LAPICERO ESCARCHADO MERCYFAN X12",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC046.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 84,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.80 }
    ]
  },
  {
    "id": "ESC047",
    "categoria": "escolar",
    "nombre": "LAPICERO ESCARCHADO MERCYFAN X24",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC047.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 127,
    "precios": [
      { "tipo": "Unidad", "valor": 8.50 },
      { "tipo": "Mayor", "valor": 7.50 }
    ]
  },
  {
    "id": "ESC048",
    "categoria": "escolar",
    "nombre": "GLOBO TERRAQUEO HE1406",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC048.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 113,
    "precios": [
      { "tipo": "Unidad", "valor": 23.00 },
      { "tipo": "Mayor", "valor": 20.00 }
    ]
  },
  {
    "id": "ESC049",
    "categoria": "escolar",
    "nombre": "GLOBO TERRAQUEO HE1405",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC049.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 136,
    "precios": [
      { "tipo": "Unidad", "valor": 12.00 },
      { "tipo": "Mayor", "valor": 9.90 }
    ]
  },
  {
    "id": "ESC050",
    "categoria": "escolar",
    "nombre": "LIENZO ARTISTICO 50X60 LPDA2-1",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC050.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 99,
    "precios": [
      { "tipo": "Unidad", "valor": 14.00 },
      { "tipo": "Mayor", "valor": 12.50 }
    ]
  },
  {
    "id": "ESC051",
    "categoria": "escolar",
    "nombre": "LIENZO ARTISTICO 40X50 LPDA2B-1",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC051.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 122,
    "precios": [
      { "tipo": "Unidad", "valor": 10.00 },
      { "tipo": "Mayor", "valor": 9.00 }
    ]
  },
  {
    "id": "ESC52",
    "categoria": "escolar",
    "nombre": "LIENZO ARTISTICO 30X40 LPDA3-1",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC052.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 91,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.50 }
    ]
  },
  {
    "id": "ESC53",
    "categoria": "escolar",
    "nombre": "LIENZO ARTISTICO 20X30 LPDA4-1",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC053.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 72,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00},
      { "tipo": "Mayor", "valor": 4.00 }
    ]
  },
  {
    "id": "ESC54",
    "categoria": "escolar",
    "nombre": "CALCULADORA KD-2927",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC054.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 103,
    "precios": [
      { "tipo": "Unidad", "valor": 6.50 },
      { "tipo": "Mayor", "valor": 5.50 }
    ]
  },
  {
    "id": "ESC55",
    "categoria": "escolar",
    "nombre": "CINTA SCOCH GRANDE TT18-72",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC055.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 145,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50},
      { "tipo": "TUBO X8", "valor": 7.50 }
    ]
  },
  {
    "id": "ESC56",
    "categoria": "escolar",
    "nombre": "ORGANIZAR NEGRO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC056.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 80,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 4.50 }
    ]
  },
  {
    "id": "ESC57",
    "categoria": "escolar",
    "nombre": "CUADERNO ANILLADO A6",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC057.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 98,
    "precios": [
      { "tipo": "Unidad", "valor": 5.60 },
      { "tipo": "Mayor", "valor": 5.00 }
    ]
  },
  {
    "id": "ESC58",
    "categoria": "escolar",
    "nombre": "CORRECTOR SMARTZ ARTEZCO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC058.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 111,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Mayor", "valor": 13.00 }
    ]
  },
  {
    "id": "ESC59",
    "categoria": "escolar",
    "nombre": "CUADERNO ANILLADO UNIVERSAL A4",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC059.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 88,
    "precios": [
      { "tipo": "Unidad", "valor": 17.00 },
      { "tipo": "Mayor", "valor": 14.00 }
    ]
  },
  {
    "id": "ESC060",
    "categoria": "escolar",
    "nombre": "CUADERNO ANILLADO ONLINE PRO A5",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC060.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 65,
    "precios": [
      { "tipo": "Unidad", "valor": 8.50 },
      { "tipo": "Mayor", "valor": 7.50 }
    ]
  },
  {
    "id": "ESC061",
    "categoria": "escolar",
    "nombre": "LAPÍCERO FABER CASTELL TRILUX 031",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC061.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 119,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00},
      { "tipo": "Caja x50", "valor": 24.00 }
    ]
  },
  {
    "id": "ESC062",
    "categoria": "escolar",
    "nombre": "GLOBO TERRAQUEO DGTP14",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC062.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 76,
    "precios": [
      { "tipo": "Unidad", "valor": 13.00 },
      { "tipo": "Mayor", "valor": 11.50 }
    ]
  },
  {
    "id": "ESC063",
    "categoria": "escolar",
    "nombre": "REGLETAS DE COLORES DREG74",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC063.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 96,
    "precios": [
      { "tipo": "Unidad", "valor": 18.00 },
      { "tipo": "Mayor", "valor": 15.90 }
    ]
  },
  {
    "id": "ESC064",
    "categoria": "escolar",
    "nombre": "JUGUETE FUNCIONAL CUADRADO HE1657",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC064.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 84,
    "precios": [
      { "tipo": "Unidad", "valor": 8.50 },
      { "tipo": "Mayor", "valor": 7.50 }
    ]
  },
  {
    "id": "ESC065",
    "categoria": "escolar",
    "nombre": "JUEGUETE FUNCIONAL LARGO  HE1658",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC065.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 132,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00 },
      { "tipo": "Mayor", "valor": 5.00 }
    ]
  },
  {
    "id": "ESC066",
    "categoria": "escolar",
    "nombre": "JUGUETE FUNCIONAL HE1660",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC066.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 71,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "ESC067",
    "categoria": "escolar",
    "nombre": "AGENDA DE COLORES HP1441",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC067.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.2,
    "resenas": 58,
    "precios": [
      { "tipo": "Unidad", "valor": 7.00 },
      { "tipo": "Mayor", "valor": 5.90 }
    ]
  },
  {
    "id": "ESC068",
    "categoria": "escolar",
    "nombre": "AGENDA IMANTADA HP1360",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC068.PNG",
    "badge": "",
    "estado": "AGOTADO",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 89,
    "precios": [
      { "tipo": "Unidad", "valor": 9.50 },
      { "tipo": "Mayor", "valor": 7.90}
    ]
  },
  {
    "id": "ESC069",
    "categoria": "escolar",
    "nombre": "ARCHIVADOR DE COLORES LQ HR1056",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC069.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 104,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 4.50 }
    ]
  },
  {
    "id": "ESC070",
    "categoria": "escolar",
    "nombre": "CINTA ANTIDESLIZANTE IVY GRIP TAPE AJ3357V-200",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC070.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 117,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "ESC071",
    "categoria": "escolar",
    "nombre": "RESALTADOR AMARILLO X6 MER-1416",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC071.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 150,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 4.00}
    ]
  },
  {
    "id": "ESC072",
    "categoria": "escolar",
    "nombre": "PERFORADOR MERCYFAN MER-1511",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC072.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 66,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "ESC073",
    "categoria": "escolar",
    "nombre": "PLUMON DE PIZARRA 123 X12 GRO-1170",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC073.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 82,
    "precios": [
      { "tipo": "Unidad", "valor": 12.00 },
      { "tipo": "Mayor", "valor": 9.80 }
    ]
  },
  {
    "id": "ESC074",
    "categoria": "escolar",
    "nombre": "PLUMON DE PIZARRA 123 X6 MER-1167",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC074.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 74,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 4.90 }
    ]
  },
  {
    "id": "ESC075",
    "categoria": "escolar",
    "nombre": "PÑUMON DE PIZARRA 123 X4 MER-1185",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC075.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 126,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 3.00 }
    ]
  },
  {
    "id": "ESC076",
    "categoria": "escolar",
    "nombre": "CINTA MASKIN DE 2 PULGADAS",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC076.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 138,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 },
      { "tipo": "Caja X24", "valor": 55.00 }
    ]
  },
  {
    "id": "ESC077",
    "categoria": "escolar",
    "nombre": "CINTA MASKING 1 Y 1/2 PULGADAS",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC077.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 92,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 2.00 },
      { "tipo": "Caja X30", "valor": 58.00 }
    ]
  },
  {
    "id": "ESC078",
    "categoria": "escolar",
    "nombre": "CINTA MASKING 1 PULGADA",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC078.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 120,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 },
      { "tipo": "Caja X48", "valor": 62.00 }
    ]
  },
  {
    "id": "ESC079",
    "categoria": "escolar",
    "nombre": "CINTA MASKING 3/4 PULGADAS",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC079.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 86,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Mayor", "valor": 1.00 },
      { "tipo": "Caja X60", "valor": 59.00 }
    ]
  },
  {
    "id": "ESC080",
    "categoria": "escolar",
    "nombre": "CINTA MASKING 1/2 PULGADAS",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC080.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 61,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Mayor", "valor": 0.80 },
    ]
  },
  {
    "id": "ESC081",
    "categoria": "escolar",
    "nombre": "CINTA SCOCH",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC081.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 107,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Docena", "valor": 12.00 }
    ]
  },
  {
    "id": "ESC082",
    "categoria": "escolar",
    "nombre": "PIONER UNIVERSAL A4 PIPA4",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC082.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 95,
    "precios": [
      { "tipo": "Unidad", "valor": 9.00 },
      { "tipo": "Mayor", "valor": 7.50 }
    ]
  },
  {
    "id": "ESC083",
    "categoria": "escolar",
    "nombre": "SKETCH BOOK ANILLADO 26 HOJAS",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC83.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 79,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "ESC084",
    "categoria": "escolar",
    "nombre": "SKETCH BOOK ANILLADO 14 HOJAS GRUESA",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC084.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.2,
    "resenas": 57,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 }
    ]
  },
  {
    "id": "ESC085",
    "categoria": "escolar",
    "nombre": "SET DE ENGRAMPADOR OFFCIE STAPLER 1053",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC085.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 85,
    "precios": [
      { "tipo": "Unidad", "valor": 7.00 },
      { "tipo": "Mayor", "valor": 5.90 }
    ]
  },
  {
    "id": "ESC086",
    "categoria": "escolar",
    "nombre": "REPUESTO DE MINA 863",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC086.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 73,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Caja x60", "valor": 24.00 }
    ]
  },
  {
    "id": "ESC087",
    "categoria": "escolar",
    "nombre": "TAJADOR OSITO DIALE",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC087.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 101,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Docena", "valor": 29.00 }
    ]
  },
  {
    "id": "ESC088",
    "categoria": "escolar",
    "nombre": "TAJADOR LINEAS CON DEPOSITO DTL12-1",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC088.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 90,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Docena", "valor": 15.00 }
    ]
  },
  {
    "id": "ESC089",
    "categoria": "escolar",
    "nombre": "ART BOOK DE COLORES CARTULINA A3 DB-CA320",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC089.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 116,
    "precios": [
      { "tipo": "Unidad", "valor": 9.00 },
      { "tipo": "Mayor", "valor": 7.80 }
    ]
  },
  {
    "id": "ESC090",
    "categoria": "escolar",
    "nombre": "PAPEL HOLOGRAFICO LAMINA EN FRIO PROCOLOR",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC090.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 68,
    "precios": [
      { "tipo": "Unidad", "valor": 16.00 },
      { "tipo": "Mayor", "valor": 14.00 }
    ]
  },
  {
    "id": "ESC091",
    "categoria": "escolar",
    "nombre": "PAPEL FOTOGRAFICO SIN ADHESIVO CBIT 180 GSM",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC091.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 108,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 4.80 }
    ]
  },
  {
    "id": "ESC092",
    "categoria": "escolar",
    "nombre": "VINIL TRANSPERENTE Y BLANCO CBIT",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC092.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.2,
    "resenas": 55,
    "precios": [
      { "tipo": "Unidad", "valor": 28.00 },
      { "tipo": "Mayor", "valor": 24.00}
    ]
  },
  {
    "id": "ESC093",
    "categoria": "escolar",
    "nombre": "COLOR BOOK CARTULINA DE COLORES",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC093.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 93,
    "precios": [
      { "tipo": "Unidad", "valor": 7.00 },
      { "tipo": "Mayor", "valor": 5.90 }
    ]
  },
  {
    "id": "ESC094",
    "categoria": "escolar",
    "nombre": "CUENTOS CLASICOS GRANDE",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC094.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 118,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 },
      { "tipo": "Docena", "valor": 26.00}
    ]
  },
  {
    "id": "ESC095",
    "categoria": "escolar",
    "nombre": "CUENTOS CLASICOS CHICO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC095.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 75,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 },
      { "tipo": "Docena", "valor": 14.50 }
    ]
  },
  {
    "id": "ESC096",
    "categoria": "escolar",
    "nombre": "FANTASY BOOK X25 HOJAS",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC096.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 136,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 4.80 }
    ]
  },
  {
    "id": "ESC097",
    "categoria": "escolar",
    "nombre": "RESALTADORES NEON X4 DRF48-4",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC097.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 83,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.90 }
    ]
  },
  {
    "id": "ESC098",
    "categoria": "escolar",
    "nombre": "CUADERNO ANILLADO EXPLORER A4",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC098.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 102,
    "precios": [
      { "tipo": "Unidad", "valor": 15.00 },
      { "tipo": "Mayor", "valor": 13.50 }
    ]
  },
  {
    "id": "ESC099",
    "categoria": "escolar",
    "nombre": "ROMPECABEZAS CHICO HE1555",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC099.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 94,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.80 }
    ]
  },
  {
    "id": "ESC100",
    "categoria": "escolar",
    "nombre": "CUADERNO MAX X100 HJ",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC100.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 69,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 4.50 },
      { "tipo": "Caja x25", "valor": 100.00}
    ]
  },
  {
    "id": "ESC101",
    "categoria": "escolar",
    "nombre": "ART BOOK LUSTRE A4 DB-PLA420",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC101.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 123,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00},
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
   {
    "id": "ESC102",
    "categoria": "escolar",
    "nombre": "TAJADOR DE METAL 1 HUECO DTA20-1",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC102.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 95,
    "precios": [
      {"tipo":"Unidad","valor":1.00},
      {"tipo":"Caja x20","valor":10.00}
    ]
  },
  {
    "id": "ESC103",
    "categoria": "escolar",
    "nombre": "FORRO FACIL FRPVC10-1",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC103.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 117,
    "precios": [
      {"tipo":"Unidad","valor":6.50},
      {"tipo":"Mayor","valor":5.80}
    ]
  },
  {
    "id": "ESC104",
    "categoria": "escolar",
    "nombre": "AROS X9 DJLCN9",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC104.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 81,
    "precios": [
      {"tipo":"Unidad","valor":10.00},
      {"tipo":"Mayor","valor":8.50}
    ]
  },
  {
    "id": "ESC105",
    "categoria": "escolar",
    "nombre": "AROS X7 DJLCN7",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC105.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 62,
    "precios": [
      {"tipo":"Unidad","valor":6.50},
      {"tipo":"Mayor","valor":5.50}
    ]
  },
  {
    "id": "ESC106",
    "categoria": "escolar",
    "nombre": "PIONER A4 PIA4",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC106.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 124,
    "precios": [
      {"tipo":"Unidad","valor":5.00},
      {"tipo":"Mayor","valor":4.50}
    ]
  },
  {
    "id": "ESC107",
    "categoria": "escolar",
    "nombre": "CORRECTOR X2 MERCYFAN 7ML VERDE",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC107.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 92,
    "precios": [
      {"tipo":"Unidad","valor":1.00},
      {"tipo":"Docena","valor":8.50}
    ]
  },
  {
    "id": "ESC108",
    "categoria": "escolar",
    "nombre": "GOMA EN BARRA 40GR GBD-40",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC108.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 76,
    "precios": [
      {"tipo":"Unidad","valor":2.50},
      {"tipo":"Docena","valor":22.80}
    ]
  },
  {
    "id": "ESC109",
    "categoria": "escolar",
    "nombre": "GOMA EN BARRA 21GR CBD21",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC109.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 145,
    "precios": [
      {"tipo":"Unidad","valor":2.00},
      {"tipo":"Docena","valor":14.50}
    ]
  },
  {
    "id": "ESC110",
    "categoria": "escolar",
    "nombre": "FORRO AUTOADHESIVO 3M DFA-3M",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC110.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 88,
    "precios": [
      {"tipo":"Unidad","valor":4.50},
      {"tipo":"Mayor","valor":3.80}
    ]
  },
  {
    "id": "ESC111",
    "categoria": "escolar",
    "nombre": "FORRO AUTOADHESIVO 1.5M DFA-1.5M",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC111.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 109,
    "precios": [
      {"tipo":"Unidad","valor":3.00},
      {"tipo":"Mayor","valor":2.50}
    ]
  },
  {
    "id": "ESC112",
    "categoria": "escolar",
    "nombre": "MARCADOR DE PIZARRA JUMBO 123 MAX DMJ123",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC112.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 137,
    "precios": [
      {"tipo":"Unidad","valor":1.50},
      {"tipo":"Docena","valor":10.00}
    ]
  },
  {
    "id": "ESC113",
    "categoria": "escolar",
    "nombre": "LAPICES JUMBO 2B DL-J2B",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC113.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 119,
    "precios": [
      {"tipo":"Unidad","valor":10.00},
      {"tipo":"Mayor","valor":8.50}
    ]
  },
  {
    "id": "ESC114",
    "categoria": "escolar",
    "nombre": "LAPICES DE COLOR X72 DC-EC72",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC114.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 84,
    "precios": [
      {"tipo":"Unidad","valor":28.00},
      {"tipo":"Mayor","valor":24.90}
    ]
  },
  {
    "id": "ESC115",
    "categoria": "escolar",
    "nombre": "PINCEL ARTIST BRUSH PINB6",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC115.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 101,
    "precios": [
      {"tipo":"Unidad","valor":5.00},
      {"tipo":"Mayor","valor":4.50}
    ]
  },
  {
    "id": "ESC116",
    "categoria": "escolar",
    "nombre": "GOMA EN BARRA 9GR CBD-9",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC116.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 71,
    "precios": [
      {"tipo":"Unidad","valor":8.50},
      {"tipo":"Mayor","valor":7.50}
    ]
  },
  {
    "id": "ESC117",
    "categoria": "escolar",
    "nombre": "BOLIGRAFO SEMI GEL X50 S060-50",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC117.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 128,
    "precios": [
      {"tipo":"Unidad","valor":1.00},
      {"tipo":"Caja  x50","valor":16.90}
    ]
  },
  {
    "id": "ESC118",
    "categoria": "escolar",
    "nombre": "MARCADOR PERMANENTE JUMBO 23 DP-23",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC118.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 104,
    "precios": [
      {"tipo":"Unidad","valor":1.00},
      {"tipo":"Docena","valor":7.90}
    ]
  },
  {
    "id": "ESC119",
    "categoria": "escolar",
    "nombre": "LAPICES TECNICOS X24 PROF24",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC119.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 89,
    "precios": [
      {"tipo":"Unidad","valor":16.00},
      {"tipo":"Mayor","valor":13.90}
    ]
  },
  {
    "id": "ESC120",
    "categoria": "escolar",
    "nombre": "PERFORADOR METALICO DDC-01",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC120.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 58,
    "precios": [
      {"tipo":"Unidad","valor":6.00},
      {"tipo":"Mayor","valor":4.90}
    ]
  },
  {
    "id": "ESC121",
    "categoria": "escolar",
    "nombre": "FORRO OFICIO FROF5-25",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC121.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 112,
    "precios": [
      {"tipo":"Unidad","valor":8.00},
      {"tipo":"Mayor","valor":6.80}
    ]
  },
  {
    "id": "ESC122",
    "categoria": "escolar",
    "nombre": "TABLERO DE CALCULO DJDAG30",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC122.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 121,
    "precios": [
      {"tipo":"Unidad","valor":14.00},
      {"tipo":"Mayor","valor":11.90}
    ]
  },
  {
    "id": "ESC124",
    "categoria": "escolar",
    "nombre": "COLORES GF DURA MAS 718-12",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC123.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 87,
    "precios": [
      {"tipo":"Unidad","valor":2.50},
      {"tipo":"Mayor","valor":1.80}
    ]
  },
  {
    "id": "ESC125",
    "categoria": "escolar",
    "nombre": "VINIFORRO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC125.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 148,
    "precios": [
      {"tipo":"Unidad","valor":5.00},
      {"tipo":"Mayor","valor":4.50}
    ]
  },
  {
    "id": "ESC126",
    "categoria": "escolar",
    "nombre": "MICA DIALE PDA460-10",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC126.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 67,
    "precios": [
      {"tipo":"Unidad","valor":5.50},
      {"tipo":"Mayor","valor":4.00},
      {"tipo":"Caja x50","valor":180.00}
    ]
  },
  {
    "id": "ESC127",
    "categoria": "escolar",
    "nombre": "FOLDER PLASTIFICADO MERCYFAN",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC127.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 82,
    "precios": [
      {"tipo":"Unidad","valor":4.50},
      {"tipo":"Mayor","valor":3.80}
    ]
  },
  {
    "id": "ESC128",
    "categoria": "escolar",
    "nombre": "CUADERNO K-POP A4",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC128.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 126,
    "precios": [
      {"tipo":"Unidad","valor":3.50},
      {"tipo":"Mayor","valor":3.00}
    ]
  },
  {
    "id": "ESC129",
    "categoria": "escolar",
    "nombre": "SILICONA 100ML VIKINGO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC129.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 143,
    "precios": [
      {"tipo":"Unidad","valor":3.00},
      {"tipo":"Mayor","valor":2.50},
      {"tipo":"Caja x96","valor":220.00}
    ]
  },
  {
    "id": "ESC130",
    "categoria": "escolar",
    "nombre": "COLA SINTETICA 125GM VIKINGO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC130.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 108,
    "precios": [
      {"tipo":"Unidad","valor":2.00},
      {"tipo":"Mayor","valor":1.50},
      {"tipo":"Caja x144","valor":199.00}
    ]
  },
  {
    "id": "ESC131",
    "categoria": "escolar",
    "nombre": "TAJADOR DE METAL VIKINGO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC131.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 90,
    "precios": [
      {"tipo":"Unidad","valor":1.50},
      {"tipo":"Docena","valor":12.00}
    ]
  },
  {
    "id": "ESC132",
    "categoria": "escolar",
    "nombre": "COLORES LARGAS X12 VIKINGO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC132.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 64,
    "precios": [
      {"tipo":"Unidad","valor":5.00},
      {"tipo":"Mayor","valor":4.50}
    ]
  },
  {
    "id": "ESC133",
    "categoria": "escolar",
    "nombre": "LAPIZ CHEQUEO VIKINGO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC133.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 55,
    "precios": [
      {"tipo":"Unidad","valor":4.50},
      {"tipo":"Mayor","valor":3.80}
    ]
  },
  {
    "id": "ESC134",
    "categoria": "escolar",
    "nombre": "COLORES LARGOS X36 VIKINGO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC134.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 73,
    "precios": [
      {"tipo":"Unidad","valor":23.00},
      {"tipo":"Mayor","valor":19.00}
    ]
  },
  {
    "id": "ESC135",
    "categoria": "escolar",
    "nombre": "TIJERA ESCOLAR VIKINGO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC135.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 134,
    "precios": [
      {"tipo":"Unidad","valor":1.50},
      {"tipo":"Docena","valor":13.50}
    ]
  },
  {
    "id": "ESC136",
    "categoria": "escolar",
    "nombre": "FOLDER GUSANITO OFICIO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC136.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 118,
    "precios": [
      {"tipo":"Unidad","valor":6.50},
      {"tipo":"Mayor","valor":6.50}
    ]
  },
  {
    "id": "ESC137",
    "categoria": "escolar",
    "nombre": "GOMA EN BARRA 21GM FABER CASTELL",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC137.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 99,
    "precios": [
      {"tipo":"Unidad","valor":2.50},
      {"tipo":"Docena","valor":23.50}
    ]
  },
  {
    "id": "ESC138",
    "categoria": "escolar",
    "nombre": "CORRECTOR 9ML FABER CASTELL",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC138.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 86,
    "precios": [
      {"tipo":"Unidad","valor":2.00},
      {"tipo":"Docena","valor":17.00}
    ]
  },
  {
    "id": "ESC139",
    "categoria": "escolar",
    "nombre": "COLORES FABER CASTELL X12",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC139.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 60,
    "precios": [
      {"tipo":"Unidad","valor":7.00},
      {"tipo":"Mayor","valor":5.50},
      {"tipo":"Caja x96", "valor":485.00}
    ]
  },
  {
    "id": "ESC140",
    "categoria": "escolar",
    "nombre": "APU MERCYFAN",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC140.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 102,
    "precios": [
      {"tipo":"Unidad","valor":1.50},
      {"tipo":"Docena","valor":16.90}
    ]
  },
  {
    "id": "ESC141",
    "categoria": "escolar",
    "nombre": "SET DE ESCUADRA ACRILICA X5 MER-2407",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC141.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 52,
    "precios": [
      {"tipo":"Unidad","valor":2.50},
      {"tipo":"Mayor","valor":1.90}
    ]
  },
  {
    "id": "ESC142",
    "categoria": "escolar",
    "nombre": "TEMPERA DIALE 30ML",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC142.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 111,
    "precios": [
      {"tipo":"Unidad","valor":1.00},
      {"tipo":"Caja x30","valor":24.00}
    ]
  },
  {
    "id": "ESC143",
    "categoria": "escolar",
    "nombre": "KIT DE PEGAMENTOS CD-60-3021",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC143.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 130,
    "precios": [
      {"tipo":"Unidad","valor":3.50},
      {"tipo":"Mayor","valor":3.00}
    ]
  },
  {
    "id": "ESC144",
    "categoria": "escolar",
    "nombre": "TABLA PARA PUNZAR CON REGALO DITPA4",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC145.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 65,
    "precios": [
      {"tipo":"Unidad","valor":4.00},
      {"tipo":"Mayor","valor":3.50}
    ]
  },
  {
    "id": "ESC145",
    "categoria": "escolar",
    "nombre": "COLA SINTETICA ESCOLAR CD-250",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC146.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 59,
    "precios": [
      {"tipo":"Unidad","valor":3.50},
      {"tipo":"Docena","valor":2.80},
      {"tipo":"Caja x24","valor":60.00}
    ]
  },
  {
    "id": "ESC146",
    "categoria": "escolar",
    "nombre": "COLA SINTETICA ESCOLAR 30ML CD-30",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC147.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 57,
    "precios": [
      {"tipo":"Unidad","valor":1.00},
      {"tipo":"Docena","valor":9.50},
      {"tipo":"Caja x144","valor":95.00}
    ]
  },
  {
    "id": "ESC147",
    "categoria": "escolar",
    "nombre": "LAPICES SEMI GRASO D-SGR12",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC148.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 50,
    "precios": [
      {"tipo":"Unidad","valor":1.00},
      {"tipo":"Caja x12","valor":9.00}
    ]
  },
  {
    "id": "ESC148",
    "categoria": "escolar",
    "nombre": "BORRADOR BICOLOR GRANDE DB-BGC40",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC149.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 103,
    "precios": [
      {"tipo":"Unidad","valor":1.00},
      {"tipo":"Caja x40","valor":13.00}
    ]
  },
  {
    "id": "ESC149",
    "categoria": "escolar",
    "nombre": "COLA SINTETICA ESCOLAR 60ML CD-60",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC150.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 79,
    "precios": [
      {"tipo":"Unidad","valor":1.50},
      {"tipo":"Mayor","valor":1.00},
      {"tipo":"Caja x96","valor":82.00}
    ]
  },
  {
    "id": "ESC150",
    "categoria": "escolar",
    "nombre": "COLA SINTETICA 143ML CD-143-8",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC151.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 61,
    "precios": [
      {"tipo":"Unidad","valor":4.00},
      {"tipo":"Mayor","valor":3.50},
      {"tipo":"Caja x48","valor":158.00}
    ]
  },
  {
    "id": "ESC151",
    "categoria": "escolar",
    "nombre": "PLASTILINA JUMBO DIALE PDJ12-5",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC152.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 106,
    "precios": [
      {"tipo":"Unidad","valor":3.50},
      {"tipo":"Mayor","valor":3.00}
    ]
  },
  {
    "id": "ESC152",
    "categoria": "escolar",
    "nombre": "LAPICES GRASO DL-GRS12",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC153.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 122,
    "precios": [
      {"tipo":"Unidad","valor":1.00},
      {"tipo":"Caja x12","valor":7.50}
    ]
  },
   {
    "id": "ESC153",
    "categoria": "escolar",
    "nombre": "ROMPECABEZA PLANO DJDRIP1",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC154.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 114,
    "precios": [
      {"tipo":"Unidad","valor":6.00},
      {"tipo":"Mayor","valor":4.90}
    ]
  },
  {
    "id": "ESC154",
    "categoria": "escolar",
    "nombre": "CINTA METRICADCMJ12-1",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC155.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 126,
    "precios": [
      {"tipo":"Unidad","valor":1.00},
      {"tipo":"Caja x12","valor":6.00}
    ]
  },
  {
    "id": "ESC155",
    "categoria": "escolar",
    "nombre": "PAPEL FOTOGRAFICO BRILLANTE PFD20-1",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC156.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 63,
    "precios": [
      {"tipo":"Unidad","valor":5.80},
      {"tipo":"Mayor","valor":4.80}
    ]
  },
  {
    "id": "ESC156",
    "categoria": "escolar",
    "nombre": "PEPEL FOTOGRAFICO ADHESIVO PFDA20-1",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC157.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 108,
    "precios": [
      {"tipo":"Unidad","valor":7.50},
      {"tipo":"Mayor","valor":6.50}
    ]
  },
  {
    "id": "ESC157",
    "categoria": "escolar",
    "nombre": "CUDERNO SURCO A5",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC158.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 94,
    "precios": [
      {"tipo":"Unidad","valor":3.00},
      {"tipo":"Mayor","valor":2.50},
      {"tipo":"Caja x50","valor":112.00}
    ]
  },
  {
    "id": "ESC158",
    "categoria": "escolar",
    "nombre": "CUADERNO DIALE LIBERA TU TALENTO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC159.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 132,
    "precios": [
      {"tipo":"Unidad","valor":3.30},
      {"tipo":"Mayor","valor":3.00},
      {"tipo":"Caja x50","valor":144.00}
    ]
  },
  {
    "id": "ESC159",
    "categoria": "escolar",
    "nombre": "CUADERNO JUSTUS SOLIDO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC160.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 121,
    "precios": [
      {"tipo":"Unidad","valor":4.00},
      {"tipo":"Mayor","valor":3.80},
      {"tipo":"CAJA x50","valor":185.00}
    ]
  },
  {
    "id": "ESC160",
    "categoria": "escolar",
    "nombre": "CUADERNO LORO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC161.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 59,
    "precios": [
      {"tipo":"Unidad","valor":5.00},
      {"tipo":"Mayor","valor":4.80},
      {"tipo":"Caja x50","valor":225.00}
    ]
  },
  {
    "id": "ESC161",
    "categoria": "escolar",
    "nombre": "PAPEL CONTAC ADHESIVO 45CM X 1.5M MERCYFAN",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC162.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 82,
    "precios": [
      {"tipo":"Unidad","valor":3.00},
      {"tipo":"Mayor","valor":2.50},
      {"tipo":"Caja x60","valor":138.00}
    ]
  },
  {
    "id": "ESC162",
    "categoria": "escolar",
    "nombre": "LAPIZ BICOLOR JUMBO MERCYFAN",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC163.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 98,
    "precios": [
      {"tipo":"Unidad","valor":1.00},
      {"tipo":"Docena","valor":7.90}
    ]
  },
  {
    "id": "ESC163",
    "categoria": "escolar",
    "nombre": "LAPIZ CHEQUEO MERCYFAN",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC164.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 87,
    "precios": [
      {"tipo":"Unidad","valor":4.50},
      {"tipo":"Docena","valor":3.80}
    ]
  },
  {
    "id": "ESC164",
    "categoria": "escolar",
    "nombre": "GOMA EN BARRA 21GR MERCYFAN",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC165.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 68,
    "precios": [
      {"tipo":"Unidad","valor":1.00},
      {"tipo":"Caja x24","valor":18.50}
    ]
  },
  {
    "id": "ESC165",
    "categoria": "escolar",
    "nombre": "REGLA ACRILICO 20CM MERCYFAN",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC166.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 107,
    "precios": [
      {"tipo":"Unidad","valor":0.50},
      {"tipo":"Caja x50","valor":14.00}
    ]
  },
  {
    "id": "ESC166",
    "categoria": "escolar",
    "nombre": "CORRECTOR CHICO 5ML",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC167.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 93,
    "precios": [
      {"tipo":"Unidad","valor":1.00},
      {"tipo":"Docena","valor":7.50}
    ]
  },
  {
    "id": "ESC167",
    "categoria": "escolar",
    "nombre": "CORRECTOR X2 MERCYFAN 7ML VERDE",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC168.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 85,
    "precios": [
      {"tipo":"Unidad","valor":2.00},
      {"tipo":"Caja x15","valor":22.00}
    ]
  },
  {
    "id": "ESC168",
    "categoria": "escolar",
    "nombre": "PAPEL COMETA",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC169.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 130,
    "precios": [
      {"tipo":"Unidad","valor":0.50},
      {"tipo":"Mayor","valor":3.90},
      {"tipo":"Ciento","valor":30.00}
    ]
  },
  {
    "id": "ESC169",
    "categoria": "escolar",
    "nombre": "TEMPERAS SET X7 TD-07",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC170.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 112,
    "precios": [
      {"tipo":"Unidad","valor":6.00},
      {"tipo":"Mayor","valor":5.50},
      {"tipo":"Caja X36","valor":175.00}
    ]
  },
  {
    "id": "ESC170",
    "categoria": "escolar",
    "nombre": "SILICONA 100ML SJG-100",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC171.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 103,
    "precios": [
      {"tipo":"Unidad","valor":2.60},
      {"tipo":"Mayor","valor":2.30}
    ]
  },
  {
    "id": "ESC171",
    "categoria": "escolar",
    "nombre": "SILICONA 250ML SJG-250",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC172.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 92,
    "precios": [
      {"tipo":"Unidad","valor":4.50},
      {"tipo":"Mayor","valor":3.90},
      {"tipo":"Caja x72","valor":260.00}
    ]
  },
  {
    "id": "ESC172",
    "categoria": "escolar",
    "nombre": "CUADERNO ANILLADO A5 MARBOOK",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC173.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 71,
    "precios": [
      {"tipo":"Unidad","valor":8.50},
      {"tipo":"Mayor","valor":7.50}
    ]
  },
  {
    "id": "ESC173",
    "categoria": "escolar",
    "nombre": "CUADERNO ANILLADO A4 MARBOOK",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC174.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 105,
    "precios": [
      {"tipo":"Unidad","valor":15.50},
      {"tipo":"Mayor","valor":13.50}
    ]
  },
  {
    "id": "ESC174",
    "categoria": "escolar",
    "nombre": "GOMA EN BARRA 21G ARTESCO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC175.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 58,
    "precios": [
      {"tipo":"Unidad","valor":2.50},
      {"tipo":"Docena","valor":28.50}
    ]
  },
  {
    "id": "ESC175",
    "categoria": "escolar",
    "nombre": "ART BOOK ARCOIRIS 20 HOJAS BD-A120",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC176.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 89,
    "precios": [
      {"tipo":"Unidad","valor":3.00},
      {"tipo":"Mayor","valor":2.50}
    ]
  },
  {
    "id": "ESC176",
    "categoria": "escolar",
    "nombre": "MARCADOR PARA PIZARRA BLANCA DP-123",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC177.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 84,
    "precios": [
      {"tipo":"Unidad","valor":1.50},
      {"tipo":"Docena","valor":9.50}
    ]
  },
  {
    "id": "ESC177",
    "categoria": "escolar",
    "nombre": "PLUMONES JUMBO DIALE 47 DPR12-47",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC178.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 99,
    "precios": [
      {"tipo":"Unidad","valor":1.00},
      {"tipo":"Docena","valor":8.00}
    ]
  },
  {
    "id": "ESC178",
    "categoria": "escolar",
    "nombre": "BLOCKS DE COLORES DJDYC54",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC179.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 62,
    "precios": [
      {"tipo":"Unidad","valor":12.00},
      {"tipo":"Mayor","valor":9.90}
    ]
  },
  {
    "id": "ESC179",
    "categoria": "escolar",
    "nombre": "LAPICES 2B AMARILLO DJ-AMD12",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC180.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 148,
    "precios": [
      {"tipo":"Unidad","valor":4.00},
      {"tipo":"Mayor","valor":3.50}
    ]
  },
  {
    "id": "ESC180",
    "categoria": "escolar",
    "nombre": "FORRO PLASTICO A4 FRA45-48",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC181.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 57,
    "precios": [
      {"tipo":"Unidad","valor":5.00},
      {"tipo":"Mayor","valor":4.00}
    ]
  },
  {
    "id": "ESC181",
    "categoria": "escolar",
    "nombre": "COMPAS ESCOLAR COM6-1",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC182.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 109,
    "precios": [
      {"tipo":"Unidad","valor":2.00},
      {"tipo":"Paquete x6","valor":9.50}
    ]
  },
  {
    "id": "ESC182",
    "categoria": "escolar",
    "nombre": "PLASTILINA JUMBO PDJ-12",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC183.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 113,
    "precios": [
      {"tipo":"Unidad","valor":3.50},
      {"tipo":"Mayor","valor":2.90}
    ]
  },
  {
    "id": "ESC183",
    "categoria": "escolar",
    "nombre": "12 LAPICES BICOLOR DL-BCD12",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC184.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 96,
    "precios": [
      {"tipo":"Unidad","valor":5.00},
      {"tipo":"Mayor","valor":4.50}
    ]
  },
  {
    "id": "ESC184",
    "categoria": "escolar",
    "nombre": "12 LAPICES GRAFITO 2B DL-GD12",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC185.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 54,
    "precios": [
      {"tipo":"Unidad","valor":4.00},
      {"tipo":"Mayor","valor":3.50}
    ]
  },
  {
    "id": "ESC185",
    "categoria": "escolar",
    "nombre": "24 LAPICES DE COLOR DC-EC24",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC186.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 69,
    "precios": [
      {"tipo":"Unidad","valor":10.00},
      {"tipo":"Mayor","valor":8.80}
    ]
  },
  {
    "id": "ESC186",
    "categoria": "escolar",
    "nombre": "LAPIZ CORRECTOR PLASTICO DCPP-005",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC187.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 53,
    "precios": [
      {"tipo":"Unidad","valor":1.00},
      {"tipo":"Caja x30","valor":21.90}
    ]
  },
  {
    "id": "ESC187",
    "categoria": "escolar",
    "nombre": "LAPIZ CORRECTOR ROJO DCPM005",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC188.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 60,
    "precios": [
      {"tipo":"Unidad","valor":1.50},
      {"tipo":"Docena","valor":11.90}
    ]
  },
  {
    "id": "ESC188",
    "categoria": "escolar",
    "nombre": "BLOCKS DE MADERA DJDYN54",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC189.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 90,
    "precios": [
      {"tipo":"Unidad","valor":11.00},
      {"tipo":"Mayor","valor":9.50}
    ]
  },
  {
    "id": "ESC189",
    "categoria": "escolar",
    "nombre": "BORRADOR NEGRO X20 BD-NGG20",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC190.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 101,
    "precios": [
      {"tipo":"Unidad","valor":10.00},
      {"tipo":"Mayor","valor":8.50}
    ]
  },
  {
    "id": "ESC190",
    "categoria": "escolar",
    "nombre": "POMPONES",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC191.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 108,
    "precios": [
      {"tipo":"Unidad","valor":2.50},
      {"tipo":"Mayor","valor":1.90},
      {"tipo":"Caja x144","valor":249.00}
    ]
  },
  {
    "id": "ESC191",
    "categoria": "escolar",
    "nombre": "REGLA FLEXIBLE 30CM",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC192.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 124,
    "precios": [
      {"tipo":"Unidad","valor":1.50},
      {"tipo":"Caja X24","valor":20.00}
    ]
  },
  {
    "id": "ESC192",
    "categoria": "escolar",
    "nombre": "REGLA CUADROS 30 CM",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC193.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 70,
    "precios": [
      {"tipo":"Unidad","valor":1.00},
      {"tipo":"Docena","valor":6.00}
    ]
  },
  {
    "id": "ESC193",
    "categoria": "escolar",
    "nombre": "ESCUADRA X4 COMBO SET",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC194.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 95,
    "precios": [
      {"tipo":"Unidad","valor":1.50},
      {"tipo":"Docena","valor":12.00}
    ]
  },
  {
    "id": "ESC194",
    "categoria": "escolar",
    "nombre": "SILICONA EN BARRA DIALE",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC195.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 104,
    "precios": [
      {"tipo":"Unidad","valor":15.50},
      {"tipo":"Mayor","valor":14.50}
    ]
  },
  {
    "id": "ESC195",
    "categoria": "escolar",
    "nombre": "SILICONA EN BARRA TAIWAN - DELUXE",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC196.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 110,
    "precios": [
      {"tipo":"Unidad","valor":15.00},
      {"tipo":"Mayor","valor":13.90}
    ]
  },
  {
    "id": "ESC196",
    "categoria": "escolar",
    "nombre": "DISPENSADOR DE CINTA DELUXE T20051",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC197.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 106,
    "precios": [
      {"tipo":"Unidad","valor":3.50},
      {"tipo":"Mayor","valor":2.80}
    ]
  },
  {
    "id": "ESC197",
    "categoria": "escolar",
    "nombre": "ENGRAMPADOR BAISHUN BS-1048-2",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC198.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 56,
    "precios": [
      {"tipo":"Unidad","valor":3.00},
      {"tipo":"Mayor","valor":2.50}
    ]
  },
  {
    "id": "ESC198",
    "categoria": "escolar",
    "nombre": "REGLA METAL 30CM 390142",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC199.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 127,
    "precios": [
      {"tipo":"Unidad","valor":1.00},
      {"tipo":"Docena","valor":7.00}
    ]
  },
  {
    "id": "ESC199",
    "categoria": "escolar",
    "nombre": "TABLERO TRALALERO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC200.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 61,
    "precios": [
      {"tipo":"Unidad","valor":2.50},
      {"tipo":"Mayor","valor":2.00},
      {"tipo":"Docena","valor":22.00}
    ]
  },
  {
    "id": "ESC200",
    "categoria": "escolar",
    "nombre": "PELOTA DE TRAPO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC201.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 88,
    "precios": [
      {"tipo":"Mayor","valor":1.00},
      {"tipo":"Docena","valor":8.50}
    ]
  },
  {
    "id": "ESC201",
    "categoria": "escolar",
    "nombre": "ULA ULA ARMABLE",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC202.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 50,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "ESC202",
    "categoria": "escolar",
    "nombre": "CUADERNO ANILLADO A4",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC203.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 91,
    "precios": [
      {"tipo":"Unidad","valor":11.50},
      {"tipo":"Mayor","valor":9.90},
      {"tipo":"Caja x24","valor":230.00}
    ]
  },
   {
    "id": "ESC203",
    "categoria": "escolar",
    "nombre": "MOLDE DE LETRA #6",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC204.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 91,
    "precios": [
      {"tipo": "Unidad", "valor": 3.00},
      {"tipo":"Docena","valor":26.50}
    ]
  },
  {
    "id": "ESC204",
    "categoria": "escolar",
    "nombre": "MOLDE DE LETRA #5",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC205.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 108,
    "precios": [
      {
        "tipo": "Unidad",
        "valor": 1.80
      },
      {
        "tipo": "Docena",
        "valor": 19.00
      }
    ]
  },
  {
    "id": "ESC205",
    "categoria": "escolar",
    "nombre": "LAPICERO RETRACTIL 10 EN 1",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC206.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 144,
    "precios": [
      {
        "tipo": "Unidad",
        "valor": 3.00
      },
      {
        "tipo": "Mayor",
        "valor": 2.50
      },
      {"tipo":"Box x36","valor":70.00}
    ]
  },
  {
    "id": "ESC206",
    "categoria": "escolar",
    "nombre": "LAPICERO LABUBU",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC207.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 73,
    "precios": [
      {
        "tipo": "Unidad",
        "valor": 0.50
      },
      {
        "tipo": "Mayor",
        "valor":1.50
      },
      {
        "tipo": "Box x48",
        "valor":62.00
      }
    ]
  },
  {
    "id": "ESC207",
    "categoria": "escolar",
    "nombre": "BAJALENGUAS DE COLORES",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC208.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 120,
    "precios": [
      {
        "tipo": "Unidad",
        "valor": 1.00
      },
      {"tipo": "PQTE X6PCS","valor" : 4.80}
    ]
  },
  {
    "id": "ESC208",
    "categoria": "escolar",
    "nombre": "LAPIZ INFINITO PANDA",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC209.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 98,
    "precios": [
      {
        "tipo": "Unidad",
        "valor": 3.00
      },
      { "tipo": "Mayor", "valor":2.50}
    ]
  },
  {
    "id": "ESC209",
    "categoria": "escolar",
    "nombre": "LAPICERO TINTA GEL",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC210.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 68,
    "precios": [
      {
        "tipo": "Unidad",
        "valor": 4.50
      },
      {"tipo": "Mayor","valor":3.80}
    ]
  },
    {
    "id": "ESC210",
    "categoria": "escolar",
    "nombre": "LAPICERO RETRACTIL 10 EN 1",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC211.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 63,
    "precios": [
      {
        "tipo": "Unidad",
        "valor": 4.50
      },
      { "tipo": "Mayor", "valor": 3.90},
      {"tipo": "Box x36", "valor" : 131.00 }
    ]
  },
    {
    "id": "ESC211",
    "categoria": "escolar",
    "nombre": "CHENILLE CHNC100 DIALE",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC212.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 85,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50},
      { "tipo": "Mayor", "valor": 3.90 }
    ]
  },
    {
    "id": "ESC212",
    "categoria": "escolar",
    "nombre": "TIJERA CON FORMAS",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC213.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 83,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50},
      { "tipo": "Docena", "valor": 14.50 }
    ]
  },
    {
    "id": "ESC213",
    "categoria": "escolar",
    "nombre": "ARCHIVADOR DE COLORES",
    "descripcion": "DISPONIBLE SOLO EL COLOR NEGRO",
    "imagen": "IMAGENES ESCOLAR/IMGESC214.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 89,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00},
      { "tipo": "Mayor", "valor": 5.00 }
    ]
  },
    {
    "id": "ESC215",
    "categoria": "escolar",
    "nombre": "CINTA DE AGUA GRUESA",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC215.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 119,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50},
      { "tipo": "Mayor", "valor": 1.80 }
    ]
  },
    {
    "id": "ESC216",
    "categoria": "escolar",
    "nombre": "REDALTADOR X6 MER-1404 MERCYFAN",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC216.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 59,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00},
      { "tipo": "Mayor", "valor": 4.00 }
    ]
  },
    {
    "id": "ESC217",
    "categoria": "escolar",
    "nombre": "RESALTADOR PASTEL X6 MER-1410 MERCYFAN",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC217.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 83,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50},
      { "tipo": "Mayor", "valor": 4.50 },
    ]
  },
    {
    "id": "ESC218",
    "categoria": "escolar",
    "nombre": "GOMA EN BARRA 21G",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC218.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 86,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00},
      { "tipo": "Box x24", "valor": 16.50 }
    ]
  },
    {
    "id": "ESC219",
    "categoria": "escolar",
    "nombre": "GOMA EN BARRA 36GR",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC219.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 73,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50},
      { "tipo": "Box x12", "valor": 13.50 }
    ]
  },
    {
    "id": "ESC220",
    "categoria": "escolar",
    "nombre": "LAPICERO BORRABLE ROVIS",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC220.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas":75,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50},
      { "tipo": "Docena", "valor": 12.00 }
    ]
  },
    {
    "id": "ESC221",
    "categoria": "escolar",
    "nombre": "PLUMON RECARGABLE DE PIZARRA DP-126",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC221.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 53,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50},
      { "tipo": "Caja x50", "valor": 11.00 }
    ]
  },
    {
    "id": "ESC222",
    "categoria": "escolar",
    "nombre": "CINTA FRAGIL",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC222.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 175,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50},
      { "tipo": "Docena", "valor": 24.00 }
    ]
  },
    {
    "id": "ESC223",
    "categoria": "escolar",
    "nombre": "ESCUADRA GEOMETRICO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC223.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 76,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00},
      { "tipo": "Mayor", "valor": 3.00 }
    ]
  },
    {
    "id": "ESC224",
    "categoria": "escolar",
    "nombre": "FOLDER PLASTIFICADO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC224.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 69,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50},
      { "tipo": "Mayor", "valor": 3.00 }
    ]
  },
    {
    "id": "ESC225",
    "categoria": "escolar",
    "nombre": "TIJERA CON REBOTE",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC225.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 35,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00},
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
    {
    "id": "ESC226",
    "categoria": "escolar",
    "nombre": "BORRADOR DIALE X30",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC226.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 65,
    "precios": [
      { "tipo": "Unidad", "valor": 9.50},
      { "tipo": "Mayor", "valor": 8.50 }
    ]
  },
    {
    "id": "ESC227",
    "categoria": "escolar",
    "nombre": "DISPENSADOR HUESITO DIALE",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC227.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 89,
    "precios": [
      { "tipo": "Unidad", "valor": 6.50},
      { "tipo": "Mayor", "valor": 5.50 }
    ]
  },
    {
    "id": "ESC228",
    "categoria": "escolar",
    "nombre": "MASKIN DE COLORES",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC228.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 78,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50},
      { "tipo": "Mayor", "valor": 3.90 }
    ]
  },
    {
    "id": "ESC229",
    "categoria": "escolar",
    "nombre": "LAPIZ 2B MERCYFAN",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC229.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 103,
    "precios": [
      { "tipo": "Unidad", "valor": 3.80},
      { "tipo": "Mayor", "valor": 3.20 }
    ]
  },
    {
    "id": "ESC230",
    "categoria": "escolar",
    "nombre": "LAPÍCERO FABER CASTELL TRILUX 032",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC230.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 126,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00},
      { "tipo": "Caja x50", "valor": 25.00 }
    ]
  },
    {
    "id": "ESC231",
    "categoria": "escolar",
    "nombre": "FOLDER GUSANITO A4",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC231.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 102,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00},
      { "tipo": "Mayor", "valor": 5.00 }
    ]
  },
    {
    "id": "ESC232",
    "categoria": "escolar",
    "nombre": "BOLIGRAFICO DBP-S DIALE",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC232.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 109,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00},
      { "tipo": "Caja x12", "valor": 8.00 }
    ]
  },
    {
    "id": "ESC233",
    "categoria": "escolar",
    "nombre": "TIZA BLANCA",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC233.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 161,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00},
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
    {
    "id": "ESC234",
    "categoria": "escolar",
    "nombre": "TINTA DE PLUMON DIALE",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC234.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 98,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00},
      { "tipo": "Mayor", "valor": 2.50 },
      { "tipo": "Docena", "valor": 28.00}
    ]
  },
    {
    "id": "ESC235",
    "categoria": "escolar",
    "nombre": "LAPIZ CHEQUEO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC235.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 143,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00},
      { "tipo": "Caja x12", "valor": 9.50 },
      { "tipo": "x3 Cajas", "valor": 7.90}
    ]
  },
    {
    "id": "ESC236",
    "categoria": "escolar",
    "nombre": "COLORES FABER CASTELL X24",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC236.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 54,
    "precios": [
      { "tipo": "Unidad", "valor": 18.00},
      { "tipo": "Mayor", "valor": 16.00 }
    ]
  },
    {
    "id": "ESC237",
    "categoria": "escolar",
    "nombre": "APU DIALE",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC237.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 121,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00},
      { "tipo": "Docena", "valor": 18.50 }
    ]
  },
    {
    "id": "ESC238",
    "categoria": "escolar",
    "nombre": "PORTATODO",
    "descripcion": "",
    "imagen": "IMAGENES ESCOLAR/IMGESC238.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 109,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00},
      { "tipo": "Mayor", "valor": 4.00 }
    ]
  },
  {
  "id": "ESC239",
  "categoria": "escolar",
  "nombre": "CUADERNO ANILLADO A5",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC239.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.7,
  "resenas": 42,
  "precios": [
    { "tipo": "Unidad", "valor": 6.50},
    { "tipo": "Mayor", "valor": 5.50 },
    { "tipo": "Caja x48", "valor": 249.00}
  ]
},
{
  "id": "ESC240",
  "categoria": "escolar",
  "nombre": "MICA",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC240.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.3,
  "resenas": 28,
  "precios": [
    { "tipo": "Unidad", "valor": 4.50 },
    { "tipo": "Mayor", "valor":3.80 },
    { "tipo": "Caja x100", "valor": 350.00}
  ]
},
{
  "id": "ESC241",
  "categoria": "escolar",
  "nombre": "LAPICERO MERCYFAN",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC241.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.9,
  "resenas": 61,
  "precios": [
    { "tipo": "Unidad", "valor": 1.00 },
    { "tipo": "Docena", "valor": 8.50 },
    { "tipo": "3 Cajas","valor": 7.50}
  ]
},

{
  "id": "ESC242",
  "categoria": "escolar",
  "nombre": "CINTA DE 15 YARDAS",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC243.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.1,
  "resenas": 19,
  "precios": [
    { "tipo": "Unidad", "valor": 1.00 },
    { "tipo": "Docena", "valor": 6.50 },
    { "tipo": "Caja x120", "valor": 63.00 }
  ]
},
{
  "id": "ESC243",
  "categoria": "escolar",
  "nombre": "CINTA 80 YARDAS",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC244.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.6,
  "resenas": 37,
  "precios": [
    { "tipo": "Unidad", "valor": 2.50 },
    { "tipo": "Mayor", "valor": 2.00 },
    { "tipo": "Docena", "valor": 22.00 },
    { "tipo": "Caja x72", "valor": 119.00 }
  ]
},
{
  "id": "ESC244",
  "categoria": "escolar",
  "nombre": "CINTA 100 YARDAS",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC245.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 3.9,
  "resenas": 14,
  "precios": [
    { "tipo": "Unidad", "valor": 2.00 },
    { "tipo": "Mayor", "valor": 2.50 },
    { "tipo": "Docena", "valor": 27.00 },
    { "tipo": "Caja x72", "valor": 143.00 }
  ]
},
{
  "id": "ESC245",
  "categoria": "escolar",
  "nombre": "CINTA 200 YARDAS",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC246.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.5,
  "resenas": 53,
  "precios": [
    { "tipo": "Unidad", "valor": 3.50 },
    { "tipo": "Mayor", "valor": 3.00 },
    { "tipo": "Docena", "valor": 34.00 },
    { "tipo": "Caja x72", "valor": 200.00 }
  ]
},
{
  "id": "ESC246",
  "categoria": "escolar",
  "nombre": "PLUMON DE PIZARRA",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC247.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.8,
  "resenas": 46,
  "precios": [
    { "tipo": "Unidad", "valor": 1.00 },
    { "tipo": "Docena", "valor": 7.90 },
    { "tipo": "Caja (x100 DOC)", "valor": 6.50 }
  ]
},
{
  "id": "ESC247",
  "categoria": "escolar",
  "nombre": "PLASTILINA FABER CASTELL",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC248.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.2,
  "resenas": 25,
  "precios": [
    { "tipo": "Unidad", "valor": 5.00 },
    { "tipo": "Mayor", "valor": 4.00 },
    { "tipo": "Caja x48", "valor": 178.00 }
  ]
},
{
  "id": "ESC248",
  "categoria": "escolar",
  "nombre": "CUADERNO LUXOR",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC249.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5.0,
  "resenas": 72,
  "precios": [
    { "tipo": "Unidad", "valor": 3.20 },
    { "tipo": "Mayor", "valor": 3.00 },
    { "tipo": "Caja", "valor": 148.00 }
  ]
},
{
  "id": "ESC249",
  "categoria": "escolar",
  "nombre": "CUADERNO DIALE 80 HOJAS",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC250.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.4,
  "resenas": 31,
  "precios": [
    { "tipo": "Unidad", "valor": 4.00 },
    { "tipo": "Mayor", "valor": 3.80 },
    { "tipo": "Caja x50", "valor": 185.00 }
  ]
},
{
  "id": "ESC250",
  "categoria": "escolar",
  "nombre": "CUADERNO LORO 84 HOJAS",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC251.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.0,
  "resenas": 18,
  "precios": [
    { "tipo": "Unidad", "valor": 5.00 },
    { "tipo": "Mayor", "valor": 4.80 },
    { "tipo": "Caja", "valor": 235.00 }
  ]
},
{
  "id": "ESC251",
  "categoria": "escolar",
  "nombre": "COLORES DIALE X12",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC252.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.7,
  "resenas": 64,
  "precios": [
    { "tipo": "Unidad", "valor": 5.00 },
    { "tipo": "Mayor", "valor": 4.00 }
  ]
},
{
  "id": "ESC252",
  "categoria": "escolar",
  "nombre": "LAPICERO DIALE TRIGEL 032",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC253.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.3,
  "resenas": 22,
  "precios": [
    { "tipo": "Unidad", "valor": 0.50 },
    { "tipo": "Caja", "valor": 19.00 },
    { "tipo": "Mayor (3 Cajas)", "valor": 51.00 }
  ]
},
{
  "id": "ESC253",
  "categoria": "escolar",
  "nombre": "TEMPERA DIALE 250 ML TD-250",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC254.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.6,
  "resenas": 39,
  "precios": [
    { "tipo": "Unidad", "valor": 5.00 },
    { "tipo": "Mayor", "valor": 4.00 },
    { "tipo": "Caja x24", "valor": 95.00 }
  ]
},
{
  "id": "ESC254",
  "categoria": "escolar",
  "nombre": "COLORES ESCOLAR MEDIANO GOTITA",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC255.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 3.8,
  "resenas": 11,
  "precios": [
    { "tipo": "Unidad", "valor": 1.00 },
    { "tipo": "Docena", "valor": 6.00 },
    { "tipo": "Caja (x252)", "valor": 120.00 }
  ]
},
{
  "id": "ESC255",
  "categoria": "escolar",
  "nombre": "SUPER GLUE YIMI",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC256.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.9,
  "resenas": 58,
  "precios": [
    { "tipo": "Unidad", "valor": 3.50 },
    { "tipo": "Caja x24", "valor": 75.00 }
  ]
},
{
  "id": "ESC256",
  "categoria": "escolar",
  "nombre": "GOMA SOLIDA",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC257.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.2,
  "resenas": 27,
  "precios": [
    { "tipo": "Caja x50 und", "valor": 12.00 },
    { "tipo": "Mayor (x3 cajas)", "valor": 9.50 },
    { "tipo": "Caja (x45 boxs)", "valor": 420.00 }
  ]
},
{
  "id": "ESC257",
  "categoria": "escolar",
  "nombre": "CRAYONES LQ",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC258.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.5,
  "resenas": 44,
  "precios": [
    { "tipo": "Unidad", "valor": 2.50 },
    { "tipo": "Mayor", "valor": 2.00 }
  ]
},
{
  "id": "ESC258",
  "categoria": "escolar",
  "nombre": "CINTA MASKING",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC259.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.1,
  "resenas": 16,
  "precios": [
    { "tipo": "Unidad", "valor": 1.00 },
    { "tipo": "Mayor", "valor": 0.80 }
  ]
},
{
  "id": "ESC259",
  "categoria": "escolar",
  "nombre": "SILICONA 250ML VIKINGO",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC260.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.8,
  "resenas": 67,
  "precios": [
    { "tipo": "Unidad", "valor": 5.50 },
    { "tipo": "Mayor", "valor": 4.50 },
    { "tipo": "Caja x48", "valor": 216.00 }
  ]
},
{
  "id": "ESC260",
  "categoria": "escolar",
  "nombre": "PLUMON DE PIZARRA VIKINGO",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC261.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.4,
  "resenas": 33,
  "precios": [
    { "tipo": "Unidad", "valor": 1.50 },
    { "tipo": "Docena", "valor": 12.00 }
  ]
},
{
  "id": "ESC261",
  "categoria": "escolar",
  "nombre": "COLA VIKINGO 250ML",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC262.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 3.7,
  "resenas": 9,
  "precios": [
    { "tipo": "Unidad", "valor": 3.00 },
    { "tipo": "Mayor", "valor": 2.50 }
  ]
},
{
  "id": "ESC262",
  "categoria": "escolar",
  "nombre": "PLUMON FIESTA FABER CASTELL",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC263.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.6,
  "resenas": 48,
  "precios": [
    { "tipo": "Unidad", "valor": 6.00 },
    { "tipo": "Mayor", "valor": 5.00 },
    { "tipo": "Caja x96", "valor": 450.00 }
  ]
},
{
  "id": "ESC263",
  "categoria": "escolar",
  "nombre": "FASTERS DE METAL",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC264.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.0,
  "resenas": 21,
  "precios": [
    { "tipo": "Unidad", "valor": 0.50 },
    { "tipo": "Caja (x50 UNDS)", "valor": 3.30 }
  ]
},
{
  "id": "ESC264",
  "categoria": "escolar",
  "nombre": "LAPICERO RETRACTIL KAWAII",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC265.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.9,
  "resenas": 75,
  "precios": [
    { "tipo": "Unidad", "valor": 1.80 },
    { "tipo": "Mayor", "valor": 1.50 }
  ]
},
{
  "id": "ESC265",
  "categoria": "escolar",
  "nombre": "MARCADOR CD",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC266.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.3,
  "resenas": 30,
  "precios": [
    { "tipo": "Unidad", "valor": 1.00 },
    { "tipo": "Docena", "valor": 7.80 }
  ]
},
{
  "id": "ESC266",
  "categoria": "escolar",
  "nombre": "CORRECTOR OVAL",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC267.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.7,
  "resenas": 56,
  "precios": [
    { "tipo": "Unidad", "valor": 1.00 },
    { "tipo": "Docena", "valor": 6.50 }
  ]
},
{
  "id": "ESC267",
  "categoria": "escolar",
  "nombre": "LAPIZ JUMBO X12 MERCYFAN",
  "descripcion": "",
  "imagen": "IMAGENES ESCOLAR/IMGESC266.PNG",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 4.2,
  "resenas": 24,
  "precios": [
    { "tipo": "Unidad", "valor": 1.00 },
    { "tipo": "Caja x12", "valor": 8.50 },
    { "tipo": "3 Cajas","valor": 7.50}
  ]
},

];
