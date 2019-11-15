// const testing = () => {
//     return "test";
// }

//sumar dos numeros
const sumar = (num1, num2) => {
    return (num1 + num2);
}

//restar dos numeros
const restar = (num1, num2) => {
    return (num1 - num2);
}

//multiplicar dos números
const multiplicar = (num1, num2) => {
    return (num1 * num2);
}

//dividir dos numeros
const dividir = (num1, num2) => {
    return (num1 / num2);
}

//valido si es numero
const esNumero = (esNum) => {
    if (isNaN(parseInt(esNum)) == false){
        return esNum;
    }else {return "Ingrese un Número";}
}

//valido si es texto
const esTexto = (esTxt) =>{
    if (isNaN(parseInt(esTxt)) == true){
        return esTxt;
    }
    else{ return "Ingrese Texto" }
}

//convierte texto a mayuscula
const convertirMayuscula = (convertMayusc) => {
    return convertMayusc.toUpperCase();
}

//convierte texto a minuscula
const convertirMinuscula = (convertMinusc) => {
    return convertMinusc.toLowerCase();
}

//recorre todo el texto buscando una vocal y las cuenta
const buscaVocal = (buscaABC) => {
    let i = 0;
    let cuentavocal = 0;
    for(i=0 ; i<buscaABC.length; i++){
        if(buscaABC.charAt(i)=="a" || buscaABC.charAt(i)=="e" || buscaABC.charAt(i)=="i" || buscaABC.charAt(i)=="o" || buscaABC.charAt(i)=="u"){
            cuentavocal=cuentavocal+1;
        }
    }
    return cuentavocal
}

//busca palabras que son palíndrimo
const palindrimo = (palin) => {
    let TextoAlVerre="";
    for (let i = palin.length; i > 0; i--) {
        TextoAlVerre += palin.charAt(i-1);
    }
    if(palin == TextoAlVerre){
        return "el texto es palindrimo";
    }else return "el texto no es palindrimo";
}

//genera numeros aleatorios
const numeroRandom = (minimo,maximo) => {
    return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
}

//verifica si se repite un numero en un array
const repiteNumero = (numero, array) => {
    for(let i=0; i<array.length; i++){
        if(numero == array[i]){
            return true;
        }
    }
    return false;
}

//regla de 3 simple
const regla3 = (num1, num2) => {
    return (num2 * 100 / num1 + "%");
}

//calcula digito verificador
const validaRun = (run) => {
    let aux =run.split("-");
    run=aux[0] ;
    aux=run.split(".");
    let aux2=[];
    for (let i=0;i<aux.length;i++){
        aux2=aux2+aux[i];
    }
    let runinvertido="";
    let x = aux2.length-1;
 
    while (x>=0){
        runinvertido = runinvertido + aux2.charAt(x);
        x--;
    }
    const serie=[2,3,4,5,6,7,2,3,4,5,6,7];
    let multiplicar=0;
    for(let i=0;i<runinvertido.length;i++){
            multiplicar = multiplicar + (serie[i]*parseInt(runinvertido.charAt(i)));
    }
    multiplicar=multiplicar%11;
    multiplicar=11-multiplicar;
    switch(multiplicar){
        case 11:
            return 0;
        case 10:
            return "k";
        default:
            return multiplicar;
    }
}

//encontrar determinado elemento en un array
const buscaElemento = (elemento, array) => {
    for(let i=0; i<array.length; i++){
        if(elemento == array[i]){
            return alert("encontre el elemento");
        }
    }
    return alert("no encontre el elemento");
}

// encontrar en un array un determinado objeto, dada una condicion
const buscarEnArray = (arrayABuscar, propiedadAFiltrar, valorPropiedad) => {
    const objetoVacio = {};
    for(let i=0; i<arrayABuscar.length; i++){
        if(arrayABuscar[i][propiedadAFiltrar] == valorPropiedad){
            return Object.entries(arrayABuscar[i]);
        }
    }
    return console.log(objetoVacio);
}

//array para filtrar un array de elementos, dada una condición
const filtroEnArray = (arrayABuscar, propiedadAFiltrar, valorPropiedad) => {
    let arrayAMostrar = [];
    for(let i=0; i<arrayABuscar.length; i++){
        if(arrayABuscar[i][propiedadAFiltrar] == valorPropiedad){
            arrayAMostrar.push(arrayABuscar[i])
        }
    }
    return console.log(arrayAMostrar);
}

//Mostrar un array
const mostrarArray = (array) =>{
    let mensaje = "";
    for(let i=0; i<array.length; i++){
        mensaje += array[i] + " ";
    }
    return mensaje;
}

//ordenar numeros de mayor a menor
const ordenMasAMenos = (numeros) => {
    for(let i=0; i<numeros.length; i++){
       for(let j=0; j<numeros.length; j++){
           if(numeros[j] < numeros[j+1]){
               let aux = numeros[j];
               numeros[j] = numeros[j+1];
               numeros[j+1] = aux;
           }
       }
    }
    return numeros;
}

//ordenar de menor a mayor
const ordenMenosAMas = (numeros) => {
    for(let i=0; i<numeros.length; i++){
        for(let j=0; j<numeros.length; j++){
            if(numeros[j] > numeros[j+1]){
                let aux = numeros[j];
                numeros[j] = numeros[j+1];
                numeros[j+1] = aux;
            }
        }
    }
    return numeros;
}

//factorial de un numero
const factorial = (numero) => {
    let resultado=1;
    for(let i=0; i<numero; i++){
        resultado *= (i+1)
    }
    alert(resultado);
}

//captura texto entre parentesis
const capturaTexto = (texto) => {
    let guardaTexto = [];
    let contador=0;
    for(let i=0; i<texto.length; i++){
        if(texto.charAt(i)=="("){
            do{
                i++;
                guardaTexto += texto.charAt(i)+"";
                console.log(guardaTexto)
            }while(texto.charAt(i+1)!=")")
        }
    }
    return (guardaTexto)       
}

//obtener edad en base a una fecha de nacimiento
const obtenerEdad = (fecha) => {
    const personas = [{nombre: "jeremy", fechNac:{dia:5, mes:4, agno:1996}},{nombre:"mathias", fechNac:{dia:27, mes:6, agno:1997}}];
    let fechaAhora = new Date ();
    let edad = fechaAhora.getFullYear() - fecha.getFullYear();
    let arrayFiltrado=[];
    for(let i=0; i<personas.length; i++){
        if((fechaAhora.getFullYear()-personas[i].fechNac.agno)>edad){
            console.log(fechaAhora.getFullYear()-personas[i].fechNac.agno)
            console.log(edad)
            arrayFiltrado.push(personas[i]);
        }
    }
    return console.log(arrayFiltrado);
}

//exporto funciones a los demás archivos
export {
    sumar,
    restar,
    convertirMayuscula,
    convertirMinuscula,
    esNumero,
    esTexto,
    buscaVocal,
    palindrimo,
    numeroRandom,
    repiteNumero,
    multiplicar,
    dividir,
    regla3,
    validaRun,
    buscaElemento,
    buscarEnArray,
    filtroEnArray,
    mostrarArray,
    ordenMasAMenos,
    ordenMenosAMas,
    factorial,
    capturaTexto,
    obtenerEdad
}

// module.exports = {
//     testing
// }