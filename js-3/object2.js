
let cadena = ""

let persona = {
   nombre: "Fernando",
   edad: 57,
   ciudad: "Envigado",
   profesion: "Ingeniero de Sistemas",
   hobbies: ["Natacion", "Baloncesto", "Caminata"],
}

console.log(persona);

cadena = (persona.nombre+" "+persona.edad+" "+persona.ciudad+" "+persona.profesion);
console.log(cadena)


function presentacion(persona) {
 /*   var cadena = "";
    cadena = ${persona.nombre}+" "+${persona.edad}+" "+${persona.ciudad}+" "+${persona.profesion};
    console.log(cadena)
    */
    console.log(cadena) 
}

mensaje = presentacion();

console.log(mensaje)

console.log(persona.hobbies)

for (const propiedad in persona) {
    console.log(persona[propiedad])
}