
//arrow function 
const suma = (a, b) => {
  return (a+b)
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
const loto = (num) => {
 let azar = Math.random()
for (let i = 0; i < 6; i++){
function getRandomInt(1, 41) {
     return Math.floor(Math.random(1) * (40)) + 1 
}  
    }
}

const suma = 

export {suma, resta,multiplicacion,division,esnum,minuscula,mayuscula,caracter,palindromo,loto} 