function Agregar()
{
	var Nombre="";
	var Edad=0;
	var contador=1; 
	var nombremayor= "";
	var mayor=0; var x=1;


	do
	{
		Nombre = prompt("ingresa el nombre "+contador);


		 if(Nombre=="salir" && contador>=4)
	    {
	    	break;

	    }
	    Edad = prompt("ingresa la edad "+contador);



	    if(Edad>mayor)
	    {
	    	nombremayor=Nombre;
	    	mayor=parseInt(Edad);

	    }



	    contador++;

	}while(x==1);

	alert("el mayor es: "+nombremayor+" y tiene: "+mayor);



	

}