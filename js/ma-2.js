let respuestas = [];
let tabla = [];
let valores = 0;

let porcientoFormateado = 0;
let puntajesIndividuales = [];
let filasFaltantes = [];
const maximo = 65;

// Crear un array para almacenar los IDs de los checkboxes seleccionados
let checkboxesSeleccionados = [];



// --------------------------

function obtenerCheckboxSeleccionados() {
  let errorCheckbox = 0;
  checkboxesSeleccionados = [];// borra lo seleccionado anteriormente

  // Obtener todos los elementos checkbox
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Verificar si el último checkbox está seleccionado y alguno de los anteriores también

  var otrosSeleccionados = Array.from(checkboxes)
    .some((checkbox) => checkbox.checked);

  if (!otrosSeleccionados) {
    alert("Por favor seleccionar al menos una opción");
    return errorCheckbox = 1;
  } 

  checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        checkboxesSeleccionados.push(checkbox.value);
      }
    });

    console.log("Checkboxes seleccionados:", checkboxesSeleccionados);
    return errorCheckbox = 0;
  }


// --------------------------

function sumaPuntosCheckbox() {
  // acumula los puntos por los checkbox seleccionados
  // if (!puntajesIndividuales[6]) puntajesIndividuales[6] = []; // Asegurar que existe el arreglo antes de asignar valores

  // puntajesIndividuales[6][2] = 0;
  for (i = 0; i < checkboxesSeleccionados.length; i++) {
    if (checkboxesSeleccionados[i] == 10 || checkboxesSeleccionados[i] == 11)
      {valores += 10}
      else{
        valores += 5
      }

    // valores += tabla[6][checkboxesSeleccionados[i] - 1];

    console.log(
      `valor despues calculo: ${valores} , ${checkboxesSeleccionados[i]}`)
      ;
  }
  // errorCheckbox = 0;
}
// --------------------------------


function calculaResultados() {
  tabla = respuestas[0] == 1 ? tabla01 : tabla02;
  maximo = respuestas[0] == 1 ? tabla01[0][2] : tabla02[0][2];
  console.log(respuestas[0], maximo, tabla01[0][2], tabla02[0][2]);

  for (let i = 0; i < respuestas.length; i++) {

    if (i === 6) continue;
    if (!puntajesIndividuales[i]) puntajesIndividuales[i] = []; // Asegurar que existe el arreglo antes de asignar valores
    console.log(`i= ${i} ,
         valores ${valores} ,
         tabla: ${tabla[i]},
         respuestas: ${respuestas[i]},
         tablarespuesta: ${tabla[i][respuestas[i] - 1]}`);
    valores += tabla[i][respuestas[i] - 1];
    console.log(`valor despues calculo: ${valores}`);

    puntajesIndividuales[i][0] = i + 1;
    puntajesIndividuales[i][1] = respuestas[i];
    puntajesIndividuales[i][2] = tabla[i][respuestas[i] - 1];
  }
  const porcientoFormateado = ((valores / maximo) * 100).toFixed(2);
  return porcientoFormateado;
}

// -------------------------------

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    valores = 0;
    event.preventDefault(); // Prevenir el envío del formulario

    // obtener los valores de radio 
    // obtenerValoresSeleccionados();
    // console.log(`indice de respuestas faltantes ${filasFaltantes}`)

    // obtener CheckboxSeleccionados();
    let resultadoError = obtenerCheckboxSeleccionados();
    console.log(`return del checkbox  ${resultadoError}`)

    // Si no hay faltantes sigue adelante...
    if ((resultadoError == 0)) {
      // porcientoFormateado = calculaResultados();
      sumaPuntosCheckbox();

      porcientoFormateado = ((valores / maximo) * 100).toFixed(2);
      // alert(
      //   `Calificación obtenida: \n
      //       Puntaje máximo de la sección: ${maximo} \n
      //       Calificación: ${valores} \n
      //       Porcentual: ${porcientoFormateado}%`
      // );
      mostrarMiAlerta(maximo, valores, porcientoFormateado);

      // console.log(`Suma puntos ${valores},
      //            valor máximo: ${maximo},
      //            porcentaje ${porcientoFormateado}`);
      // console.table(puntajesIndividuales);


      // // Supongamos que calculas o recibes algún valor 'nuevoValor'
      // let nuevoValor = porcientoFormateado; // Función hipotética que genera un valor

      // Guardar el valor en LocalStorage

      localStorage.setItem('maximo-2', JSON.stringify(maximo));
      localStorage.setItem('valores-2', JSON.stringify(valores));
      localStorage.setItem('porciento-2', JSON.stringify(porcientoFormateado));

      // window.location.href = 'MA-3.html'
    }
  });

  document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
  
    // Obtener todos los elementos de radio y checkbox
    const radios = document.querySelectorAll('input[type="radio"]');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
    // Deshabilitar los elementos de radio
    radios.forEach(radio => {
      radio.disabled = true;
    });
  
    // Deshabilitar los elementos de checkbox
    checkboxes.forEach(checkbox => {
      checkbox.disabled = true;
    }); 
  }
  );

 

// ---------------------------


function limpiarSelecciones() {
  // Obtener todos los inputs tipo radio y checkbox
  var radios = document.querySelectorAll('input[type="radio"]');
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Desmarcar todos los radios
  radios.forEach(function (radio) {
    radio.checked = false;
  });

  // Desmarcar todos los checkboxes
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
}

// ------------ ventana del final con resultados---------------


function mostrarMiAlerta(maximo, valores, porcientoFormateado) {
  // Actualizar los contenidos
  document.getElementById('maximo').textContent = maximo;
  document.getElementById('calificacion').textContent = valores;
  document.getElementById('porcentual').innerHTML = '<strong>' + porcientoFormateado + '%<strong>';
  // Mostrar la alerta personalizada
  document.getElementById('miAlerta').style.display = 'block';
}

function cerrarAlerta() {
  document.getElementById("miAlerta").style.display = "none";
}

function continuar() {
  cerrarAlerta();  // Opcional, depende de si quieres cerrar la alerta antes de cambiar la página
  window.location.href = "MA-3.html";
}