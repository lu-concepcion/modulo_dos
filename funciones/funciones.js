
//arrow function 
const lala = (a, b) => {
  return (a+b)
}
const lili = (c, d) => {
    return c-d
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

export {lala, lili,esnum,minuscula,mayuscula,caracter,palindromo} 