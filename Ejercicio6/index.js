function Numeros()
{
	var numero; var contador=0; var n=0; var array=[];

	for(var i=1;i<6;i++)
	{

		numero = parseInt(prompt("ingresa un numero "+i));

		if(numero%2!=0 && numero<2 || numero >20)
		{
			alert("no es par o esta fuera de rango!!");
			i--;
		}else
		{
			array[i-1]=numero; 

		}

	/*	if(numero<2 || numero >20)
		{
			alert("Solo admite del 2 al 20");
			i--;
		}

	*/	






	}
	var op = prompt("sumar o multiplicar?"); var suma=0; var multiplicar=1;

	if(op=="suma")
	{
		for(var i =0;i<5;i++)
		{
			suma = suma + array[i];

		}

		alert("la suma es: "+suma);
	}

	if(op=="multiplica")
	{
		for(var i =0;i<5;i++)
		{
			multiplicar = multiplicar * array[i];

		}

		alert("la multiplicacion es: "+multiplicar);
	}



}