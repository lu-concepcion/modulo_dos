/*Escribir un algoritmo que reciba dos números. Y te ofrezca realizar las siguientes operaciones aritméticas:
Sumar
Multiplicar
Dividir (ojo con la división por cero)
Restar*/
//Utilizar Funciones


const sumar=(num1,num2)=>{
   return(num1+num2);
}
const restar=(num1,num2)=>{
   return(num1 - num2);
}
const multiplicar=(num1,num2)=>{
   return(num1*num2);
}
const dividir=(num1,num2)=>{
   return(num1/num2);
}
export{
   sumar,
   restar,
   multiplicar,
   dividir,
}