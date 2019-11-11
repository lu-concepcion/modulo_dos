const validaNumero=(numero)=>{
   return(isNaN(numero))
}

const validaLetra=(numero)=>{
    return(!isNaN(numero))
}

const convertirMayuscula=(numero)=>{
    return numero.toUpperCase(numero);
}
const convertirMinuscula=(numero)=>{
    return numero.toLowerCase(numero);
}
export{
    validaNumero,validaLetra,convertirMinuscula, convertirMayuscula
}