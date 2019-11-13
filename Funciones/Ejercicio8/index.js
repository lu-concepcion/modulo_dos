import {busqueda} from '../funciones.js'

let input = [];
let i = 0;
let aux = "";
while(aux != "salir")
{
    aux = prompt("Ingrese el elemento "+i+" de su arreglo o salir para finalizar");
    if(aux !="salir")
    {
        input [i] = aux
        i++;
    }
} 

let buscar = prompt("Ingrese el elemento a buscar"); 

let check = busqueda(input,buscar);
if(check ==0)
{
    alert("El elemento se encuentra dentro de los carácteres ingresados")
}

if (check == 1)
{
    alert("El elemento no se encuentra dentro de los carácteres ingresados")
}


alert(input)