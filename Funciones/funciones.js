const validaNumero=(numero)=>{
   return(isNaN(numero))
}

const validaLetra=(numero)=>{
    return(!isNaN(numero))
}

const convertirMayuscula=(numero)=>{
    return numero.toUpperCase(numero);
}
const convertirMinuscula=(numero)=>{
    return numero.toLowerCase(numero);
}

const validarVocal=(letra)=>(letra == 'a' || letra=='e' || letra=='i' || letra=='o'|| letra=='u')


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
export{
    validaNumero,validaLetra,convertirMinuscula, convertirMayuscula,cuentaVocales,palabraInversa,
    sorteoLoteria, guardarNumero
}