let respuestas = [];
let tabla = [];
let valores = 0;
let maximo = 0;
let porcientoFormateado = 0;
let puntajesIndividuales = [];
let filasFaltantes = [];

let checkboxesSeleccionados = [];

// --------------------------

function obtenerValoresSeleccionados() {
  respuestas = [];
  const grupos = [
    "A-I-1",
    "A-I-2",
    "A-I-3",
    "A-I-4",
    "A-I-5",
    "A-I-6",
    "A-I-8",
    "A-I-9",
    "A-I-10",
    "A-I-12",
    "A-I-13",
    "A-I-14",
    "A-I-15",
    "A-I-16",
    "A-I-17",
  ];

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
      if (indiceFilas < 7) {
        filasFaltantes.push(indiceFilas);
      } else {
        if (indiceFilas < 11) {
          filasFaltantes.push(indiceFilas + 1);
        } else {
          filasFaltantes.push(indiceFilas + 2);
        }
      }
    }
  });

  if (filasFaltantes.length > 0) {
    alert(`Falta infomar en estas filas: ${filasFaltantes}`);
  } else {
    //  inserta con 6 el valor de los checkbox para que se posicione en la ultima = 0
    respuestas.splice(6, 0, 6);

    const advisoryBoard = document.querySelector(
      `input[name="A-I-10"]:checked`
    );
    if (advisoryBoard.value == 1) {
      // indica que se informó que tiene AB
      const respuestaAB = document.querySelector(
        `input[name="A-I-11"]:checked`
      );
      // si puso que tiene AB tiene que informar el campo 11
      if (respuestaAB) {
        console.log("entro por aca: " + respuestaAB.value);
        //si respondio hay que insertar el valor en el arreglo
        respuestas.splice(10, 0, respuestaAB.value);
      } else {
        alert(`No selecciono lo del AB en la fila 11`);
      }
    }
    console.log(`respuestas con 7 y 11 ${respuestas}`);
    return respuestas; // Devuelve el arreglo si necesitas hacer algo más con él
  }
}

// --------------------------

function obtenerCheckboxSeleccionados() {
  let errorCheckbox = 0;
  checkboxesSeleccionados = [];

  // Obtener todos los elementos checkbox
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var ultimoCheckbox = checkboxes[checkboxes.length - 1]; // El último checkbox es especial

  // Crear un array para almacenar los IDs de los checkboxes seleccionados
  // var checkboxesSeleccionados = [];

  // Verificar si el último checkbox está seleccionado y alguno de los anteriores también
  var ultimoSeleccionado = ultimoCheckbox.checked;
  var otrosSeleccionados = Array.from(checkboxes)
    .slice(0, -1)
    .some((checkbox) => checkbox.checked);

  // Si el último está seleccionado y también otro, mostrar alerta y retornar
  if (ultimoSeleccionado && otrosSeleccionados) {
    alert(
      "No es posible seleccionar 'Ningún Director' junto con otras opciones en fila 7."
    );
    errorCheckbox = 1;
    return errorCheckbox;
  }

  // Si solo el último está seleccionado o algunos de los otros, pero no ambos>:  || = OR
  if (ultimoSeleccionado || otrosSeleccionados) {
    // Agregar los seleccionados al array
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        checkboxesSeleccionados.push(checkbox.value);
      }
    });
    console.log("Checkboxes seleccionados:", checkboxesSeleccionados);
  } else {
    // Si no se seleccionó ninguno, mostrar alerta
    alert("Por favor seleccionar al menos una opción en experiencia (fila 7).");
    errorCheckbox = 1;
    return errorCheckbox;
  }
  return errorCheckbox;
}

// --------------------------

function sumaPuntosCheckbox() {
  // acumula los puntos por los checkbox seleccionados
  if (!puntajesIndividuales[6]) puntajesIndividuales[6] = []; // Asegurar que existe el arreglo antes de asignar valores

  puntajesIndividuales[6][2] = 0;
  for (i = 0; i < checkboxesSeleccionados.length; i++) {
    // let indicejota = checkboxesSeleccionados[i] - 1;
    valores += tabla[6][checkboxesSeleccionados[i] - 1];

    puntajesIndividuales[6][0] = 7;
    puntajesIndividuales[6][1] = checkboxesSeleccionados.join(", "); //Se convierte el array checkboxesSeleccionados en una cadena y luego se asigna esa cadena
    puntajesIndividuales[6][2] += tabla[6][checkboxesSeleccionados[i] - 1];
    console.log(
      `valor despues calculo: ${valores} , ${checkboxesSeleccionados[i]}`
    );
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
    obtenerValoresSeleccionados();
    console.log(`indice de respuestas faltantes ${filasFaltantes}`);

    // obtener CheckboxSeleccionados();
    let resultadoError = obtenerCheckboxSeleccionados();
    console.log(`return del checkbox  ${resultadoError}`);

    // Si no hay faltantes sigue adelante...
    if (!(filasFaltantes.length > 0) && resultadoError == 0) {
      porcientoFormateado = calculaResultados();
      sumaPuntosCheckbox();

      porcientoFormateado = ((valores / maximo) * 100).toFixed(2);

      mostrarMiAlerta(maximo, valores, porcientoFormateado);

      // Guardar el valor en LocalStorage
      localStorage.setItem("maximo", JSON.stringify(maximo));
      localStorage.setItem("valores", JSON.stringify(valores));
      localStorage.setItem("porciento", JSON.stringify(porcientoFormateado));

      // localStorage.setItem("1", JSON.stringify({
      //   maximo: maximo,
      //   valores: valores,
      //   porciento: porcientoFormateado        
      // }));


      // window.location.href = 'MA-2.html'
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

// ------------ ventana del final con resultados---------------

function mostrarMiAlerta(maximo, valores, porcientoFormateado) {
  // Actualizar los contenidos
  document.getElementById("maximo").textContent = maximo;
  document.getElementById("calificacion").textContent = valores;
  document.getElementById("porcentual").innerHTML =
    "<strong>" + porcientoFormateado + "%<strong>";
  // Mostrar la alerta personalizada
  document.getElementById("miAlerta").style.display = "block";
}

function cerrarAlerta() {
  document.getElementById("miAlerta").style.display = "none";
}

function continuar() {
  cerrarAlerta(); // Opcional, depende de si quieres cerrar la alerta antes de cambiar la página
  window.location.href = "MA-2.html";
}

// ------------------ no se utiliza

function validarSeleccionGrupos() {
  var grupos = [
    "A-I-1",
    "A-I-2",
    "A-I-3",
    "A-I-4",
    "A-I-5",
    "A-I-6",
    "A-I-8",
    "A-I-9",
    "A-I-10",
    "A-I-12",
    "A-I-13",
    "A-I-14",
    "A-I-15",
    "A-I-16",
    "A-I-17",
  ];

  var indiceFilas = 0;
  var respuestas = [];
  var completado = true;

  grupos.forEach((nombreGrupo) => {
    indiceFilas++;
    const grupo = document.querySelector(
      `input[name="${nombreGrupo}"]:checked`
    );
    if (!grupo) {
      alert(`Por favor seleccionar una opción en la fila ${indiceFilas}`);
      completado = false;
    } else {
      respuestas.push(grupo.value);
    }
  });

  if (completado) {
    console.log("Todas las selecciones completadas:", respuestas);
    // Aquí puedes proceder con la siguiente parte de tu lógica de aplicación, como enviar el formulario, etc.
  } else {
    console.log("No todas las selecciones fueron completadas");
    // Puedes decidir dejar que el usuario corrija o hacer alguna otra acción aquí.
  }
}
