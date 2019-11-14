import
{
    sumar,
    restar,
    multiplicar,
    dividir
}from'../Funciones.js'
const operando1=prompt("introduzca un numero")
const operando2=prompt("introduzca un segundo numero")
const opcion=prompt("que operacion desea realizar:\n 1 para sumar\n 2 para restar\n 3 para multiplicar\n 4 para dividir")
switch(opcion)
{
    case "1":
    alert(sumar(operando1,operando2));
    break;
    case "2":
    alert(restar(operando1,operando2));
    break;
    case "3":
    alert(multiplicar(operando1,operando2));
    break;
    case "4":
    alert(dividir(operando1,operando2));
    break;
    default:
    alert("operacion no valida");
    break;
}


