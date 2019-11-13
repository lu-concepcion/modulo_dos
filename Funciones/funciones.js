const esNumero = num1 =>
{
    if(!isNaN(num1))
    return 0

    else
    return 1
}

const esTexto = texto =>
{
    if(isNaN(texto))
    return 0

    else
    return 1
}

const minuscula = texto =>
{  
    return texto.toLowerCase()
}

const mayuscula = texto =>
{
    return texto.toUpperCase()
}

const numVocal = texto =>
{
    const data = ["A","E","I","O","U"];
    let vocal = 0;

    texto = mayuscula(texto);

    for (var i = 0; i<texto.length; i++)
    {
        for(var j = 0; j<5;j++)
        {
              if(texto.charAt(i) == data[j])
       {
            vocal ++
       }
        }
       
    }
    return vocal
}

const palindromo = texto =>
{
    texto = mayuscula(texto);
    let inverso ="";
    let i = texto.length;
    while(i>=0)
    {
        inverso = inverso+ texto.charAt(i)
         i--;
    }
    for (let j = 0; j<texto.length; j++)
    {
        if (texto[j]==inverso[j])
        {
           return alert("La palabra ingresada corresponde a un palindromo")
        }
        else
        {
           return alert("La palabra ingresada no corresponde a un palindromo")
        }
    }
}

const random = () =>
{let sorteo = [];

    for(let i = 0; i<6;i++)
    {
        sorteo [i] = parseInt(Math.random() * (41 - 1) + 1);
    }
    return sorteo
}

const validMinMax = (num,min,max) =>
{   let i =0;
    while( num<min || num>max)
    {
        num = prompt ("Número no válido, ingrese un número entre"+  min  + "y" +  max);
        i++;
       
    } return num
    
}

const iqualNumber = (num1, num2) =>
{
    let i = 0;
    let j = 0;

    for(i;i<num1.length;i++)
    {
        for(j;j<num2.length;j++)
        {
            if(num1[i]==num2[j])
            {
                return num1.length
            }
            else
            return "0"
        }
    }
}

const sumar = (num1,num2) =>
{
    return num1+num2
}

const restar = (num1,num2) =>
{
    return num1-num2
}

const multiplicar = (num1, num2) =>
{
    return num1*num2
}

const dividir = (num1,num2) =>
{
    while (num2==0)
    {
        num2 = prompt("Error, el divisor no puede ser 0, ingrese nuevamente");
    }
    return num1/num2;
}

const porcentaje = (num1, num2) =>
{
    let percent = num1*num2/100;
    return percent
}

const RUN = num =>
{
    let cadena ="";
    let acum =0;
    let aux = 0;
    let digito = 0;
    let i = num.length;
    let serie = [2,3,4,5,6,7];
    num = num.split("-");
    num = num[0];
    while(i>=0)
    {
        if(num.charAt(i)!= ".")
       {
          cadena = cadena+num.charAt(i)
       
       }  
         i--; 
    }
    let diferencia = parseInt(cadena.length)-parseInt(serie.length);

    if(diferencia>0)
    { 
        for(let k = 0; k<diferencia;k++)
        {
            serie.push(serie[k]);
        }  
    }
  
    for(let j = 0;j<cadena.length;j++)
    {
        acum = acum + cadena[j]*serie[j]; 
    }

    aux = acum%11;
    digito = 11-aux;

    if (digito == 11)
    {
        digito = "0";
    }
    else if (digito == 10)
    {
        digito = "k";
   }

    return digito
}

const busqueda = (input, elemento) =>
{
    for (let i = 0; i<input.length;i++)
    {
        if (input[i] == elemento)
        {
            return 0
        }
        else
        {
            return 1
        }
    }
} 

const buscarObj = (array, propiedad, valor) =>
{
    let propiedades = [];
    let valores = [];

    for(let i = 0; i<array.length;i++)
    {
        propiedades [i] = Object.keys(array[i]);
        valores [i] = Object.values(array[i]) 

        for(let j = 0;j<propiedades.length;j++)
        {
            if(propiedades[i][j] == propiedad)
            {
            if(valores[i][j] == valor)
                {
                return array[i]
                }
            else
                {
                return Object()
                }
            }
        }
    }
  
}

const buscarObjArray= (array, propiedad, valor) =>
{
    let propiedades = [];
    let valores = [];
    let guardar = [];

    for(let i = 0; i<array.length;i++)
    {
        propiedades [i] = Object.keys(array[i]);
        valores [i] = Object.values(array[i]) 

        for(let j = 0;j<propiedades.length;j++)
        {
            if(propiedades[i][j] == propiedad && valores[i][j] == valor)
            {
                guardar.push(array[i])
                
            }
         
        }
    }
  return guardar
}
export { buscarObjArray,buscarObj,busqueda,RUN,esNumero, esTexto, minuscula, mayuscula, numVocal, palindromo, random, validMinMax, iqualNumber, sumar, restar, multiplicar, dividir, porcentaje}