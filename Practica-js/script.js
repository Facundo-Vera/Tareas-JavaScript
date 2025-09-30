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

// let numero = Number(prompt("Ingrese un numero"));
// let resultado = 0;
// let tabla = 1;
// while(tabla <=10){
//     resultado = numero * tabla
//     console.log(`${numero} x ${tabla} = ${resultado}`)
//     tabla++;
// }

//!FUNCIONES,(ejercicios)

//*Escribe una función que compruebe si dos números dados están entre 100 y 200 y devuelva si o no.

// function numeros(num1, num2) {
//   if (num1 >= 100 && num1 <= 200 && num2 >= 100 && num2 <= 200) {
//     console.log(`${num1} y ${num2} estan entre 100 y 200`);
//   } else {
//     console.log(`${num1} y ${num2} no  estan entre 100 y 200`);
//   }
// }
// numeros(129,200)
// numeros(29,92)

//& Crear una funcion que sea aviso lluvia, que tenga un solo parametro booleano .Si ensta lloviendo imprime
//& esta lloviendo y si no tambien.Tenemos que llamar a la funcion y por parametro pasarle el valor true o false

// function avisoLluvia(booleano) {
//   if (booleano == true) {
//     console.log("Esta lloviendo");
//   } else {
//     console.log("No esta lloviendo ");
//   }
// }
// avisoLluvia(false);

//& Crea una funcion llamada "calcular",la funcion tendra 3 parametros:x,y,z
//& Estos tres parametros seran numero, la funcion tiene que retornar el resultado de sumar x con y
//& y multiplicarlo por z

function calcular(x,y,z){
  let calculo = (x + y )*z;
  return calculo;
}
let resultado = calcular(2,2,2);
console.log(resultado)