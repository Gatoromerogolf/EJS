let respuestas = [];
let tabla = [];
let valores = 0;
let maximo = 10; // 2 por 5
let porcientoFormateado = 0;
let puntajesIndividuales = [];
let filasFaltantes = [];

let checkboxesSeleccionados = [];

// OBTIENE LOS VALORES DE RADIO ::::::::::::::::::::::::::::::

// function obtenerValoresSeleccionados() {
//   respuestas = [];
//   const grupos = ["A-15-1"];

//   var indiceFilas = 0;
//   filasFaltantes = [];
//   grupos.forEach((nombreGrupo) => {
//     indiceFilas++;
//     const grupo = document.querySelector(
//       `input[name="${nombreGrupo}"]:checked`
//     );
//     if (grupo) {
//       respuestas.push(grupo.value); // Agrega el valor del radio seleccionado al arreglo
//     } else {
//       respuestas.push(null); // Agrega null si no hay selección
//       filasFaltantes.push(indiceFilas);
//     }
//   });

//   if (filasFaltantes.length > 0) {
//     alert(`Falta infomar en estas filas: ${filasFaltantes}`);
//   } else {
//     console.log(`respuestas  ${respuestas}`);
//     return respuestas; // Devuelve el arreglo si necesitas hacer algo más con él
//   }
// }

// CALCULA RESULTADOS ::::::::::::::::::::::::::::::::::::

// function calculaResultados() {
//   // tabla = respuestas[0] == 1 ? tabla01 : tabla02;
//   // maximo = respuestas[0] == 1 ? tabla01[0][2] : tabla02[0][2];
//   // console.log(respuestas[0], maximo, tabla01[0][2], tabla02[0][2]);

//   for (let i = 0; i < respuestas.length; i++) {
//     if (!puntajesIndividuales[i]) puntajesIndividuales[i] = []; // Asegurar que existe el arreglo antes de asignar valores

//     console.log(`i= ${i} ,
//          valores ${valores} ,
//          respuestas: ${respuestas[i]}`);

//     switch (respuestas[i]) {
//       case "1": valores +=0;
//               break;
//       case "2": valores +=(0.50 * 5);
//               console.log (`caso 2 ${valores}`)
//               break;
//       case "3": valores +=(0.75 * 5);
//               console.log (`caso 3 ${valores}`)
//               break;
//       case "4": valores +=(1 * 5);
//               console.log (`caso 4 ${valores}`)
//               break;
//     }
//     console.log(`valor despues calculo: ${valores}`);

//   }
//   const porcientoFormateado = ((valores / maximo) * 100).toFixed(2);
//   return porcientoFormateado;
// }

// PROCESO PRINCIPAL ::::::::::::::::::::::::::::::::::::::::::

// document
// // Captura del formulario :::::::::::::::::::::::::::::::::::::
//   .getElementById("survey-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevenir el envío del formulario

// // obtener los valores de radio ::::::::::::::::::::::::::::::
  //     // obtenerValoresSeleccionados();
//     // console.log(`indice de respuestas faltantes ${filasFaltantes}`);

// // Si no hay faltantes sigue adelante:::::::::::::::::::::::::
//     // if (!(filasFaltantes.length > 0)) {
//     //   // porcientoFormateado = calculaResultados();
//       let valores=1267;
//       let maximo=1460;
//       porcientoFormateado = ((valores / maximo) * 100).toFixed(2);

//       // console.log("Mostrando alerta personalizada...");
//       mostrarMiAlerta(maximo, valores, porcientoFormateado);
//       console.log(`Suma puntos ${valores},
//                  valor máximo: ${maximo},
//                  porcentaje ${porcientoFormateado}`);
//       console.table(puntajesIndividuales);

//       // Guardar el valor en LocalStorage
//       localStorage.setItem("maximo-15", JSON.stringify(maximo));
//       localStorage.setItem("valores-15", JSON.stringify(valores));
//       localStorage.setItem("porciento-15", JSON.stringify(porcientoFormateado));

//       // window.location.href = "Menu-A.html";
//     }
//   );

window.addEventListener('load', function () {
  // Obtener los datos almacenados en LocalStorage
  const maximo = JSON.parse(localStorage.getItem('maximo-15')) || 1875;
  const valores = JSON.parse(localStorage.getItem('valores-15')) || 1357.50;
  const porcientoFormateado = JSON.parse(localStorage.getItem('porciento-15')) || 75.20;

  const maximo2 = 0;
  const valores2 = 0;
  const porcientoFormateado2 = 0;
  // const porcientoFormateado2 = ((valores2 / maximo2) * 100).toFixed(2);

  // Mostrar los valores en los elementos correspondientes
  document.getElementById('maximo').textContent = maximo;
  document.getElementById('calificacion').textContent = valores;
  document.getElementById('porcentual').textContent = porcientoFormateado;

  mostrarMiAlerta(maximo, valores, porcientoFormateado);
  if (valores2 >0) {
    mostrarMiAlerta2(maximo2, valores2, porcientoFormateado2);
    }
});

