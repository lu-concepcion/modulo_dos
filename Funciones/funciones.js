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
const palindromo = (textoingresado) =>{

    const textocomparacion=textoingresado.split("");
    const textopalindromo=textoingresado.split("").reverse();

    for (let i=0;i<textocomparacion.length;i++){

    if(textocomparacion[i]==textopalindromo[i]){
    alert("Esto es un palíndromo")
    return (true);
}
    else{
    alert("Esto no es un palíndromo")
    return(false);
}}
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
const validarRut = (n1) =>{

    for(i=0; i<n1.length; i++){



        return 

    }

    
}

const sorteo = (N) =>{

    
        let loto = [];
        let intentos = '';
        const x;
    
        for (i = 0; i <= 2; i++) {
            x = prompt("Ingresa tus numeros de sorteo:", "");
            loto.push(x);
        }
    
        for (i = 0; i <= 2; i++) {
            intentos += loto[i] + " ";
        }
    
        document.getElementById("here").innerHTML = cont;
    

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
    porcentaje,
    validarRut,
    palindromo,
    sorteo

}

