function Pares()
{
	var Numero; var op=""; var array=[];
	for(var i=0;i<5;i++)
	{
		Numero= parseInt(prompt("Ingresa numero "+(i+1)));
		if(Numero%2==0 && Numero>=2 && Numero<=20)
		{
			array[i]=Numero;
		}
		else
		{
			alert("Numero impar o fuera de rango!");
			i--;

		}
	}

	op=prompt("¿sumar o multiplicar?");
	
	if(op=="sumar")
	{
		Numero=0;
		for(var i=0;i<5;i++)
		{
			Numero=Numero+array[i];
		}

	    alert("La sumatoria es: "+Numero);
	}

	if(op=="multiplicar")
	{
		Numero=1;
		for(var i=0;i<5;i++)
		{
			Numero=Numero*array[i];
		}
		
	    alert("La multiplicacion es: "+Numero);
	}




}