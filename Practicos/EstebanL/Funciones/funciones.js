
const texto = (textoIngresado) => {

    if(isNaN(textoIngresado) == true){

        alert ("Es un Texto")
        return (true)

    }else{
        alert ("Es un Numero")
       return (false)

    }
}
const mayuscula = (textoIngresado) => {

    return textoIngresado.toUpperCase()

}
const minuscula = (textoIngresado) => {

    return textoIngresado.toLowerCase()

}

export {

    texto,
    mayuscula,
    minuscula

}