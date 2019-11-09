function Fibonacci()
{
	var numero=0; var fibonacci=[0,1]; var bool=false;
	do
	{
		numero=parseInt(prompt("Ingresa un Numero: "));

		if(numero>=3 &&numero <=15)
		{
			bool=false;
			for(var i=2;i<numero;i++)
			{
				fibonacci[i]=fibonacci[i-1]+fibonacci[i-2];
			}
		}else
		{
			alert("Numero Invalido");
			bool=true;

		}

	}while(bool==true)

	document.write(fibonacci);
	

	

}