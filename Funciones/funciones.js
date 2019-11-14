const esNumero = (variable)=>{
    return !isNaN(variable);
}

const esTexto = (variable)=>{
    return isNaN(variable);
}

const aMayuscula = (variable)=>{
    return variable.toUpperCase();
}

const aMinuscula = (variable)=>{
    return variable.toLowerCase();
}

const cuantasVocales = (cadena) =>{
    const palabra = aMinuscula(cadena);
    let contador = 0;
    
    for(let i=0; i<palabra.length; i++){
        if( esVocal(palabra.charAt(i)) ){
            contador++;
        }
    }
    return contador;
}

const esVocal = (letra) =>{
    const vocales = ["a", "e", "i", "o", "u"];

    for(let i=0; i<vocales.length; i++){
        if(letra == vocales[i]){
            return true;
        }
    }

    return false;
}

const esPalindromo = (cadena) =>{
    const palabra = aMinuscula(cadena);
    let j = (palabra.length-1);

    for(let i=0; i<palabra.length; i++){
        if(palabra.charAt(i) == " "){
            i++
        }
        if(palabra.charAt(j) == " "){
            j--
        }
        if(palabra.charAt(i) != palabra.charAt(j)){
            return false;
        }
        j--;
    }

    return true;
}

const numerosAleatoriosArray = (size, minimo, maximo) =>{
    let salir = false;
    let listadoNumeros = [];

    for(let i=0; i<size; i++){ //Genera números aleatorios
        do{
            let numero = parseInt(Math.random() * (maximo - minimo) + minimo);
            salir = true;

            if(listadoNumeros.length == 0){ //Si no hay número aún
                listadoNumeros.push(numero);
            }else{
                for(let j=0; j<listadoNumeros.length; j++){
                    if(numero == listadoNumeros[j]){ //Que no se repitan
                        salir = false;
                        break;
                    }
                }
                if(salir == true){ //No se repitió
                    listadoNumeros.push(numero);
                }
            }
        }while(salir != true);
    }

    return listadoNumeros;
}

const pedirNumerosArray = (size, entreMin, entreMax) =>{
    let contador = 1;
    let salir = false;
    let listadoNumeros = [];
    do{ //Pide números que no se repitan y >0 , <41
        do{
            salir = true;
            let numero = prompt("Numero para la lotería entre 1 y 41 (" + contador +")");
            if(numero < entreMin || numero > entreMax){ //Mensaje de error si no está en el rango
                alert("El rango debe ser entre 1 y 41");
                salir = false;
            }else{
                if(listadoNumeros.length != 0){ //Comprueba si ya fue ingresado el número
                    for(let i=0; i<listadoNumeros.length; i++){
                        if(listadoNumeros[i] == numero){
                            alert("El número ya fue ingresado");
                            salir = false;
                        }
                    }
                }
            }
            if(salir){
                listadoNumeros.push(numero);
                contador++;
            }
        }while(salir != true);
    }while(listadoNumeros.length != 6);

    return listadoNumeros;
}

const loteria = () =>{
    let numerosGanadores = numerosAleatoriosArray(6, 1, 41);
    const listadoNumeros = pedirNumerosArray(6, 1, 41)
    let contador = 0;

    
    // do{
    //     let opcion = prompt("Quiere escoger nuevamente los números? (Si/No)");

    // }while(opcion != "")
    
    let mensaje = "Los números de la lotería son: ";
    for(let i=0; i<numerosGanadores.length; i++){
        mensaje += numerosGanadores[i];
        if(i != (numerosGanadores.length-1)){
            mensaje+= " - ";
        }
    }
    
    mensaje += "\nLos números escogidos son: ";
    for(let i=0; i<listadoNumeros.length; i++){
        mensaje+= listadoNumeros[i];
        if(i != (listadoNumeros.length-1)){
            mensaje+= " - ";
        }
    }
    
    for(let i=0; i<listadoNumeros.length; i++){
        for(let j=0; j<numerosGanadores.length; j++){
            if(numerosGanadores[j] == listadoNumeros[i]){
                contador++;
                break;
            }
        }
    }
    mensaje += "\nCantidad de aciertos: " + contador;

    return mensaje;
}

