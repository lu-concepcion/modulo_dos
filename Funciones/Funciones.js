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
const dividir=(num1,num2)=>
{
    if(num2==0)
    {
        return "error"   
    }
    else
    {
        return num1/num2
    }
}
const porcentaje=(num1,num2)=>
{
    if(num1==0)
    {
        return "error"
    }
    else 
    {
        return (num2/num1)*100
    }
}
const esNumero=(num)=>
{
     return (!isNaN(num));
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
const digitoVerificador=(run)=>
    {
      let aux =run.split("-")
      run=aux[0] 
      aux=run.split(".")
      let aux2=[]
      for (let i=0;i<aux.length;i++)
      {
          aux2=aux2+aux[i]
      }
      let runinvertido=""
      var x = aux2.length-1;
 
      while (x>=0)
      {
         runinvertido = runinvertido + aux2.charAt(x);
         x--;
      }
      const serie=[2,3,4,5,6,7,2,3,4,5,6,7];
      let multiplicacion=0
      for(let i=0;i<runinvertido.length;i++)
      {
            multiplicacion = multiplicacion + (serie[i]*parseInt(runinvertido.charAt(i)))
      }
      multiplicacion=multiplicacion%11
      multiplicacion=11-multiplicacion
      switch(multiplicacion){
      case 11:
          return 0
      case 10:
          return "k"
      default:
          return multiplicacion
      }
    }
export
{
    sumar,
    restar,
    multiplicar,
    dividir,
    porcentaje,
    esNumero,
    esTexto,
    aMayusculas,
    aMinusculas,
    contadorVocales,
    palindromo,
    sorteo,
    aciertosSorteo,
    digitoVerificador
}
