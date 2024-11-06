let nombre= "Peter";
let apellido= "Parker";
let sueldoActual= 250000;
let porcentajeAumento= 17;


let calculoAumento= ((sueldoActual * porcentajeAumento)/100);

let nuevoSueldo= sueldoActual+calculoAumento;

console.log(`Hola, estimado ${nombre + " " +  apellido}
En base a su sueldo actual: $${sueldoActual}
Ha recibido un aumento del ${porcentajeAumento}% : $${calculoAumento}
y su nuevo sueldo es de: $${nuevoSueldo}`)
