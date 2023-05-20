// Fernando L. Hernandez R.

// Función para calcular el índice de masa corporal

function bmi(peso, altura){
    indice = (peso / (altura ** 2))
    return console.log("Su indice de masa corporal es: ", indice)
}

// asignación de valores a las variables
peso   = 65;
altura = 1.8;

// Invocación de la función
bmi(peso, altura);
