// let nombre = prompt ("ingrese su nombre")

// let edad = prompt ("ingrese su edad")

// let estudiante = true  
// console.log(nombre)
// console.log(edad)



//! 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

// let saludo = alert("un mensaje...");

//! 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
// let helloWord =  alert("Hola mundo");

// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

// let suma = parseInt(alert(3 + 5));

// !4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga 
// !«Hola nombreUsuario»
//? Ejemplo: 
//* input: Coder 
//* Output: Hola Coder
// let nomUsuario = prompt("Ingrese su nombre de usuario: ")
// let saludoUsuario = alert( "Hola " + nomUsuario)

// !5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
//! Nota: Tener en cuenta la siguiente función: parseInt

// let num1 =parseInt(prompt("Ingrese el primer numero"));
// let num2 = parseInt(prompt("Ingrese el segundo numero"));
// console.log(num1 + num2)

// !6- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// ?Ejemplo: 
// *input: 15 , 3
// *Output: El 15 es el número más grande

// let num1 =parseInt(prompt("Ingrese el primer numero"));
// let num2 = parseInt(prompt("Ingrese el segundo numero"));
// if (num1 > num2){
//     alert("El primer numero es mayor " + num1)
// }else{
//     alert("El segundo numero es mayor " + num2)
// }


// !7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// ?Ejemplo: 
// *input: 15 , 3, 9
// *Output: El 15 es el número más grande
// let num1 =parseInt(prompt("Ingrese el primer numero"));
// let num2 = parseInt(prompt("Ingrese el segundo numero"));
// let num3 = parseInt(prompt("Ingrese el tercer numero"));
// if (num1 > num2){
//     alert("El primer numero es mayor " + num1)
// }else if (num2 > num3){
//     alert("El  segundo numero  es mayor " + num2)
// }else{
//      alert("El tercer numero  es mayor " + num3)
// }

// !8.- Escribe un programa que pida un número y diga si es divisible por 2
// ?Ejemplo: 
//* input: 10
// *input: 15
// *Output: El 10 es divisible por 2.
// *Output: El 15 no es divisible por 2.

// let num = parseInt(prompt("Ingrese un numero "));
// si al resultado de diviidir un numero entre 2 da  0 entonces es divisible por 2 
// if (num  %2 == 0){
//     alert(num + " es divisible por 2")
// }else{
//     alert(num + " no es divisible por 2")
// }


// !Ejercicio 1: Verificar edad para votar
// ?Crea un programa que determine si una persona puede votar o no.
// ?Si la edad es mayor o igual a 18, debe mostrar: "Puedes votar".
// ?Si no, debe mostrar: "No puedes votar"

// let edad =parseInt(prompt("Ingrese su edad: "));

// if(edad >= 18){
//     alert("Puede votar ")
// }else{
//     console.log("No puede votar")
// }

// !Ejercicio 2: Verificar número par o impar
// *Pide un número (usa una variable, no prompt) y determina si es par o impar usando el operador % y una estructura if-else.
// *Si es par: "El número es par".
// *Si es impar: "El número es impar".

// let num1 = parseInt(prompt("Ingrese un numero: "))

// if (num1 %2 == 0 ){
//          alert("El número es par")
// }else{
//     alert("El numero no es par")
// }

//! Ejercicio 9: Juego de piedra, papel o tijera

//? Declara dos variables:
// *let jugador1 = "piedra";
// *let jugador2 = "tijera";


//Todo Escribe un if para determinar quién gana.

// ?Las reglas son las clásicas:
// *Piedra gana a tijera
// *Tijera gana a papel
// *Papel gana a piedra
// *Si ambos eligen lo mismo, imprime: "Empate".


// let jugador1 = prompt("Jugador 1 elija: ");
// let jugador2 = "tijera";
// if (jugador1 == "piedra" ){
//     console.log(" Jugador 1 Gano!")
// }else if (jugador1 == "papel" ){
//      console.log(" Jugador 2 Gano!")
// }else{
//     alert("¡Empate!")
// }