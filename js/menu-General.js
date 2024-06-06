let tablaMenuA = [];

let tablaMenuEs = [
  ["A.",
    // "MA-1.html",
    "Menu-A.html",
    "Gobierno Corporativo",
    ,
    ,
  ],
  ["B.",
    "Menu-ape-rie.html",
    "Apetito de Riesgo",
    ,
    ,
  ],
  ["C.",
    "rie-mer.html",
    "Riesgos de Mercado",
    ,
    ,
  ],
  ["D.",
    "Menu-procesos.html",
    "Riesgos de Procesos",
    ,
    ,
  ],
  ["E.",
    "pos-fin.html",
    "Situación Financiera",
    ,
    ,
  ],
  ["F.",
    "cal-res.html",
    "Calidad de los Resultados",
    ,
    ,
  ],
  ["",
    "##",
    "Resumen General:",
    ,
    ,
  ],
]

let tablaMenuIn = [
  ["A.",
    "MA-1-en.html",
    "Corporate governance",
    ,
    ,
  ],
  ["B.",
    "MA-2-en.html",
    "Risk appetite",
    ,
    ,
  ],
  ["C.",
    "MA-3-en.html",
    "Market risks",
    ,
    ,
  ],
  ["D.",
    "MA-4-en.html",
    "Process risks",
    ,
    ,
  ],
  ["E.",
    "MA-5-en.html",
    "Financial situation",
    ,
    ,
  ],
  ["F.",
    "MA-6-en.html",
    "Quality of results",
    ,
    ,
  ],

  ["",
    "##",
    "GENERAL SUMMARY:",
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

tablaMenuA[0][3] = JSON.parse(localStorage.getItem('maximo-A'));
tablaMenuA[0][4] = JSON.parse(localStorage.getItem('valores-A'));
tablaMenuA[0][5] = JSON.parse(localStorage.getItem('porciento-A'));

tablaMenuA[1][3] = JSON.parse(localStorage.getItem('maximo-B'));
tablaMenuA[1][4] = JSON.parse(localStorage.getItem('valores-B'));
tablaMenuA[1][5] = JSON.parse(localStorage.getItem('porciento-B'));

tablaMenuA[2][3] = JSON.parse(localStorage.getItem('maximo-C'));
tablaMenuA[2][4] = JSON.parse(localStorage.getItem('valores-C'));
tablaMenuA[2][5] = JSON.parse(localStorage.getItem('porciento-C'));

tablaMenuA[3][3] = JSON.parse(localStorage.getItem('maximo-D'));
tablaMenuA[3][4] = JSON.parse(localStorage.getItem('valores-D'));
tablaMenuA[3][5] = JSON.parse(localStorage.getItem('porciento-D'));

tablaMenuA[4][3] = JSON.parse(localStorage.getItem('maximo-E'));
tablaMenuA[4][4] = JSON.parse(localStorage.getItem('valores-E'));
tablaMenuA[4][5] = JSON.parse(localStorage.getItem('porciento-E'));

tablaMenuA[5][3] = JSON.parse(localStorage.getItem('maximo-F'));
tablaMenuA[5][4] = JSON.parse(localStorage.getItem('valores-F'));
tablaMenuA[5][5] = JSON.parse(localStorage.getItem('porciento-F'));

// tablaMenuA[6][3] = JSON.parse(localStorage.getItem('maximo-G'));
// tablaMenuA[6][4] = JSON.parse(localStorage.getItem('valores-G'));
// tablaMenuA[6][5] = JSON.parse(localStorage.getItem('porciento-G'));



for (i = 0; i < tablaMenuA.length - 1; i++) {
  tablaMenuA[6][3] += tablaMenuA[i][3];
  tablaMenuA[6][4] += tablaMenuA[i][4];
}

if (tablaMenuA[6][4] !== 0) {
  tablaMenuA[6][5] = ((tablaMenuA[i][4] / tablaMenuA[6][3]) * 100).toFixed(2)
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
  enlace.style.textDecoration = 'none';
    // Agregar el enlace como hijo de la celda
  if (i == tablaMenuA.length-1){
    enlace.style.fontSize = '18px'; // Cambiar el tamaño de la fuente
    enlace.style.fontWeight = 'bold'; // Hacer el texto en negrita
    enlace.style.color='black';

    celdaEnlace.style.textAlign = 'center'; // Centrar el contenido horizontalmente
    celdaEnlace.style.display = 'flex';
    celdaEnlace.style.justifyContent = 'center';
    celdaEnlace.style.alignItems = 'center';
  }  
  celdaEnlace.appendChild(enlace); 
  

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