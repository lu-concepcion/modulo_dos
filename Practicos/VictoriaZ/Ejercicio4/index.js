var textoFinal="";
var contador= 0;

while(contador <4){
    if (contador==0){
        var lenguaje = prompt("Ingrese un lenguaje de programación");
        if (lenguaje !="Python"){
            var textoFinal = lenguaje;
            contador++;
        }
    }else{
        var lenguaje = prompt("Ingrese un lenguaje de programación");
        if (lenguaje !="Python"){
            var textoFinal = textoFinal + "-" + lenguaje;
            contador++;
        }
   }
}

while(lenguaje != "Python"){
        var lenguaje = prompt("Ingrese un lenguaje de programación");
        var textoFinal= textoFinal + "-" + lenguaje;
}


if (lenguaje == "Python" ){
   var textoFinal= textoFinal + "-" + lenguaje;
   alert("Los lenguajes ingresados fueron",textoFinal)

}





//while(contador<=4){
  //  var textoFinal= textoFinal + "-" + lenguaje;
    //var lenguaje = prompt("Ingrese un lenguaje de programación");


//}


