// Fernando L. Hernandez R.

// Funcion sumar a un numero los numeros anteriores a su consecutivo

function suma(num, resultado){
    for (i = 1; i < num+1; i++)
        var resultado = resultado + i;  
    // Visualización del resultado    
    return console.log("El resultado de la suma es: ", resultado)
}

// Inicialización de variables
let resultado=0;
let num = 5;

// Invocación de la función
suma(num, resultado);


