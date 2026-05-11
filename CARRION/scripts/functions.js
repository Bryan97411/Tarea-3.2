// EJERCICIO 1

function calcularDoble() {

    let numero =
        document.getElementById("numeroDoble").value;

    let doble = numero * 2;

    document.getElementById("resultadoDoble")
    .textContent = "El doble es: " + doble;

}

function limpiarDoble() {

    document.getElementById("numeroDoble").value = "";

    document.getElementById("resultadoDoble")
    .textContent = "";

}

// EJERCICIO 2

function verificarPalindromo() {

    let numero =
        document.getElementById("numeroPalindromo").value;

    let invertido =
        numero.split("").reverse().join("");

    if (numero === invertido) {

        document.getElementById("resultadoPalindromo")
        .innerHTML =
        "<span class='text-success'> Es palíndromo</span>";

    } else {

        document.getElementById("resultadoPalindromo")
        .innerHTML =
        "<span class='text-danger'> No es palíndromo</span>";

    }

}

function limpiarPalindromo() {

    document.getElementById("numeroPalindromo").value = "";

    document.getElementById("resultadoPalindromo")
    .textContent = "";

}

// EJERCICIO 3

let contador = 0;

function incrementarContador() {

    contador++;

    document.getElementById("contador")
    .textContent = contador;

}

function reiniciarContador() {

    contador = 0;

    document.getElementById("contador")
    .textContent = "0";

}

// EJERCICIO 4

let tareas = [];

function agregarTarea() {

    let tarea =
        document.getElementById("tarea").value.trim();

    if (tarea === "") {

        alert("La tarea no puede estar vacía");

        return;

    }

    tareas.push(tarea);

    let li = document.createElement("li");

    li.className = "list-group-item";

    li.textContent = tarea;

    document.getElementById("listaTareas")
    .appendChild(li);

    document.getElementById("tarea").value = "";

}


function borrarTarea() {

    let lista =
    document.getElementById("listaTareas");

    lista.innerHTML = "";

    tareas = [];

}