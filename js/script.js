document.addEventListener('DOMContentLoaded', function () {
    // Hacer una solicitud al servidor Express para obtener los datos
    fetch('/api/getSurveyData')
        .then(response => response.json())
        .then(data => {
            // Verificar si hay datos y rellenar el formulario
            if (data.pregunta1) {
                document.querySelector(`input[name="pregunta1"][value="${data.pregunta1}"]`).checked = true;
            }
            if (data.pregunta2) {
                document.querySelector(`input[name="pregunta2"][value="${data.pregunta2}"]`).checked = true;
            }
        })
        .catch(error => console.error('Error al cargar los datos:', error));
});
