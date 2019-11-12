flag = 1;
contador_numeros = 0;
numero1 = "";
numero2 = "";
numero3 = "";
numero4 = "";
numero5 = "";
resultado = "";
do {
    var consultar_numero = prompt("Ingrese su numero " + (parseInt(contador_numeros) + 1));
    if (consultar_numero % 2 == 0 && consultar_numero >= 2 && consultar_numero <= 20 && contador_numeros < 5) {
        if (numero1 == "") {
            numero1 = consultar_numero;
            contador_numeros++
        } else {
            if (numero2 == "") {
                numero2 = consultar_numero;
                contador_numeros++
            } else {
                if (numero3 == "") {
                    numero3 = consultar_numero;
                    contador_numeros++
                } else {
                    if (numero4 == "") {
                        numero4 = consultar_numero;
                        contador_numeros++
                    } else {
                        if (numero5 == "") {
                            numero5 = consultar_numero;
                            contador_numeros++
                        }
                    }
                }
            }
        }
    }
    if (contador_numeros >= 5) {
        var consultar_operacion = prompt("Desea sumar o multiplicar")
        if (consultar_operacion == "Sumar" || consultar_operacion == "sumar") {
            resultado = parseInt(numero1) + parseInt(numero2) + parseInt(numero3) + parseInt(numero4) + parseInt(numero5);
            alert("El resultado es " + resultado)
            flag = 0
        } else {
            resultado = parseInt(numero1) * parseInt(numero2) * parseInt(numero3) * parseInt(numero4) * parseInt(numero5);
            alert("El resultado es " + resultado)
            flag = 0
        }
    }
} while (flag == 1);