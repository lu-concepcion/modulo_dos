var listNumeros = [
    {
        numero: "i",
        valor: "uno"
    },
    {
        numero: "ii",
        valor: "dos"
    },
    {
        numero: "iii",
        valor: "tres"
    },
    {
        numero: "iv",
        valor: "cuatro"
    },
    {
        numero: "v",
        valor: "cinco"
    },
    {
        numero: "vi",
        valor: "seis"
    },
    {
        numero: "vii",
        valor: "siete"
    },
    {
        numero: "viii",
        valor: "ocho"
    },
    {
        numero: "ix",
        valor: "nueve"
    },
    {
        numero: "x",
        valor: "diez"
    },
];

var input = "";
do{
    input = prompt("Ingrese su numero romano");
}while(input.length <= 0 || input.length >=5)

for(var i=0; i<10; i++){
    if(listNumeros[i].numero == input.toLowerCase()){
        alert("El valor "+input+" equivale a: " + listNumeros[i].valor);
        break;
    }
    if(i == 9){
        alert("Numero desconocido");
    }
}