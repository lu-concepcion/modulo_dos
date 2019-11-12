import{validarpalindromo} from './funciones.js'

let palabra = prompt("Ingresa una palabra: ");

     alert(validarpalindromo(palabra))
     if(validarpalindromo(palabra)){
       alert("No es una palabra palindroma")
     }else{
          alert("es una palabra palindroma")  
     }
    



