   
const calcularDigitoVerificador = (a) =>{
    let RUN = "";
    for (let i = 0; i < a.length; i++) {
      if (a.charAt(i)=="-") {
        break;
      }
      if(!isNaN(parseInt(a.charAt(i)))){
        RUN = RUN + a.charAt(i);
      }
    }
      
let invert = RUN.split('').reverse().join('')
let serie = [2,3,4,5,6,7,2,3]
let sum = 0
    
    for (let i= 0; i < invert.length; i++) {
         sum = sum + (invert[i]*serie[i]);
    }
    let once = (11 - (sum%11))
    
    if (once == 10)  {
        once = "K";
    } 
    
    if (once == 11)  {
        once = 0;
    } return once
}
const calcularEdad=(fecha)=> {
  var presente = new Date();
  var fechaNac = new Date(fecha);
  var edad = presente.getFullYear() - fechaNac.getFullYear();
  var diferenciaMeses = presente.getMonth() - fechaNac.getMonth();

  if (diferenciaMeses < 0 || (diferenciaMeses == 0 && presente.getDate() < fechaNac.getDate())) {
      edad--;
  }
return edad;
}

const objetoEnArray=(arreglo=[], propiedad, valorPropiedad)=>{
  for (let i = 0; i < arreglo.length; i++) {

    for (let j = 0; j < Object.keys(arreglo[i]).length ; j++) {

      if (propiedad == (Object.keys(arreglo[i]))[j] ) {
       if ( valorPropiedad == Object.values(arreglo[i])[j] ) {
           return arreglo[i];
        }
      }
      
    }
  }
return {};
}
  
module.exports = {calcularDigitoVerificador,calcularEdad,objetoEnArray }