// ---------------------------

// function limpiarSelecciones() {
//   // Obtener todos los inputs tipo radio y checkbox
//   var radios = document.querySelectorAll('input[type="radio"]');
//   var checkboxes = document.querySelectorAll('input[type="checkbox"]');

//   // Desmarcar todos los radios
//   radios.forEach(function (radio) {
//     radio.checked = false;
//   });

//   // Desmarcar todos los checkboxes
//   checkboxes.forEach(function (checkbox) {
//     checkbox.checked = false;
//   });
// }

// :::::::::::::::::::::::

function mostrarMiAlerta(maximo, valores, porcientoFormateado) {

  // Mostrar la alerta personalizada
  document.getElementById('miAlerta').style.display = 'block';

  //  crea el gauge despues de mostrar la alerta
  const target = document.getElementById('gaugeChart'); // your canvas element
  const gauge = new Gauge(target).setOptions(opts); // create gauge!
  gauge.maxValue = 100; // set max gauge value
  gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 32; // set animation speed (32 is default value)
  gauge.set(porcientoFormateado); // set actual value

  // Actualizar los contenidos
  document.getElementById('maximo').textContent = maximo;
  document.getElementById('calificacion').textContent = valores;
  document.getElementById('porcentual').innerHTML = '<strong>' + porcientoFormateado + '%<strong>';

}

// :::::::::::::::::::::::

function mostrarMiAlerta2(maximo2, valores2, porcientoFormateado2) {

  // Mostrar la alerta personalizada
  document.getElementById('miAlerta2').style.display = 'block';

// Cambiar el fondo según el valor de valores2
  if (valores2 > 0) {
    datosRG2.style.background = 'white';
  } else {
    datosRG2.style.background = 'black'; 

  }

  //  crea el gauge despues de mostrar la alerta
  const target = document.getElementById('gaugeChart2'); // your canvas element
  const gauge = new Gauge(target).setOptions(opts); // create gauge!
  gauge.maxValue = 100; // set max gauge value
  gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 32; // set animation speed (32 is default value)
  gauge.set(porcientoFormateado2); // set actual value

  // Actualizar los contenidos
  document.getElementById('maximo2').textContent = maximo2;
  document.getElementById('calificacion2').textContent = valores2;
  document.getElementById('porcentual2').innerHTML = '<strong>' + porcientoFormateado2 + '%<strong>';

}
// ::::::::::::::::::::::::

function cerrarAlerta() {
  document.getElementById("miAlerta").style.display = "none";
}

function continuar() {
  cerrarAlerta();  // Opcional, depende de si quieres cerrar la alerta antes de cambiar la página
  window.location.href = "Menu-A.html";
}

function continuar() {
  cerrarAlerta();  // Opcional, depende de si quieres cerrar la alerta antes de cambiar la página
window.location.href = (JSON.parse(localStorage.getItem('idioma'))) == 1 ? "Menu-A.html" : "Menu-A-en.html"
}

// Armar velocimetro ::::::::::::::::::::::::::::::::::::::
const opts = {
  angle: -0.3,
// The span of the gauge arc
  lineWidth: 0.2, // The line thickness
  radiusScale: 0.8, // Relative radius
  pointer: {
      length: 0.6, // // Relative to gauge radius
      strokeWidth: 0.035, // The thickness
      color: '#000000' // Fill color
  },
  limitMax: false,     // If false, max value increases automatically if value > maxValue
  limitMin: false,     // If true, the min value of the gauge will be fixed
  colorStart: '#6F6EA0',   // Colors
  colorStop: '#C0C0DB',    // just experiment with them
  strokeColor: '#EEEEEE',  // to see which ones work best for you
  generateGradient: true,
  highDpiSupport: true,     // High resolution support

  // Custom segment colors
  staticZones: [
     {strokeStyle: "red", min: 0, max: 50}, // Red from 0 to 25
     {strokeStyle: "orange", min: 50, max: 70}, // Red from 0 to 25
     {strokeStyle: "green", min: 70, max: 90}, // Yellow from 50 to 75
     {strokeStyle: "blue", min: 90, max: 100}  // Blue from 75 to 100
  ],

  staticLabels: {
      font: "15px sans-serif",  // Specifies font
      labels: [0, 50, 70, 90, 100],  // Print labels at these values
      color: "#000000",  // Optional: Label text color
      fractionDigits: 0  // Optional: Numerical precision. 0=round off.
  },
};