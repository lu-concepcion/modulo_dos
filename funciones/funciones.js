
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

export {lala, lili,esnum} 