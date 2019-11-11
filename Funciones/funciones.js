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

 const contarVocales=(texto)=>{
 let vocales; 
 const textoComparar = texto.toLowerCase();
    for (let i = 0; o < texto.length; i++) {
        if (textoComparar.charAt(i) == "a" || textoComparar.charAt(i) == "e" || textoComparar.charAt(i) == "i" || textoComparar.charAt(i) == "o" || textoComparar.charAt(i) == "u"  ) {
          vocales++;  
        } ;
        return vocales;
    }


 }   


export {sumar, restar,validarNumero, validarLetra, convertirEnMinuscula, convertirEnMayuscula
}
