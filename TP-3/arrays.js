//& 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año.
// ?Mostrar por pantalla en forma de lista los doce nombres del arreglo.

// let meses = [
//   "Enero",
//   "Febrero",
//   "Marzo",
//   "Abril",
//   "Mayo",
//   "Junio",
//   "Julio",
//   "Agosto",
//   "Septiembre",
//   "Octubre",
//   "Noviembre",
//   "Diciembre",
// ];

// for(let i = 0 ;i <meses.length;i++){
//     console.log(`${i + 1} - ${meses[i]}`)
// }

// &3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para
// &obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado
// &de lanzar dos dados y anotar en un array el número de apariciones de dicha suma,
// &repitiendo 50 veces esta operación.

//!Datos:
//* 2 dados
// *numeros aleatorios
//  sumar el resultado y almacenarlos en un //*array (vacio) el numero de apariciones de la suma,
// repetir 60 veces la operacion

let arrayDeSumas = [];
let contador = 0;
while (contador < 60) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  let suma = dado1 + dado2;
  arrayDeSumas.push(suma)
  contador ++;
}
console.log(arrayDeSumas)
