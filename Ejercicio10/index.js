function Numeros()
{
	var input;  var bool=false;

		var numerosRomanos =[
			{
				numero: "uno",
				numeroRomano: "I"
			},
			{
				numero: "dos",
				numeroRomano: "II"
			},
			{
				numero: "tres",
				numeroRomano: "III"
			},
			{
				numero: "cuatro",
				numeroRomano: "IV"
			},
			{
				numero: "cinco",
				numeroRomano: "V"
			},
			{
				numero: "seis",
				numeroRomano: "VI"
			},
			{
				numero: "siete",
				numeroRomano: "VII"
			},
			{
				numero: "ocho",
				numeroRomano: "VIII"
			},{
				numero: "nueve",
				numeroRomano: "IV"
			},{
				numero: "diez",
				numeroRomano: "X"
			},
		];

		do
		{

			input=prompt("ingresa un numero Romano").toUpperCase();

			for(var i=0;i<10;i++)
				{
					if(numerosRomanos[i].numeroRomano==input)
					{
						bool=true;


					}else
					{
						bool=false;

					}
				}

				if(bool==false){ alert("Fuera de rango!");}


		}while(bool==false)

	
	for(var i=0;i<10;i++)
	{
		if(numerosRomanos[i].numeroRomano==input)
		{
			alert(numerosRomanos[i].numero);
			break;

		}
	}
	
}