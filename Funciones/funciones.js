
const verificarTexto =palabra => {
    if (isNaN(palabra)==true){
        return "Lo ingresado corresponde a texto"
    } else {
        return "Lo ingresado no corresponde a texto"
    }
}


const verificarNumero = numero => {
    if (isNaN(numero)==false){
        return "Lo ingresado corresponde a un número"
    } else {
        return "Lo ingresado no corresponde a un número"
    }
}

const textoMinuscula = texto =>{
    return texto.toLowerCase()

}

const textoMayuscula = texto =>{
    return texto.toUpperCase()
}

// const verificarVocal= (letra,contador) =>{
//     if ((letra=="a") || (letra=="e") || (letra=="i") || (letra=="o") ||(letra=="u")){
//         return contador+1
    

// }

// const numeroVocalesdos= palabra =>{
//     palabra.toLowerCase();
//     let contador=0
//     //const vocales=["a","e","i", "o","u"];
//     for (var i=0; i<=palabra.length-1; i++){
//         contador=verificarVocal(palabra.charAt(i), contador)
//     } 
//     return contador
// }


const numeroVocales= palabra =>{
    palabra.toLowerCase();
    let contador=0
    //const vocales=["a","e","i", "o","u"];
    for (var i=0; i<=palabra.length-1; i++){
                if ((palabra.charAt(i)=="a") || (palabra.charAt(i)=="e") || (palabra.charAt(i)=="i") || (palabra.charAt(i)=="o") ||(palabra.charAt(i)=="u")){
          
            contador++;
        }
    } 
    return contador

}


const verificarPalindromo =palabra =>{
    palabra=palabra.trim();

    let palabraIngresada=[];
    let palabraAlReves=[];
    let palindromo=1;
    
    if (palabra.length >1){
        for (var i=0; i<=palabra.length-1; i++){
            palabraIngresada[i]=palabra.charAt(i);
            palabraAlReves[i]= palabra.charAt(palabra.length-1-i);
            if (palabraIngresada[i] !==palabraAlReves[i]){
                palindromo=0
            }
        } 
    }else {
        palindromo=0
    }


    if (palindromo==1){
        return "La palabra ingresada es un palíndromo"
    } else {
        return "La palabra ingresada no es un palíndromo"

    }
}

const sumar=(num1,num2) =>{
    return parseInt(num1)+parseInt(num2)
}

const restar=(num1,num2) =>{
    return parseInt(num1)-parseInt(num2)
}

const multiplicar=(num1,num2) =>{
    return parseInt(num1)*parseInt(num2)
}

const dividir=(num1,num2) =>{
    if (parseInt(num2)==0){
        return "No se puede dividir por 0"
    } else {
        return parseInt(num1)/parseInt(num2)

    }
}






export{  //siempre debe ir al final
    verificarNumero, verificarTexto, textoMinuscula, textoMayuscula, numeroVocales, verificarPalindromo, sumar, restar, dividir, multiplicar
}



