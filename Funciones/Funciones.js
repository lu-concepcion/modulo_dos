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
return isNaN(texto)
}
const aMayusculas=(texto)=>
{
    return alert(texto.toUpperCase())
}
const aMinusculas=(texto)=>
{
    return alert(texto.toLowerCase())
}
let contadorVocales=(texto)=>
{
    texto=texto.toLowerCase()
    const limite= texto.length
    let contadorVocal=0
    for (var i = 0;i<=limite;i++)
    {
        if(texto.charAt(i)=="a"||texto.charAt(i)=="e"||texto.charAt(i)=="i"||texto.charAt(i)=="o"||texto.charAt(i)=="u")
        {
            contadorVocal++
        }
    }
    return(contadorVocal)
}
export
{
    sumar,
    restar,
    esNumero,
    esTexto,
    aMayusculas,
    aMinusculas,
    contadorVocales
}
