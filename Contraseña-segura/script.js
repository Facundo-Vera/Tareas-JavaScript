//&Ejercicio integrador: Contraseña segura

// *Crea un programa en javascript que pida al usuario que ingrese una contraseña.
// ?El programa debe:
// - Revisar que la contraseña tenga al menos 6 caracteres
// - Usar un bucle para recorrer cada caracter y verificar:
//  - Si contiene al menos una mayúscula
//  - Si contiene al menos un número.
// - Si cumple con todos los requisitos mostrar 'Contraseña válida ✅'
// - Si no cumple, mostrrar "Contraseña inválida ❌" y explicar porqué.

//!ALGORITMO 
//Datos:pedir contraseña al usuario 
//Proceso: revisar que la contraseña cumpla con los requisitos
//Final:si cumple con todos los requisitos mostrar un mensaje y si no cumple tambien 



let contraseña = prompt("Ingrese una contraseña ")
let tieneMayuscula= false;
let tieneNumero = false;
if (contraseña.length < 6){
    console.log("Ingrese una contraseña de almenos 6 caracteres")
}

for (let i = 0 ; i <contraseña.length; i++){
    caracter = contraseña[i]
    if(caracter === caracter.toUpperCase() && caracter !== caracter.toLowerCase()){
       tieneMayuscula = true;
       
    }
    if(!isNaN (caracter)){
      tieneNumero = true;
    }
  
}
if(contraseña.length > 6 && tieneMayuscula && tieneNumero){
    console.log("Contraseña valida")

}else if (!tieneMayuscula){
    console.log("Contraseña inválida ❌ debe contener al meno una Mayuscula")
}
else if (!tieneNumero){
    console.log("Contraseña inválida ❌ debe contener al meno un Numero ")
}