const testing = () => {
    return "test";
}
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
    for (let i=0;i<6;i++)
    {
        salida[i]=parseInt(Math.random() * (max - min) + min);
    }
    return (salida)
}
const aciertosSorteo=(ganadores,elegidos)=>
{
    let aciertos=0
    for (let i=0;i<6;i++)
    {
        for (let j=0;j<6;j++)
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
const arrayFinder=(arreglo,elemento)=>
{
    let flag=false
    for (let i=0;i<=arreglo.length;i++)
    {
        if (arreglo[i]==elemento)
        {
            flag=true
            break
        }
    }
    return(flag)
}
const objectFinder=(array,propiedad,valorPropiedad)=>
{
    let aux
    let aux2
    for (let i=0;i<=array.length-1;i++)
    {
       aux = Object.keys(array[i]);
       aux2 = Object.values(array[i]);
       for(let j=0;j<=aux.length;j++)
       {
           if(aux[j]==propiedad&&aux2[j]==valorPropiedad)
           return array[i]
       }
    }
    return(Object())
}
const objectFilter=(array,propiedad,valorPropiedad)=>
{
    let aux
    let aux2
    let coincidencias=[]
    for (let i=0;i<=array.length-1;i++)
    {
       aux = Object.keys(array[i]);
       aux2 = Object.values(array[i]);
       for(let j=0;j<=aux.length;j++)
       {
           if(aux[j]==propiedad&&aux2[j]==valorPropiedad)
           coincidencias.push(array[i])
       }
    }
    return(coincidencias)
}
const arraySort=()=>
{}
const factorial=(numero)=>
{
    let aux=1
    for (let i=1;i<=numero;i++)
    {
        aux=aux*i
    }
    return aux
}
const soloParentesis = (texto)=>
{   
    texto=texto.split("(")
    let aux=[]
    for (let i=1;i<=texto.length-1;i++)
    {
        aux=texto[i].split(")")
        texto[i]=aux[0]
    }
    let salida=""
    for (let i=0;i<texto.length;i++)
    {
        salida=salida+texto[i]
    }
    return salida
}
const calculoEdad = (birth)=>
{
    const fecha = new Date()
    const fechaHoy = [fecha.getFullYear(),(fecha.getMonth()+1),fecha.getDate()]
    const fechaDeNacimiento = [birth.getFullYear(),(birth.getMonth()+1),birth.getDate()]
    if(fechaHoy[1]<fechaDeNacimiento[1])
    {
        if(fechaDeNacimiento[2]>fechaHoy[2])
        {
            fechaHoy[0]=fechaHoy[0]-1
        }
    }
    return fechaHoy[0]-fechaDeNacimiento[0]
}
const getBirthday = (entrada)=>
{
    let aux=entrada.split("/")
    console.log(aux[2])
    console.log(aux[1])
    console.log(aux[0])
    return new Date (aux[0],aux[1],aux[2])
}

module.exports = {
    testing,
    calculoEdad,
    objectFinder,
    digitoVerificador,
    calculoEdad,
    getBirthday
}