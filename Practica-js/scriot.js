//! 🔹 Ejercicios con while

//! 🚀 Consejo de práctica
// ?Antes de escribir un while, hacé esto en una hoja o en tu cabeza:
// *Inicio: ¿con qué valor empiezo?
// *Condición: ¿hasta cuándo repito?
// *Cambio: ¿qué valor se actualiza en cada vuelta?


// Tabla de multiplicar
// Pedir un número y mostrar su tabla de multiplicar del 1 al 10 con un while.

//!1
//* Contar del 1 al 10
//* Usar un while para mostrar los números del 1 al 10 en la consola.

// let numero = 1;
// while (numero <= 10 ){
//      console.log(numero)
//       numero++;
// }

//!3
// *Tabla de multiplicar
// *Pedir un número y mostrar su tabla de multiplicar del 1 al 10 con un while. 
// 


let numero = Number(prompt("Ingrese un numero"));
let resultado = 0;
let tabla = 1;
while(tabla <=10){
    resultado = numero * tabla
    console.log(`${numero} x ${tabla} = ${resultado}`)
    tabla++;
}