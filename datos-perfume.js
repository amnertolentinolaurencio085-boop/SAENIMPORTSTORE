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

const PRODS_PERFUMES = [
  {
    "id": "PER001",
    "categoria": "perfumes",
    "nombre": "PERFUME TACO MISSY G.G PW",
    "descripcion": "",
    "imagen": "IMAGENES PERFUME/IMGPER001.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 126,
    "precios": [
      {
        "tipo": "Unidad",
        "valor": 15.00
      },
      {
        "tipo": "Mayor",
        "valor": 13.50
      }
    ]
  },
  {
    "id": "PER002",
    "categoria": "perfumes",
    "nombre": "COLONIA ARABE 20 AÃ‘OS DE ANIVERSARIO",
    "descripcion": "",
    "imagen": "IMAGENES PERFUME/IMGPER002.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 84,
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
    "id": "PER003",
    "categoria": "perfumes",
    "nombre": "COLONIA HELADO",
    "descripcion": "",
    "imagen": "IMAGENES PERFUME/IMGPER003.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 147,
    "precios": [
      {
        "tipo": "Unidad",
        "valor": 25.00
      },
      {
        "tipo": "Mayor",
        "valor": 22.00
      }
    ]
  },
  {
    "id": "PER004",
    "categoria": "perfumes",
    "nombre": "COLONIA YARA ARABE PARA MUJER CORONA",
    "descripcion": "",
    "imagen": "IMAGENES PERFUME/IMGPER004.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 93,
    "precios": [
      {
        "tipo": "Unidad",
        "valor": 13.00
      },
      {
        "tipo": "Mayor",
        "valor": 11.00
      }
    ]
  },
  {
    "id": "PER005",
    "categoria": "perfumes",
    "nombre": "PERFUME ARABE YARA ASAD CY53",
    "descripcion": "",
    "imagen": "IMAGENES PERFUME/IMGPER005.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 131,
    "precios": [
      {
        "tipo": "Unidad",
        "valor": 25.00
      },
      {
        "tipo": "Mayor",
        "valor": 22.00
      }
    ]
  },
  {
    "id": "PER006",
    "categoria": "perfumes",
    "nombre": "PERFUME PARA MUJER PW PARFUM WOMAN ROJO BLANCO",
    "descripcion": "",
    "imagen": "IMAGENES PERFUME/IMGPER006.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 72,
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
    "id": "PER007",
    "categoria": "perfumes",
    "nombre": "PERFUME ECORINCIA DE NIÃ‘O MAS LLAVERO",
    "descripcion": "",
    "imagen": "IMAGENES PERFUME/IMGPER007.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 118,
    "precios": [
      {
        "tipo": "Unidad",
        "valor": 10.00
      },
      {
        "tipo": "Mayor",
        "valor": 8.50
      }
    ]
  },
  {
    "id": "PER008",
    "categoria": "perfumes",
    "nombre": "PERFUME ECORINCIA DE NIÃ‘O MAS LLAVERO",
    "descripcion": "",
    "imagen": "IMAGENES PERFUME/IMGPER008.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 58,
    "precios": [
      {
        "tipo": "Unidad",
        "valor": 10.00
      },
      {
        "tipo": "Mayor",
        "valor": 8.50
      }
    ]
  },
  {
    "id": "PER009",
    "categoria": "perfumes",
    "nombre": "PERFUME ECORINCIA DE DAMA CEP-61 E0270-85",
    "descripcion": "",
    "imagen": "IMAGENES PERFUME/IMGPER009.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 89,
    "precios": [
      {
        "tipo": "Unidad",
        "valor": 10.00
      },
      {
        "tipo": "Mayor",
        "valor": 8.50
      }
    ]
  },
  {
    "id": "PER010",
    "categoria": "perfumes",
    "nombre": "PERFUME ECORINCIA DE DAMA CEP-61 E0270-85",
    "descripcion": "",
    "imagen": "IMAGENES PERFUME/IMGPER010.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 111,
    "precios": [
      {
        "tipo": "Unidad",
        "valor": 10.00
      },
      {
        "tipo": "Mayor",
        "valor": 8.50
      }
    ]
  },
  {
    "id": "PER011",
    "categoria": "perfumes",
    "nombre": "FEROMONA VARON Y MUJER",
    "descripcion": "",
    "imagen": "IMAGENES PERFUME/IMGPER011.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 66,
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
    "id": "PER012",
    "categoria": "perfumes",
    "nombre": "PERFUME MUJER",
    "descripcion": "",
    "imagen": "IMAGENES PERFUME/IMGPER012.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 139,
    "precios": [
      {
        "tipo": "Unidad",
        "valor": 12.00
      },
      {
        "tipo": "Mayor",
        "valor": 9.00
      }
    ]
  },
  {
    "id": "PER013",
    "categoria": "perfumes",
    "nombre": "KIT DE PERFUME V.V.LOVE VL3801-1",
    "descripcion": "",
    "imagen": "IMAGENES PERFUME/IMGPER013.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 145,
    "precios": [
      {
        "tipo": "Unidad",
        "valor": 14.00
      },
      {
        "tipo": "Mayor",
        "valor": 11.50
      }
    ]
  },
  {
    "id": "PER014",
    "categoria": "perfumes",
    "nombre": "KIT DE PERFUME V.V.LOVE VL3801-1",
    "descripcion": "",
    "imagen": "IMAGENES PERFUME/IMGPER014.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 81,
    "precios": [
      {
        "tipo": "Unidad",
        "valor": 14.00
      },
      {
        "tipo": "Mayor",
        "valor": 11.50
      }
    ]
  },
  {
    "id": "PER015",
    "categoria": "perfumes",
    "nombre": "KIT DE PERFUME V.V.LOVE VL3801-1",
    "descripcion": "",
    "imagen": "IMAGENES PERFUME/IMGPER015.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 103,
    "precios": [
      {
        "tipo": "Unidad",
        "valor": 14.00
      },
      {
        "tipo": "Mayor",
        "valor": 11.50
      }
    ]
  },
  {
    "id": "PER016",
    "categoria": "perfumes",
    "nombre": "PERFUME MINI ONLYOU OLU830-7",
    "descripcion": "",
    "imagen": "IMAGENES PERFUME/IMGPER016.png",
    "badge": "",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 74,
    "precios": [
      {
        "tipo": "Unidad",
        "valor": 7.00
      },
      {
        "tipo": "Mayor",
        "valor": 5.90
      }
    ]
  },
];
