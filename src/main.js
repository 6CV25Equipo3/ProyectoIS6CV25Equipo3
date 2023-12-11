// main.js
import { iniciarPaseLista } from './scripts/controlPaseLista.js';
import { addAlumno } from './scripts/botonAddAlumno.js';
import { eliminarAlumno } from './scripts/botonEliminarAlumno.js';
import { iniciarSesion, activarModoInvitado, irRegistroAlumno } from './scripts/autenticacion.js'
document.addEventListener('DOMContentLoaded', async function () { 
     // Event Listener para iniciar sesión
    document.getElementById('btnIniciarSesion').addEventListener('click', iniciarSesion);

     // Event Listener para activar el modo invitado
    document.getElementById('btnModoInvitado').addEventListener('click', activarModoInvitado);

     // Manejar el clic en el botón "resgistrar Alumno"
    document.getElementById('btnRegistroAlumno').addEventListener('click', irRegistroAlumno);

    // Manejar el clic en el botón "Añadir Alumno"
    document.getElementById('btnAddAlumno').addEventListener('click', addAlumno);

    // Manejar el clic en el botón "Eliminar Alumno"
    document.getElementById('btnEliminarAlumno').addEventListener('click', eliminarAlumno);
    
    // Manejar el clic en el botón "Iniciar Pase de Lista"
    document.getElementById('btnIniciarPaseLista').addEventListener('click', iniciarPaseLista);

   
    
});
