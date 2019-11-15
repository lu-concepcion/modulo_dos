const sumar=(num1,num2)=>{
    return num1+num2
}
const restar=(num1,num2)=>{
    return num1-num2
}
const validaNumero = numero =>{
    return (!isNaN(numero))
}
const validaTexto = texto =>{
    return (isNaN(numero))
}
const transformaMinusculas = texto =>{
    return texto.toLowerCase();
}
const transformaMayusculas = texto =>{
    return texto.toUpperCase();
}
//Ejercicio4
const verificarVocal = letra => (letra=='a'||letra=='e'||letra=='i'||letra=='o'||letra=='u')

let contador=0,i;
const cuentaVocal = texto =>{
    texto=transformaMinusculas(texto);
    for(i=0;i<texto.length;i++){
        if(verificarVocal(texto.charAt(i))){
           contador++; 
        }
    }
    return contador
}

//Ejercicio 5
const esPalindromo = texto =>{
    texto=transformaMinusculas(texto);
    let largo = texto.length;
    for(let i=0;i<largo/2;i++){
        return(texto.charAt(i)==texto.charAt((largo-1)-i))
    }
}
//Ejercicio 6
const buscarElemento = (array,numero) =>{
    for(let i=0;i<array.length;i++){
        if(array[i]==numero){    
            return true
        }
    }
    return false
}
let arraySorteo=[];
const generaLoteria=()=>{
    for(let i=0;i<6;i++){
        do{
            let generado=Math.floor(Math.random()*37)
            console.log(arraySorteo)
        }while(buscarElemento(arraySorteo,generado));
        arraySorteo[i]=generado
    }
}

// Ejercicio 2
const multiplicar = (num1,num2) =>{
    return num1*num2
}

const dividir = (num1,num2) =>{
    if(num2==0){
        return "No existe la division por 0"
    }else{
        return num1/num2
    }
}

//Ejercicio 3

const calculaPorcentaje = (num1,num2) =>{
    return (num1/100)*num2
}

//Ejercicio 7
const eliminaFormato = (rut) =>{
    let rutSinFormato=[];
    //console.log("antes  "+rutSinFormato)
    for(let i=0;i<rut.length;i++){
        if(validaNumero(rut.charAt(i))){
            let contador = rutSinFormato.push(rut.charAt(i))
         }//else{
        //     if(i==(rut.length-1) && (rut.charAt(i)=='k' || rut.charAt(i)=='K')){
        //         contador = rutSinFormato.push(rut.charAt(i))
        //     }
        // }   
    }
    //console.log("dsps  "+rutSinFormato)
    return rutSinFormato
}

const invertirArray = (array) =>{
    let invertido = array.reverse();
    return invertido
}

const moduloOnce = (array) =>{
    console.log("antes de quitar formato "+array)
    array=eliminaFormato(array)
    console.log("dsps de quitar formato antes de invertir "+array)
    array=invertirArray(array)
    console.log("dsps de invertir "+array)
    const serieVerificacion = [2,3,4,5,6,7]
    let suma=0,j=0;
    for(let i=0;i<array.length;i++){
        if(j==6){
            j=0;
        }
        console.log("i= "+i+"j= "+j+"suma= "+suma)
        suma+=array[i]*serieVerificacion[j]
        j++;
    }
    let resto=suma%11
    let digitoVerificador=11-resto
    if(digitoVerificador==11){
        digitoVerificador=0;
    }else{
        if(digitoVerificador==10){
            console.log("antes DVVV "+digitoVerificador)
            digitoVerificador='k'
            console.log("dsps DVVV "+digitoVerificador)
        }
    }
    return digitoVerificador
}

// Ejercicio 8

const filtrarArray = (array,propiedad,valor) =>{
    for(let i=0;i<array.length;i++){
        if(array[i][propiedad]==valor){
            return Object.entries(array[i])
        }
    }
    return Object.keys(array[0])
}

const filtrarTodosArray = (array,propiedad,valor) =>{
    let arrayReturn=[]
    for(let i=0;i<array.length;i++){
        if(array[i][propiedad]==valor){
            arrayReturn.push(array[i])
        }
    }
    return arrayReturn[Object.entries(arrayReturn)]
}

// Ejercicio 9

const ordenarMenorAMayorArray = (array) =>{
    let auxiliar=0
    for(let i=0;i<array.length-1;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                auxiliar=array[i]
                array[i]=array[j]
                array[j]=auxiliar
            }
        }
    }
    return array
}
const ordenarMayorAMenorArray = (array) =>{
    let auxiliar=0
    for(let i=0;i<array.length-1;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]<array[j]){
                auxiliar=array[i]
                array[i]=array[j]
                array[j]=auxiliar
            }
        }
    }
    return array
}

//Ejercicio 10

const factorial = (numero) =>{
    let resultado=1
    for(let i=1;i<=numero;i++){
        resultado*=i
        console.log("resultado: "+resultado)
    }
    return resultado
}

//Ejercicio 11

const extraerDeParentesis = (string) =>{
    let stringResultado=''
    for(let i=0;i<string.length;i++){
        if(string.charAt(i)=="("){
            i++
            while(string.charAt(i)!=")"){
                stringResultado+=string.charAt(i)
                i++
            }
            stringResultado+=" "
        }
    }
    return stringResultado
}

//Ejercicio 12

const calculaEdad = (fecha) =>{
    let hoy = new Date()
    let edad = (hoy.getFullYear()-fecha.getFullYear())
    if(fecha.getMonth()<hoy.getMonth()){
        if(fecha.getDay()<hoy.getDay()){
            edad-1
        }
    }
    return edad
}

const filtrarPorEdad = (edad,array) =>{
    for(let i=0;i<array.length;i++){
        if(calculaEdad(array.fec)){

        }
    }
}

module.exports={
    sumar,restar,validaNumero,validaTexto,transformaMinusculas,transformaMayusculas,cuentaVocal,esPalindromo
    ,generaLoteria,multiplicar,dividir,calculaPorcentaje,moduloOnce,buscarElemento,filtrarArray,filtrarTodosArray,
    ordenarMenorAMayorArray,ordenarMayorAMenorArray,factorial,extraerDeParentesis,calculaEdad
}
