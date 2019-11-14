import{calcularporcentaje} from './funciones.js'


let numero1= parseInt(prompt("Ingrese un numero1: "));
let numero2= parseInt(prompt("Ingrese un numero2: "));
     

if((!isNaN(numero1))&&(!isNaN(numero2))){

    alert(calcularporcentaje(numero1,numero2))

}else{
    alert("no esta ingresando numeros en numero1 o numero2");
}



