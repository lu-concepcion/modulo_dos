function Fibonacci()
{
	var error="false";

	do
	{
		var numero = parseInt(prompt("ingresa un numero"));
		 error="false";

		if(numero<3 || numero>15)
		{
		   alert("Fuera de rango!");
		   error="true";

	    }

	   



	}while(error=="true");



	









}