
  // Función para obtener el valor seleccionado
  function obtenerValorSeleccionado() {
    // Obtener todos los elementos input tipo radio con name="opcion"
    var radios = document.querySelectorAll('input[type="radio"]');
    
    console.log ("entro a la funcion")
    // Variable para almacenar el valor seleccionado
    var valorSeleccionado = null;
    
    // Recorrer todos los radio buttons
    radios.forEach(function(radio) {
      // Si el radio button está marcado, almacenar su valor
      if (radio.checked) {
        valorSeleccionado = radio.value;
      }
    });
    
    // Mostrar el valor seleccionado en la consola
    console.log("El valor seleccionado es: " + valorSeleccionado);
    
    // También puedes devolver el valor seleccionado para usarlo en otra parte de tu código
    return valorSeleccionado;
  }

  alert ("buenas")
  // Llamar a la función cuando sea necesario obtener el valor seleccionado


//   window.addEventListener('DOMContentLoaded', function() {
//     obtenerValorSeleccionado();});

      // Obtener el formulario y adjuntar un controlador de eventos al evento submit
  document.getElementById('formulario').addEventListener('submit', function(event) {
    // Prevenir el envío del formulario por defecto
          event.preventDefault();
          alert ("pasó por el prevent")
    
    // Llamar a la función para obtener el valor seleccionado cuando se haga clic en el botón de envío
          obtenerValorSeleccionado();
  });