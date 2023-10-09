document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los botones dentro del contenedor con id 'toggleButton'
    const buttons = document.querySelectorAll('#toggleButton .custom-button');

    // Función para ocultar todos los elementos de información
    function hideAllInfoElements() {
        const infoElements = document.querySelectorAll('.right > div');
        infoElements.forEach(function(element) {
            element.style.display = 'none';
        });
    }

    // Añade un evento de escucha a cada botón
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Oculta todos los elementos de información
            hideAllInfoElements();

            // Obtiene el valor del atributo 'data-target' del botón
            const targetId = this.getAttribute('data-target');
            
            // Selecciona el elemento con ese id y lo muestra
            const targetElement = document.getElementById(targetId);
            targetElement.style.display = 'block';
        });
    });
});
