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
    let numerosGanadores = numerosAleatoriosArray(7, 1, 41);
    const listadoNumeros = pedirNumerosArray(6, 1, 41)
    let contador = 0;
    
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

export{
    esNumero,
    porcentajeDelPrimero
}