/*Escribe un programa que cree una clase "Cuenta" con las siguientes propiedades:
  Una propiedad titular.
  Una propiedad saldo, teniendo como valor inicial 0.
  Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
  Un método extraer() que permita retirar la cantidad pasada como parámetro.
  Un método informar() que retorne la información del estado de la cuenta. 
  
  Utiliza esta clase para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.*/


 class Cuenta{
    constructor(titular,saldo=0){
        this.titular=titular
        this.saldo=saldo
    }
    ingresar(cantidad){
        if(cantidad > 0){
          this.saldo += cantidad;
          console.log(`Has ingresado ${cantidad} Nuevo saldo:  ${this.saldo}`)
        }else{
            console.log("La cantidad ingresada debe ser positiva")
        }
        
    }
    extraer(cantidad){
        if(cantidad > 0 && cantidad <= this.saldo ){
            this.saldo-=cantidad

        }else if (cantidad > this.saldo){
            console.log("Fondos insuficientes")
        }else{
            console.log("La cantidad debe ser positiva")
        }

    }
    informar() {
     console.log(`Titular: ${this.titular}  Saldo actual: ${this.saldo}`);
   }
 } 

 