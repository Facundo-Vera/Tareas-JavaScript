//! 🔹 Ejercicios con while
//--------------------------------------------------------------------------------------------


// ^^🔹 Ejercicio Difícil con String
// *Usando un bucle while escribir un script que pida un valor entero y cree una lista con los 
// *números desde el 0 al valor tecleado. Luego deberá sacar esa lista con un alert. 
// *Los números se separarán por comas.  
// &Si le doy el número 5 pues deberá contar 0,1,2,3,4,5

//!Algoritmo
//Datos: ingresar un numero,
//Preceso : crear una lista hasta llegar al numero ingresado,separar los numero por ",".
//Final: mostrar la lista con un alert

// let num = Number(prompt("Ingrese un numero: "));
// let lista = "";
// let contar = 0 ;
// while (contar < num){
//        lista += contar + ","
//        contar ++
// }
// lista += contar;//agrega el numero que ingreso el usuario a lo ultimo sin la coma 
// console.log(lista)




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

// let vuelta = 10; // 10 es mayor a 0? si haci con todos hasta llegar a 0
// while(vuelta > 0){
//     console.log(`Estamos en la vuelta numero ${vuelta}`)
//     vuelta --;
// }


// !Suma acumulada
//* Pedir números al usuario y sumarlos mientras no ingrese el número 0.

// let suma = 0;
// let numero = Number(prompt("Ingrese un número (0 para terminar): "));

// while (numero !== 0) {   // Mientras no sea 0, seguimos
//     suma = suma + numero; // Acumula en la suma
//     numero = Number(prompt("Ingrese otro número (0 para terminar): "));
// }

// console.log("La suma total es: " + suma);

// !🔐 Múltiples intentos

// *Crear un programa que pida ingresar usuario y contraseña. 
//? El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. 
// ^Si se ingresa correctamente ambos antes de 3 intentos erróneos, 
// *debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. 
// ?El usuario y la contraseña ya deben estar guardadas en variables.

// let ususario = "Facuveera";
// let contraseña = "facutecno1";
// let intentos = 3;
// let logueado = false;

// do {
//     let ususarioIngresado = prompt(`Ingrese su usuario (tienes ${intentos} intentos):`);
//     let contraseñaIngresada = prompt(`Ingrese su contraseña (tienes ${intentos} intentos):`);

//     if (ususarioIngresado === ususario && contraseñaIngresada === contraseña) {
//         console.log(`✅ Bienvenido, usuario y contraseña correctos!!! (☞ﾟヮﾟ)☞`);
//         logueado = true;
//         break; // salimos del bucle si ya acertó
//     } else {
//         console.log("❌ Usuario o contraseña incorrectos.");
//         intentos--; // gasta un intento por error
//     }

// } while (intentos > 0);

// if (!logueado) {
//     console.log(`🚫 Lo siento, usuario y contraseña incorrectos (* ￣︿￣)`);
// }


// let contraseñaGuardada="08001";
// let intento ;
// let intentos = 0;

// do {
//      intento = prompt("Ingrese su contraseña ")
//      intentos ++;
// }while(intento != contraseñaGuardada  && intentos < 3)
//     if(intento === contraseñaGuardada){
//         console.log("Bienvenido")
//     }else{
//         console.log("Acceso denegado")
//     }


//! 🔹 Ejercicios con while

// *Contar del 1 al 5
// *Mostrar en consola los números del 1 al 5.

// let inicio = 0 ;

// while (inicio < 5){
//     inicio ++;
//     console.log(inicio)
// }


// ?Contar solo pares hasta 20
//? Imprimir los números pares desde 2 hasta 20.


// let pares = 2;
// while (pares <= 20 ){
//    console.log(pares)
//     pares = pares + 2;
// }

//* Usando un bucle while escribir un script que pida un valor entero y cree una lista con los números desde el 0 al valor tecleado. 
//* Luego deberá sacar esa lista con un alert. Los números se separarán por comas.  


//!ALGORITMO While
//Datos : pedir un numero al usuario ,
//Proceso : crear lista que inicie con el valor 0 y valla incrementado su valor hasta llegar al numero ingresado 
//final : mostrar la lista con un alert

// let numeroIngresado = Number(prompt("Ingrese un numero"));
// let lista = "";
// while(lista < numeroIngresado){
//     lista ++;
//     console.log(`${lista} `);

// }


//* Se trata de pedir al usuario que teclee un número entre 1 y 5,
//*  si escribe alguno que esté fuera de ese rango deberá volver a pedir el número

// let min = 1;
// let  max = 5;
// let numero=0;


// while (numero <1 || numero >5){
//    numero = Number(prompt("Teclee un número entre 1 y 5"));
// }

// *Determinar si el número que teclea el usuario es primo o no. 
// *Recordar que un número primo es el que solo puede dividirse por si mismo y por la unidad.

//? Bucle Do...While: Utiliza un bucle do...while para pedir al usuario que ingrese un número positivo. 
//? Continúa pidiendo hasta que ingrese un número positivo.

//  let numeroIngresado = ""
//  do{
//     numeroIngresado = Number(prompt("Ingrese un numero positivo"));
//  }while(numeroIngresado <0)

// !Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.
// let palabra = prompt("Ingrese una palabra ");
// let contadorPalabra = 10;
// while (contadorPalabra <= 10 ){
//     palabra ++;
//     console.log(palabra)
// }


