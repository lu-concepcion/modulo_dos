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
const palindromo = (textopalindromo) =>{

    for (i=0; i<textopalindromo.length; i++)

    if(textopalindromo.charAt(i)==textopalindromo.charAt(i-1)){

        alert("es un palindromo")

    }else{

        alert("No es un palindromo")
    
    } 


    return textopalindromo

}
const sumar = (n1, n2) =>{

    const resultado = parseInt(n1) + parseInt(n2); 
    return resultado

}
const restar = (n1, n2) =>{

    const resultado = parseInt(n1) - parseInt(n2);
    return resultado

}
const dividir = (n1, n2) =>{

    const resultado = parseInt(n1) / parseInt(n2);
    return resultado

}
const multiplicar = (n1, n2) =>{

    const resultado = parseInt(n1) * parseInt(n2);
    return resultado

}
const porcentaje = (n1, n2) =>{

    const resultado1 = (parseInt(n2) * 100)/parseInt(n1); 
    return alert(resultado1+"%")

}

export {

    contarVocales,
    texto,
    mayuscula,
    minuscula,
    sumar,
    restar,
    dividir,
    multiplicar,
    porcentaje

}

