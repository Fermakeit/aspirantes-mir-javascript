
// Fernando L. Hernandez R.

// Funciòn que recibe un arreglo de nùmeros y retorna el valor màximo encontrado en el arreglo.

let nmax=0;

function max(nmax, arr) {

    for (i = 0; i < arr.length; i++) {

            for (j = 0; j < arr.length; j++) {

                if (arr[j]>nmax) {
                    nmax = arr[j];
                } 
            }
        
        }

    console.log("El arreglo tiene ",arr.length," elementos ");
    console.log("Estos son los elementos del arreglo: ",arr);
    console.log("El valor màs alto en el arreglo es el nùmero ",nmax)
}

// Definiciòn del vector de elementos

arr = [67, 13, 115, 22];

// arr = []

// Invocaciòn de la funciòn
max(nmax,arr)

