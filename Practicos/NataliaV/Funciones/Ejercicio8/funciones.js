/*Escribir los siguientes algoritmos en forma de funciones.
- Función que permite encontrar determinado elemento 
(solo: número/texto) dentro un array
- Función que permita encontrar en un array un 
determinado objeto, dada una condicion, ej:
   buscarEnArray(arrayDondeBuscara, propiedadAFiltrar, 
      valorPropiedad)
	Tips: 
   Una propiedad de objeto también se puede obtener de 
   esta manera:
	const objeto = { id: 1, value: 2 }
	console.log(objeto["id"])
	Buscar documentación: Object.keys()
	Debe retornar un Objeto vacío en caso de no encontrar nada

- Función que permita filtrar un array de elementos, 
dada una condición
   filtrarArray(arrayDondeFiltrara, propiedadAFiltrar, 
      valorPropiedad)
	Debe retornar un array vacío en caso de no encontrar nada*/

   const numeroaBuscar =(numero,n)=>{
     
   for(let i=0;i<=n;i++){
   console.log("f",numero);
       if(numero[i]==n){
          
          alert("Esta el numero")
       }else{
          alert("no esta el numero")
       }
      }
      }
   

   export{
      numeroaBuscar
   }