// controlPaseLista.js

export function iniciarPaseLista() {
    // Crear el contenedor para los nuevos botones
    const contenedorBotones = document.createElement('div');
    contenedorBotones.classList.add('d-flex', 'justify-content-between');

    // Crear el botón "Detener Pase de Lista"
    const btnDetener = document.createElement('button');
    btnDetener.classList.add('btn', 'btn-danger', 'btn-lg', 'mb-3', 'formatoDeBotones');
    btnDetener.textContent = 'Detener Pase de Lista';

    // Crear el botón "Ingresar Manualmente"
    const btnIngresarManualmente = document.createElement('button');
    btnIngresarManualmente.classList.add('btn', 'btn-secondary', 'btn-lg', 'mb-3', 'formatoDeBotones');
    btnIngresarManualmente.textContent = 'Ingresar Manualmente';

    // Agregar los nuevos botones al contenedor
    contenedorBotones.appendChild(btnDetener);
    contenedorBotones.appendChild(btnIngresarManualmente);

    // Obtener el contenedor original del botón "Iniciar Pase de Lista"
    const btnIniciar = document.querySelector('.formatoDeBotones');

    // Reemplazar el contenedor original con el nuevo contenedor de botones
    btnIniciar.parentNode.replaceChild(contenedorBotones, btnIniciar);

    // Manejar el clic en el botón "Detener Pase de Lista"
    btnDetener.addEventListener('click', function () {
        // Crear el botón "Iniciar Pase de Lista"
        const btnIniciarNuevo = document.createElement('button');
        btnIniciarNuevo.classList.add('btn', 'btn-primary', 'btn-lg', 'mb-3', 'formatoDeBotones');
        btnIniciarNuevo.textContent = 'Iniciar Pase de Lista';

        // Reemplazar los nuevos botones con el botón original
        contenedorBotones.parentNode.replaceChild(btnIniciarNuevo, contenedorBotones);

        // Manejar el clic en el botón "Iniciar Pase de Lista"
        btnIniciarNuevo.addEventListener('click', iniciarPaseLista);
    });

    // Manejar el clic en el botón "Ingresar Manualmente"
    btnIngresarManualmente.addEventListener('click', function () {
        // Tu lógica para el botón "Ingresar Manualmente" aquí
    });
}
