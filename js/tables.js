// Almacena el ID del botón activo
let botonActivo = null;

// Función para mostrar la tabla según el botón clicado
function mostrarTabla(tablaId, buttonId) {
    const tabla = document.getElementById(tablaId);
    const button = document.getElementById(buttonId);

    // Verifica si hay un botón activo
    if (botonActivo !== null) {
        // Desactiva el botón anterior
        const botonAnterior = document.getElementById(botonActivo);
        botonAnterior.classList.remove('activate');
        botonAnterior.classList.remove('text-orange-500', 'border-orange-500');
        botonAnterior.classList.add('border-transparent', 'hover:border-gray-300', 'hover:text-gray-300');
    }

    document.querySelectorAll('.tablas').forEach((t) => {
        t.style.display = 'none';
    });

    // Activa el nuevo botón
    button.classList.add('activate');
    button.classList.remove('border-transparent', 'hover:border-gray-300', 'hover:text-gray-300');
    button.classList.add('text-orange-500', 'border-orange-500');

    tabla.style.display = 'block';

    // Actualiza el botón activo
    botonActivo = buttonId;
}

mostrarTabla('experiencia', 'btn-experience');

// Agrega listeners a los botones para mostrar la tabla correcta
document.getElementById('btn-experience').addEventListener('click', function () {
    mostrarTabla('experiencia', 'btn-experience');
});

document.getElementById('btn-education').addEventListener('click', function () {
    mostrarTabla('educacion', 'btn-education');
});

// Define listeners para los otros botones de Certificados, Tecnologías e Idiomas de manera similar
document.getElementById('btn-cert').addEventListener('click', function () {
    mostrarTabla('certificados', 'btn-cert');
});

document.getElementById('btn-tecno').addEventListener('click', function () {
    mostrarTabla('tecnologias', 'btn-tecno');
});

document.getElementById('btn-lang').addEventListener('click', function () {
    mostrarTabla('idiomas', 'btn-lang');
});

// Y así sucesivamente para otros botones


