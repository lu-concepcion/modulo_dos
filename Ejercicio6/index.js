function Numeros()
{
	var numero; var opcion=""; var arrayNumeros=[];
	for(var i=0;i<5;i++)
	{
		numero= parseInt(prompt("Ingresa numero "+(i+1)));
		if(numero%2==0 && numero>=2 && numero<=20)
		{
			arrayNumeros[i]=numero;
		}
		else
		{
			alert("Numero impar o fuera de rango!");
			i--;

		}
	}

	opcion=prompt("¿sumar o multiplicar?");
	
	if(opcion=="sumar")
	{
		numero=0;
		for(var i=0;i<5;i++)
		{
			numero=numero+arrayNumeros[i];
		}

	    alert("La sumatoria es: "+numero);
	}

	if(opcion=="multiplicar")
	{
		numero=1;
		for(var i=0;i<5;i++)
		{
			numero=numero*arrayNumeros[i];
		}
		
	    alert("La multiplicacion es: "+numero);
	}


}