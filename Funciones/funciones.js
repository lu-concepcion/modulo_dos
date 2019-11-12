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


//función para crear un palíndromo
const palindromo = text => {
    let alReves = text.length;
    for (let i = 0; i < text.length; i++) {
        alReves -= 1;
        if (text.charAt(i) == text.charAt(alReves)) {
            alert(text+" es un palíndromo")
        }else{ return text + " no es un palíndromo"}
    }
}

/*
función para que reciba dos números, y te ofrezca realizar las siguientes operaciones aritméticas:
Sumar
Multiplicar
Dividir (ojo con la división por cero)
Restar
*/

const aritmetica = (numero1, numero2) => {
    let text = prompt("que operación desea realizar");
    if (text == "sumar") {
       return numero1 + numero2
    }

    if (text == "multiplicar") {
        return numero1 * numero2
    }

    if (text == "restar") {
        return numero1 - numero2
    }

    if (text == "dividir") {
        while (numero1 > 0 && numero2 > 0) {
       let opcion =  prompt("si desea que el primer numero ingresado se divida por el segundo ingrese 1, de lo contrario numero 2 para la inversa");
       if (opcion == 1) {
            return numero1 / numero2
       }
       if (opcion == 2) {
            return numero2 / numero1
    }
  }
}
}


export{
    sumar, validarTexto, textoAMinuscula, textoAMayuscula, identificarVocales, palindromo, aritmetica
}