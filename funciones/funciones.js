const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}

const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}

const verNum = (numero) => {
    return isNaN(parseInt(numero));
}

const verNumero = (numero) => {
    if(isNaN(numero) == false){
        return "Valor ingresado es un numero";
    }
    else{
        return "Valor ingresado es un texto";
    }
}

const converTextoMinus = (texto) => {
    if(isNaN(texto)){
        return texto.toLowerCase()
    }
    else{
        return "El valor ingresado no se puede convertir a minusculas"
    }
}

const converTextoMayus = (texto) => {
    if(isNaN(texto)){
        return texto.toUpperCase()
    }
    else{
        return "El valor ingresado no se puede convertir a mayusculas"
    }
}

const contarVocales = (texto) => {
    converTextoMinus(texto);
    let contador = 0;
    if(isNaN(texto)){
        for(let i=0; i < texto.length ; i++){
            if(texto.charAt(i) == "a" || texto.charAt(i) == "e" || texto.charAt(i) == "i" || texto.charAt(i) == "o" || texto.charAt(i) =="u"){
                contador ++;
            }
        }
        return "Cantidad de vocales es: " + contador;
    }
    else{
        return "El valor ingresado no es un texto";
    }
}

const esPalindromo = (texto) => {
    let textoAlRevez = "";
    for(let i = texto.length; i > 0; i--){
        textoAlRevez += texto.charAt(i-1);
    }
    console.log(textoAlRevez);

    return texto == textoAlRevez;
}

const generaNumAleatorios = (min, max) => {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

const seRepite = (num, array) => {
    for (let i=0; i < array.length; i++){
        if(num == array[i]){
            return true;
        }
    }
    return false;
}

const sacarPorcentaje = (num1 , num2 ) => {
    return (num2 * 100) / num1;
}

const codigoVerificador = (rut) => {
    let aux = rut.split("-");
    rut = aux[0];
    aux = rut.split(".");
    let aux2 = [];

    for (let i=0; i<aux.length; i++){
        aux2 = aux2 + aux[i];
    }

    let rutInvertido = "";
    let x = aux2.length - 1;
    while(x >= 0){
        rutInvertido = rutInvertido + aux2.charAt(x);
        x--;
    }

    const serie = [2,3,4,5,6,7,2,3,4,5,6,7];
    let multiplicacion = 0;
    for(let i=0; i < rutInvertido.length; i++){
        multiplicacion = multiplicacion + (serie[i] * parseInt(rutInvertido.charAt(i)));
    }

    multiplicacion = multiplicacion % 11;
    multiplicacion = 11 - multiplicacion;
    switch(multiplicacion){
        case 11:
            return 0;
        case 10:
            return "K"
        default:
            return multiplicacion;
    }
}

const buscarElemento = (array, elemento) => {
    console.log(array.includes(elemento));
    return array.includes(elemento);
}

const buscarEnArray = (array, propiedad, valor ) => {
    let objeto = {};
    array.forEach(element => {
        if(element[propiedad] == valor){
            objeto = element;
        }
    });
    return objeto;
}

const filtrarEnArray = (array, propiedad, valor) => {
    let objetos = [];
    array.forEach(element => {
        if(element[propiedad] == valor){
            objetos.push(element);
        }
    })
    return objetos;
}


export {
    sumar, restar, verNumero, converTextoMinus,
    converTextoMayus, contarVocales, esPalindromo,
    generaNumAleatorios, multiplicar, dividir, verNum,
    sacarPorcentaje, codigoVerificador, buscarElemento,
    buscarEnArray, filtrarEnArray, seRepite
}