
contador = 0;
sobedad = 0;


do {

  var nombre = prompt ("Ingrese un Nombre");
  var edad = prompt ("Ingrese su edad") 
  
  if (parseInt(edad)>sobedad) {
   sobnombre = nombre  
   sobedad = edad
  }


 contador++;

}while(nombre = "salir" && contador <=3)

alert ("La persona de mayor edad es: "+sobnombre+" con "+sobedad)

