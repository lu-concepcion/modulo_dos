const sumar = (Num1,Num2)=>{
    return Num1 + Num2;
}
const restar = (Num1,Num2)=>{
    return Num1 - Num2;
}
const multiplicar = (Num1,Num2)=>{
    return Num1 * Num2;
}
const dividir = (Num1,Num2)=>{
    return Num1 / Num2;
}
const validaNumero = (string1)=>{
    if(parseInt(string1))return "Si";
    else return "No";
}
const validaTexto = (string1)=>{
    if(isNaN(string1))return "Si";
    else return "No";
}
const aMayusculas = (string1)=>{
    let resultado
    resultado = string1.toUpperCase();
    return resultado;
}
const aMinusculas = (string1)=>{
    let resultado;
    resultado = string1.toLowerCase();
    return resultado;
}
const esVocal = (string1)=>{
    if ((string1 == "a")||(string1 == "e")||(string1 == "i")||(string1 == "o")||(string1 == "u"))return 1;
}
const contarVocales = (string1)=>{
    let resultado,contador = 0;
    resultado = aMinusculas(string1);
    for (let i = 0; i < resultado.length; i++) {
        if (esVocal(resultado.charAt(i)) == 1) contador++;
        
    }
    return parseInt(contador);
}
const esPalindromo = (string1)=>{
    let resultado,contador = 0;
    resultado = aMinusculas(string1);
    for (let i = 0; i < resultado.length - 1; i++) {
        if (resultado.charAt(i) == resultado.charAt((resultado.length - i)))contador++;
        
    }
    return contador == resultado.length 
}

const loto = (numerosUsuario)=>{
    numerosGanadores[6];
    let aciertos = 0;
    for (let i = 0; i < 6; i++) {
        numerosGanadores[i] = Math.floor(Math.random() *  (40)) + 1;   
    }
    for (let i = 0; i < 6; i++) {
        for (let k = 0; k < 6; k++) {
            if(numerosUsuario[i] == numerosGanadores[k])aciertos++;  
        }     
    }
    return aciertos;
}

export{
    sumar, restar, multiplicar, dividir, validaNumero, validaTexto, aMayusculas, aMinusculas, contarVocales, esVocal, esPalindromo
}