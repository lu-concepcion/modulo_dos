const sumar=(num1,num2)=>{
    return num1+num2
}
const restar=(num1,num2)=>{
    return num1-num2
}
const validaNumero = numero =>{
    return (!isNaN(numero))
}
const validaTexto = texto =>{
    return (isNaN(numero))
}
const transformaMinusculas = texto =>{
    return texto.toLowerCase();
}
const transformaMayusculas = texto =>{
    return texto.toUpperCase();
}
export{
    sumar,restar,validaNumero,validaTexto,transformaMinusculas,transformaMayusculas
}
