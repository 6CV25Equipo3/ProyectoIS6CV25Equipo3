// autenticacion.js

export function iniciarSesion() {
    var nombreUsuario = document.getElementById('nombreUsuario').value;
    var contrasena = document.getElementById('contrasena').value;

    if (nombreUsuario === "usuario" && contrasena === "contraseña") {
        alert('Inicio de sesión exitoso');
        window.location.href = '../secciones/pantallamenu.html';
    } else {
        alert('Usuario o contraseña incorrecto');
    }
}

export function activarModoInvitado() {
    alert('Modo invitado activado');
}

export function irRegistroAlumno(){
    window.location.href = '../secciones/registro_alumno.html';

}
