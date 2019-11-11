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
const contarVocales = (textoingresado) =>{

    let vocalcontada=0;
    textoingresado = textoingresado.toLowerCase()

    for(let i=0; i < textoingresado.length;i++){
        if(textoingresado.charAt(i)=="a" || textoingresado.charAt(i)=="e" ||textoingresado.charAt(i)=="i" ||textoingresado.charAt(i)=="o" ||textoingresado.charAt(i)=="u"){
            vocalcontada++
        }
    }

    return vocalcontada

}

export {

    contarVocales

}

