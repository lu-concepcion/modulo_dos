function calificar()
{
	var calificacion = parseInt(prompt("Ingresa calificacion"));

	if(calificacion>0 && calificacion<4)
	{
		alert("Muy bajo");

	}

	if(calificacion>3 && calificacion<6)
	{
		alert("Regular");

	}

	if(calificacion>5 && calificacion<8)
	{
		alert("Muy Bueno");

	}
	


	
}