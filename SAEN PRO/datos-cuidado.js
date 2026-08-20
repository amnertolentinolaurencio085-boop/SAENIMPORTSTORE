/* ================================================
   SAEN IMPORT — datos-cuidado.js
   Categoría: Cuidado Personal
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

const PRODS_CUIDADO = [
{
  "id": "CUI001",
  "categoria": "cuidado",
  "nombre": "CREMA 7 FACE CREAM VAL7110",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI001.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 10.00
    },
    {
      "tipo": "Mayor",
      "valor": 8.80
    }
  ]
},
{
  "id": "CUI002",
  "categoria": "cuidado",
  "nombre": "SHAMPOO Y ACONDICIONADOR DE ROMERO 1100ML",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI002.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 12.00
    },
    {
      "tipo": "Mayor",
      "valor": 10.00
    }
  ]
},
{
  "id": "CUI003",
  "categoria": "cuidado",
  "nombre": "PONS ACLARANTE B3",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI003.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 1.50
    },
    {
      "tipo": "Caja x20",
      "valor": 24.00
    }
  ]
},
{
  "id": "CUI004",
  "categoria": "cuidado",
  "nombre": "PINZA CON DISEÑO CLASSIC AL SHI LI",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI004.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 6.50
    },
    {
      "tipo": "Mayor",
      "valor": 5.50
    }
  ]
},
{
  "id": "CUI005",
  "categoria": "cuidado",
  "nombre": "PARCHE PARA OJERAS DE ARROZ",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI005.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 2.00
    },
    {
      "tipo": "Mayor",
      "valor": 1.50
    }
  ]
},
{
  "id": "CUI006",
  "categoria": "cuidado",
  "nombre": "LIMA DE COLORES 3 EN 1 SCARLET",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI006.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 2.00
    },
    {
      "tipo": "Mayor",
      "valor": 1.50
    }
  ]
},
{
  "id": "CUI007",
  "categoria": "cuidado",
  "nombre": "LIMA PARA PIES",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI007.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 1.00
    },
    {
      "tipo": "Docena",
      "valor": 8.50
    }
  ]
},
{
  "id": "CUI008",
  "categoria": "cuidado",
  "nombre": "PINTURA EN SPRAY SCHUBERT",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI008.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 5.50
    },
    {
      "tipo": "Mayor",
      "valor": 4.80
    }
  ]
},
{
  "id": "CUI009",
  "categoria": "cuidado",
  "nombre": "TOALLITA TUINIES 25 UnidadES",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI009.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 2.00
    },
    { "tipo": "Mayor", "valor": 1.50 },
    {
      "tipo": "Caja x48",
      "valor": 66.00
    }
  ]
},
{
  "id": "CUI010",
  "categoria": "cuidado",
  "nombre": "TOALLITA PAYASITOS 120 UnidadES",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI010.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 4.50
    },
    { "tipo": "Mayor", "valor": 3.80 },
    {
      "tipo": "Caja x12",
      "valor": 42.00
    }
  ]
},
{
  "id": "CUI011",
  "categoria": "cuidado",
  "nombre": "BOTOX CAPILAR",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI011.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 11.00
    },
    {
      "tipo": "Mayor",
      "valor": 9.50
    }
  ]
},
{
  "id": "CUI012",
  "categoria": "cuidado",
  "nombre": "CERA PARA CEJAS BROW FIXING SOAP",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI012.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 5.00
    },
    {
      "tipo": "Mayor",
      "valor": 4.50
    }
  ]
},
{
  "id": "CUI013",
  "categoria": "cuidado",
  "nombre": "SILICONA CAPILAR EN GOTAS SAMANTHA",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI013.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 7.00
    },
    {
      "tipo": "Mayor",
      "valor": 6.00
    }
  ]
},
{
  "id": "CUI014",
  "categoria": "cuidado",
  "nombre": "LIMA ECORINCIA 100/180",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI014.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 1.00
    },
    {
      "tipo": "Docena",
      "valor": 8.50
    }
  ]
},
{
  "id": "CUI050",
  "categoria": "cuidado",
  "nombre": "PAÑITOS QUITAESMALTE",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI015.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 2.00
    },
    {
      "tipo": "Mayor",
      "valor": 1.50
    }
  ]
},
{
  "id": "CUI015",
  "categoria": "cuidado",
  "nombre": "UÑAS POSTISAS OJO DE GATO",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI016.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 4.00
    },
    {
      "tipo": "Mayor",
      "valor": 3.50
    }
  ]
},
{
  "id": "CUI016",
  "categoria": "cuidado",
  "nombre": "MASCARILLA NEGRA BLACK MASK",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI017.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 1.50
    },
    {
      "tipo": "Caja x10",
      "valor": 13.00
    }
  ]
},
{
  "id": "CUI017",
  "categoria": "cuidado",
  "nombre": "BLOQUEADOR BAHIA ORIGINAL",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI018.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 2.50
    },
    {
      "tipo": "Mayor",
      "valor": 2.00
    }
  ]
},
{
  "id": "CUI018",
  "categoria": "cuidado",
  "nombre": "PARCHE PARA LABIOS STUCHE BQY45773",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI019.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 12.00
    },
    {
      "tipo": "Mayor",
      "valor": 10.50
    }
  ]
},
{
  "id": "CUI019",
  "categoria": "cuidado",
  "nombre": "CREMA DE OJOS ANTIARRUGAS BQY45720",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI020.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 12.00
    },
    {
      "tipo": "Mayor",
      "valor": 10.50
    }
  ]
},
{
  "id": "CUI020",
  "categoria": "cuidado",
  "nombre": "MASCARILLA PARA EL CABELLO BQY34120",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI021.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 14.00
    },
    {
      "tipo": "Mayor",
      "valor": 12.00
    }
  ]
},
{
  "id": "CUI021",
  "categoria": "cuidado",
  "nombre": "PURE SKIN SERUM BQY32391",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI022.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 9.00
    },
    {
      "tipo": "Mayor",
      "valor": 7.90
    }
  ]
},
{
  "id": "CUI022",
  "categoria": "cuidado",
  "nombre": "KERATINA PLACENTA",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI023.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 2.50
    },
    {
      "tipo": "Mayor",
      "valor": 2.00
    }
  ]
},
{
  "id": "CUI023",
  "categoria": "cuidado",
  "nombre": "ACEITE ORGAN OIL",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI024.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor":9.50
    },
    {
      "tipo": "Mayor",
      "valor": 7.90
    }
  ]
},
{
  "id": "CUI024",
  "categoria": "cuidado",
  "nombre": "PARCHE DE GEL PARRA OJERAS",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI025.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 1.00
    },
    {
      "tipo": "Caja x10",
      "valor": 8.00
    }
  ]
},
{
  "id": "CUI025",
  "categoria": "cuidado",
  "nombre": "JABON HANDMADE OIL SOAP",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI026.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 8.00
    },
    {
      "tipo": "Mayor",
      "valor": 6.80
    }
  ]
},
{
  "id": "CUI026",
  "categoria": "cuidado",
  "nombre": "CREMA DE MANO HAND",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI027.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 1.50
    },
    {
      "tipo": "Mayor",
      "valor": 0.80
    }
  ]
},
{
  "id": "CUI027",
  "categoria": "cuidado",
  "nombre": "MASCARILLA PARA CABELLO",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI028.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 14.00
    },
    {
      "tipo": "Mayor",
      "valor": 12.00
    }
  ]
},
{
  "id": "CUI028",
  "categoria": "cuidado",
  "nombre": "JABON FACIAL FOR MEN",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI029.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 11.00
    },
    {
      "tipo": "Mayor",
      "valor": 9.50
    }
  ]
},
{
  "id": "CUI029",
  "categoria": "cuidado",
  "nombre": "PEDRERIA PARA UÑAS X4",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI030.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 3.00
    },
    {
      "tipo": "Mayor",
      "valor": 2.50
    }
  ]
},
{
  "id": "CUI030",
  "categoria": "cuidado",
  "nombre": "FIJADOR DE MAQUILLAJE",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI031.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 14.00
    },
    {
      "tipo": "Mayor",
      "valor": 12.50
    },
    { "tipo": "Box x12", "valor": 140.00 }
  ]
},
{
  "id": "CUI031",
  "categoria": "cuidado",
  "nombre": "AGUA MICELAR",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI032.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 12.00
    },
    {
      "tipo": "Mayor",
      "valor": 10.50
    },
    { "tipo": "Box x12", "valor": 117.00 }
  ]
},
{
  "id": "CUI032",
  "categoria": "cuidado",
  "nombre": "MASCARILLA FACIAL",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI033.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 4.50
    },
    {
      "tipo": "Mayor",
      "valor": 3.90
    }
  ]
},
{
  "id": "CUI033",
  "categoria": "cuidado",
  "nombre": "MASCARILLA NOCTURNA",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI034.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 13.00
    },
    {
      "tipo": "Mayor",
      "valor":10.90
    }
  ]
},
{
  "id": "CUI034",
  "categoria": "cuidado",
  "nombre": "GEL HIDRATANTE ALOE VERA",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI035.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 7.50
    },
    {
      "tipo": "Mayor",
      "valor": 6.50
    }
  ]
},
{
  "id": "CUI035",
  "categoria": "cuidado",
  "nombre": "CONTORNO DE OJOS",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI036.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 8.00
    },
    {
      "tipo": "Mayor",
      "valor": 6.50
    }
  ]
},
{
  "id": "CUI036",
  "categoria": "cuidado",
  "nombre": "LIP GLOSS PLUMPER",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI037.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 5.00
    },
    {
      "tipo": "Mayor",
      "valor": 3.90
    }
  ]
},
{
  "id": "CUI037",
  "categoria": "cuidado",
  "nombre": "MASCARILLA FACIAL ECONOMICA",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI038.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 1.00
    },
    {
      "tipo": "Mayor",
      "valor": 0.80
    }
  ]
},
{
  "id": "CUI038",
  "categoria": "cuidado",
  "nombre": "EXFOLIANTE GEL",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI039.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 6.50
    },
    {
      "tipo": "Mayor",
      "valor": 5.50
    }
  ]
},
{
  "id": "CUI039",
  "categoria": "cuidado",
  "nombre": "CREMA FACIAL",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI040.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 15.00
    },
    {
      "tipo": "Mayor",
      "valor": 13.00
    }
  ]
},
{
  "id": "CUI040",
  "categoria": "cuidado",
  "nombre": "LIMPIADOR FACIAL",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI041.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 12.00
    },
    { "tipo": "Mayor", "valor": 10.50 }
  ]
},
{
  "id": "CUI041",
  "categoria": "cuidado",
  "nombre": "CONTORNO DE OJOS",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI042.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 7.80
    },
    {
      "tipo": "Mayor",
      "valor": 6.80
    }
  ]
},
{
  "id": "CUI042",
  "categoria": "cuidado",
  "nombre": "PRIMER FRUITY",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI043.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 12.00
    },
    {
      "tipo": "Mayor",
      "valor": 10.50
    }
  ]
},
{
  "id": "CUI043",
  "categoria": "cuidado",
  "nombre": "PACK X5",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI044.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Pack",
      "valor": 40.00
    }
  ]
},
{
  "id": "CUI044",
  "categoria": "cuidado",
  "nombre": "TALCO BEBE",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI045.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 6.50
    },
    {
      "tipo": "Mayor",
      "valor": 5.70
    }
  ]
},
{
  "id": "CUI045",
  "categoria": "cuidado",
  "nombre": "TALCO PETIT BEBE",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI046.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 10.50
    },
    {
      "tipo": "Mayor",
      "valor": 9.50
    }
  ]
},
{
  "id": "CUI046",
  "categoria": "cuidado",
  "nombre": "SHAMPOO PETIT BEBE",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI047.png",
  "badge": "OFERTA",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 10.00
    },
    { "tipo": "Mayor", "valor": 8.50 }
  ]
},
{
  "id": "CUI047",
  "categoria": "cuidado",
  "nombre": "COLONIA PETIT BEBE",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI048.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 12.00
    },
    {
      "tipo": "Mayor",
      "valor": 10.90
    }
  ]
},
{
  "id": "CUI048",
  "categoria": "cuidado",
  "nombre": "ACEITE PETIT BEBE",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI049.png",
  "badge": "",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 8.50
    },
    {
      "tipo": "Mayor",
      "valor": 7.50
    }
  ]
},
{
  "id": "CUI049",
  "categoria": "cuidado",
  "nombre": "SET DE PEDICURE EN ESTUCHE",
  "descripcion": "",
  "imagen": "IMAGENES CUIDADO/IMGCUI050.png",
  "badge": "OFERTA",
  "estado": "disponible",
  "descuento": 0,
  "estrellas": 5,
  "resenas": 100,
  "precios": [
    {
      "tipo": "Unidad",
      "valor": 1.00
    }
  ]
}

];
