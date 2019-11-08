let numerosObjeto = {
    I: 1, 
    II: 2, 
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    IX: 9,
    X: 10
}

do {
    var numero = prompt("Ingresa un número en romano:");
    var paso = false;
    if(numero !== "" && isNaN(numero)) {
        if (numerosObjeto.indexOf(numero.toUpperCase() !== -1)) {
            alert("Tú numero ingresado es:" + numerosObjeto[numero.toUpperCase()]);
            var paso = true;
        }
        else {
            alert("Ingresa un número romano del 1 al 10!");
        }
    }
    else {
        alert("Ingresa tus datos correctamente!");
    }
}while(!paso);
