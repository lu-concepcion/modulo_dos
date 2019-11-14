export const validar_numero = (n1) => {
    return (isNaN(n1))
}

export const validar_texto = (t1) => {
    return (isNaN(t1))
}
export const transformar_mayuscula = (t2) => {
    return (t2.toUpperCase())
}
export const transformar_minuscula = (t3) => {
    return (t3.toLowerCase())
}

export const operacionesAritmeticas = (opcion, numero1, numero2) => {
    let resultado = 0;
    if (opcion == 1) {
        resultado = parseInt(numero1) + parseInt(numero2);
    } else {
        if (opcion == 2) {
            resultado = parseInt(numero1) - parseInt(numero2);
        } else {
            if (opcion == 3) {
                resultado = parseInt(numero1) * parseInt(numero2);
            } else {
                if (numero2 == 0) {
                    resultado = "No se puede realizar esta division"
                } else {
                    resultado = parseInt(numero1) / parseInt(numero2);
                }
            }
        }
    }
    return resultado
}

export const verificarNumeros = (numero) => (isNaN(numero))

export const sacarPorcentaje = (numero, porcentaje) => {
    var resultado = 0;
    if (porcentaje <= 0 || porcentaje > 100 || numero < 0) {
        resultado = "No se puede sacar un porcentaje con esos valores"
    } else {
        resultado = (numero * porcentaje) / 100;
    }
    return resultado
}


export const verificarNumero = (numero) => (isNaN(numero))

