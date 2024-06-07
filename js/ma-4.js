let respuestas = [];
let tabla = [];
let valores = 0;
let maximo = 145; // 4 x 5 +  1 x 10  +  1 x 20
let porcientoFormateado = 0;
let puntajesIndividuales = [];
let filasFaltantes = [];

let checkboxesSeleccionados = [];

// OBTIENE LOS VALORES DE RADIO ::::::::::::::::::::::::::::::

function obtenerValoresSeleccionados() {
  respuestas = [];
  const grupos = [ // las respuestas
  "A-4-1",
  "A-4-3",
  "A-4-4",
  "A-4-5",
  "A-4-6",
  "A-4-7",
  "A-4-8",
  "A-4-9",
  "A-4-10",
  "A-4-11",
];

  var indiceFilas = 0;
  filasFaltantes = [];
  grupos.forEach((nombreGrupo) => {
    indiceFilas++;

    // if (indiceFilas == 2){indiceFilas++}; //saltea posicion 2 para auditor
    const grupo = document.querySelector(
      `input[name="${nombreGrupo}"]:checked`
    );
    if (grupo) {
      respuestas.push(grupo.value); // Agrega el valor del radio seleccionado al arreglo
    } else {
      respuestas.push('9'); // Agrega null si no hay selección
      filasFaltantes.push(indiceFilas);
    }
    // console.log(`indice ${indiceFilas} y respuesta: ${respuestas}`)
  });

  console.log(`indice ${indiceFilas} y respuesta:           ${respuestas}`)

//  Ahora controla los condicionales, si existe comite cuando hay reunion::::::::::
// Comité de auditoria y el auditor :::::::::::::::::::::::::::::::::
  if (respuestas[0] == 1){
    //existe comite auditoria
    const marca = document.querySelector(
      'input[name="A-4-2"]:checked');
    
    if(!marca){
      respuestas.splice(1, 0, '9'); // Agrega null si no hay selección
      filasFaltantes.splice(1, 0, 2); // guarda en posicion 2??
    } else {
      respuestas.splice(1, 0, (marca.value))
    } 
  }else{
    respuestas.splice(1, 0, '9')
  };

  console.log (`respuestas despues auditor en comité${respuestas}`)

// Comité de Auditoría
  indiceFilas++;
  if (respuestas[0] == 1){
    const marca = document.querySelector(
      'input[name="A-4-12"]:checked');
  
    if (marca) {
      respuestas.push(marca.value); // Agrega el valor del radio seleccionado al arreglo
    } else {
      respuestas.push('9'); // Agrega null si no hay selección
      filasFaltantes.push(indiceFilas);}}
      else {
        console.log('agrego null por no comite auditoria')
        respuestas.push('9'); // Agrega null si no hay comite auditoria
      }

  console.log (`respuestas despues reuniones de audi${respuestas}`);

// Comité de Alta Gerencia
  indiceFilas++;
  if (respuestas[2] == 1){
  const marca = document.querySelector(
    'input[name="A-4-13"]:checked');
  
    if (marca) {
    respuestas.push(marca.value); // Agrega el valor del radio seleccionado al arreglo
  } else {
    respuestas.push('9'); // Agrega null si no hay selección
    filasFaltantes.push(indiceFilas);}}
    else {
      console.log('agrego null por no comite alta gerencia')
      respuestas.push('9'); // Agrega null si no hay comite auditoria
    }

console.log (`resp despues reun Alta Gerenciaaaaaa${respuestas}`);

// Comité de Nominaciones y sucesiones
    indiceFilas++;
    if (respuestas[3] == 1){
    const marca = document.querySelector(
      'input[name="A-4-14"]:checked');
    
      if (marca) {
      respuestas.push(marca.value); // Agrega el valor del radio seleccionado al arreglo
    } else {
      respuestas.push('9'); // Agrega null si no hay selección
      filasFaltantes.push(indiceFilas);}}
      else {
        console.log('agrego null por no comite nominaciones')
        respuestas.push('9'); // Agrega null si no hay comite auditoria
      }
  
  console.log (`resp despues Nominaciones     .. ...${respuestas}`);


// Comité de Compensaciones
  indiceFilas++;
  if (respuestas[4] == 1){
  const marca = document.querySelector(
    'input[name="A-4-15"]:checked');
  
    if (marca) {
    respuestas.push(marca.value); // Agrega el valor del radio seleccionado al arreglo
  } else {
    respuestas.push('9'); // Agrega null si no hay selección
    filasFaltantes.push(indiceFilas);}}
    else {
      console.log('agrego null por no comite compensaciones')
      respuestas.push('9'); // Agrega null si no hay comite auditoria
    }

console.log (`resp despues Compensaciones ........${respuestas}`);


//  Comité de tecnologías de la información
  indiceFilas++;
  if (respuestas[5] == 1){
  const marca = document.querySelector(
    'input[name="A-4-16"]:checked');

    if (marca) {
    respuestas.push(marca.value); // Agrega el valor del radio seleccionado al arreglo
  } else {
    respuestas.push('9'); // Agrega null si no hay selección
    filasFaltantes.push(indiceFilas);}}
    else {
      console.log('agrego null por no comite tecnologia')
      respuestas.push('9'); // Agrega null si no hay comite auditoria
    }

console.log (`resp despues Tecnología ..............${respuestas}`);

//  Comité de Riesgos
  indiceFilas++;
  if (respuestas[6] == 1){
  const marca = document.querySelector(
    'input[name="A-4-17"]:checked');

    if (marca) {
    respuestas.push(marca.value); // Agrega el valor del radio seleccionado al arreglo
  } else {
    respuestas.push('9'); // Agrega null si no hay selección
    filasFaltantes.push(indiceFilas);}}
    else {
      console.log('agrego null por no comite riesgos')
      respuestas.push('9'); // Agrega null si no hay comite auditoria
    }

console.log (`resp despues Riesgos .................${respuestas}`);



  if (filasFaltantes.length > 0) {
    alert(`Falta infomar en estas filas: ${filasFaltantes}`);
  } else {
    console.log(`respuestas  ${respuestas}`);
    return respuestas; // Devuelve el arreglo si necesitas hacer algo más con él
  }
}

