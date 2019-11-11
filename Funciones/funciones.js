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
//Ejercicio4
const verificarVocal = letra =>{
    if(letra=='a'||letra=='e'||letra=='i'
    ||letra=='o'||letra=='u'){
        return true
    }
}

let contador=0,i;
const cuentaVocal = texto =>{
    texto=transformaMinusculas(texto);
    for(i=0;i<texto.length;i++){
        if(verificarVocal(texto.charAt(i))){
           contador++; 
        }
    }
    return contador
}
export{
    sumar,restar,validaNumero,validaTexto,transformaMinusculas,transformaMayusculas,cuentaVocal
}
