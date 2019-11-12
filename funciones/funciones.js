const validaNumero=(input)=>{

    if(isNaN(input)==false)
    {
        return true;
    }else{
        return false;
    }

}

const validaTexto=(input)=>{

    if(isNaN(input)==true)
    {
        return true;
    }else{
        return false;
    }

}

const convierteMinuscula=(input)=>{

     return input.toLowerCase();
}

const convierteMayuscula=(input)=>{

    return input.toUpperCase();
}



const cuentaVovales=(input)=>{
    let letra, contador=0, texto;
    texto=convierteMinuscula(input);

    for(var i=0;i<texto.length;i++){
        
        letra=texto.charAt(i);
        if(letra=="a"|| letra=="e"|| letra=="i" ||letra=="o"|| letra=="u")
        {

            contador++;
        }

    }
    return contador;
}

const identificaPalindromo=(input)=>
{
    var letra, texto, inversa="", contador=0;
    texto=convierteMinuscula(input);

    if(texto.length>3)
    {
            for(let i=texto.length-1;i> -1;i--)
            {
                console.log(i)
                letra= texto.charAt(i);
                inversa = inversa+letra;
            }
            console.log(inversa)

            for(let i=0;i<texto.length;i++)
            {
                if(texto.charAt(i)==inversa.charAt(i))
                {
                    contador++;

                }

            }

            if(texto.length==contador)
            {
                return true;
            }else
            {
                return false;
            }

    }else
    { 
        return false;
    }
}

const invierteTexto=(input)=>{
    
    let inversa="",letra;
    for(let i=input.length-1;i> -1;i--)
    {
        letra= input.charAt(i);
        inversa = inversa+letra;
    }

    return inversa;

}

const validarRango=(numero)=>{

    if(numero>0 &&  numero<=41)
    {
        return true;
    }else
    {return false;}
} 



const sorteoLoto=(numeros)=>{

   
   let numerosLoto=[];
   let numero, aciertos=0;
   for(let i=0;i<6;i++)
   {
       numero=Math.floor(Math.random() * (42 - 1)) + 1;
       if(validaRepetidos(numerosLoto,numero)==false)
       {
           numerosLoto[i]=numero;
           console.log(numerosLoto[i]);
           if(numeros[i]==numerosLoto[i])
           {
               aciertos++;
           }

       }else
       {
           i--;
       }  
 
   }

   return  "sus numeros: "+numeros+" Numeros ganadores: "+numerosLoto+"  sus aciertos: "+aciertos;  

}

const opciones =() =>{

    let opcion=convierteMinuscula( prompt("¿cambiar o sortear?"));
    if(opcion=="cambiar")
    {
        return true;
    }else
    {
        return false;
    }
}

const validaRepetidos=(array,numero)=>{

   if(array.includes(numero))
   {
       return true;
   }else
   {
       return false;
   }

}

const digitoVerificador=(rut)=>{

    let letra, texto="",textoInvertido;

    for(let i=0;i<rut.length;i++)
    {
        letra=rut.charAt(i);
        if(letra!=".")
        {
            if(letra=="-")
            {
                break;
            }
            texto=texto+letra;

        }

    }
    console.log("el rut ingresado es: "+texto);

    textoInvertido=invierteTexto(texto);
    console.log("rut invertido: "+textoInvertido);



}

export{
    validaNumero,
    cuentaVovales,
    convierteMayuscula,
    validaTexto,
    identificaPalindromo,
    sorteoLoto,
    validarRango,
    opciones,
    convierteMinuscula,
    validaRepetidos,
    digitoVerificador
}

