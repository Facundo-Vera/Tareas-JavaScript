//!FUNCIONES,(ejercicios)
//----------------------------------------------------------------------------------------------------


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

// function calcular(x,y,z){
//   let calculo = (x + y )*z;
//   return calculo;
// }
// let resultado = calcular(2,2,2);
// console.log(resultado)


//& 🧪 Ejercicio: Calcular el doble de un número
// *Instrucciones:
// *Crea una función llamada doble que reciba un número como parámetro y 
// *devuelva el doble de ese número usando return.

// function doble (numero){
//   return numero *2;
// }
// let resultado = doble(2)
// console.log(resultado)

//& 🧪 Ejercicio: Calcular el precio final con descuento
// *Instrucciones:
// *Crea una función llamada calcularPrecioFinal que reciba dos parámetros:
// *precio (número): el precio original de un producto.
// *descuento (número): porcentaje de descuento a aplicar (por ejemplo, 20 para 20%).
// *La función debe devolver el precio final luego de aplicar el descuento.

// function calcularPrecioFinal(precio,descuento){
//   let precioFinal = precio - (precio * descuento / 100)
//   return precioFinal;
// }
// let descuentoFinal = calcularPrecioFinal(1600,15)
// console.log(descuentoFinal)