let respuestas = [];
let tabla = [];
let valores = 0;
let maximo = 10;
let porcientoFormateado = 0;
let puntajesIndividuales = [];
let filasFaltantes = [];

let checkboxesSeleccionados = [];

// --------------------------

function obtenerValoresSeleccionados() {
  respuestas = [];
  const grupos = ["A-15", "A-16"];

  var indiceFilas = 0;
  filasFaltantes = [];
  grupos.forEach((nombreGrupo) => {
    indiceFilas++;
    const grupo = document.querySelector(
      `input[name="${nombreGrupo}"]:checked`
    );
    if (grupo) {
      respuestas.push(grupo.value); // Agrega el valor del radio seleccionado al arreglo
    } else {
      respuestas.push(null); // Agrega null si no hay selección
      filasFaltantes.push(indiceFilas);
    }
  });

  if (filasFaltantes.length > 0) {
    alert(`Falta infomar en estas filas: ${filasFaltantes}`);
  } else {
    console.log(`respuestas  ${respuestas}`);
    return respuestas; // Devuelve el arreglo si necesitas hacer algo más con él
  }
}

// --------------------------------

function calculaResultados() {
  // tabla = respuestas[0] == 1 ? tabla01 : tabla02;
  // maximo = respuestas[0] == 1 ? tabla01[0][2] : tabla02[0][2];
  // console.log(respuestas[0], maximo, tabla01[0][2], tabla02[0][2]);

  for (let i = 0; i < respuestas.length; i++) {
    if (!puntajesIndividuales[i]) puntajesIndividuales[i] = []; // Asegurar que existe el arreglo antes de asignar valores

    console.log(`i= ${i} ,
         valores ${valores} ,
         respuestas: ${respuestas[i]}`);

    if ((respuestas[i] == 1)) {
      valores += 5;
    }

    console.log(`valor despues calculo: ${valores}`);

    // puntajesIndividuales[i][0] = i + 1;
    // puntajesIndividuales[i][1] = respuestas[i];
    // puntajesIndividuales[i][2] = tabla[i][respuestas[i] - 1];
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
    obtenerValoresSeleccionados();
    console.log(`indice de respuestas faltantes ${filasFaltantes}`);

    // Si no hay faltantes sigue adelante...
    if (!(filasFaltantes.length > 0)) {
      porcientoFormateado = calculaResultados();

      porcientoFormateado = ((valores / maximo) * 100).toFixed(2);
      // alert(
      //   `Calificación obtenida: \n
      //         Puntaje máximo de la sección: ${maximo} \n
      //         Calificación: ${valores} \n
      //         Porcentual: ${porcientoFormateado}%`
      // );
      // console.log("Mostrando alerta personalizada...");
      mostrarMiAlerta(maximo, valores, porcientoFormateado);
      console.log(`Suma puntos ${valores},
                 valor máximo: ${maximo},
                 porcentaje ${porcientoFormateado}`);
      console.table(puntajesIndividuales);

      // // Supongamos que calculas o recibes algún valor 'nuevoValor'
      // let nuevoValor = porcientoFormateado; // Función hipotética que genera un valor

      // Guardar el valor en LocalStorage
      localStorage.setItem("maximo-15", JSON.stringify(maximo));
      localStorage.setItem("valores-15", JSON.stringify(valores));
      localStorage.setItem("porciento-15", JSON.stringify(porcientoFormateado));

      // window.location.href = "Menu-A.html";
    }
  });

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
  window.location.href = "Menu-A.html";
}

function actualizarValorRange(valor) {
  document.getElementById("valorRange").textContent = valor + "%";
}
