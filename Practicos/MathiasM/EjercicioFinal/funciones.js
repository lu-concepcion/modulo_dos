


const validaNumero=(numero)=>{
   return(!isNaN(numero))
}

const validaLetra=(numero)=>{
    return(isNaN(numero))
}

const convertirMayuscula=(numero)=>{
    return numero.toUpperCase(numero);
}
const convertirMinuscula=(numero)=>{
    return numero.toLowerCase(numero);
}

const validarVocal=(letra)=>(letra == 'a' || letra=='e' || letra=='i' || letra=='o'|| letra=='u')

//ejercicio2
const sumar=(num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const multiplicar=(num1,num2 )=>{
    return parseInt(num1) * parseInt(num2);
}

const restar=(num1, num2)=>{
    return parseInt(num1)-parseInt(num2);
}

const dividir=(num1, num2)=>{
    return parseInt(num1)/ parseInt(num2);
}

//ejercicio3

const porcentaje=(num1, num2)=>{
    return (parseInt(num1)*parseInt(num2))/100;
}

//ejercicio4
let contador=0;
const cuentaVocales=(palabra)=>{
    palabra = convertirMinuscula(palabra);
    for(let i=0;i<palabra.length;i++){
        if(validarVocal(palabra.charAt(i))){
            contador++;
        }
    }
    return contador;
}

//ejercicio5
const palabraInversa=(palabra)=>{
    for(let i=0; i<palabra.length;i++){
        if(palabra.charAt(i)!=palabra.charAt((palabra.length-1)-i)){
            return false
        }
    }
    return true
}
let numerosLoteria=[]
const guardarNumero=(numero)=>{
    numerosLoteria.push(parseInt(numero));
}

//ejercicio6
let numerosRandom=[], aciertos=0,numGenerado=0;
const sorteoLoteria=()=>{
    for(let i=0;i<6;i++){
        numGenerado=Math.floor(Math.random() * (37-1))+1;
        if(numGenerado!=numerosRandom[i]){
            numerosRandom[i]=numGenerado;
        }
        
    }
    for(let i=0;i<numerosRandom.length;i++){
        for(let j=0;j<numerosLoteria.length;j++){
            if(numerosRandom[i]==numerosLoteria[j]){
                aciertos++
            }
        }
    }
    alert("Cantidad de aciertos: "+aciertos)
    console.log(numerosRandom)
    console.log(numerosLoteria)
    
}

//ejercicio7
const formatoPunto=(run)=>{
    return run.split(".")
}
let numVerificador=0;
const inversa=(run)=>{
    if(run.includes(".")){
        let numeros= formatoPunto(run)
        console.log(numeros)
        for(let i=numeros.length-1;i>=0;i--){
            guardarNumero(numeros[i])
        }
        console.log(numerosLoteria)
    }else{
        for(let i=run.length-1; i>=0;i--){
            guardarNumero(run.charAt(i))
        }
        console.log(numerosLoteria)
    }
    let  multiplicacion=[], resultadoSuma=0;
    let contador=2;
    for(let j=0;j<numerosLoteria.length;j++){
        if(contador>7){
            contador=2
        }
            multiplicacion=multiplicar(numerosLoteria[j],contador)
            resultadoSuma= sumar(multiplicacion, resultadoSuma)
            console.log("cont "+contador+" num "+numerosLoteria[j]+" Suma: "+resultadoSuma)
            contador++; 
        

   
    }
    
    console.log(numerosLoteria.length)
    numVerificador = resultadoSuma % 11
    numVerificador = restar(11,numVerificador)
    if(numVerificador==11)(numVerificador=0)
    if(numVerificador==10)(numVerificador="k")
    console.log(multiplicacion)
    console.log(resultadoSuma)
    return numVerificador;
    
}


//ejercicio8

const encontrarElemento=(array,elemento)=>{
    for(let i=0;i<array.length;i++){
        if(array[i]==elemento){
            return console.log(true)
        }
        return console.log(false)
    }
}

const encontrarEnArray=(array,propiedad,elemento)=>{
    const arrayVacio={};
    for(let i=0;i<array.length;i++){
        //console.log(Object.keys(array))
        if(array[i][propiedad]==elemento){
            //console.log(Object.keys(array[i]))
            return Object.entries(array[i]);
        }
    }
    return console.log(arrayVacio)
}


const filtrarEnArray=(array,propiedad,elemento)=>{
    let arrayFiltrado=[];
    for(let i=0;i<array.length;i++){
        //console.log(Object.keys(array))
        if(array[i][propiedad]==elemento){
            //console.log(array[i])
            arrayFiltrado.push(array[i]);
            //console.log(arrayFiltrado)
            //return Object.entries(array[i]);
        }
    }
    return console.log(arrayFiltrado) 
}

//ejercicio9

const ordenarMenor=(array)=>{
    let menor=0;
    for(let i=0;i<array.length-1;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                menor=array[j]
                array[j]=array[i]
                array[i]=menor;

            }
        }
    }
    return console.log(array)
}

const ordenarMayor=(array)=>{
    let menor=0;
    for(let i=0;i<array.length-1;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]<array[j]){
                menor=array[j]
                array[j]=array[i]
                array[i]=menor;

            }
        }
    }
    return console.log(array)
}

//ejercicio10

const calculoFactorial=(numero)=>{
    let factorial=1;
    for(let i=1;i<=numero;i++){
        factorial*=i;
    }
    return factorial
}


//ejercicio11

const extraerTextoParentesis=(texto)=>{
    let textoGuardado=[];
    for(let i=0;i<texto.length;i++){
        if(texto.charAt(i)=="("){
            do{
                i++
                textoGuardado.push(texto.charAt(i))
            }while(texto.charAt(i+1)!=")")
        }
    }
    return textoGuardado;   
}

//ejercicio12
const calculaEdad=(fecha)=>{
    let personas = [{nombre:"mathias", fechaNacimiento:{dia:27,mes:6,agnio:1997}},
    {nombre:"jorge", fechaNacimiento:{dia:4,mes:4,agnio:1996}},
    {nombre:"jeremy", fechaNacimiento:{dia:15,mes:9,agnio:1990}}]
    let fechaAhora = new Date();
    let edad = fechaAhora.getFullYear()-fecha.getFullYear();
    let arrayFiltrado=[];
    for(let i=0;i<personas.length;i++){
        if((fechaAhora.getFullYear()-personas[i].fechaNacimiento.agnio)>edad){
            console.log(fechaAhora.getFullYear()-personas[i].fechaNacimiento.agnio)
            console.log(edad)
            arrayFiltrado.push(personas[i]);
        }
    }
    return console.log(arrayFiltrado) 
}

const calculoEdad2=(fecha)=>{
    let fechaAhora = new Date();
    let edad = fechaAhora.getFullYear()-fecha.getFullYear();
    return edad
}

module.exports={
    validaNumero,validaLetra,convertirMinuscula, convertirMayuscula,cuentaVocales,palabraInversa,
    sorteoLoteria, guardarNumero, sumar, multiplicar, restar, dividir, porcentaje, formatoPunto, inversa
    ,encontrarElemento,encontrarEnArray,filtrarEnArray,ordenarMenor, ordenarMayor, calculoFactorial,extraerTextoParentesis,
    calculaEdad, calculoEdad2
}


