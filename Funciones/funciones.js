const esNumero = (variable)=>{
    return !isNaN(variable);
}

const esTexto = (variable)=>{
    return isNaN(variable);
}

const aMayuscula = (variable)=>{
    return variable.toUpperCase();
}

const aMinuscula = (variable)=>{
    return variable.toLowerCase();
}

export{
    esNumero,
    esTexto,
    aMinuscula,
    aMayuscula
}