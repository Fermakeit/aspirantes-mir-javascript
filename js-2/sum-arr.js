

// Fernando L. Hernandez R.

// Funciòn que reciba un arreglo de nùmeros y retorne la suma de todos sus elementos.

let suma=0;

function sum(suma, arr) {

    for (i = 0; i < arr.length; i++) {

        suma = suma + arr[i];
    
    }

    console.log("La suma de los elementos del arreglo es ",suma)
}

// Definiciòn del vector de elementos
arr = [4, 3, 1, 5]

// Invocaciòn de la funciòn
sum(suma,arr)

