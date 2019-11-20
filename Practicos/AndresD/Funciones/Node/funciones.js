const test = () => {
 return "test"
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
      
      const calcularDigitoVerificador=(cadena) =>{
        const cadenaInvertida = invertirCadena(limpiarRut(cadena));
        const serie=[2,3,4,5,6,7,2,3];
        let sumatoria=0;
        let dv;
        for (let i = 0; i < cadena.length; i++) {
          sumatoria = sumatoria + (parseInt(cadenaInvertida.charAt(i))*serie[i]) ;   
        }
       dv =11-(sumatoria%11)
      if (dv == 11) {
          dv = 0;
      }
      if (dv == 10) {
        dv = "K";
    }

      return  dv;
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

          const validarCodigo = (arreglo=[], dato) =>{
            let repetido = false;
            
            for (let i = 0; i < arreglo.length; i++) {
              if ( arreglo[i] == dato) {
                repetido = true;
              } 
        
            }
        return repetido;
          }      

module.exports = {
    calcularDigitoVerificador,objetoEnArray, calcularEdad
}

