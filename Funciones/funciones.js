const sumar = (num1, num2) => {
    return num1 + num2
}

const restar = (num1, num2) => {
    return num1 - num2
}

const texto = (textoingresado) =>{

    if (isNaN(parseInt(textoingresado)) == false){
        return "Es un número";
    }
    else{
        return "Es un texto"
    }

}

const convertirMayuscula = (convertMayusc) => {
    convertMayusc = convertMayusc.toUpperCase();
    return convertMayusc;
}

const convertirMinuscula = (convertMinusc) => {
    convertMinusc = convertMinusc.toLowerCase();
    return convertMinusc;
}



export {
    sumar,
    restar,
    convertirMayuscula,
    convertirMinuscula,
    texto
}