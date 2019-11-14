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

    let textocomparacion=textoingresado.split("");
    let textopalindromo=textoingresado.split("").reverse();

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

const sorteo = (x) =>{

    return alert (x)
       
}

const busquedaElemento = (elemento) =>{

    const valoresElemento = ['Lapiz','Cuaderno','Goma','Carpeta','Estuche']
    alert (valoresElemento[elemento])
    return (true);

}
const busquedaElemento2 = (objeto) =>{

    const valoresObjeto = [
    {
        id:1,
        value: 'Men in Black',
        categoria: 'Accion'
    },{
        id:2,
        value:'Jumanji',
        categoria: 'Aventura'
    },{
        id:3,
        value:'the Ring',
        categoria: 'Terror'
    },{
        id:4,
        value:'Friday 13',
        categoria: 'Terror'
    }
];
//for(let i=0; i<=elemento; i++){

    //if(valoresObjeto [i] == elemento){

        alert (valoresObjeto[objeto])
        
    //}else{

    //    alert ("Objeto no a sido encontrado")

   // }

//}

}
const numFactorial = (numero)=> {

    let num = 1;
    let i = 0;

    for(i=1; i<=numero; i++){

    
    num = num * i;

    }
    return alert(num)

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
    sorteo,
    busquedaElemento,
    busquedaElemento2,
    numFactorial
}

