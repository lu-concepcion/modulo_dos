
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

export {lala, lili,esnum,minuscula,mayuscula} 