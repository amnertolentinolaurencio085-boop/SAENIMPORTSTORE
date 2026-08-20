/* ================================================
   SAEN IMPORT â€” datos-cocina.js
   CategorÃ­a: Utensilios de Cocina
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

const PRODS_COCINA = [
  {
    "id": "COC001",
    "categoria": "cocina",
    "nombre": "PLATO HONDO CON DISEÃ‘O MO-9815",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC001.png",
    "badge": "Popular",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 124,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.90 }
    ]
  },
  {
    "id": "COC002",
    "categoria": "cocina",
    "nombre": "TAPER DE VIDRIO CON DIVISION GF-3270",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC002.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 138,
    "precios": [
      { "tipo": "Unidad", "valor": 12.50 },
      { "tipo": "Mayor", "valor": 9.90 }
    ]
  },
  {
    "id": "COC003",
    "categoria": "cocina",
    "nombre": "JUEGO DE TAPERES X3 GF-3276",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC003.png",
    "badge": "Destacado",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5.0,
    "resenas": 146,
    "precios": [
      { "tipo": "Unidad", "valor": 21.00 },
      { "tipo": "Mayor", "valor": 17.90 }
    ]
  },
  {
    "id": "COC004",
    "categoria": "cocina",
    "nombre": "SET DE COLADORES 3 PIEZAS WA-5768",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC004.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 88,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 3.90 }
    ]
  },
  {
    "id": "COC005",
    "categoria": "cocina",
    "nombre": "TAZA GRANDE COLORES CA-B26890",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC005.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 73,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 3.00 }
    ]
  },
  {
    "id": "COC006",
    "categoria": "cocina",
    "nombre": "TAZA MAS CUCHARA DE PAPÃ CA-B26803",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC006.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 104,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.80 }
    ]
  },
  {
    "id": "COC007",
    "categoria": "cocina",
    "nombre": "TAZA DE PAPÃ DORADO",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC007.png",
    "badge": "Popular",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 141,
    "precios": [
      { "tipo": "Unidad", "valor": 10.00 },
      { "tipo": "Mayor", "valor": 8.80 }
    ]
  },
  {
    "id": "COC008",
    "categoria": "cocina",
    "nombre": "SARTEN CHAUFERO AJ330183",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC008.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 118,
    "precios": [
      { "tipo": "Unidad", "valor": 15.00 },
      { "tipo": "Mayor", "valor": 13.00 }
    ]
  },
  {
    "id": "COC009",
    "categoria": "cocina",
    "nombre": "SARTEN MAS TENEDOR AJ330021",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC009.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 136,
    "precios": [
      { "tipo": "Unidad", "valor": 18.00 },
      { "tipo": "Mayor", "valor": 15.50 }
    ]
  },
  {
    "id": "COC010",
    "categoria": "cocina",
    "nombre": "RAYADOR AJ330923",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC010.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 67,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "COC011",
    "categoria": "cocina",
    "nombre": "CUCHARA TRANSPARENTE X6 280085",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC011.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 98,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00 },
      { "tipo": "Mayor", "valor": 5.00 }
    ]
  },
  {
    "id": "COC012",
    "categoria": "cocina",
    "nombre": "SET DE VASOS X6 CON JARRA EP8747",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC012.png",
    "badge": "Destacado",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5.0,
    "resenas": 149,
    "precios": [
      { "tipo": "Unidad", "valor": 24.00 },
      { "tipo": "Mayor", "valor": 20.00 }
    ]
  },
  {
    "id": "COC013",
    "categoria": "cocina",
    "nombre": "SET DE CONDIMENTERO X2 GF-2770",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC013.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 74,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.90 }
    ]
  },
  {
    "id": "COC014",
    "categoria": "cocina",
    "nombre": "SET DE JARRA CON VASO PING AN AGUAN AI EP-9949",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC014.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 122,
    "precios": [
      { "tipo": "Unidad", "valor": 24.00 },
      { "tipo": "Mayor", "valor": 21.00 }
    ]
  },
  {
    "id": "COC015",
    "categoria": "cocina",
    "nombre": "VASOS FLORES X6 108-6",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC015.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 83,
    "precios": [
      { "tipo": "Unidad", "valor": 8.00 },
      { "tipo": "Mayor", "valor": 6.90 }
    ]
  },
  {
    "id": "COC016",
    "categoria": "cocina",
    "nombre": "PLATO DE MENU",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC018.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.2,
    "resenas": 61,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "COC017",
    "categoria": "cocina",
    "nombre": "PLATO MENU GRANDE AZUL",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC016.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 130,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 4.90 }
    ]
  },
  {
    "id": "COC018",
    "categoria": "cocina",
    "nombre": "JARRA CON VASOS 5 PCS",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC017.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 89,
    "precios": [
      { "tipo": "Unidad", "valor": 15.00 },
      { "tipo": "Mayor", "valor": 12.90 }
    ]
  },
  {
    "id": "COC019",
    "categoria": "cocina",
    "nombre": "JARRA EN CAJA BLANCA",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC019.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 81,
    "precios": [
      { "tipo": "Unidad", "valor": 11.00 },
      { "tipo": "Mayor", "valor": 9.50}
    ]
  },
  {
    "id": "COC020",
    "categoria": "cocina",
    "nombre": "TAPER MAS TOMATODO 9001",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC020.png",
    "badge": "HOT",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 133,
    "precios": [
      { "tipo": "Unidad", "valor": 7.00 },
      { "tipo": "Mayor", "valor": 6.00 }
    ]
  },
  {
    "id": "COC021",
    "categoria": "cocina",
    "nombre": "AZUCARERA GRANDE TG001-1",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC021.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 108,
    "precios": [
      { "tipo": "Unidad", "valor": 9.50 },
      { "tipo": "Mayor", "valor": 8.50 }
    ]
  },
  {
    "id": "COC022",
    "categoria": "cocina",
    "nombre": "TENEDOR DE ACERO INOXIDABLE X6 AJ331309",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC022.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 72,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.50 }
    ]
  },
  {
    "id": "COC023",
    "categoria": "cocina",
    "nombre": "CUCHARA DE ACERO INOXIDABLE X6 AJ331308",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC023.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 124,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.50 }
    ]
  },
  {
    "id": "COC024",
    "categoria": "cocina",
    "nombre": "CUCHILLO DE AZA BLANCA DB2032",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC024.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 93,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.80 }
    ]
  },
  {
    "id": "COC025",
    "categoria": "cocina",
    "nombre": "SECADOR DE COLORES X5 PCS FXT-2309",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC025.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 85,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.90 }
    ]
  },
  {
    "id": "COC026",
    "categoria": "cocina",
    "nombre": "TERMO DAYD 0.45L 1996",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC026.png",
    "badge": "Destacado",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 145,
    "precios": [
      { "tipo": "Unidad", "valor": 16.00 },
      { "tipo": "Mayor", "valor": 13.50 }
    ]
  },
  {
    "id": "COC027",
    "categoria": "cocina",
    "nombre": "TERMO DAYD 1 LITRO 1996",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC027.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 128,
    "precios": [
      { "tipo": "Unidad", "valor": 24.00 },
      { "tipo": "Mayor", "valor": 21.00 }
    ]
  },
  {
    "id": "COC028",
    "categoria": "cocina",
    "nombre": "LICUADORA ACKILISS",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC028.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 68,
    "precios": [
      { "tipo": "Unidad", "valor": 45.00 },
      { "tipo": "Mayor", "valor": 38.00 }
    ]
  },
  {
    "id": "COC029",
    "categoria": "cocina",
    "nombre": "SET DE TAZA DE VIDRIO ZB040-JW",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC029.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 96,
    "precios": [
      { "tipo": "Unidad", "valor": 11.00 },
      { "tipo": "Mayor", "valor": 8.90 }
    ]
  },
  {
    "id": "COC030",
    "categoria": "cocina",
    "nombre": "SET DE COPAS X2 PCS AIZL V129",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC030.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 112,
    "precios": [
      { "tipo": "Unidad", "valor": 9.00 },
      { "tipo": "Mayor", "valor": 7.80 }
    ]
  },
  {
    "id": "COC031",
    "categoria": "cocina",
    "nombre": "CUCHARON IMPERIAL 1310-4",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC031.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 131,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.90 }
    ]
  },
  {
    "id": "COC032",
    "categoria": "cocina",
    "nombre": "TOMATODO TERMICO CF1001",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC032.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 79,
    "precios": [
      { "tipo": "Unidad", "valor": 6.50 },
      { "tipo": "Mayor", "valor": 5.80 }
    ]
  },
  {
    "id": "COC033",
    "categoria": "cocina",
    "nombre": "VASO X6 GLASSWARE",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC033.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 115,
    "precios": [
      { "tipo": "Unidad X6 PCS", "valor": 16.00 },
      { "tipo": "Mayor", "valor": 13.80 }
    ]
  },
  {
    "id": "COC034",
    "categoria": "cocina",
    "nombre": "SET DE CUCHARONES 62916",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC034.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 87,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "COC035",
    "categoria": "cocina",
    "nombre": "PLATO TENDIDO GRANDE",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC035.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 98,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 4.00 }
    ]
  },
  {
    "id": "COC036",
    "categoria": "cocina",
    "nombre": "PLATO TENDIDO CHICO",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC036.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 78,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "COC037",
    "categoria": "cocina",
    "nombre": "CUCHARON TENEDOR AJ33118",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC037.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 103,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "COC038",
    "categoria": "cocina",
    "nombre": "CUCHARON GRANDE AJ3725V",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC038.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 67,
    "precios": [
      { "tipo": "Unidad", "valor": 6.50 },
      { "tipo": "Mayor", "valor": 5.50 }
    ]
  },
  {
    "id": "COC039",
    "categoria": "cocina",
    "nombre": "BATIDORA MANUAL",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC039.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 120,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 }
    ]
  },
  {
    "id": "COC040",
    "categoria": "cocina",
    "nombre": "PORTA HUEVO",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC040.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 57,
    "precios": [
      { "tipo": "Unidad", "valor": 25.00 },
      { "tipo": "Mayor", "valor": 21.00 }
    ]
  },
  {
    "id": "COC041",
    "categoria": "cocina",
    "nombre": "TENEDOR",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC041.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 74,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 5.90 }
    ]
  },
  {
    "id": "COC042",
    "categoria": "cocina",
    "nombre": "PINZA BROSTERA",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC042.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 110,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.90 }
    ]
  },
  {
    "id": "COC043",
    "categoria": "cocina",
    "nombre": "TAZA DE LOZA",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC043.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 51,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "COC044",
    "categoria": "cocina",
    "nombre": "TAZA DE LOZA NOMBRES DE DEPARTAMENTOS",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC044.png",
    "badge": "Popular",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 134,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 4.90 }
    ]
  },
  {
    "id": "COC045",
    "categoria": "cocina",
    "nombre": "PLATO CONDIMENTERO",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC045.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 91,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "COC046",
    "categoria": "cocina",
    "nombre": "STIKER PARA COCINA",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC046.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 76,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Docena", "valor": 13.00 }
    ]
  },
  {
    "id": "COC047",
    "categoria": "cocina",
    "nombre": "MOLDE DE KEKE",
    "descripcion": "",
    "imagen": "IMAGENES COCINA/IMGCOC047.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 142,
    "precios": [
      { "tipo": "Unidad", "valor": 8.00 },
      { "tipo": "Mayor", "valor": 6.90 }
    ]
  }
];
