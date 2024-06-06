let tablaMenuProcesos = [
  ["I.",
    "MProc-1.html",
    "Selección de cartera de productos",
    ,
    ,
  ],
  ["II.",
    "MProc-2.html",
    "Planificación",
    ,
    ,
  ],
  ["III.",
    "MProc-3.html",
    "Legales y cumplimiento",
    ,
    ,
  ],
  ["IV.",
    "MProc-4.html",
    "Sistemas de Información de Gestión (MIS)",
    ,
    ,
  ],
  ["V.",
    "MProc-5.html",
    "Personas y Cultura",
    ,
    ,
  ],
  ["VI.",
    "MProc-6.html",
    "Auditoría interna",
    ,
    ,
  ],
  ["VII.",
    "MProc-7.html",
    "Gestión financiera",
    ,
    ,
  ],
  ["VIII.",
    "MProc-8.html",
    "Marketing",
    ,
    ,
  ],
  ["IX.",
    "MProc-9.html",
    "Ventas",
    ,
    ,
  ],
  ["X.",
    "MProc-10.html",
    "Proceso de atención y satisfacción del cliente",
    ,
    ,
  ],
  ["XI.",
    "MProc-11.html",
    "Sistema de control",
    ,
    ,
  ],
  ["XII.",
    "MProc-12.html",
    "Cumplimiento ambiental",
    ,
    ,
  ],
  ["XIII.",
    "MProc-13.html",
    "Contabilidad e impuestos",
    ,
    ,
  ],
  ["XIV.",
    "MProc-14.html",
    "Tecnología de la información",
    ,
    ,
  ],
  ["XV.",
    "MProc-15.html",
    "Ciberseguridad y Recuperación de Desastres",
    ,
    ,
  ],
  ["XVI",
    "MProc-16.html",
    "Transformación digital",
    ,
    ,
  ],
  ["XVII.",
    "MProc-17.html",
    "Recurre a consultoría externa o programas customizados para fortalecer procesos",
    ,
    ,
  ],
  ["XVIII",
   "MProc-18.html",
   "Innovación",
    ,
    ,
  ],
  ["XIX.",
   "MProc-19.html",
   "Comité de Innovación",
    ,
    ,
  ],
  ["XX",
  "MProc-20.html",
  "Gestión de Riesgos (Risk Management)",
    ,
    ,
  ],
  ["XXI.",
   "MProc-21.html",
   "Gestión y Generación de los Productos (manufacturas)",
    ,
    ,
  ],
  ["XXII",
  "MProc-22.html",
  "Gestión y Generación de los Productos (servicios)",
    ,
    ,
  ],
  ["",
  "MProc-23.html",
  " - - - - - - - - - - CALIFICACION GENERAL - - -",
  ,
  ,
],
  ]

// Recuperar el valor de LocalStorage
// let valorMaximo = JSON.parse(localStorage.getItem('maximo'));
// let valoresPro = JSON.parse(localStorage.getItem('valores'));
// let valorPuntos = JSON.parse(localStorage.getItem('nuevoValor'));

for (i = 0; i < tablaMenuProcesos.length; i++) {
  tablaMenuProcesos[i][3] = 0;
  tablaMenuProcesos[i][4] = 0;
  tablaMenuProcesos[i][5] = 0;
}

tablaMenuProcesos[0][3] = JSON.parse(localStorage.getItem('maximoPro'));
tablaMenuProcesos[0][4] = JSON.parse(localStorage.getItem('valoresPro'));
tablaMenuProcesos[0][5] = JSON.parse(localStorage.getItem('porcientoPro'));

tablaMenuProcesos[1][3] = JSON.parse(localStorage.getItem('maximoPro-2'));
tablaMenuProcesos[1][4] = JSON.parse(localStorage.getItem('valoresPro-2'));
tablaMenuProcesos[1][5] = JSON.parse(localStorage.getItem('porcientoPro-2'));

tablaMenuProcesos[2][3] = JSON.parse(localStorage.getItem('maximoPro-3'));
tablaMenuProcesos[2][4] = JSON.parse(localStorage.getItem('valoresPro-3'));
tablaMenuProcesos[2][5] = JSON.parse(localStorage.getItem('porcientoPro-3'));

tablaMenuProcesos[14][3] = JSON.parse(localStorage.getItem('maximoPro-15'));
tablaMenuProcesos[14][4] = JSON.parse(localStorage.getItem('valoresPro-15'));
tablaMenuProcesos[14][5] = JSON.parse(localStorage.getItem('porcientoPro-15'));

for (i = 0; i < tablaMenuProcesos.length - 1; i++) {
  tablaMenuProcesos[15][3] += tablaMenuProcesos[i][3];
  tablaMenuProcesos[15][4] += tablaMenuProcesos[i][4];
}

if (tablaMenuProcesos[15][4] !== 0) {
  tablaMenuProcesos[15][5] = ((tablaMenuProcesos[i][4] / tablaMenuProcesos[15][3]) * 100).toFixed(2)
}

// console.log(`puntos: ${valorRecuperado} y el maximo: ${valorMaximo} y el de funcion 2 ${valorFuncion2}`);

//  llena la matriz 
let lineaDatosFd = document.getElementById("lineaMenu");

for (i = 0; i < tablaMenuProcesos.length; i++) {
  lineaDatosFd = tablaIndice.insertRow();

  let celdaNombre = lineaDatosFd.insertCell(-1);
  celdaNombre.textContent = tablaMenuProcesos[i][0];

  // Crear la segunda celda (columna) como un enlace:
  // un elemento <a> con el valor de tablaMenuA[i][1]
  // como su atributo href, y luego lo agregamos como hijo de la celda de enlace (celdaEnlace). 

  const celdaEnlace = lineaDatosFd.insertCell(-1);
  const enlace = document.createElement('a'); // Crear un elemento <a>
  enlace.href = tablaMenuProcesos[i][1]; // Establecer el atributo href con el valor correspondiente
  enlace.textContent = tablaMenuProcesos[i][2]; // Establecer el texto del enlace con el tercer elemento de la tabla
  celdaEnlace.appendChild(enlace); // Agregar el enlace como hijo de la celda

  celdaMaximo = lineaDatosFd.insertCell(-1);
  if (tablaMenuProcesos[i][3] === 0) {
    tablaMenuProcesos[i][3] = ""
  }
  celdaMaximo.textContent = tablaMenuProcesos[i][3];

  celdaPuntos = lineaDatosFd.insertCell(-1);
  if (tablaMenuProcesos[i][4] === 0) {
    tablaMenuProcesos[i][4] = ""
  }
  celdaPuntos.textContent = tablaMenuProcesos[i][4];

  celdaporcientoPro = lineaDatosFd.insertCell(-1);
  if (tablaMenuProcesos[i][5] === 0) {
    tablaMenuProcesos[i][5] = ""
  }
  celdaporcientoPro.textContent = tablaMenuProcesos[i][5];
}