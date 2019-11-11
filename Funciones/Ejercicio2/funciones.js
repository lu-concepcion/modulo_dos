
//funcion validar ingreso de numero
const numero=(n)=>{
    return(isNaN(n));
}
const texto=(l)=>{
    return(isNaN(l));
}
//funcion que transforma a minuscula
const minuscula = (valor)=>{
    return(valor.toLowerCase());
}

//funcion que transforma a mayuscula
const mayuscula = (valor2)=>{
    return(valor2.toUpperCase());
}

export {
    numero,
    texto,
    minuscula,
    mayuscula,

}