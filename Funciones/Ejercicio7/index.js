import {RUN, esNumero} from '../funciones.js'

let run = prompt("Ingrese su run");
let check = esNumero(run);

while(check == "1")
{
    run = prompt("Los carácteres ingresados no corresponden a numeros, por favor ingrese nuevamente")
    check = esNumero(run);
    if (check == 0)
    {
        alert("El dígito verificador de su run es: "+RUN(run))
    }
}



