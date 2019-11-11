// const sumar=(num1,num2) =>{
//     return num1+num2
// }

// const restar=(num1,num2) =>{
//     return num1-num2
// }

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


const numeroVocales= palabra =>{
    let contador=0
    for (var i=0; i<=palabra.length-1; i++){
        if ((palabra.charAt(i)=="a") || (palabra.charAt(i)=="e") || (palabra.charAt(i)=="i") || (palabra.charAt(i)=="o") ||(palabra.charAt(i)=="u")){
            contador++;
        }
    } 
    return contador

}

 




export{  //siempre debe ir al final
    verificarNumero, verificarTexto, textoMinuscula, textoMayuscula, numeroVocales 
}