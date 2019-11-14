
var vehiculo = { 
    marca: "",
    modelo: "",
    anio: "",
    color: {
        nombre:"",
        codigo:""
    }
  }


do{
    vehiculo.marca =  prompt("Ingrese marca (solo texto)");
    }while(!isNaN(vehiculo.marca));
    
do{
    vehiculo.modelo =  prompt("Ingrese modelo (solo texto)");
    }while(!isNaN(vehiculo.modelo));
   

do{
    vehiculo.anio =  prompt("Ingrese año (solo numeros)");
    }while(isNaN(vehiculo.anio));
  

do {
    vehiculo.color.nombre = prompt("Ingrese el NOMBRE del Color");  
   } while (!isNaN(vehiculo.color.nombre));    
   
do {
    vehiculo.color.codigo = prompt("Ingrese el CÓDIGO HTML del Color");  
   } while (!isNaN(vehiculo.color.codigo || vehiculo.color.codigo.length>7 || vehiculo.color.codigo>1));       

 

alert("Marca: "+ vehiculo.marca + "\nModelo: "+ vehiculo.modelo + "\nAño: " + vehiculo.anio + "\nNombre Color: " + 
    vehiculo.color.nombre+ "\nCódigo Color: "+vehiculo.color.codigo);

