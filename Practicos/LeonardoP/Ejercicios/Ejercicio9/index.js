function Auto()
{
	 var repite=true; var inputTexto; var inputNumero;

	 var vehiculo = {

	 	marca: "",
	 	modelo: "",
	 	anio: 0,
	 	color:
	 	{
	 		codigo:"",
	 		nombre:""
	 	}
	 }

	 do
	{
		inputTexto=prompt("Marca");
		if( isNaN(inputTexto)==true)
		{
			vehiculo.marca=inputTexto;
			break;

		}else
		{
			alert("No se admiten numeros!")
			repite=true;
		}

	}while(repite=true)


	 do
	{
		inputTexto=prompt("Modelo");
		if( isNaN(inputTexto)==true)
		{
			vehiculo.modelo=inputTexto;
			break;

		}else
		{
			alert("No se admiten numeros!")
			repite=true;
		}

	}while(repite=true)

	 do
	{
		inputNumero=prompt("anio");
		if( isNaN(inputNumero)!=true)
		{
			vehiculo.anio= parseInt(inputNumero);
			break;

		}else
		{
			alert("Solo Admite Numeros!")
			repite=true;
		}

	}while(repite=true)


	 do
	{
		inputTexto=prompt("codigo Color");
		if( isNaN(inputTexto)==true)
		{
			vehiculo.color.codigo=inputTexto;
			break;

		}else
		{
			alert("No se admiten numeros!")
			repite=true;
		}

	}while(repite=true)


	 do
	{
		inputTexto=prompt("Nombre Color");
		if( isNaN(inputTexto)==true)
		{
			vehiculo.color.nombre=inputTexto;
			break;

		}else
		{
			alert("No se admiten numeros!")
			repite=true;
		}

	}while(repite=true)


	document.write(vehiculo.marca+" ");
	document.write(vehiculo.modelo+" ");
	document.write(vehiculo.anio+" ");
	document.write(vehiculo.color.codigo+" ");
	document.write(vehiculo.color.nombre+" ");

}