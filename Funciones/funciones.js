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
const verificarVocal = letra => (letra=='a'||letra=='e'||letra=='i'||letra=='o'||letra=='u')

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

//Ejercicio 5
const esPalindromo = texto =>{
    texto=transformaMinusculas(texto);
    let largo = texto.length;
    for(let i=0;i<largo/2;i++){
        return(texto.charAt(i)==texto.charAt((largo-1)-i))
    }
}

export{
    sumar,restar,validaNumero,validaTexto,transformaMinusculas,transformaMayusculas,cuentaVocal,esPalindromo
}

