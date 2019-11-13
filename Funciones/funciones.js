
const verificarTexto =palabra => {
    if (isNaN(palabra)==true){
        return "Lo ingresado corresponde a texto"
    } else {
        return "Lo ingresado no corresponde a texto"
    }
}


const verificarNumero = numero => {
    if (isNaN(numero)==false){
        return "Lo ingresado corresponde a un número"
    } else {
        return "Lo ingresado no corresponde a un número"
    }
}

const textoMinuscula = texto =>{
    return texto.toLowerCase()

}

const textoMayuscula = texto =>{
    return texto.toUpperCase()
}

// const verificarVocal= (letra,contador) =>{
//     if ((letra=="a") || (letra=="e") || (letra=="i") || (letra=="o") ||(letra=="u")){
//         return contador+1
    

// }

// const numeroVocalesdos= palabra =>{
//     palabra.toLowerCase();
//     let contador=0
//     //const vocales=["a","e","i", "o","u"];
//     for (var i=0; i<=palabra.length-1; i++){
//         contador=verificarVocal(palabra.charAt(i), contador)
//     } 
//     return contador
// }


const numeroVocales= palabra =>{
    palabra.toLowerCase();
    let contador=0
    //const vocales=["a","e","i", "o","u"];
    for (var i=0; i<=palabra.length-1; i++){
                if ((palabra.charAt(i)=="a") || (palabra.charAt(i)=="e") || (palabra.charAt(i)=="i") || (palabra.charAt(i)=="o") ||(palabra.charAt(i)=="u")){
          
            contador++;
        }
    } 
    return contador

}


const verificarPalindromo =palabra =>{
    palabra=palabra.replace(/\s+/g, "");
    palabra=palabra.toLowerCase();

    let palabraIngresada=[];
    let palabraAlReves=[];
    let palindromo=1;
    
    if (palabra.length >1){
        for (var i=0; i<=palabra.length-1; i++){
            palabraIngresada[i]=palabra.charAt(i);
            palabraAlReves[i]= palabra.charAt(palabra.length-1-i);
            if (palabraIngresada[i] !==palabraAlReves[i]){
                palindromo=0
            }
        } 
    }else {
        palindromo=0
    }


    if (palindromo==1){
        return "La palabra ingresada es un palíndromo"
    } else {
        return "La palabra ingresada no es un palíndromo"

    }
}


const aciertosLoto= numerosPersona =>{
    let numerosParaSorteo=[];
    for (let i=0; i<6; i++){
        let numeroSorteo=Math.floor(Math.random() * 41) + 1;
        if (numerosParaSorteo.includes(numeroSorteo)) {
            console.log("El numero ya esta");
            numeroSorteo=Math.floor(Math.random() * 41) + 1;
        } 
        numerosParaSorteo[i]=numeroSorteo;
    }
    let aciertos=0;
    for (let i=0; i<6; i++){
        if (numerosParaSorteo.includes(parseInt(numerosPersona[i]))) {
            console.log("El numero esta");
            aciertos++;
            console.log(aciertos)
        } 
    }
    let resultados={
        numeroAciertos: aciertos,
        nuemerosSorteo: numerosParaSorteo
    }
    return resultados
}

const sumar=(num1,num2) =>{
    return parseInt(num1)+parseInt(num2)
}

const restar=(num1,num2) =>{
    return parseInt(num1)-parseInt(num2)
}

const multiplicar=(num1,num2) =>{
    return parseInt(num1)*parseInt(num2)
}

const dividir=(num1,num2) =>{
    if (parseInt(num2)==0){
        return "No se puede dividir por 0"
    } else {
        return parseInt(num1)/parseInt(num2)

    }
}

const porcentaje=(num1,num2) =>{
    return parseInt(num1)*parseInt(num2)/100

}

const verificarRun = run =>{
    const runInvertido= run.reverse();
    const multiplicadores=[2, 3, 4, 5, 6, 7,2, 3, 4, 5, 6, 7];
    let suma=0;
    for (let i in runInvertido){
        suma=suma+ parseInt(runInvertido[i])*multiplicadores[i]
    }
    const modulo = suma % 11;
    const resta= 11- modulo;

    if (resta==11){
        return 0
    } else if (resta==10){
       return "K"
   } else {
       return resta
   }
}


