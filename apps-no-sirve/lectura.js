
let respuestas = [];
let valores = 0;
let maximo = 0;

function obtenerValoresSeleccionados() {

    const grupos = [
        'gp-1-1',
        'gp-1-2',
        'gp-1-3',
        'gp-1-4',
        'gp-1-5',
        'gp-1-6'
    ]


    grupos.forEach((nombreGrupo) => {
        const grupo = document.querySelector(`input[name="${nombreGrupo}"]:checked`);
        if (grupo) {
            respuestas.push(grupo.value); // Agrega el valor del radio seleccionado al arreglo
        } else {
            respuestas.push(null); // Agrega null si no hay selección
        }
    });

    return respuestas; // Devuelve el arreglo si necesitas hacer algo más con él
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    obtenerValoresSeleccionados(); // Llamar a la función al enviar el formulario
    calculaResultados();
    alert (`Seleccion: ${respuestas} \n valores: ${valores} \n máximo: ${maximo} \n porcentaje: ${porcientoFormateado}%`)
  })


function calculaResultados(){
  let tabla = (respuestas[0] == 1) ? tabla01 : tabla02;
  maximo = (respuestas[0] == 1) ? tabla01[0][2] : tabla02[0][2];
  console.log (respuestas[0], maximo,  tabla01[0][2],  tabla02[0][2]);

  for (let i=0; i<respuestas.length; i++){
    console.log (`i= ${i} ,
     valores ${valores} ,
     tabla: ${tabla[i]}.
     respuestas: ${respuestas[i]}
     tablarespuesta: ${tabla[i][respuestas[i]-1]}`)
    valores += tabla[i][respuestas[i]-1];
    console.log (`valor despues calculo: ${valores}`)
}
  
  return [porcientoFormateado = (valores / maximo * 100).toFixed(2), maximo];
    // return maximo;
}


// Obtener referencia al input y al span
var rango = document.getElementById('rangoRange');
var valorSpan = document.getElementById('valorRange');

// Mostrar el valor inicial
valorSpan.textContent = rango.value;

// Agregar un evento 'input' al input tipo range
rango.addEventListener('input', function() {
  // Actualizar el texto del span con el valor seleccionado
  valorSpan.textContent = rango.value;
});