const verificar_vocales = letra => (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u")

export const contar_vocales = frase => {
    let contador = 0;
    frase = frase.toLowerCase();
    for (let i = 0; i <= frase.length; i++) {
        if (verificar_vocales(frase.charAt(i))) {
            contador++;
        }
    }
    return contador
}

export const voltear_palabra = palabra => {
    var nueva_palabra = "";
    console.log(`a: ${palabra.length}`)
    let largo = palabra.length

    for (var i = largo; i >= 0; i--) {
        if (palabra.charAt(i) !== " ") {
            console.log(`b: ${palabra.charAt(i)}`)
            if (nueva_palabra == "") {

                nueva_palabra = palabra.charAt(i);
            } else {
                nueva_palabra = nueva_palabra + palabra.charAt(i);
            }
        }
    }
    return nueva_palabra
}

export const verificar_palindrome = (frase) => (voltear_palabra(frase) == frase)

export const numero_aleatorio = i => {
    return Math.floor((Math.random() * 36) + 1)
}

export const verificar_numero = numero => (isNaN(numero))

//FUNCIONES EJERCICIO 7

export const digitoVerificador = RUN => {
    let multiplicador = 2;
    let numeroVerificador = "";
    let resto = 0;
    let resultado = 0;
    let digitoVerificador = 0;

    for (let i = 0; i < RUN.length; i++) {
        if (multiplicador > 7) {
            multiplicador = 2;
        }
        console.log(invertirRUN(RUN).charAt(i), multiplicador, numeroVerificador)
        if (numeroVerificador == "") {
            numeroVerificador = parseInt(invertirRUN(RUN).charAt(i) * multiplicador);
        } else {
            numeroVerificador = parseInt(numeroVerificador) + parseInt(invertirRUN(RUN).charAt(i) * multiplicador);
        }
        multiplicador++

    }
    resto = numeroVerificador % 11;
    resultado = 11 - resto;
    console.log(resto, resultado)
    if (resultado == 11) {
        digitoVerificador = 0;
    } else {
        if (resultado == 10) {
            digitoVerificador = "K";
        } else {
            digitoVerificador = resultado;
        }
    }
    return digitoVerificador;
}

export const invertirRUN = RUN => {
    let invertidoRUN = "";
    for (let i = RUN.length; i >= 0; i--) {
        if (invertidoRUN == "") {
            invertidoRUN = RUN.charAt(i);
        } else {
            invertidoRUN = invertidoRUN + RUN.charAt(i);
        }
    }
    return invertidoRUN
}


export const verificarSeparaciones = RUN => {
    let nuevoRUN = "";
    let nuevoCambioDeRut = "";
    let cambiarRUT = 0;
    let arregloRUN = [];

    for (let i = 0; i < RUN.length; i++) {
        if (RUN.charAt(i) == ".") {
            arregloRUN = RUN.split(".");
            cambiarRUT = 1;
        }
    }
    if (cambiarRUT == 1) {
        for (let i = 0; i < 3; i++) {
            if (nuevoRUN == "") {
                nuevoRUN = arregloRUN[i];
            } else {
                nuevoRUN = nuevoRUN + arregloRUN[i];
            }
        }
        for (let i = 0; i < 8; i++) {
            if (nuevoCambioDeRut == "") {
                nuevoCambioDeRut = nuevoRUN.charAt(i);
                invertirRUN(nuevoCambioDeRut);
            } else {
                nuevoCambioDeRut = nuevoCambioDeRut + nuevoRUN.charAt(i);
                invertirRUN(nuevoCambioDeRut);
            }
        }
    }

    if (cambiarRUT == 0) {
        if (RUN.length <= 8 && RUN.length > 6) {
            nuevoCambioDeRut = RUN;
            invertirRUN(nuevoCambioDeRut);
        } else {
            nuevoCambioDeRut = "RUT INCORRECTO O INTRODUCIDO CON NUMERO DESPUES DEL GUION";
        }
    }

    return nuevoCambioDeRut
}

//FUNCIONES EJERCICIO 8

export const buscarDeterminadoElemento = (elemento, arreglo) => {
    let flag = 0;
    let notificacion = "";
    if (isNaN(elemento)) {
        for (let i = 0; i < arreglo.length; i++) {
            if (elemento == arreglo[i]) {
                flag = 1;
            }
        }
    } else {
        for (let i = 0; i < arreglo.length; i++) {
            if (elemento == arreglo[i]) {
                flag = 1;
            }
        }

    }
    if (flag > 0) {
        notificacion = "Si se encuentra en el arreglo";
    } else {
        notificacion = "No se encuentra en el arreglo";
    }
    return notificacion
}

export const buscarEnArreglo = (arregloQueSeAnalizara, tipoDeValor, valorQueSeBusca) => {
    let flag = 0;
    let arreglo = {};
    var notificacion = "";
    for (let i in arregloQueSeAnalizara) {
        if (arregloQueSeAnalizara[i][tipoDeValor] == valorQueSeBusca) {
            flag++
            arreglo = arregloQueSeAnalizara[i][tipoDeValor];
        }
    }
    if (flag > 0) {
        notificacion = (arreglo + " se encuentra en la propiedad " + tipoDeValor);
    } else {
        notificacion = "";
    }
    return notificacion;
}

export const filtrarArreglo = (arregloQueSeAnalizara, tipoDeValor, valorQueSeBusca) => {
    let flag = 0;
    let arreglo = {};
    var notificacion = "";
    for (let i in arregloQueSeAnalizara) {
        if (arregloQueSeAnalizara[i][tipoDeValor] == valorQueSeBusca) {
            flag++
            arreglo = arregloQueSeAnalizara[i][tipoDeValor];
        }
    }
    if (flag > 0) {
        notificacion = (arreglo + " se encuentra en el arreglo");
    } else {
        notificacion = "";
    }
    return notificacion;
}

export const voltearArreglo = (arreglo, opcion) => {
    let notificacion = "";
    let auxiliar1 = 0;
    let auxiliar2 = 0;
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = i + 1; j < arreglo.length; j++) {
            if (arreglo[i] < arreglo[j]) {
                auxiliar1 = arreglo[i];
                auxiliar2 = arreglo[j];
                arreglo[i] = auxiliar2;
                arreglo[j] = auxiliar1;
            }
        }
    }
    nuevoArreglo[0] = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        nuevoArreglo[i] = arreglo[i];
    }
    if (opcion == 1) {
        notificacion = arreglo;
    } else {
        if (opcion == 2) {
            let j = 0;
            for (let i = arreglo.length - 1; i >= 0; i--) {
                nuevoArreglo[j] = arreglo[i];
                console.log(nuevoArreglo)
                j++;
            }
            notificacion = nuevoArreglo;
        } else {
            notificacion = "Opcion no valida"
        }
    }
    return notificacion
}

export const factorial = numero => {
    let b = 1;
    let notificacion = 0;
    if (numero == 0) {
        notificacion = b;
    }
    for (let i = 1; i <= numero; i++) {
        b = b * i;
        notificacion = b;
    }
    return notificacion
}

export const revisarParentesis = texto =>{
    let nuevoString ="";
    let String1 ="";
    for(let i=0; i<texto.length;i++){
        console.log(texto.charAt(i))
        if(texto.charAt(i)=="("){
            i++
            do{
                if(nuevoString==""){
                    nuevoString=texto.charAt(i);
                }else{
                    nuevoString=nuevoString+texto.charAt(i)
                }
            }while(texto.charAt(i++)!==")")
        }
       
    }
    for(let i=0;i<nuevoString.length;i++){
        if(nuevoString.charAt(i)!==")"){
            if(String1==""){
                String1=nuevoString.charAt(i);
            }else{
                String1=String1+nuevoString.charAt(i);
            }
        }else{
            String1=String1+" ";
        }
    }
    return String1
}

export const verficarLimiteEdad = (edadMaxima, arreglo, valorQueSeBusca) =>{
    for(let i in arreglo){
        console.log(arreglo[i][valorQueSeBusca])
    }
}