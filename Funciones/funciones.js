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



export {sumar, restar,validarNumero, validarLetra, convertirEnMinuscula, convertirEnMayuscula
}