const encontrarElemento = (arrayElementos, elementoAEncontrar) =>{
    if ((isNaN(elementoAEncontrar)==true) && (arrayElementos.includes(elementoAEncontrar))){
        return "Elemento se encuentra"
    } else if ((isNaN(elementoAEncontrar)==false) && (arrayElementos.includes(parseInt(elementoAEncontrar)))){
        return "Elemento se encuentra"
    } else{
        return "Elemento no se encuentra"
    }    
}


const buscarEnArrayObjeto=(arrayDondeBuscara, propiedadAFiltrar, valorPropiedad) =>{
    let objetoEncontrado={};
    if ((isNaN(valorPropiedad))) {
        for (let i in arrayDondeBuscara){
            if (arrayDondeBuscara[i][propiedadAFiltrar]==valorPropiedad){
            //if (String(arrayDondeBuscara[i][propiedadAFiltrar])==String(valorPropiedad)){

                objetoEncontrado =arrayDondeBuscara[i]
                return objetoEncontrado
            }
        }
        return objetoEncontrado
    } else if ((!isNaN(valorPropiedad))) {
        for (let i in arrayDondeBuscara){
            //if (arrayDondeBuscara[i][propiedadAFiltrar]==parseInt(valorPropiedad)){
            if (String(arrayDondeBuscara[i][propiedadAFiltrar])==String(valorPropiedad)){
                objetoEncontrado =arrayDondeBuscara[i]
                return objetoEncontrado
            }
        }
        return objetoEncontrado   
    } 
}

const filtrarArray= (arrayDondeBuscara, propiedadAFiltrar, valorPropiedad)=>{
    let elementosFiltrados=[];
    if ((isNaN(valorPropiedad)==true)) {
        for (let i in arrayDondeBuscara){
            if (arrayDondeBuscara[i][propiedadAFiltrar]==valorPropiedad){
                elementosFiltrados.push(arrayDondeBuscara[i])
            }
        }
        return elementosFiltrados
    } else if ((isNaN(valorPropiedad)==false)) {
        for (let i in arrayDondeBuscara){
            if (arrayDondeBuscara[i][propiedadAFiltrar]==parseInt(valorPropiedad)){
                elementosFiltrados.push(arrayDondeBuscara[i])
            }
        }
        return elementosFiltrados
    } 
}

const ordenarArray = (elementosOrdenar, ordenar) =>{
    let elementosOrdenados=[];

    for (let i in elementos){
        let numeroAOrdenar= elementos[i];
        let contador =0;
        for (let j in elementos){
            if ((i!=j) && (elementos[j]<=elementos[i])){
                contador++;
            } else if ((elementos[i]==elementos[j]) &&(elementosOrdenados.includes(elementos[i]))){
                contador--;
            }
        }
        elementosOrdenados[contador]=elementos[i];
        console.log(elementosOrdenados)
    }
    return elementosOrdenados
}

const factorial = numero =>{
    let resultado=1;
    for(let i=1; i<=parseInt(numero); i++){
        resultado=resultado*i
    }
    return resultado
}

const extraerTexto=texto =>{
    let textoExtraido="";
    for (let i=0; i<texto.length-1; i++){
        if (texto.charAt(i)=="("){
            i++;
            let textoExtraidoAux="";
            while (texto.charAt(i)!=")"){
                textoExtraidoAux=textoExtraidoAux + texto.charAt(i);
                i++
            }
            if (texto.charAt(i)){
                textoExtraido= textoExtraido+ textoExtraidoAux+ " ";
            }
            
        }
    }
    return textoExtraido
}


export{  //siempre debe ir al final
    verificarNumero, verificarTexto, textoMinuscula, textoMayuscula, numeroVocales, 
    verificarPalindromo, sumar, restar, dividir, multiplicar, porcentaje, verificarRun, encontrarElemento, 
    buscarEnArrayObjeto, filtrarArray, aciertosLoto, ordenarArray, factorial, extraerTexto}


