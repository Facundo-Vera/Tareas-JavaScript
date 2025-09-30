// !10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 
// !(sólo hay que comprobar si lo es por uno de los cuatro)
// ?Ejemplo: 
// *input: 20
// *Output: El 20 es divisible por 2.
// let num1 = parseInt(prompt("Ingrese un numero: "));
// if (num1 %2 ==0  ){
//     alert(num1 +" el numero que ingresaste es divisible por 2 ")
// }else if (num1 %3 ==0 ){
//     alert(num1 +" el numero que ingresaste es divisible por 3 ")
// }else if (num1 %5 ==0 ){
//     alert(num1 +" el numero que ingresaste es divisible por 5 ")
// }else  {
//     alert(num1 +" el numero que ingresaste es divisible por 7 ")
// }


// !11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible
//  !(hay que decir todos por los que es divisible)
// ?Ejemplo: 
// *input: 20
// *input: 210
// *Output: El 20 es divisible por 2 y por 5.
// *Output: El 210 es divisible por 2, por 3, por 5 y por 7.

// let num1 = parseInt(prompt("Ingrese un numero: "));

// if(num1 %2 == 0 && num1 %3 ){
//     console.log("Este numero se puede dividir por 2 y 3  al mismo tiempo!!!!")
// }else if(num1 %2 == 0 && num1 %3 == 0 && num1 %5 ){
//     console.log("Este numero se puede dividir por 2, 3 y 5  al mismo tiempo!!!!")
// }else if (num1 %2 == 0 && num1 %3 == 0 && num1 %5 == 0 && num1 %7 == 0 ){
//     console.log("Este numero se puede dividir por 2, 3 , 5 y 7  al mismo tiempo!!!!")
// }


// !Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu 
// !compra.
// ?Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicasr precio por el iva y dividir por 100.
// *Precio 200€
// *Iva: 21%
//* El total son 242 €.  //200 + 21*200/100

// let ingreseValorProducto =parseInt(prompt("Ingrese el precio del porducto"));
// let iva = 21
// let total = ingreseValorProducto + iva*ingreseValorProducto /100;
// console.log(total)




// let edad = 20;
// let tutor = false
// if (edad >= 18  ){
//     console.log("Puedes ingresar a la fiesta")
// }else if( edad < 18 && tutor ){
//     console.log("Puedes ingresar acompañado de un tutor")
// }else{
//     console.warn("No puedes ingresar")
// }

//^CONDICIONALES

// &🔹 Ejercicio 2: Calificación con letras

// Pide al usuario una nota (0–100) y conviértela a letras:
// 90–100 → A
// 80–89 → B
// 70–79 → C
// 60–69 → D
// Menor a 60 → F
// !📌 Imprime la letra correspondiente.

// let nota = Number(prompt("Ingrese su nota: "))
// switch(true){
//     case nota >= 90 && nota <= 100 :
//         console.log("Tu calificacion es A")
//         break
//     case nota >= 80 && nota <= 89:
//          console.log("Tu calificacion es B")   
//          break
//     case nota >= 70 && nota <= 79:
//          console.log("Tu calificacion es C")   
//          break     
//     case nota >= 60 && nota <= 69:
//          console.log("Tu calificacion es D")   
//          break
//     case nota < 60 :
//          console.log("Tu calificacion es F")   
//          break          
// }


//& 🔹 Ejercicio 4: Juego de adivinar número

// El programa genera un número aleatorio entre 1 y 10.
// Si el usuario lo adivina exacto → "¡Ganaste!".
// Si el número ingresado está a 1 de diferencia → "Casi lo logras".
// Si está más lejos → "Sigue intentando".

// let num1 = Number(prompt("Ingrese un numero del 1 al 10: "))
// let numAleatorio =Math.ceil( Math.random() * 10);
// if (num1 === numAleatorio){
//    alert(`GANASTE!!`)
//         //^^Math.abs combierte la diferencia en positiva 
// }else if (Math.abs(num1-numAleatorio)=== 1){ //^^revisa si la diferencia es  1 
//    console.log(`Casi lo logras . El número era ${numAleatorio}`);
// }else{
//     console.log(`Sigue intentando el numero era ${numAleatorio}`)
// }



// let usuario = prompt("Elija piedra/papel/tijera : ");
// let computadora = "tijera";
// switch (true){
//     case usuario == "piedra" :
//         console.log(`Usted le gano a ${computadora}`)
//         break
//     case usuario == "papel" :
//         console.log(`Perdiste la computadora es ${computadora}`)
//         break
//     case usuario == "tijera" :
//         console.log(`Empate`)        
// }

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

// !🔹 Ejercicio Difícil
//* Calculadora de triángulos
// *Pide al usuario que ingrese las longitudes de los tres lados de un triángulo (a, b, c).
// *Muestra en consola:

// ?“Equilátero” → si los tres lados son iguales.
// ?“Isósceles” → si dos lados son iguales.
// ?“Escaleno” → si los tres lados son distintos.
// ?“No es un triángulo válido” → si la suma de dos lados no es mayor que el tercero (regla básica de triángulos).

// let primerValor = prompt("Ingrese el valor del lado A del triangulo");
// let segundoValor = prompt("Ingrese el valor del lado B del triangulo");
// let tercerValor = prompt("Ingrese el valor del lado C del triangulo");

// if (primerValor == segundoValor && segundoValor == tercerValor){
//     console.log("El triangulo es Equilatero")
// }else if (primerValor == segundoValor){
//         console.log("El triangulo es Isósceles")
// }else{
//     console.log("El triangulo es Escaleno")
// }



// ^^🔹 Ejercicio Difícil con String

// *Usando un bucle while escribir un script que pida un valor entero y cree una lista con los 
// *números desde el 0 al valor tecleado. Luego deberá sacar esa lista con un alert. 
// *Los números se separarán por comas.  
// &Si le doy el número 5 pues deberá contar 0,1,2,3,4,5

//!Algoritmo
//Datos: ingresar un numero,
//Preceso : crear una lista hasta llegar al numero ingresado,separar los numero por ",".
//Final: mostrar la lista con un alert

let num = Number(prompt("Ingrese un numero: "));
let lista = "";
let contar = 0 ;
while (contar < num){
       lista += contar + ","
       contar ++
}
lista += contar;//agrega el numero que ingreso el usuario a lo ultimo sin la coma 
console.log(lista)


