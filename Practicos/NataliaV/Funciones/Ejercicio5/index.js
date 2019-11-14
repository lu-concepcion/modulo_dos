import{sumar,restar,multiplicar,dividir} from './funciones.js'

let numero1= parseInt(prompt("ingrese numero1: "));


 let numero2= parseInt(prompt("ingrese numero2: "));


if((!isNaN(numero1))&&(!isNaN(numero2))){
let opcion=prompt("Ingrese que opcion quiere realizar sumar , restar, multiplicar o dividir");
if(opcion=="sumar"){
    alert(sumar(numero1,numero2));
}
if(opcion=="restar"){
    alert(restar(numero1,numero2));
}
if(opcion=="multiplicar"){
    alert(multiplicar(numero1,numero2));
}
if(opcion=="dividir"){
  if(numero1 == "0" || numero2 =="0"){
      alert("no se puede dividir por 0");
  }else{
    alert(dividir(numero1,numero2));
}
}
}else{
     alert("no es numero")
}
     
    
     


