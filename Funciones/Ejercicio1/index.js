import
{
    esNumero,
    esTexto,
    aMayusculas,
    aMinusculas
}from'../Funciones.js'
let entrada = prompt("") 
const opcion = prompt("ingrese accion:\n 1 esNumero\n 2 esTexto\n 3 aMayusculas\n 4 aMinusculas")
switch(opcion)
{
    case "1":
        esNumero(entrada);
        break;
    case "2":
        esTexto(entrada);
        break;
    case "3":
        aMayusculas(entrada);
        break;
    case "4":
        aMinusculas(entrada);
        break;
}

