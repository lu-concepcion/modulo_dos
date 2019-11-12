import{sorteoLoto, validarRango, opciones, validaRepetidos} from '../funciones.js'

let numeros = []; let numero; let bool=false;

do{
    bool=false;
    //numeros[0]= -99;

    for(let i=0;i<6;i++)
    {
    numero =parseInt(prompt("ingresa un numero "+(i+1)));
    
        
            if(validarRango(numero)==true)
            {
                if(validaRepetidos(numeros,numero)==false)
                {
                    numeros[i]=numero;

                }else
                {
                    alert("numero repetido!");
                    i--;
                }
                

            }else
            {
                alert("numero fuera de rango!");
                i--;
            }
    
    }

    if(opciones()==true)
    {
        
        bool = true;

    }else
    {
        alert(sorteoLoto(numeros));
    }

}while(bool==true)
