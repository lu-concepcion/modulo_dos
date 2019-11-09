function Fibonacci()
{
	var error="false"; var a=0; var b=1; f=[0,1];

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

	//document.write(a,b);

	for(var i=2;i<numero;i++)
	{
		f[i]=f[i-1]+f[i-2];

	}

	document.write(f);

	









}