// CALCULA RESULTADOS ::::::::::::::::::::::::::::::::::::

function calculaResultados() {

  for (let i = 0; i < respuestas.length; i++) {
    if (!puntajesIndividuales[i]) puntajesIndividuales[i] = []; // Asegurar que existe el arreglo antes de asignar valores

    console.log(`i= ${i} ,
         valores ${valores} ,
         respuestas: ${respuestas[i]}`);

    let precio = 0;
    if (i == 3){precio = 10}
      else{
          if (i == 5){
               precio = 20}
            else{
              precio = 5
            }
      }

    if (respuestas[i] == 1) {
          valores += precio;
    }

    console.log(`valor despues calculo: ${valores}`);

  }
  const porcientoFormateado = ((valores / maximo) * 100).toFixed(2);
  return porcientoFormateado;
}

// PROCESO PRINCIPAL ::::::::::::::::::::::::::::::::::::::::::

document
// Captura del formulario :::::::::::::::::::::::::::::::::::::
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    valores = 0;
    event.preventDefault(); // Prevenir el envío del formulario

// obtener los valores de radio ::::::::::::::::::::::::::::::
    obtenerValoresSeleccionados();
    console.log(`indice de respuestas faltantes ${filasFaltantes}`);

// Si no hay faltantes sigue adelante:::::::::::::::::::::::::
    if (!(filasFaltantes.length > 0)) {
      porcientoFormateado = calculaResultados();
      porcientoFormateado = ((valores / maximo) * 100).toFixed(2);

      mostrarMiAlerta(maximo, valores, porcientoFormateado);
      console.log(`Suma puntos ${valores},
                 valor máximo: ${maximo},
                 porcentaje ${porcientoFormateado}`);
      console.table(puntajesIndividuales);

      // Guardar el valor en LocalStorage
      localStorage.setItem("maximo-4", JSON.stringify(maximo));
      localStorage.setItem("valores-4", JSON.stringify(valores));
      localStorage.setItem("porciento-4", JSON.stringify(porcientoFormateado));

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

  // Apagar todas las reuniones y auditor de la segunda linea
          // fila2.style.display = 'none';

  document.getElementById("tituloFrecuencia").style.display = 'none';

  document.getElementById('fila-2').style.display = 'none';
  document.getElementById('fila-2a').style.display = 'none';
  document.getElementById('fila-2b').style.display = 'none';
  document.getElementById('reunionComAud').style.display = 'none';
  document.getElementById('reunionComAud1').style.display = 'none';
  document.getElementById('reunionComAud2').style.display = 'none';

  document.getElementById('lineaAltaG').style.display = 'none';
  document.getElementById('lineaAltaG1').style.display = 'none';
  document.getElementById('lineaAltaG2').style.display = 'none';
  document.getElementById('lineaAltaG3').style.display = 'none';

  document.getElementById('lineaNomSuc').style.display = 'none';
  document.getElementById('lineaNomSuc1').style.display = 'none';
  document.getElementById('lineaNomSuc2').style.display = 'none';

  document.getElementById('comiteCompen').style.display = 'none';
  document.getElementById('comiteCompen1').style.display = 'none';
  document.getElementById('comiteCompen2').style.display = 'none';

  document.getElementById('comiteTecno').style.display = 'none';
  document.getElementById('comiteTecno1').style.display = 'none';
  document.getElementById('comiteTecno2').style.display = 'none';

  document.getElementById('comiteRiesgo').style.display = 'none';
  document.getElementById('comiteRiesgo1').style.display = 'none';
  document.getElementById('comiteRiesgo2').style.display = 'none';
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
  // window.location.href = "MA-5.html";
  window.location.href = (JSON.parse(localStorage.getItem('idioma'))) == 1 ? "MA-5.html" : "MA-5-en.html"
}