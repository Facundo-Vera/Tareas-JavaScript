//!DECLARACION DE VARIABLES 
//------------------------------------------------------------------------------------------------------

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


// &📝 Ejercicio: Creando un generador de nombres de usuario
// Imagina que estás construyendo una aplicación que crea nombres de usuario únicos para nuevos registros.
//  El nombre de usuario debe seguir un formato específico.
// Tu tarea es tomar el nombre y apellido de una persona y generar un nombre de usuario que cumpla con las siguientes reglas:

// *Debe estar en minúsculas.
// *Debe contener la primera letra del nombre.
// *Debe tener el apellido completo.
// *Debe terminar con un número aleatorio entre 1 y 100.
// !No debe tener espacios al principio ni al final.

// ?Aquí tienes un ejemplo de lo que el código debería hacer:
// Nombre de entrada: " Ana"
// Apellido de entrada: "González "
// Nombre de usuario generado: agonzalez[número] (por ejemplo, agonzalez54)

// let nomUsuario = prompt("ingrese su Nombre ");
// let primeraLetraNombre = nomUsuario.slice(0,1)
// let apelliUsuario = prompt("Ingrese su apellido ");
// let numAleatorio = Math.ceil(Math.random() * 10);
// console.log(`Su nuevo nombre de usuario es ${primeraLetraNombre.toLowerCase()}${apelliUsuario.toLowerCase()}${numAleatorio}`)


