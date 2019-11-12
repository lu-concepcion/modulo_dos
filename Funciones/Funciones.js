const sumar=(num1,num2)=>
{
    return num1+num2;
}
const restar=(num1,num2)=>
{
    return num1-num2
}
const multiplicar=(num1,num2)=>
{
    return num1*num2
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
const palindromo=(texto)=>
{
    texto=texto.toLowerCase()
    let limite=texto.length-1
    let flag = true 
    for (var i=0;i<((texto.length)/2)+1;i++)
    {
        if (texto.charAt(i)==" ")
        {
            i++
        }
        if (texto.charAt(limite)==" ")
        {
            limite++
        }
        if(texto.charAt(i)!=texto.charAt(limite))
        {
            flag=false
            break
        } 
        limite--
    }
    return (flag)
}
const sorteo=(max,min)=>
{
    let salida= []
    for (i=0;i<6;i++)
    {
        salida[i]=Math.random() * (max - min) + min;
    }
    return (salida)
}
const aciertosSorteo=(ganadores,elegidos)=>
{
    let aciertos
    for (i=0;i<6;i++)
    {
        for (j=0;j<6;j++)
        {
            if(ganadores[i]==elegidos[j])
            {
                aciertos++
            }
        }
    }
    return (aciertos)
}
export
{
    sumar,
    restar,
    esNumero,
    esTexto,
    aMayusculas,
    aMinusculas,
    contadorVocales,
    palindromo,
    sorteo,
    aciertosSorteo
}
