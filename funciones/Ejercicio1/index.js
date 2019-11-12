import{validaNumero, validaTexto, convierteMayuscula, convierteMinuscula} from '../funciones.js'


    let input =prompt("ingresa un numero");

    if(validaNumero(input)==true)
    {
        alert("esto es un numero");
    }

    if(validaTexto(input)==true)
    {
        alert("es un texto");
        alert(" en mayusculas: "+convierteMayuscula(input)+" en minusculas: "+convierteMinuscula(input));

    }




  





