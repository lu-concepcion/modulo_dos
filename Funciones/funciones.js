const sumar=(a,b)=> {
return(parseInt(a)+ parseInt(b));
}

const restar=(a,b)=> {
    return(a- b);
}

const multiplicar=(a,b)=> {
  return(a*b);
}

const dividir=(a,b)=> {
if (b==0) {
  return "Infinito"
}else{
  return (a/b);
}

}



const esNumero =(dato) =>{
  let  validacion = true;
if (isNaN(dato)) {
    validacion = false;
}
return validacion;
}

const esLetra =(dato) =>{
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

const calcularPorcentaje=(a,b) => {
 return ((a*b)/100)
}

const limpiarRut=(cadena) =>{
let rut="";
for (let i = 0; i < cadena.length; i++) {
  if (cadena.charAt(i)=="-") {
    break;
  }
  
  if(!isNaN(parseInt(cadena.charAt(i)))){
    rut = rut+cadena.charAt(i);
  }
  
}
return rut;
}

const invertirCadena=(cadena)=>{
  let aux= cadena.length-1;
  let cadenaInvertida = "";
  for (let i = 0; i < cadena.length; i++) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(aux);
    aux--;
  }
  return cadenaInvertida;
}


const numeroAzar =(min, max)  =>{
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const lotto =(numeros) =>{
     ganadores[6];

for (let i = 0; i <5; i++) {
    
    
}

  }
  


export {sumar, restar, multiplicar, dividir,esNumero, esLetra, convertirEnMinuscula, convertirEnMayuscula, 
  contarVocales, eliminarEspacios, esPalindromo,numeroAzar, calcularPorcentaje, limpiarRut, invertirCadena
}
