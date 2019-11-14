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

const quitaPuntosGuion=(input)=>{

    let letra, texto="";

    for(let i=0;i<input.length;i++)
    {
        letra=input.charAt(i);
        if(letra!=".")
        {
            if(letra=="-")
            {
                break;
            }
            texto=texto+letra;

        }

    }
    return texto;
}

const buscaLetras=(input)=>{

    let control=true;

    for(let i=0;i<input.length;i++)
    {
        if(validaNumero(input.charAt(i))==false)
        {
           
            control=false;
            return true;
            
        }
          
    }

    if(control==true)
    {
        return false;
    }


}

const digitoVerificador=(rut)=>{

    let texto="",textoInvertido, numerosRut=[], serie=[2,3,4,5,6,7,2,3,4,5,6,7],suma=0,dv,resultado="";

    texto=quitaPuntosGuion(rut);

    textoInvertido=invierteTexto(texto);
    

    if(buscaLetras(textoInvertido)==false)
    {
        for(let i=0;i<textoInvertido.length;i++)
        {
            
           numerosRut[i]=parseInt(textoInvertido.charAt(i));
            
        }

        for(let i=0;i<numerosRut.length;i++)
        {
            suma=suma+(numerosRut[i]*serie[i]);

        }

        dv= 11-(suma%11);

       
        if(dv>0&&dv<10)
        {
            resultado=resultado+dv;
        }

        if(dv==11)
        {
            dv=0;
            resultado=resultado+dv;
        }

        if(dv==10)
        {
            resultado=resultado+"K";
        }
  
        return resultado;

    }else
    {
        
        return "Error!"
    }

}


const buscaElemento=(elemento,array)=>{

    let bool=false;
    if(validaNumero(elemento)==true)
    {
        elemento=parseInt(elemento);

    }

    for(let i=0;i<array.length;i++)
    {
        if(array[i]==elemento)
        {
            bool=true;
            return true;
        }
    }
    if(bool==false)
    {
        return false;
    }

}


const buscaObjeto=(array,propiedad,valor)=>{

    

    let objeto={}; let bool=false;

    for(let i=0;i<array.length;i++)
    {

        if(array[i][propiedad]==valor)
        {
            console.log("tamos!");
            bool=true;
            
           // alert(JSON.stringify(array[i]));

            objeto=array[i];
            break;
            
        }          
        
    }

    if(bool==false)
    {
        alert("No encontrado!");
    }  
   
   return objeto;
    
}

const filtrarArray=(array, propiedad, valor)=>{

    let otroArray=[]; let contador=0;

    for(let i=0;i<array.length;i++)
    {

        if(array[i][propiedad]==valor)
        {  
            otroArray[contador]=array[i]; 
            contador++;  
            
        }   
        
    }

    return otroArray;

}

const ordenaArray=(array)=>
{
    let tmp=0;
    console.log(array);

    

    for(let i=0;i<array.length;i++)
    {  
       for(let x=1;x<(array.length -i);x++)
       {
           if(array[x-1]>array[x])
           {
               tmp=array[x-1];
               array[x-1]=array[x];
               array[x]=tmp;
           }
       }

    }


   // alert((JSON.stringify(array))); 
    return array;



}

const factorial=(numero)=>{

    let factorial=1;
    if(validaNumero(numero)==true)
    {
        for(let i=1;i<numero+1;i++)
        {
            factorial=factorial*i;
        }

        return factorial;
        

    }else{
        alert("esto no es un numero");
    }

}

const extraeEntreParentesis =(texto)=>{

    let letra, resultado="", control=false;

    for(let i=0;i<texto.length;i++)
    {
        letra=texto.charAt(i);

        if(letra==")")
        {
            
            resultado=resultado+" ";
            control=false;
        }

        if(control==true)
        {
            resultado=resultado+letra;
        }

        if(letra=="(")
        {
            control=true;
        }

        
        
        

      

    }

    return resultado;
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
    digitoVerificador,
    buscaElemento,
    buscaObjeto,
    filtrarArray,
    ordenaArray,
    factorial,
    extraeEntreParentesis
}

