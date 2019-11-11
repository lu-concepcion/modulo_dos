
const texto = (textoingresado) =>{

    if(isNaN(parseInt(textoingresado)) == true){

    alert ("Es un texto")

    }else{

    alert ("No es un texto");

    }
    return textoingresado

}
const numero = (num1, num2) =>{

    return num1 + num2
    
}
const mayuscula = (num1, num2) =>{

    return num1 + num2
        
}

const minuscula = (num1, num2) =>{

    return num1 - num2

}

export {

    texto,
    numero,
    mayuscula,
    minuscula

}

