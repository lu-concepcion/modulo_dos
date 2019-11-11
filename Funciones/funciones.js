const esNumero = num1 =>
{
    if(!isNaN(num1))
    return alert("El/ Los carácteres ingresados corresponden a un número")

    else
    return alert("El/ Los carácteres ingresados no corresponden a un número")
}

const esTexto = texto =>
{
    if(isNaN(texto))
    return alert("El/ Los carácteres ingresados corresponden a Texto")

    else
    return alert("El/ Los carácteres ingresados no corresponden a Texto")
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

export { esNumero, esTexto, minuscula, mayuscula, numVocal, palindromo}