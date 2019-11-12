var numeros_romanos = [
    {
      id: "I",
      valor: "uno"
    },
    {
      id: "II",
      valor: "dos"
    },
    {
      id: "III",
      valor: "tres"
    },
    {
      id: "IV",
      valor: "cuatro"
    },
    {
      id: "V",
      valor: "cinco"
    },
    {
      id: "VI",
      valor: "seis"
    },
    {
      id: "VII",
      valor: "siete"
    },
    {
      id: "VIII",
      valor: "ocho"
    },
    {
      id: "IX",
      valor: "nueve"
    },
    {
      id: "X",
      valor: "diez"
    }
];
flag = 0;

    var consultar_opcion = prompt("Ingrese su numero romano");
    consultar_opcion = consultar_opcion.toUpperCase();
    for(i=0;i<11;i++){
        if(consultar_opcion==numeros_romanos[i].id){
            document.write(numeros_romanos[i].valor);
        }
    }
