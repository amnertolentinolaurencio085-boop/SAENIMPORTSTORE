/* ================================================
   SAEN IMPORT — datos-maquillaje.js
   Categoría: Maquillaje
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

const PRODS_MAQUILLAJE =[
  {
    "id": "MAQ001",
    "categoria": "maquillaje",
    "nombre": "CERA PARA CEJAS BROW FIXING SOAP",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ001.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 52,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 4.50 }
    ]
  },
  {
    "id": "MAQ002",
    "categoria": "maquillaje",
    "nombre": "DELINEADOR DE LABIOS OLENKA",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ002.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 67,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Docena", "valor":12.00 }
    ]
  },
  {
    "id": "MAQ003",
    "categoria": "maquillaje",
    "nombre": "UÑAS PARA NIÑA SCARLET",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ003.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 143,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Docena", "valor": 13.00 }
    ]
  },
  {
    "id": "MAQ004",
    "categoria": "maquillaje",
    "nombre": "LABIAL SOY FELIZ",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ004.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 119,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00 },
      { "tipo": "Mayor", "valor": 5.50 }
    ]
  },
  {
    "id": "MAQ005",
    "categoria": "maquillaje",
    "nombre": "DELINEADOR SELLITO LIQUIDO EYELINER B-338",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ005.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 51,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 4.50 }
    ]
  },
  {
    "id": "MAQ006",
    "categoria": "maquillaje",
    "nombre": "LIP OIL HOLD MORNING PULSERA",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ006.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 92,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.50 }
    ]
  },
  {
    "id": "MAQ007",
    "categoria": "maquillaje",
    "nombre": "LIP GLOSS FERYANY POMPON",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ007.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 60,
    "precios": [
      { "tipo": "Unidad", "valor": 6.50 },
      { "tipo": "Mayor", "valor": 5.50 }
    ]
  },
  {
    "id": "MAQ008",
    "categoria": "maquillaje",
    "nombre": "PARCHE DE ACNE LA ROSA",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ008.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 82,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 4.80 }
    ]
  },
  {
    "id": "MAQ009",
    "categoria": "maquillaje",
    "nombre": "RIZADOR CON DISEÑO AN-836 TA-147-1",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ009.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 142,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.90 }
    ]
  },
  {
    "id": "MAQ010",
    "categoria": "maquillaje",
    "nombre": "LABIAL SURTIDO MATTE",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ010.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 67,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Mayor", "valor": 1.00 }
    ]
  },
  {
    "id": "MAQ011",
    "categoria": "maquillaje",
    "nombre": "RIZADOR ECONOMICO ESCARLET",
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.90 }
    ],
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ011.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 50
  },
  {
    "id": "MAQ012",
    "categoria": "maquillaje",
    "nombre": "LABIAL CON CABEZA DE FRESA HOLD MORNING",
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 3.00 }
    ],
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ012.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 56
  },
  {
    "id": "MAQ013",
    "categoria": "maquillaje",
    "nombre": "TINTA DE LABIOS TIEESIEE LOVE HOT LIP CHERRY",
    "precios": [
      { "tipo": "Unidad", "valor": 9.00 },
      { "tipo": "Mayor", "valor": 8.00 }
    ],
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ013.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 60
  },
  {
    "id": "MAQ014",
    "categoria": "maquillaje",
    "nombre": "POLVO MENTA",
    "precios": [
      { "tipo": "Unidad", "valor": 9.00 },
      { "tipo": "Mayor", "valor": 8.00 }
    ],
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ014.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 109
  },
  {
    "id": "MAQ015",
    "categoria": "maquillaje",
    "nombre": "PEGAMENTO PARA PESTAÑAS SAMANTHA",
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 4.90 }
    ],
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ015.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 115
  },
  {
    "id": "MAQ016",
    "categoria": "maquillaje",
    "nombre": "BALSAMO ALOE VERA",
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 4.00 }
    ],
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ016.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 136
  },
  {
    "id": "MAQ017",
    "categoria": "maquillaje",
    "nombre": "BALSAMO PARA LABIOS EN BARRA DE FRUTAS PW",
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 },
      { "tipo": "Box x48", "valor":62.00}
    ],
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ017.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 146
  },
  {
    "id": "MAQ018",
    "categoria": "maquillaje",
    "nombre": "DECORACION PARA UÑAS EN ESTUCHE NAIL DECORATIVO",
    "precios": [
      { "tipo": "Unidad", "valor": 6.50 },
      { "tipo": "Mayor", "valor": 5.50 }
    ],
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ018.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 78
  },
  {
    "id": "MAQ019",
    "categoria": "maquillaje",
    "nombre":"MINI BROCHAS CANDY",
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.80 }
    ],
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ019.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 109
  },
  {
    "id": "MAQ020",
    "categoria": "maquillaje",
    "nombre": "CORRECTOR LIQUID CONCEALER MORADO",
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ],
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ020.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 65
  },
  {
    "id": "MAQ021",
    "categoria": "maquillaje",
    "nombre": "MINI BASE LIQUIDA MATTE BLISTER",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ021.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 126,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.90 },
      { "tipo": "Blister x24", "valor":42.00}
    ]
  },
  {
    "id": "MAQ022",
    "categoria": "maquillaje",
    "nombre": "POLVO COMPACTO CON BASE FELINA",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ022.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 77,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.90 },
    ]
  },
  {
    "id": "MAQ023",
    "categoria": "maquillaje",
    "nombre": "CORRECTOR LIQUIDO SAMANTHA VESTIDO",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ023.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 139,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 3.00 }
    ]
  },
  {
    "id": "MAQ024",
    "categoria": "maquillaje",
    "nombre": "SET DE ACRILICO MAS MONOMERO",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ024.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 70,
    "precios": [
      { "tipo": "Unidad", "valor": 30.00 },
      { "tipo": "Mayor", "valor": 27.00 }
    ]
  },
  {
    "id": "MAQ025",
    "categoria": "maquillaje",
    "nombre": "ESMALTE NEGRO PW",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ025.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 134,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 1.80 },
      { "tipo": "Caja x24", "valor": 40.00 }
    ]
  },
  {
    "id": "MAQ026",
    "categoria": "maquillaje",
    "nombre": "ESMALTE ESCARCHADO PW",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ026.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 76,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.80 },
      { "tipo": "Caja x24", "valor":36.00 }
    ]
  },
  {
    "id": "MAQ027",
    "categoria": "maquillaje",
    "nombre": "ESMALTE TRANSPARENTE PW",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ027.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 107,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 },
      { "tipo": "Caja x24", "valor":52.80 }
    ]
  },
  {
    "id": "MAQ028",
    "categoria": "maquillaje",
    "nombre": "PESTAÑAS 1X1 KARSEELL",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ028.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 119,
    "precios": [
      { "tipo": "Unidad", "valor": 7.00 },
      { "tipo": "Mayor", "valor": 5.90 }
    ]
  },
  {
    "id": "MAQ029",
    "categoria": "maquillaje",
    "nombre": "LABIAL PARA NIÑAS GRANDE LIPSTICK 1-04",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ029.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 138,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Blister x30", "valor": 18.00 }
    ]
  },
  {
    "id": "MAQ030",
    "categoria": "maquillaje",
    "nombre": "SOMBRA DE CEJAS X3 DOD GIRL EYEBROW POWDER",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ030.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 133,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.80 }
    ]
  },
  {
    "id": "MAQ031",
    "categoria": "maquillaje",
    "nombre": "LABIAL MAS BALSAMO FRESA",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ031.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 120,
    "precios": [
      { "tipo": "Unidad", "valor": 2.00 },
      { "tipo": "Mayor", "valor": 1.50 },
      { "tipo": "Docena", "valor": 15.80 }
    ]
  },
  {
    "id": "MAQ032",
    "categoria": "maquillaje",
    "nombre": "RIMEL MAGNIFIC LASH",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ032.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 64,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.80 }
    ]
  },
  {
    "id": "MAQ033",
    "categoria": "maquillaje",
    "nombre": "LABIAL LATINA",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ033.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 120,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 4.50 }
    ]
  },
  {
    "id": "MAQ034",
    "categoria": "maquillaje",
    "nombre": "LABIAL PARTY RETRO",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ034.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 78,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.80 }
    ]
  },
  {
    "id": "MAQ035",
    "categoria": "maquillaje",
    "nombre": "LABIAL SUPER MATTE AMAZONAS",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ035.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 119,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "MAQ036",
    "categoria": "maquillaje",
    "nombre": "RIMEL TRANSPARENTE SCARLET MASCARA",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ036.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 144,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.80 }
    ]
  },
  {
    "id": "MAQ037",
    "categoria": "maquillaje",
    "nombre": "AGUA DE ROSAS 150 ML",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ037.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 134,
    "precios": [
      { "tipo": "Unidad", "valor": 7.00 },
      { "tipo": "Mayor", "valor": 5.90 }
    ]
  },
  {
    "id": "MAQ038",
    "categoria": "maquillaje",
    "nombre": "TRASOS MAGICOS DELINEADOR DE OJOS",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ038.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 61,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.80 }
    ]
  },
  {
    "id": "MAQ039",
    "categoria": "maquillaje",
    "nombre": "SORBITO LIP OIL",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ039.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 59,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 4.50 }
    ]
  },
  {
    "id": "MAQ040",
    "categoria": "maquillaje",
    "nombre": "AGUA DE ROSAS 60 ML",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ040.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 111,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.90 }
    ]
  },
  {
    "id": "MAQ041",
    "categoria": "maquillaje",
    "nombre": "BALSAMO CON LLAVERO FRESA HOLD MORNING",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ041.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 106,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.80 },
      { "tipo": "Box x24", "valor": 62.00 }
    ]
  },
  {
    "id": "MAQ042",
    "categoria": "maquillaje",
    "nombre": "LABIAL BRILLOS AG-280",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ042.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 51,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 4.50 }
    ]
  },
  {
    "id": "MAQ043",
    "categoria": "maquillaje",
    "nombre": "LABIAL HIDRATANTE FASHION AGL-270",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ043.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 57,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00 },
      { "tipo": "Mayor", "valor": 4.90 }
    ]
  },
  {
    "id": "MAQ044",
    "categoria": "maquillaje",
    "nombre": "LABIAL BALLET AGL-150",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ044.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 70,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00 },
      { "tipo": "Mayor", "valor": 4.90 }
    ]
  },
  {
    "id": "MAQ045",
    "categoria": "maquillaje",
    "nombre": "LABIAL GOOD VIBES AGL-430",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ045.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 100,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00 },
      { "tipo": "Mayor", "valor": 4.90 }
    ]
  },
  {
    "id": "MAQ046",
    "categoria": "maquillaje",
    "nombre": "LIP GLOSS LITTLE AGL-800",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ046.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 123,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00 },
      { "tipo": "Mayor", "valor": 4.90 }
    ]
  },
  {
    "id": "MAQ047",
    "categoria": "maquillaje",
    "nombre": "UÑAS AKOYA KD-2836",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ047.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 145,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 }
    ]
  },
  {
    "id": "MAQ048",
    "categoria": "maquillaje",
    "nombre": "POLVO COMPACTO MOIRA",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ048.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 142,
    "precios": [
      { "tipo": "Unidad", "valor": 6.50 },
      { "tipo": "Mayor", "valor": 5.50 }
    ]
  },
  {
    "id": "MAQ049",
    "categoria": "maquillaje",
    "nombre": "POLVO GLAMOR BEAUT TA.56",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ049.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 136,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 4.00 }
    ]
  },
  {
    "id": "MAQ050",
    "categoria": "maquillaje",
    "nombre": "ILUMINADOR CUSCO",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ050.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 76,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.50 }
    ]
  },
  {
    "id": "MAQ051",
    "categoria": "maquillaje",
    "nombre": "DELINEADOR POWER EYES",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ051.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 103,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.90 }
    ]
  },
  {
    "id": "MAQ052",
    "categoria": "maquillaje",
    "nombre": "DELINEADOR BLACK",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ052.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 57,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.90 }
    ]
  },
  {
    "id": "MAQ053",
    "categoria": "maquillaje",
    "nombre": "BOMB LIP GLOSS",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ053.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 102,
    "precios": [
      { "tipo": "Unidad", "valor": 7.00 },
      { "tipo": "Mayor", "valor": 6.00 }
    ]
  },
  {
    "id": "MAQ054",
    "categoria": "maquillaje",
    "nombre": "RUBOR LINDURA",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ054.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 68,
    "precios": [
      { "tipo": "Unidad", "valor": 7.00 },
      { "tipo": "Mayor", "valor": 6.00 }
    ]
  },
  {
    "id": "MAQ055",
    "categoria": "maquillaje",
    "nombre": "RUBOR MAGICAL BLUSH",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ055.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 121,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00 },
      { "tipo": "Mayor", "valor": 4.90 }
    ]
  },
  {
    "id": "MAQ056",
    "categoria": "maquillaje",
    "nombre": "SOMBRA MI DIARIO DE AMOR",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ056.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 56,
    "precios": [
      { "tipo": "Unidad", "valor": 38.00 },
      { "tipo": "Mayor", "valor": 32.00 }
    ]
  },
  {
    "id": "MAQ057",
    "categoria": "maquillaje",
    "nombre": "SOMBRA PODEROSA",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ057.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 91,
    "precios": [
      { "tipo": "Unidad", "valor": 30.00 },
      { "tipo": "Mayor", "valor": 26.50 }
    ]
  },
  {
    "id": "MAQ058",
    "categoria": "maquillaje",
    "nombre": "SOMBRA CUMBIA",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ058.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 126,
    "precios": [
      { "tipo": "Unidad", "valor": 27.00 },
      { "tipo": "DOCENA", "valor": 24.00 }
    ]
  },
  {
    "id": "MAQ059",
    "categoria": "maquillaje",
    "nombre": "MISS LABIAL EN BARRA",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ059.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 113,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00 },
      { "tipo": "Mayor", "valor": 5.50 }
    ]
  },
  {
    "id": "MAQ060",
    "categoria": "maquillaje",
    "nombre": "BASE SHINE BB CREAM",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ060.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 115,
    "precios": [
      { "tipo": "Unidad", "valor": 10.00 },
      { "tipo": "Mayor", "valor": 8.50 }
    ]
  },
  {
    "id": "MAQ061",
    "categoria": "maquillaje",
    "nombre": "VINCHA FACIAL PELUCHE",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ061.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 101,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.90 }
    ]
  },
  {
    "id": "MAQ062",
    "categoria": "maquillaje",
    "nombre": "LABIAL EFECTO ESPEJO NOSSA",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ062.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 72,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 4.50 }
    ]
  },
  {
    "id": "MAQ063",
    "categoria": "maquillaje",
    "nombre": "AGUA DE ROSAS 60 ML",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ063.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 91,
    "precios": [
      { "tipo": "Unidad", "valor": 4.00 },
      { "tipo": "Mayor", "valor": 3.50 }
    ]
  },
  {
    "id": "MAQ064",
    "categoria": "maquillaje",
    "nombre": "PERFILADOR ANNY",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ064.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 99,
    "precios": [
      { "tipo": "Unidad", "valor":1.50 },
      { "tipo": "Docena", "valor": 14.00 }
    ]
  },
  {
    "id": "MAQ065",
    "categoria": "maquillaje",
    "nombre": "BABY LIPS",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ065.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 71,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.50 }
    ]
  },
  {
    "id": "MAQ066",
    "categoria": "maquillaje",
    "nombre": "LABIAL EN BARRA ENSUEÑO",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ066.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 144,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 4.80 }
    ]
  },
  {
    "id": "MAQ067",
    "categoria": "maquillaje",
    "nombre": "DELINEADOR BFF 4 EVER",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ067.PNG",
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
    "id": "MAQ068",
    "categoria": "maquillaje",
    "nombre": "LAPIZ PARA CEJAS",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ068.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 86,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 4.00 }
    ]
  },
  {
    "id": "MAQ069",
    "categoria": "maquillaje",
    "nombre": "BRILLO VIBRA ALTO",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ069.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 119,
    "precios": [
      { "tipo": "Unidad", "valor": 6.50 },
      { "tipo": "Mayor", "valor": 5.50 }
    ]
  },
  {
    "id": "MAQ070",
    "categoria": "maquillaje",
    "nombre": "BRILLO MAGICO CHILL LIP OIL",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ070.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 129,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.80 }
    ]
  },
  {
    "id": "MAQ071",
    "categoria": "maquillaje",
    "nombre": "CORRECTOR LIQUIDO GOLDEN ",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ071.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 53,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 4.50 }
    ]
  },
  {
    "id": "MAQ072",
    "categoria": "maquillaje",
    "nombre": "ESMALTE GLEE",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ0072.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 121,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 3.00 }
    ]
  },
  {
    "id": "MAQ073",
    "categoria": "maquillaje",
    "nombre": "LABIAL CHOLITA",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ073.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 83,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00 },
      { "tipo": "Mayor", "valor": 4.90 }
    ]
  },
  {
    "id": "MAQ074",
    "categoria": "maquillaje",
    "nombre": "LIP GLOSS MI ENSUEÑO",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ074.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 95,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00 },
      { "tipo": "Mayor", "valor": 4.90 }
    ]
  },
  {
    "id": "MAQ075",
    "categoria": "maquillaje",
    "nombre": "LABIAL HELLO SPRINT",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ075.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 106,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.80 }
    ]
  },
  {
    "id": "MAQ076",
    "categoria": "maquillaje",
    "nombre": "LIMA CON CUTICULA ADAI",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ076.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 128,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Docena", "valor": 9.00 }
    ]
  },
  {
    "id": "MAQ077",
    "categoria": "maquillaje",
    "nombre": "LABIAL A MI MANERA",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ077.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 57,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 3.90 }
    ]
  },
  {
    "id": "MAQ078",
    "categoria": "maquillaje",
    "nombre": "DELINEADOR PINK",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ078.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 99,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.90 }
    ]
  },
  {
    "id": "MAQ079",
    "categoria": "maquillaje",
    "nombre": "LACA AQUA NET",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ079.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 146,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50}
    ]
  },
  {
    "id": "MAQ080",
    "categoria": "maquillaje",
    "nombre": "LIP GLOSS MENEITO",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ080.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 86,
    "precios": [
      { "tipo": "Unidad", "valor": 7.00 },
      { "tipo": "Mayor", "valor": 5.90 }
    ]
  },
  {
    "id": "MAQ081",
    "categoria": "maquillaje",
    "nombre": "CORRECTOR GLOW",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ081.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 56,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00 },
      { "tipo": "Mayor", "valor": 4.90 }
    ]
  },
  {
    "id": "MAQ082",
    "categoria": "maquillaje",
    "nombre": "DELINEADOR LIQUIDO BLANCO",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ082.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 134,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Mayor", "valor": 2.00 },
      { "tipo": "BOX X24", "valor": 45.00 }
    ]
  },
  {
    "id": "MAQ083",
    "categoria": "maquillaje",
    "nombre": "CONTORNO LIQUIDO 24 HORAS",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ083.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 141,
    "precios": [
      { "tipo": "Unidad", "valor": 8.00},
      { "tipo": "Mayor", "valor": 7.00 },
      { "tipo": "Box x12", "valor": 78.00 }
    ]
  },
  {
    "id": "MAQ084",
    "categoria": "maquillaje",
    "nombre": "CREMA PARA CONTORNO DE OJOS",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ084.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 110,
    "precios": [
      { "tipo": "Unidad", "valor": 8.00 },
      { "tipo": "Mayor", "valor": 6.80 }
    ]
  },
  {
    "id": "MAQ085",
    "categoria": "maquillaje",
    "nombre": "SERUM CRECIMIENTO",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ085.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 129,
    "precios": [
      { "tipo": "Unidad", "valor":13.00 },
      { "tipo": "Mayor", "valor": 10.90 }
    ]
  },
  {
    "id": "MAQ086",
    "categoria": "maquillaje",
    "nombre": "REPUESTO DE RIZADOR",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ086.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 147,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Docena", "valor": 15.80 }
    ]
  },
  {
    "id": "MAQ087",
    "categoria": "maquillaje",
    "nombre": "ESPONJA",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ087.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 110,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Docena", "valor": 10.00 }
    ]
  },
  {
    "id": "MAQ088",
    "categoria": "maquillaje",
    "nombre": "SOMBRA POMELO",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ088.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 58,
    "precios": [
      { "tipo": "Unidad", "valor": 9.00 },
      { "tipo": "Mayor", "valor": 7.90 },
      { "tipo": "BOX X24", "valor": 171.00 }
    ]
  },
  {
    "id": "MAQ089",
    "categoria": "maquillaje",
    "nombre": "LIMA PARA MANOS",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ089.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 124,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Docena", "valor": 15.90 }
    ]
  },
  {
    "id": "MAQ090",
    "categoria": "maquillaje",
    "nombre": "GEL CHICO 100G",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ090.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 146,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Docena", "valor": 16.00 }
    ]
  },
  {
    "id": "MAQ091",
    "categoria": "maquillaje",
    "nombre": "GEL CHICO 30G",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ091.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 77,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Docena", "valor": 9.00 }
    ]
  },
  {
    "id": "MAQ092",
    "categoria": "maquillaje",
    "nombre": "SILICONA CAPILAR",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ092.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 113,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "BOX X24", "valor": 19.00 }
    ]
  },
  {
    "id": "MAQ093",
    "categoria": "maquillaje",
    "nombre": "QUITA ESMALTE GRANDE 40 ML",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ093.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 94,
    "precios": [
      { "tipo": "Unidad", "valor": 1.50 },
      { "tipo": "Docena", "valor": 13.00 }
    ]
  },
  {
    "id": "MAQ094",
    "categoria": "maquillaje",
    "nombre": "QUITA ESMALTE GRANDE 70 ML",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ094.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 150,
    "precios": [
      { "tipo": "Unidad", "valor": 2.50 },
      { "tipo": "Docena", "valor": 26.00 }
    ]
  },
  {
    "id": "MAQ095",
    "categoria": "maquillaje",
    "nombre": "LABIAL EN BARRA VEGAS",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ095.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 136,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 7.00 },
      { "tipo": "Box x24", "valor": 156.00 }
    ]
  },
  {
    "id": "MAQ096",
    "categoria": "maquillaje",
    "nombre": "LABIAL TRENDY LIPS",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ096.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 137,
    "precios": [
      { "tipo": "Unidad", "valor": 6.50 },
      { "tipo": "Mayor", "valor": 5.50 },
      { "tipo": "Box x24", "valor": 31.00 }
    ]
  },
  {
    "id": "MAQ097",
    "categoria": "maquillaje",
    "nombre": "LABIAL CARNAVAL",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ097.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 73,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 3.00 }
    ]
  },
  {
    "id": "MAQ098",
    "categoria": "maquillaje",
    "nombre": "ILUMINADOR FANTASTIC",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ098.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 75,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.50 },
      { "tipo": "Box x24", "valor":143.00 }
    ]
  },
  {
    "id": "MAQ099",
    "categoria": "maquillaje",
    "nombre": "TINTE DE LABIOS CHERRY",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ099.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 50,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 3.00 }
    ]
  },
  {
    "id": "MAQ100",
    "categoria": "maquillaje",
    "nombre": "PALETA DE SOMBRA LUAU",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ100.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 123,
    "precios": [
      { "tipo": "Unidad", "valor": 30.00 },
      { "tipo": "Mayor", "valor": 26.00 }
    ]
  },
  {
    "id": "MAQ101",
    "categoria": "maquillaje",
    "nombre": "LABIAL EN BARRA 5 EN 1",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ101.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 142,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00 },
      { "tipo": "Mayor", "valor": 5.50 },
      { "tipo": "Box x12", "valor": 59.00 }
    ]
  },
  {
    "id": "MAQ102",
    "categoria": "maquillaje",
    "nombre": "DELINEADOR LAPICERO 4 EN 1",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ102.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 133,
    "precios": [
      { "tipo": "Unidad", "valor": 9.00 },
      { "tipo": "Mayor", "valor": 7.90 }
    ]
  },
  {
    "id": "MAQ103",
    "categoria": "maquillaje",
    "nombre": "ESMALTE EN GEL",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ103.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 62,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.80 },
      { "tipo": "Box x12", "valor": 62.00 }
    ]
  },
  {
    "id": "MAQ104",
    "categoria": "maquillaje",
    "nombre": "LABIAL LIQUIDO ESPEJO",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ104.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 87,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.90 },
      { "tipo": "Box x12", "valor": 42.00 }
    ]
  },
  {
    "id": "MAQ105",
    "categoria": "maquillaje",
    "nombre": "TINTE DE LABIOS FIT",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ105.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5,
    "resenas": 138,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.90 },
      { "tipo": "Box x12", "valor": 42.00 }
    ]
  },
  {
    "id": "MAQ106",
    "categoria": "maquillaje",
    "nombre": "BASE LIQUIDO FULL",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ106.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 123,
    "precios": [
      { "tipo": "Unidad", "valor": 9.00 },
      { "tipo": "Mayor", "valor": 8.00 },
      { "tipo": "BOX X12", "valor": 93.00 }
    ]
  },
    {
    "id": "MAQ107",
    "categoria": "maquillaje",
    "nombre": "RUBOR LIQUIDO",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ107.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 123,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 3.00 },
      { "tipo": "Box x24", "valor": 68.50 }
    ]
  },
    {
    "id": "MAQ108",
    "categoria": "maquillaje",
    "nombre": "LABIAL 2 EN 1",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ108.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 123,
    "precios": [
      { "tipo": "Unidad", "valor": 5.50 },
      { "tipo": "Mayor", "valor": 5.00 },
      { "tipo": "BOX X24", "valor": 106.00 }
    ]
  },
    {
    "id": "MAQ109",
    "categoria": "maquillaje",
    "nombre": "BASE LIQUIDA TRUE",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ109.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 123,
    "precios": [
      { "tipo": "Unidad", "valor": 8.50 },
      { "tipo": "Mayor", "valor": 8.00 },
      { "tipo": "Box x12", "valor": 86.00 }
    ]
  },
    {
    "id": "MAQ110",
    "categoria": "maquillaje",
    "nombre": "LIP GLOSS JASMIN",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ110.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 123,
    "precios": [
      { "tipo": "Unidad", "valor": 7.50 },
      { "tipo": "Mayor", "valor": 6.50 }
    ]
  },
    {
    "id": "MAQ111",
    "categoria": "maquillaje",
    "nombre": "LABIAL 2 EN 1 TENTACION",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ111.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 123,
    "precios": [
      { "tipo": "Unidad", "valor": 6.00 },
      { "tipo": "Mayor", "valor": 4.90 }
    ]
  },
    {
    "id": "MAQ112",
    "categoria": "maquillaje",
    "nombre": "RUBOR LIQUIDO",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ112.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 123,
    "precios": [
      { "tipo": "Unidad", "valor": 7.00 },
      { "tipo": "Mayor", "valor": 6.00 }
    ]
  }
  ,  {
    "id": "MAQ113",
    "categoria": "maquillaje",
    "nombre": "EXFOLIANTE ROMANTIC",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ113.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 123,
    "precios": [
      { "tipo": "Unidad", "valor": 3.00 },
      { "tipo": "Mayor", "valor": 2.50 },
      { "tipo": "BOX X12", "valor": 26.00 }
    ]
  },
    {
    "id": "MAQ114",
    "categoria": "maquillaje",
    "nombre": "TINTA THE GAME",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ114.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 123,
    "precios": [
      { "tipo": "Unidad", "valor": 5.00 },
      { "tipo": "Mayor", "valor": 4.50 }
    ]
  },
    {
    "id": "MAQ115",
    "categoria": "maquillaje",
    "nombre": "DELINEADOR GRANDE",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ115.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 123,
    "precios": [
      { "tipo": "Unidad", "valor": 1.00 },
      { "tipo": "Docena", "valor": 9.50 }
    ]
  },
    {
    "id": "MAQ116",
    "categoria": "maquillaje",
    "nombre": "DELINEADOR CHICO",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ116.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 123,
    "precios": [
      { "tipo": "Unidad", "valor": 0.80 },
      { "tipo": "Docena", "valor": 6.00 }
    ]
  },
    {
    "id": "MAQ117",
    "categoria": "maquillaje",
    "nombre": "LABIAL OH HONEY",
    "descripcion": "",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ117.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 123,
    "precios": [
      { "tipo": "Unidad", "valor": 4.50 },
      { "tipo": "Mayor", "valor": 3.80 }
    ]
  },
    {
    "id": "MAQ118",
    "categoria": "maquillaje",
    "nombre": "PALETA GIRLS",
    "descripcion": "PALETA DE SOMBRAS DE 64 TONOS DISTINTOS",
    "imagen": "IMAGENES MAQUILLAJE/IMGMAQ118.PNG",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4,
    "resenas": 123,
    "precios": [
      { "tipo": "Unidad", "valor": 30.00 },
      { "tipo": "Mayor", "valor": 25.00 }
    ]
  }
];
