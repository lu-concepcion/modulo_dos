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
    const objetoVacio = [];
    for(let i=0; i<arrayABuscar.length; i++){
        if(arrayABuscar[i][propiedadAFiltrar] == valorPropiedad){
            return console.log(arrayABuscar[i]);
        }
    }
    return console.log(objetoVacio);
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
    buscarEnArray
}