
let receta = {}

receta.nombre = "sandwich";
receta.ingredientes = [
    panaderia ={
        nombre: "pan",
        cantidad: 2,
    },
    lacteos ={
        nombre: "queso",
        cantidad: 1,
    }
];

console.log("Elementos de la receta: ",receta);

console.log("Primer ingrediente: ",receta.ingredientes[0]);

var cant = receta.ingredientes[0] + receta.ingredientes[1];

console.log("Cantidad de ingredientes: ", cant)

