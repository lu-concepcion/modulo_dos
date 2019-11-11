
const texto = (textoingresado) =>{

    if (isNaN(parseInt(textoingresado)) == false){
        return "Es un numero";
    }
    else{
        return "Es un texto"
    }

}
const mayuscula = (textoingresado) =>{

    return textoingresado.toUpperCase()
    
}

const minuscula = (textoingresado) =>{

    return textoingresado.toLowerCase()

}

export {

    texto,
    mayuscula,
    minuscula

}

