// función para sumar dos variables
const sumar = (num1, num2) => {num1 + num2}

//validar lo que el usuario ingresa es texto o número
const validarTexto = text => {
    if (isNaN(text)) {
        return "Ha ingresado texto"
    } else {return "ha ingresado numeros"};
}

//convertir texto que ingresa el usuario de MAYUSCULA a minuscula
const textoAMinuscula = text => text.toLowerCase();

//convertir texto a MAYUSCULA
const textoAMayuscula = text2 => text2.toUpperCase();

//indentificar VOCALES en frase ingresada por usuario
const identificarVocales = text => {

    let contador = 0;
    for (let i = 0; i <text.length; i++) {
        if (text.charAt(i) == "A") {
            contador++;
        }
        if (text.charAt(i) == "E") {
            contador++;
        }
        if (text.charAt(i) == "I") {
            contador++;
        }
        if (text.charAt(i) == "O") {
            contador++;
        }
        if (text.charAt(i) == "U") {
            contador++;
        }
        if (text.charAt(i) == "a") {
            contador++;
        }
        if (text.charAt(i) == "e") {
            contador++;
        }
        if (text.charAt(i) == "i") {
            contador++;
        }
        if (text.charAt(i) == "o") {
            contador++;
        }
        if (text.charAt(i) == "u") {
            contador++;
        }
    }
    alert("Esta palabra tiene las siguientes vocales "+contador);
}

const palindromo = text => {
    let alReves = text.length;
    for (let i = 0; i < text.length; i++) {
        alReves -= 1;
        if (text.charAt(i) == text.charAt(alReves)) {
            alert(text+" es un palíndromo")
        }else{ return text + " no es un palíndromo"}
    }
}

export{
    sumar, validarTexto, textoAMinuscula, textoAMayuscula, identificarVocales, palindromo
}