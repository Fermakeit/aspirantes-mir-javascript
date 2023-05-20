
// Fernando L. Hernandez R.

// Funciòn que recibe un arreglo de nùmeros y retorna la posiciòn del nùmero mayor.

let nmax = 0, poscm = 0;

function maxIndex(nmax, poscm, arr) {

    for (i = 0; i < arr.length; i++) {

            for (j = 0; j < arr.length; j++) {

                if (arr[j]>nmax) {
                    nmax = arr[j];
                    poscm = j
                } 
            }
        
        }

    console.log("El arreglo tiene ",arr.length," elementos ");
    console.log("Estos son los elementos del arreglo: ",arr);
    console.log("El valor màs alto en el arreglo es el nùmero ",nmax)
    console.log("La posiciòn, en el arreglo, dònde està el nùmero de mayor valor es la ",poscm)
}

// Definiciòn del vector de elementos

arr = [117, 123, 15, 220];

// arr = []

// Invocaciòn de la funciòn
maxIndex(nmax,poscm,arr)

