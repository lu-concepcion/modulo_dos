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

const eliminarEspacios=(texto)=>{
    let textoSinEspacios="";
  for (let i = 0; i < texto.length; i++) {
      if (texto.charAt(i) != " " ) {
        textoSinEspacios = textoSinEspacios + texto.charAt(i);
      } 
  }
  return textoSinEspacios
}

 const esPalindromo=(texto) =>{
     let aux = texto.length-1;
for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) != texto.charAt(aux)) {
       return false;
    }
   aux--;
}
return true;
}

const numeroAzar =(min, max)  =>{
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const lotto =(numeros) =>{
     ganadores[6];

for (let i = 0; i <5; i++) {
    
    
}

  }


export {sumar, restar,validarNumero, validarLetra, convertirEnMinuscula, convertirEnMayuscula, contarVocales, eliminarEspacios, esPalindromo,numeroAzar
}
