// main.js

import { addAlumno } from './scripts/botonAddAlumno.js';
import { eliminarAlumno } from './scripts/botonEliminarAlumno.js';

document.addEventListener('DOMContentLoaded', async function () {
    // Inicializar la tabla

    // Manejar el clic en el botón "Añadir Alumno"
    document.getElementById('btnAddAlumno').addEventListener('click', addAlumno);

    // Manejar el clic en el botón "Eliminar Alumno"
    document.getElementById('btnEliminarAlumno').addEventListener('click', eliminarAlumno);
});