const sumar = (numA, numB) =>{
    return (numA + numB);
}

const restar = (numA, numB) =>{
    return (numA + numB);
}

const multiplicacion = (numA, numB) =>{
    return (numA * numB);
}

const division = (numA, numB) =>{ //No comprueba si está dividiendo por 0
    return (numA / numB);
}

const porcentajeDelPrimero = (numA, numB)=>{ //Obtiene el porcentaje del segundo número con respecto al primero
    return parseInt(numB*100/numA);
}

const calculoNumeroVerificador = (rutSinGuion) =>{
    let rutInvertido = "";
    for(let i=rutSinGuion.length; i>=0; i--){ //Invierte rut
        rutInvertido+=rutSinGuion.charAt(i);
    }

    let resultado = 0;
    if(rutInvertido.length == 8){ //ej:19788788
        resultado = rutInvertido.charAt(0)*2;
        resultado += rutInvertido.charAt(1)*3;
        resultado += rutInvertido.charAt(2)*4;
        resultado += rutInvertido.charAt(3)*5;
        resultado += rutInvertido.charAt(4)*6;
        resultado += rutInvertido.charAt(5)*7;
        resultado += rutInvertido.charAt(6)*2;
        resultado += rutInvertido.charAt(7)*3;
    }else{ // == 7 ej:1788788
        resultado = rutInvertido.charAt(0)*2;
        resultado += rutInvertido.charAt(1)*3;
        resultado += rutInvertido.charAt(2)*4;
        resultado += rutInvertido.charAt(3)*5;
        resultado += rutInvertido.charAt(4)*6;
        resultado += rutInvertido.charAt(5)*7;
        resultado += rutInvertido.charAt(6)*2;
    }

    const moduloRutInvertido = parseInt(resultado/11);
    const moduloMultiplicado = moduloRutInvertido*11;
    const valorAbsoluto = resultado - moduloMultiplicado;
    let digitoVerificador = 11-valorAbsoluto;
    
    if(digitoVerificador == 11){
        digitoVerificador = 0;
    }
    if(digitoVerificador == 10){
        digitoVerificador = "K";
    }
    
    return digitoVerificador;
}

const numeroVerificador = () =>{
    let rut = "";
    let salir = false;
    let caracteresPermitidos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "-"];

    do{ //Comprueba que el rut ingresado no tenga caracteres distintos a los del array
        rut = prompt("Ingrese su rut");
        for(let i=0; i<rut.length; i++){
            salir = false;

            for(let j=0; j<caracteresPermitidos.length; j++){
                if(rut.charAt(i) == caracteresPermitidos[j]){ //Encontró que existe dentro y sale
                    salir = true;
                    break;
                }
            }
            if(salir == false){ //Si sale del for y no encontró que existe ese caracter, pide rut nuevamente
                break;
            }
        }

        if(salir == true){
            salir = false;
            let arrayRut = rut.split(".");

            if(esNumero(rut)){
                if(rut.length == 9){
                    return calculoNumeroVerificador(rut.slice(0,8));
                }else{
                    if(rut.length == 8){
                        return calculoNumeroVerificador(rut.slice(0,7));
                    }else{
                        salir = false;
                    }
                }
            }else{
                if(arrayRut.length == 3){ //[19][199][199-4]
                    if( (arrayRut[0].length == 1 || arrayRut[0].length == 2) && esNumero(arrayRut[0]) ){ //[19]
                        if(arrayRut[1].length == 3 && esNumero(arrayRut[1])){ // [199]
                            if((arrayRut[2].length == 4 || arrayRut[2].length == 5) && !esNumero(arrayRut[2])){ //[199-4]
                                
                                let arrayRutGuion = arrayRut[2].split("-"); //[199][4]
                                if(arrayRutGuion[0].length == 3){ //[199]
                                    if(arrayRutGuion[1].length == 1){ //[199]
                                        
                                        //Rut correcto, comienza la lógica
                                        salir = true;
                                        const rutSinGuion = arrayRut[0] + arrayRut [1] + arrayRutGuion[0];
                    
                                        return calculoNumeroVerificador(rutSinGuion);
                                    }
                                }
                            }else{
                                salir = false;
                            }
                        }else{
                            salir = false;
                        }
                    }else{
                        salir = false;
                    }
                }else{//Más puntos de los que debería o no tiene puntos
                    salir = false;
                }
            }

            if(salir == false){
                alert("Ingrese nuevamente el rut");
            }
        }else{
            if(salir == false){
                alert("Ingrese nuevamente el rut");
            }
        }

    }while(salir != true);
}

