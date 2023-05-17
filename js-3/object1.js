
let msg = "";

let pedro = {
   nombre: "Pedro Perez",
   edad: 30,
   activo: true,
   hobbies: ["programar","squash","piano"],
   msge: function saluda(nombre) {
      return msg = ("Hola me llamo " + this.nombre)
   }
}

console.log(pedro.msge(msg));

console.log("Mi edad es: ",pedro.edad);

pedro.altura = 1.8;

console.log("Mi altura es: ",pedro.altura);

delete pedro.activo;

console.log("Se eliminò la llave activo");

console.log("Recorriendo el objeto:");

for (let llave in pedro) {
   if (pedro.hasOwnProperty(llave)) {
      console.log(pedro[llave])
   }
}

