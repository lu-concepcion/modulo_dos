//sumar dos numeros
const sumar = (num1, num2) => {
    return num1 + num2
}

//restar dos numeros
const restar = (num1, num2) => {
    return num1 - num2
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
    convertMayusc = convertMayusc.toUpperCase();
    return convertMayusc;
}

//convierte texto a minuscula
const convertirMinuscula = (convertMinusc) => {
    convertMinusc = convertMinusc.toLowerCase();
    return convertMinusc;
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

//quita los espacios
//const quitaEspacio = (quitaEsp) => {
  //  for(i=0 ; i<quitaEsp.length; i++){
    //    if(quitaEsp=" "){
      //  }
    //}
//}

//sorteo de numero aleatorios de loto (1-36)
const sorteoLoto = (loto) => {
    
}

export {
    sumar,
    restar,
    convertirMayuscula,
    convertirMinuscula,
    esNumero,
    esTexto,
    buscaVocal,
    palindrimo,
    quitaEspacio
}