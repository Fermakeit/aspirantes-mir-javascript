

// Fernando L. Hernandez R.

// Funciòn que reciba un arreglo  y retorne un string con todos sus elementos.

strng = "";

function join(arr) {

    for (i = 0; i < arr.length; i++) {

        strng = strng + " " + arr[i]
    
    }

    console.log("El string con los elementos del arreglo, quedarìa asì: ",strng)
}

// Definiciòn del vector de elementos
arr = ["Juan", "Maria", "Pedro", "Ivan"]

// Invocaciòn de la funciòn
join(arr)
