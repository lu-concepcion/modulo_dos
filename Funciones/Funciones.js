const sumar=(num1,num2)=>
{
    return num1+num2;
}
const restar=(num1,num2)=>
{
    return num1-num2
}
const esNumero=(num)=>
{
     if (!isNaN(num))
     {
         return alert ("el caracter si es un numero")
     }
     else{
         return alert ("el caracter no es un numero")
     }
}
const esTexto=(texto)=>
{
    if(isNaN(texto))
    {
        return alert ("el caracter si es texto")
    }
    else{
        return alert ("el caracter no es texto")
    }
}
const aMayusculas=(texto)=>
{
    return alert(texto.toUpperCase())
}
const aMinusculas=(texto)=>
{
    return alert(texto.toLowerCase())
}
export
{
    sumar,
    restar,
    esNumero,
    esTexto,
    aMayusculas,
    aMinusculas
}
