const sumar=(a,b)=> {
return(a+ b);
}

const restar=(a,b)=> {
    return(a- b);
}

const validarNumero =(dato) =>{
  let  validacion = true;
if (isNaN(dato)) {
    validacion = false;
}
return validacion;
}

const validarLetra =(dato) =>{
    let  validacion = true;
  if (!isNaN(dato)) {
      validacion = false;
  }
  return validacion;
  }

const convertirEnMinuscula=(texto) =>{
return texto.toLowerCase();

}

const convertirEnMayuscula=(texto) =>{
    return texto.toUpperCase();
    
    }

const esVocal = (caracter) =>{
  caracter = caracter.toLowerCase(); 
  let flag = false; 
if (caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u" ) {
    flag = true;
}
return flag;
}


 const contarVocales=(texto)=>{
 let vocales = 0; 

    for (let i = 0; i < texto.length; i++) {
        if ( esVocal(texto.charAt(i)) ) {
          vocales = parseInt(vocales)+ 1;  
        } ;
       
    }

    return vocales;
 }   


export {sumar, restar,validarNumero, validarLetra, convertirEnMinuscula, convertirEnMayuscula, contarVocales,esVocal
}
