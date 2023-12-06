// botonEliminarAlumno.js

// Importar Bootstrap


// Función para obtener la lista actualizada de nombres de alumnos
function obtenerNombresAlumnos() {
    var tablaBody = document.getElementById('tabla-body');
    var filas = tablaBody.getElementsByTagName('tr');
    return Array.from(filas).map(fila => {
        var celdas = fila.getElementsByTagName('td');
        return celdas.length > 0 ? celdas[0].innerText : '';
    });
}

export function eliminarAlumno() {
    var nombresAlumnos = obtenerNombresAlumnos();

    if (nombresAlumnos.length === 0) {
        alert('No hay registros para eliminar.');
        return;
    }

    // Crear y mostrar el modal de Bootstrap
    var modalHTML = `
        <div class="modal fade" id="modalEliminarAlumno" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Seleccione un alumno para eliminar</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <select class="form-select" id="selectAlumnos">
                            ${nombresAlumnos.map(nombre => `<option>${nombre}</option>`).join('')}
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary formatoDeBotones" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary formatoDeBotones" onclick="eliminarAlumnoSeleccionado()">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Eliminar el modal anterior si existe
    var modalAnterior = document.getElementById('modalEliminarAlumno');
    if (modalAnterior) {
        modalAnterior.remove();
    }

    var modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);

    // Inicializar el modal de Bootstrap
    var modal = new bootstrap.Modal(document.getElementById('modalEliminarAlumno'));
    modal.show();
}

// Función llamada al hacer clic en el botón "Eliminar" del modal
window.eliminarAlumnoSeleccionado = function () {
    var selectAlumnos = document.getElementById('selectAlumnos');
    var nombreAlumno = selectAlumnos.value;

    if (!nombreAlumno) {
        alert('Seleccione un alumno válido.');
        return;
    }

    var tablaBody = document.getElementById('tabla-body');
    var filas = tablaBody.getElementsByTagName('tr');

    var filaEncontrada = Array.from(filas).find(fila => {
        var celdas = fila.getElementsByTagName('td');
        return celdas.length > 0 && celdas[0].innerText === nombreAlumno;
    });

    if (!filaEncontrada) {
        alert('No se encontró al alumno con el nombre proporcionado.');
        return;
    }

    var confirmacion = confirm('¿Está seguro de que desea eliminar al alumno ' + nombreAlumno + '?');

    if (confirmacion) {
        tablaBody.removeChild(filaEncontrada);
        alert('Alumno eliminado correctamente.');
    } else {
        alert('Eliminación cancelada.');
    }

    // Cerrar el modal después de la acción
    var modalInstance = bootstrap.Modal.getInstance(document.getElementById('modalEliminarAlumno'));
    modalInstance.hide();
};