const encontrarElementoEnArray= (array, elemento)=>{
    for(let i=0; i<array.length; i++){
        if(array[i] == elemento){
            return true;
        }
    }

    return false;
}

const encontrarObjetoEnArray = (array, propiedad, valor) =>{
    //Comprueba de que todos los elementos del array son objetos
    let objeto = {};
    for(let i=0; i<array.length; i++){
        if(typeof array[i] != 'object'){
            alert("Su array no es de objetos");
            return objeto;
        }
    }

    if(array.length > 0){ //Que no esté vacío
        if(typeof array[0][propiedad] != 'undefined'){ //Si existe la propiedad
            for(let i=0; i<array.length; i++){
                if(array[i][propiedad] == valor){
                    return array[i];
                }
            }
        }else{
            alert("No existe esa propiedad en el array");
        }
    }else{
        alert("Tamaño array igual a 0");
    }
    return objeto;
}

const filtrarObjetosArray = (array, propiedad, valor) =>{
    var arrayFiltrado = [];
    //Comprueba de que todos los elementos del array son objetos
    for(let i=0; i<array.length; i++){
        if(typeof array[i] != 'object'){
            alert("Su array no es de objetos");
            return arrayFiltrado;
        }
    }

    if(array.length > 0){ //Que no esté vacío
        if(typeof array[0][propiedad] != 'undefined'){ //Si existe la propiedad
            for(let i=0; i<array.length; i++){
                if(array[i][propiedad] == valor){ //Si lo encuentra, lo añade
                    arrayFiltrado.push(array[i]);
                }
            }
        }else{
            alert("No existe esa propiedad en el array");
        }
    }else{
        alert("Tamaño array igual a 0");
    }
    return arrayFiltrado;
}

const imprimirArray = (array) =>{
    let mensaje = "";
    for(let i=0; i<array.length; i++){
        mensaje += array[i] + " ";
    }

    return mensaje;
}

const ordenarArrayMenorMayor = (array) =>{
    let size = array.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (array[j] > array[j + 1]) {
                let aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    return array;
}

const ordenarArrayMayorMenor = (array) =>{
    let size = array.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (array[j] < array[j + 1]) {
                let aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    return array;
}

const factorial = (numero) =>{
    let resultado = 1;

    for(let i=1; i<=numero; i++){
        resultado = resultado*i;
    }

    return resultado;
}

const extraerPalabrasEntreParentesis = (texto)=>{
    let palabra = "";
    let frase = "";
    let arraySplit = texto.split("("); // Hola, mundo) que, tal) estas
    let array = [];

    for(let i=0; i<arraySplit.length; i++){ //Elimina palabras sin ")"
        for(let j=0; j<arraySplit[i].length; j++){
            if(arraySplit[i].charAt(j) == ")"){
                array.push(arraySplit[i]);
                break;
            }
        }
    }

    for(let i=0; i<array.length; i++){ //Agrega caracter por caracter a una palabra
        for(let j=0; j<array[i].length; j++){
            if(array[i].charAt(j) != ")"){
                palabra += array[i].charAt(j);
            }else{
                break;
            }
        }
        frase += palabra + " "; //La suma a frase (que retornará luego)
        palabra = ""; //Se resetea la palabra para que continue el ciclo
    }

    return frase;
}

export{
    extraerPalabrasEntreParentesis
}