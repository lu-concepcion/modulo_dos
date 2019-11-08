function Fibonacci()
{
	var Numero=0; var array=[0,1]; var bool=false;
	do
	{
		Numero=parseInt(prompt("Ingresa un Numero: "));

		if(Numero>=3 &&Numero <=15)
		{
			bool=false;
			for(var i=2;i<Numero;i++)
			{
				array[i]=array[i-1]+array[i-2];
			}
		}else
		{
			alert("Numero Invalido");
			bool=true;

		}

	}while(bool==true)

	document.write(array);
}