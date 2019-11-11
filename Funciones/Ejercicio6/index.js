import { random } from '../funciones.js'
let i = 0;
let input = []

for(i;i<6;i++)
{
    input [i]= prompt ("Ingrese un número entre 1 y 41");

    if (input[i]<"1" || input[i]>"41")
    {
        input [i]= prompt ("Número no válido, ingrese un número entre 1 y 41");
    }
}

alert(input)
