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
const numeroExiste = (array,numero) =>{
    return(array.includes(numero))
}
let arraySorteo=[];
const generaLoteria=()=>{
    for(let i=0;i<6;i++){
        do{
            arraySorteo[i]=Math.floor(Math.random()*37)
            console.log(arraySorteo)
        }while(numeroExiste(arraySorteo,arraySorteo[i]));
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
    for(let i=0;i<rut.length;i++){
        if(validaNumero(rut.charAt(i))){
            let contador = rutSinFormato.push(rut.charAt(i))
        }else{
            if(rut.charAt(rut.length-1)=='k'){
                contador = rutSinFormato.push(rut.charAt(i))
            }
        }   
    }
}

const invertirArray = (array) =>{
    let invertido = array.reverse();
}

const moduloOnce = (array) =>{
    const serieVerificacion = [2,3,4,5,6,7]
    let suma=0;
    for(let i=0;i<array.length;i++){
        if(j==5){
            j=0;
        }
        suma+=array[i]*serieVerificacion[j]
        j++;
    }
    let resto=suma%11
    let digitoVerificador=11-resto
    if(digitoVerificador==11){
        digitoVerificador=0;
    }else{
        if(digitoVerificador==10){
            digitoVerificador='k'
        }
    }
    return digitoVerificador
}

export{
    sumar,restar,validaNumero,validaTexto,transformaMinusculas,transformaMayusculas,cuentaVocal,esPalindromo
    ,generaLoteria,multiplicar,dividir,calculaPorcentaje
}

