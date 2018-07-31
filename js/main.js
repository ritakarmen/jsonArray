var tabla = [{
        nombre: "María Quispe",
        puntos: 18
    },
    {
        nombre: "Marcela Ruiz",
        puntos: 17
    },
    {
        nombre: "Rosa Villareal",
        puntos: 15
    },
    {
        nombre: "Alberto Palmas",
        puntos: 18
    }
];

window.onload = cargarEventos;

function cargarEventos() {
    document.getElementById("mostrar-tabla").addEventListener("click", mostrarTabla, false);
    document.getElementById("nuevo-dato").addEventListener("submit", nuevoDato, false);
}

function mostrarTabla() {
    var cuerpoTabla = document.getElementById("alumnos-tabla");
    var tablaLlena = "";
    for (var i = 0; i < tabla.length; i++) {
        tablaLlena += "<tr><td>" + tabla[i].nombre + "</td><td>" + tabla[i].puntos + "</td></tr>";
    }
    cuerpoTabla.innerHTML = tablaLlena;
}

function nuevoDato(event) {
    event.preventDefault();

    var alumnoUsuario = document.getElementById("alumno").value;
    var puntosUsuario = document.getElementById("puntos").value;

    var nuevoDato = {
        nombre: alumnoUsuario,
        puntos: puntosUsuario
    };

    tabla.push(nuevoDato);
}