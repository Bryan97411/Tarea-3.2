// EJERCICIO 1
// CALCULAR DOBLE

function obtenerDoble() {

    const valorIngresado =
    document.getElementById("numeroDoble").value;

    const resultado =
    valorIngresado * 2;

    document.getElementById("resultadoDoble")
    .innerHTML =
    "Resultado: <strong>" + resultado + "</strong>";

}

function vaciarDoble() {

    document.getElementById("numeroDoble").value = "";

    document.getElementById("resultadoDoble")
    .innerHTML = "";

}


// EJERCICIO 2
// PALÍNDROMO

function comprobarPalindromo() {

    const texto =
    document.getElementById("numeroPalindromo").value;

    const textoInvertido =
    texto.split("").reverse().join("");

    if (texto == textoInvertido) {

        document.getElementById("resultadoPalindromo")
        .innerHTML =
        "<span class='text-success fw-bold'>Número correcto: Es palíndromo</span>";

    } else {

        document.getElementById("resultadoPalindromo")
        .innerHTML =
        "<span class='text-danger fw-bold'>Número incorrecto: No es palíndromo</span>";

    }

}

function limpiarPalabra() {

    document.getElementById("numeroPalindromo").value = "";

    document.getElementById("resultadoPalindromo")
    .innerHTML = "";

}


// EJERCICIO 3
// CONTADOR


let numeroClicks = 0;

function sumarClicks() {

    numeroClicks += 1;

    document.getElementById("contador")
    .innerHTML = numeroClicks;

}

function volverCero() {

    numeroClicks = 0;

    document.getElementById("contador")
    .innerHTML = numeroClicks;

}

// EJERCICIO 4
// LISTA DE ACTIVIDADES


const listadoTareas = [];

function insertarTarea() {

    const nuevaTarea =
    document.getElementById("tarea").value.trim();

    if (nuevaTarea.length === 0) {

        alert("Debe escribir una tarea");

        return;
    }

    listadoTareas.push(nuevaTarea);

    const elementoLista =
    document.createElement("li");

    elementoLista.className =
    "list-group-item mt-2";

    elementoLista.innerHTML =
    nuevaTarea;

    document.getElementById("listaTareas")
    .appendChild(elementoLista);

    document.getElementById("tarea").value = "";

}

function eliminarLista() {

    document.getElementById("listaTareas")
    .innerHTML = "";

    listadoTareas.length = 0;

}