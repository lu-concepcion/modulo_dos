var contador = 0;
var res ="";
while (lp != "Python" || contador < 4) {
    var lp = prompt("Introduce un lenguaje de programación");
    if(contador < 4 && lp == "Python"){
        lp=="";
    }
    else {if(res == "")res = lp;
        else res = res + " - " + lp;
        contador++;
    }
}
alert(res) 