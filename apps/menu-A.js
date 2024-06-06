let tablaMenuA = [];

let tablaMenuEs = [
  ["I.",
    "MA-1.html",
    "La composición y responsabilidad del Directorio",
    ,
    ,
  ],
  ["II.",
    "MA-2.html",
    "Estructura organizacional",
    ,
    ,
  ],
  ["III.",
    "MA-3.html",
    "El Directorio y su articulación con las Gerencias",
    ,
    ,
  ],
  ["IV.",
    "MA-4.html",
    "Comités del Directorio",
    ,
    ,
  ],
  ["V.",
    "MA-5.html",
    "Comité de Auditoría",
    ,
    ,
  ],
  ["VI.",
    "MA-6.html",
    "Información para el Directorio",
    ,
    ,
  ],
  ["VII.",
    "MA-7.html",
    "Estrategia",
    ,
    ,
  ],
  ["VIII.",
    "MA-8.html",
    "Gestión de Riesgos",
    ,
    ,
  ],
  ["IX.",
    "MA-9.html",
    "Cumplimiento y control",
    ,
    ,
  ],
  ["X.",
    "MA-10.html",
    "Funcionamiento",
    ,
    ,
  ],
  ["XI.",
    "MA-11.html",
    "El Directorio y las Gerencias",
    ,
    ,
  ],
  ["XII.",
    "MA-12.html",
    "Cultura y conducta empresarial",
    ,
    ,
  ],
  ["XIII.",
    "MA-13.html",
    "Sucesiones",
    ,
    ,
  ],
  ["XIV.",
    "MA-14.html",
    "Presidente del Directorio",
    ,
    ,
  ],
  ["XV.",
    "MA-15.html",
    "Secretaría del Directorio",
    ,
    ,
  ],
  ["",
    "MA-15.html",
    " * * * * CALIFICACION GENERAL:",
    ,
    ,
  ],
]

let tablaMenuIn = [
  ["I.",
    "MA-1-en.html",
    "Composition and responsibilities of the Board",
    ,
    ,
  ],
  ["II.",
    "MA-2-en.html",
    "Organizational structure",
    ,
    ,
  ],
  ["III.",
    "MA-3-en.html",
    "The Board of Directors and its coordination with Management",
    ,
    ,
  ],
  ["IV.",
    "MA-4-en.html",
    "Board Committees",
    ,
    ,
  ],
  ["V.",
    "MA-5-en.html",
    "Audit Committee responsibilities",
    ,
    ,
  ],
  ["VI.",
    "MA-6-en.html",
    "Information for the Board",
    ,
    ,
  ],
  ["VII.",
    "MA-7-en.html",
    "Strategy",
    ,
    ,
  ],
  ["VIII.",
    "MA-8-en.html",
    "Risk Management",
    ,
    ,
  ],
  ["IX.",
    "MA-9-en.html",
    "Compliance and Control",
    ,
    ,
  ],
  ["X.",
    "MA-10-en.html",
    "Board Operation",
    ,
    ,
  ],
  ["XI.",
    "MA-11-en.html",
    "Board and Management Interaction",
    ,
    ,
  ],
  ["XII.",
    "MA-12-en.html",
    "Business culture and conduct",
    ,
    ,
  ],
  ["XIII.",
    "MA-13-en.html",
    "Succession Planning",
    ,
    ,
  ],
  ["XIV.",
    "MA-14-en.html",
    "Chairman of the Board",
    ,
    ,
  ],
  ["XV.",
    "MA-15-en.html",
    "Board Secretary",
    ,
    ,
  ],
  ["",
    "MA-15-en.html",
    " * * * * GENERAL EVALUATION:",
    ,
    ,
  ],
]

// ajusta idioma

if(JSON.parse(localStorage.getItem('idioma')) == 2){
    tablaMenuA = tablaMenuIn;
}  else {
    tablaMenuA = tablaMenuEs;
}


// Recuperar el valor de LocalStorage
// let valorMaximo = JSON.parse(localStorage.getItem('maximo'));
// let valores = JSON.parse(localStorage.getItem('valores'));
// let valorPuntos = JSON.parse(localStorage.getItem('nuevoValor'));

for (i = 0; i < tablaMenuA.length; i++) {
  tablaMenuA[i][3] = 0;
  tablaMenuA[i][4] = 0;
  tablaMenuA[i][5] = 0;
}

tablaMenuA[0][3] = JSON.parse(localStorage.getItem('maximo'));
tablaMenuA[0][4] = JSON.parse(localStorage.getItem('valores'));
tablaMenuA[0][5] = JSON.parse(localStorage.getItem('porciento'));

tablaMenuA[1][3] = JSON.parse(localStorage.getItem('maximo-2'));
tablaMenuA[1][4] = JSON.parse(localStorage.getItem('valores-2'));
tablaMenuA[1][5] = JSON.parse(localStorage.getItem('porciento-2'));

tablaMenuA[2][3] = JSON.parse(localStorage.getItem('maximo-3'));
tablaMenuA[2][4] = JSON.parse(localStorage.getItem('valores-3'));
tablaMenuA[2][5] = JSON.parse(localStorage.getItem('porciento-3'));

tablaMenuA[14][3] = JSON.parse(localStorage.getItem('maximo-15'));
tablaMenuA[14][4] = JSON.parse(localStorage.getItem('valores-15'));
tablaMenuA[14][5] = JSON.parse(localStorage.getItem('porciento-15'));

for (i = 0; i < tablaMenuA.length - 1; i++) {
  tablaMenuA[15][3] += tablaMenuA[i][3];
  tablaMenuA[15][4] += tablaMenuA[i][4];
}

if (tablaMenuA[15][4] !== 0) {
  tablaMenuA[15][5] = ((tablaMenuA[i][4] / tablaMenuA[15][3]) * 100).toFixed(2)
}

// console.log(`puntos: ${valorRecuperado} y el maximo: ${valorMaximo} y el de funcion 2 ${valorFuncion2}`);

//  llena la matriz 
let lineaDatosFd = document.getElementById("lineaMenu");

for (i = 0; i < tablaMenuA.length; i++) {
  lineaDatosFd = tablaIndice.insertRow();

  let celdaNombre = lineaDatosFd.insertCell(-1);
  celdaNombre.textContent = tablaMenuA[i][0];

  // Crear la segunda celda (columna) como un enlace:
  // un elemento <a> con el valor de tablaMenuA[i][1]
  // como su atributo href, y luego lo agregamos como hijo de la celda de enlace (celdaEnlace). 

  const celdaEnlace = lineaDatosFd.insertCell(-1);
  const enlace = document.createElement('a'); // Crear un elemento <a>
  enlace.href = tablaMenuA[i][1]; // Establecer el atributo href con el valor correspondiente
  enlace.textContent = tablaMenuA[i][2]; // Establecer el texto del enlace con el tercer elemento de la tabla
  celdaEnlace.appendChild(enlace); // Agregar el enlace como hijo de la celda

  celdaMaximo = lineaDatosFd.insertCell(-1);
  if (tablaMenuA[i][3] === 0) {
    tablaMenuA[i][3] = ""
  }
  celdaMaximo.textContent = tablaMenuA[i][3];

  celdaPuntos = lineaDatosFd.insertCell(-1);
  if (tablaMenuA[i][4] === 0) {
    tablaMenuA[i][4] = ""
  }
  celdaPuntos.textContent = tablaMenuA[i][4];

  celdaPorciento = lineaDatosFd.insertCell(-1);
  if (tablaMenuA[i][5] === 0) {
    tablaMenuA[i][5] = ""
  }
  celdaPorciento.textContent = tablaMenuA[i][5];
}