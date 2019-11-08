function Numeros()
{
	var input =  prompt("ingresa un numero Romano").toUpperCase() ;

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

	
	for(var i=0;i<10;i++)
	{
		if(numerosRomanos[i].numeroRomano==input)
		{
			alert(numerosRomanos[i].numero);
			break;

		}
	}


	
}