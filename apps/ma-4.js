
// definicion de los campos a verificar
let respuestas = []; // se guardan los valores elegidos en cada pregunta
let valores = 0; // suma de los valores segun respuestas
let maximo = 0; // valor máximo de la sección segun sean 3 o 4 directores - Sale de ma-1js.

const grupos = [ // las respuestas
    "A-4-1",
    "A-4-1-1",
    "A-4-2",
    "A-4-3",
    "A-4-4",
    "A-4-5",
    "A-4-6",
    "A-4-7",
    "A-4-8",
    "A-4-9",
    "A-4-10",
    "A-4-11-1",
    "A-4-11-3",
    "A-4-11-4",
    "A-4-11-5",
    "A-4-11-6",
    "A-4-11-7",
];

function obtenerValoresSeleccionados(){
    respuestas=[];

grupos.forEach((nombreGrupo) =>{
    const grupo = document.querySelector(`input[name='${nombreGrupo}']:checked`);
// grupo se refiere a un elemento del DOM que representa un input de tipo radio o checkbox que ha sido seleccionado en el formulario. Cuando utilizas document.querySelector() y buscas por un selector específico que incluye :checked, estás intentando obtener el input que está actualmente seleccionado dentro de un grupo dado por el nombre del input. Si un input está seleccionado, document.querySelector() devolverá ese elemento; si no hay ninguno seleccionado, devolverá null.

    if (grupo) { // si tiene algun cheched es true
        respuestas.push(grupo.value);}
// Como grupo es un objeto que representa un elemento del DOM (específicamente un input), tiene varias propiedades y métodos heredados del prototipo de HTMLElement y HTMLInputElement. Aquí algunas:
// value: El valor del atributo value del input. Este es el valor que será enviado con el formulario si el input es un botón de radio o checkbox y está seleccionado.
// checked: Booleano que indica si el input de tipo checkbox o radio está seleccionado (true) o no (false).
// name: El valor del atributo name del input, que identifica el grupo de botones de radio/checkbox.
// type: Tipo del input (por ejemplo, "radio" o "checkbox").
// id: El valor del atributo id del input, que es un identificador único dentro del documento HTML.
// classList: Una instancia de DOMTokenList que permite acceder y manipular la lista de clases CSS del elemento.
        else{
            respuestas.push(null);
        }
    })}

function controlarFaltantes(){
    let indiceFaltantes = 0;
    let faltantes = []; //para guardar las filas sin informar
    for (var indiceFilas=0; indiceFilas < 11; indiceFilas++) {// indice para registrar que fila falta
        // if (indiceFilas < 11){
            if (indiceFilas == 1){
                if (respuestas[1] == null &&
                    respuestas[0] == 1)
                    {
                        faltantes[indiceFaltantes] = 2;
                        indiceFaltantes++;
                    }}
             else{    
                if (respuestas[indiceFilas] == null) {
                    faltantes[indiceFaltantes] = indiceFilas+1;
                    indiceFaltantes++;
            }}
        }
        // controla comite de auditoria con reuniones
        if (respuestas[0] == 1 && respuestas[11]==null){
                faltantes[indiceFaltantes] = 12
                indiceFaltantes++
        }
        // controla los otros 5 comités con reuniones
        for (var indice=3; indice<8; indice++){
            if (respuestas[indice] == 1 && respuestas[indice+9] == null){
                faltantes[indiceFaltantes] = indice + 10;
                indiceFaltantes++
            }
        }
    console.log(respuestas);
    console.log("faltantes " + faltantes );
    return faltantes;
}

function valorizar(){

}

// se define el formulario y se evita que se envie por recarga de la página


document
  var formulario = document.getElementById("formulario")
  .addEventListener("submit", function (event) {
    valores = 0;
    event.preventDefault(); // Prevenir el envío del formulario

// verificar que se hayan seleccionado todos los elementos
obtenerValoresSeleccionados();
var faltantes=controlarFaltantes(); 
if (faltantes.length > 0) {
        alert("Falta informar en estas filas: " + faltantes)
}  else{
    alert ("ahora anduvo bien")
}
})


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

// si no hay errores o faltantes se sigue adelante
// se valoriza la respuesta

// se muestra por pantalla

// se envia el vector con los datos al servidor....