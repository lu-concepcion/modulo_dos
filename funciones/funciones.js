
//arrow function 
const suma = (a, b) => {
  return parseInt(a)+parseInt(b)
}
const resta = (c, d) => {
    return c-d
}
const multiplicacion = (a, b) => {
    return (a*b)
}
 const division = (a, b) => {
     return (a/b)
 }

const esnum = (a) => {
  if(!isNaN(a)){
   return "es numero" }
 else {
     return "es texto"
 }
}

const minuscula = (b) => {
    return b.toLowerCase();
}

const mayuscula = (c) => {
    return c.toUpperCase();
}
const caracter = (x) => {
 let contador = 0;
    for (let i= 0; i < x.length; i++) {
     if (x.charAt(i) == "a" || x.charAt(i) == "e"|| x.charAt(i) == "i"|| x.charAt(i) == "o"|| x.charAt(i) == "u" ) {
        contador++; }
    }return contador
}
const palindromo = (palabra) => {
    let variable = palabra.length-1;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra.charAt(i) != palabra.charAt(variable)){
        return "palabra no es palindromo"
        }
    variable--;
    }
   return "palabra es palindromo";
}
const porcentaje = (a,b) => {
    return (b*100)/a + "%"
}

const digitos = (a) =>{
    let RUN = "";
    for (let i = 0; i < a.length; i++) {
      if (a.charAt(i)=="-") {
        break;
      }
      if(!isNaN(parseInt(a.charAt(i)))){
        RUN = RUN + a.charAt(i);
      }
    }
    return RUN;
    } 

const encontrar = (arreglo=[], dato) => {
    let presente = false
    for (let i = 0; i < arreglo.length; i++) {
       if ( dato == arreglo[i]){
         presente = true
       }
    }
    return presente  
    }
const buscar = (arreglo = [], propiedad, valor) => {
   for (let i = 0; i < arreglo.length; i++) {
       for (let j = 0; j < Object.keys(arreglo[i]).length; j++) {
        if (propiedad == Object.keys(arreglo[i])[j]){
         if (valor == Object.values(arreglo[i])[j]) {
            return(`existe el siguiente registro :\n ${Object.keys(arreglo[i])}\n${Object.values(arreglo[i])}`)
              }
          }
      }
       
   }
   return "no existe registro en el arreglo"
}
// - Función que permita filtrar un array de elementos, dada una condición
// 	filtrarArray(arrayDondeFiltrara, propiedadAFiltrar, valorPropiedad)
// 	Debe retornar un array vacío en caso de no encontrar nada
const filtrarArray = (arreglo=[],propiedad,valor) => {
    let respuesta = []
   for (let i = 0; i < arreglo.length; i++) {
       for (let j = 0; j < Object.keys(arreglo[i]).length; j++) {
        if (propiedad == Object.keys(arreglo[i])[j]){
         if (valor == Object.values(arreglo[i])[j]) {
             respuesta.push(arreglo[i])
              }
          }
      }
       
   }
   return respuesta

}
const ordenar = (arreglo=[]) => {
   let ordenado = [] 
   for (let i = 0; i < arreglo.length; i++) {
       if ( arreglo[i+1] < arreglo[i] ){
           ordenado.push(arreglo[i+1])
       }   
   }
   return ordenado
}

export {suma,resta,multiplicacion,division,esnum,minuscula,mayuscula,caracter,palindromo,porcentaje,digitos,encontrar,buscar} 