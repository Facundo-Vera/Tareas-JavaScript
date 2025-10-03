//! Funciones

// &4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve 
// &como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el 
// &resultado devuelto por la función.

const numPar = (numero) =>{ 
     if(numero %2 == 0){
        return "El número ingresado es par";
     }else{
        return "El número es impar";
     }
     
 }
// console.log(numPar(2))


// &5- Definir una función que muestre información sobre una cadena de texto que se le pasa como 
// &argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
// & sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

const infoCadena = function (texto){
    if(texto == texto.toUpperCase()){
       return "El texo esta en mayuscula"
    }else if ( texto == texto.toLowerCase()){
        return "El texto esta en minuscula"
     }else{
        return "El texto esta en mezlcado"}

} 

//  console.log( infoCadena("EOKDIWKIDsasji"))

// &6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
// &luego crear una función para calcular su perímetro y mostrarlo por pantalla.
//* La fórmula del perímetro  es p = 2*(a +b)

const calcularPerimetro = (a,b) => p= 2+(a + b);
  console.log(calcularPerimetro(28,12)) 



//& 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
//&  la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del 
//&  número elegido por el usuario.

const tabla =function(numero=Number(prompt("Ingrese un numero ")) ){
 let resultado = 0;
 let tabla = 1;
 while(tabla <=10){
     resultado = numero * tabla
    console.log(`${numero} x ${tabla} = ${resultado}`)
     tabla++;
}
}

tabla()


