// botonAddAlumno.js

export function addAlumno() {
    
    let nuevoAlumno = {
        nombre: 'ApellidoP Apellido M Nombre1 Nombre2 '+getRandomNumber(1, 100),
        matricula: '202035' + getRandomNumber(1000, 9999),
        computadora: 'PC' + getRandomNumber(1, 100)
        
    };

    let tablaBody = document.getElementById('tabla-body');

    let fila = document.createElement('tr');
    fila.classList.add('text-center');
    fila.innerHTML = '<td class="border-3">' + nuevoAlumno.nombre + '</td>' +
        '<td class="border-3">' + nuevoAlumno.matricula + '</td>' +
        '<td class="border-3">' + nuevoAlumno.computadora + '</td>'+('<td class="border-3">aa/aa/aaaa</td>'+
        '<td class="border-3">aa/aa/aaaa</td>'+'<td class="border-3">aa/aa/aaaa</td>'+'<td class="border-3">aa/aa/aaaa</td>'+
        '<td class="border-3">aa/aa/aaaa</td>');

    // Agregar un identificador único a la fila (puedes usar otra lógica según tus necesidades)
    fila.setAttribute('data-id', Date.now());

    tablaBody.appendChild(fila);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
