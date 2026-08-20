/* ================================================
   SAEN IMPORT — datos-mochilas.js
   Categoría: Mochilas y Carteras
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

const PRODS_MOCHILAS = [
  {
    "id": "MOC001",
    "categoria": "mochilas",
    "nombre": "CARTERA FASHION BAG BR1409",
    "descripcion": "",
    "imagen": "IMAGENES MOCHILAS/IMGMOC001.png",
    "badge": "Popular",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 127,
    "precios": [
      { "tipo": "Unidad", "valor": 22.00 },
      { "tipo": "Mayor", "valor": 20.00 }
    ]
  },
  {
    "id": "MOC002",
    "categoria": "mochilas",
    "nombre": "MORRAL DE DAMA GF-3672",
    "descripcion": "",
    "imagen": "IMAGENES MOCHILAS/IMGMOC002.png",
    "badge": "Nuevo",
    "estado": "agotado",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 89,
    "precios": [
      { "tipo": "Unidad", "valor": 18.00 },
      { "tipo": "Mayor", "valor": 15.90 }
    ]
  },
  {
    "id": "MOC003",
    "categoria": "mochilas",
    "nombre": "CARTERA DE MANO TIGRE GF-3785",
    "descripcion": "",
    "imagen": "IMAGENES MOCHILAS/IMGMOC003.png",
    "badge": "Top Ventas",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 145,
    "precios": [
      { "tipo": "Unidad", "valor": 22.00 },
      { "tipo": "Mayor", "valor": 18.50 }
    ]
  },
  {
    "id": "MOC004",
    "categoria": "mochilas",
    "nombre": "BILLETERA CON AZA YN-7271",
    "descripcion": "",
    "imagen": "IMAGENES MOCHILAS/IMGMOC004.png",
    "badge": "Oferta",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 61,
    "precios": [
      { "tipo": "Unidad", "valor": 3.50 },
      { "tipo": "Mayor", "valor": 2.90 }
    ]
  },
  {
    "id": "MOC005",
    "categoria": "mochilas",
    "nombre": "BOLSO DE DAMA 88F-010 / 88F-015",
    "descripcion": "",
    "imagen": "IMAGENES MOCHILAS/IMGMOC005.png",
    "badge": "Popular",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 118,
    "precios": [
      { "tipo": "Unidad", "valor": 13.00 },
      { "tipo": "Mayor", "valor": 11.00 }
    ]
  },
  {
    "id": "MOC006",
    "categoria": "mochilas",
    "nombre": "CARTERA GRANDE BR1470 / BR1474",
    "descripcion": "",
    "imagen": "IMAGENES MOCHILAS/IMGMOC006.png",
    "badge": "Top Ventas",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5.0,
    "resenas": 150,
    "precios": [
      { "tipo": "Unidad", "valor": 30.00 },
      { "tipo": "Mayor", "valor": 27.00 }
    ]
  },
  {
    "id": "MOC007",
    "categoria": "mochilas",
    "nombre": "MOCHILA CON RUEDAS",
    "descripcion": "DIFERENTES DISEÑOS",
    "imagen": "IMAGENES MOCHILAS/IMGMOC007.png",
    "badge": "Popular",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 138,
    "precios": [
      { "tipo": "Unidad", "valor": 50.00 },
      { "tipo": "Mayor", "valor": 43.00 }
    ]
  },
  {
    "id": "MOC008",
    "categoria": "mochilas",
    "nombre": "MOCHILA OFICIO 3D LUCES",
    "descripcion": "IMAGEN REFERENCIAL",
    "imagen": "IMAGENES MOCHILAS/IMGMOC008.png",
    "badge": "Nuevo",
    "estado": "agotado",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 94,
    "precios": [
      { "tipo": "Unidad", "valor": 45.00 },
      { "tipo": "Mayor", "valor": 40.00 }
    ]
  },
  {
    "id": "MOC009",
    "categoria": "mochilas",
    "nombre": "MOCHILA PELUCHE FE70-X67",
    "descripcion": "IMAGEN REFERENCIAL",
    "imagen": "IMAGENES MOCHILAS/IMGMOC009.png",
    "badge": "Oferta",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 73,
    "precios": [
      { "tipo": "Unidad", "valor": 12.00 },
      { "tipo": "Mayor", "valor": 9.90 }
    ]
  },
  {
    "id": "MOC010",
    "categoria": "mochilas",
    "nombre": "MOCHILA 2 EN 1 CON LUCES B-1911",
    "descripcion": "",
    "imagen": "IMAGENES MOCHILAS/IMGMOC010.png",
    "badge": "Popular",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 121,
    "precios": [
      { "tipo": "Unidad", "valor": 26.00 },
      { "tipo": "Mayor", "valor": 22.50 }
    ]
  },
  {
    "id": "MOC011",
    "categoria": "mochilas",
    "nombre": "MOCHILA 4 CIERRES JUVENIL DAMA DMTJ5",
    "descripcion": "",
    "imagen": "IMAGENES MOCHILAS/IMGMOC011.png",
    "badge": "Top Ventas",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.9,
    "resenas": 132,
    "precios": [
      { "tipo": "Unidad", "valor": 30.00 },
      { "tipo": "Mayor", "valor": 26.00 }
    ]
  },
  {
    "id": "MOC012",
    "categoria": "mochilas",
    "nombre": "MOCHILA JUVENIL ESPECIAL DMTJ6",
    "descripcion": "",
    "imagen": "IMAGENES MOCHILAS/IMGMOC012.png",
    "badge": "Nuevo",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.7,
    "resenas": 102,
    "precios": [
      { "tipo": "Unidad", "valor": 38.00 },
      { "tipo": "Mayor", "valor": 33.00 }
    ]
  },
  {
    "id": "MOC013",
    "categoria": "mochilas",
    "nombre": "MOCHILA 2 CIERRES JUVENIL ECO DMTJ2",
    "descripcion": "",
    "imagen": "IMAGENES MOCHILAS/IMGMOC013.png",
    "badge": "Popular",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.5,
    "resenas": 88,
    "precios": [
      { "tipo": "Unidad", "valor": 23.00 },
      { "tipo": "Mayor", "valor": 19.00 }
    ]
  },
  {
    "id": "MOC014",
    "categoria": "mochilas",
    "nombre": "MOCHILA 3 CIERRES JUVENIL DMTJ1",
    "descripcion": "",
    "imagen": "IMAGENES MOCHILAS/IMGMOC014.png",
    "badge": "Oferta",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.4,
    "resenas": 79,
    "precios": [
      { "tipo": "Unidad", "valor": 25.00 },
      { "tipo": "Mayor", "valor": 22.00 }
    ]
  },
  {
    "id": "MOC015",
    "categoria": "mochilas",
    "nombre": "MOCHILA TITI B-7781",
    "descripcion": "",
    "imagen": "IMAGENES MOCHILAS/IMGMOC015.png",
    "badge": "Top Ventas",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 5.0,
    "resenas": 147,
    "precios": [
      { "tipo": "Unidad", "valor": 34.00 },
      { "tipo": "Mayor", "valor": 30.00 }
    ]
  },
  {
    "id": "MOC016",
    "categoria": "mochilas",
    "nombre": "MOCHILA TITI B-7652",
    "descripcion": "",
    "imagen": "IMAGENES MOCHILAS/IMGMOC016.png",
    "badge": "Popular",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 125,
    "precios": [
      { "tipo": "Unidad", "valor": 32.00 },
      { "tipo": "Mayor", "valor": 28.00 }
    ]
  },
  {
    "id": "MOC017",
    "categoria": "mochilas",
    "nombre": "MOCHILA DAMA TITI 7670",
    "descripcion": "",
    "imagen": "IMAGENES MOCHILAS/IMGMOC017.png",
    "badge": "Nuevo",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.6,
    "resenas": 91,
    "precios": [
      { "tipo": "Unidad", "valor": 34.00 },
      { "tipo": "Mayor", "valor": 29.00 }
    ]
  },
  {
    "id": "MOC018",
    "categoria": "mochilas",
    "nombre": "CARTERA ANIMAL PRIN EP-2726",
    "descripcion": "",
    "imagen": "IMAGENES MOCHILAS/IMGMOC018.png",
    "badge": "Oferta",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.3,
    "resenas": 58,
    "precios": [
      { "tipo": "Unidad", "valor": 18.00 },
      { "tipo": "Mayor", "valor": 15.80 }
    ]
  },
  {
    "id": "MOC019",
    "categoria": "mochilas",
    "nombre": "CARTERA CON BOLSA DE REGALO ML-7947",
    "descripcion": "",
    "imagen": "IMAGENES MOCHILAS/IMGMOC019.png",
    "badge": "Top Ventas",
    "estado": "disponible",
    "descuento": 0,
    "estrellas": 4.8,
    "resenas": 129,
    "precios": [
      { "tipo": "Unidad", "valor": 20.00 },
      { "tipo": "Mayor", "valor": 17.50 }
    ]
  }
];
