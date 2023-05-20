// Fernando L. Hernandez R.

// Funcion para mostrar el nombre de un color, dependiendo de un número previamente asignado

function calcularColor(num) {
    var color;
    if (num == 1) {
        color = "black";
    } else if (num == 2) {
        color = "blanco";
    } else if (num == 3) {
        color = "rojo";
    } else {
        color = "verde";
    }

    return console.log("El numero ", num, "corresponde al color " + color);
}

// Asignación de valor a la variable
num = 3;

// Invocación de la función
calcularColor(num);