// Escribir un algoritmo que indique, dado un número romano, este mismo en palabras, solo del 1 al 10, ej;
// input: X
// output: Diez
// Utilizar OBJETOS

var nRomano = [
    {
        numero:"I",
        palabra:"uno"
    },
    {
        numero:"II",
        palabra:"dos"
    },
    {
        numero:"III",
        palabra:"tres"
    },    {
        numero:"IV",
        palabra:"cuatro"
    },    {
        numero:"V",
        palabra:"cinco"
    },    {
        numero:"VI",
        palabra:"seis"
    },    {
        numero:"VII",
        palabra:"siete"
    },    {
        numero:"VIII",
        palabra:"ocho"
    },    {
        numero:"IX",
        palabra:"nueve"
    },    {
        numero:"X",
        palabra:"diez"
    }
]

var numeroIngresado = prompt("Ingrese un numero romano");
for(i=0;i<10;i++){
    if(nRomano[i].numero==numeroIngresado){
        document.write(nRomano[i].palabra)
        break;
    }
}