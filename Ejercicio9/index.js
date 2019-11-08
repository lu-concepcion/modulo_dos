function Auto()
{
	 var repite=true; var d; var n;

	 var Vehiculo = {

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
		d=prompt("Marca");
		if( isNaN(d)==true)
		{
			Vehiculo.marca=d;
			break;

		}else
		{
			alert("No se admiten numeros!")
			repite=true;
		}

	}while(repite=true)


	 do
	{
		d=prompt("Modelo");
		if( isNaN(d)==true)
		{
			Vehiculo.modelo=d;
			break;

		}else
		{
			alert("No se admiten numeros!")
			repite=true;
		}

	}while(repite=true)

	 do
	{
		n=prompt("anio");
		if( isNaN(n)!=true)
		{
			Vehiculo.anio= parseInt(n);
			break;

		}else
		{
			alert("Solo Admite Numeros!")
			repite=true;
		}

	}while(repite=true)


	 do
	{
		d=prompt("codigo Color");
		if( isNaN(d)==true)
		{
			Vehiculo.color.codigo=d;
			break;

		}else
		{
			alert("No se admiten numeros!")
			repite=true;
		}

	}while(repite=true)


	 do
	{
		d=prompt("Nombre Color");
		if( isNaN(d)==true)
		{
			Vehiculo.color.nombre=d;
			break;

		}else
		{
			alert("No se admiten numeros!")
			repite=true;
		}

	}while(repite=true)


	document.write(Vehiculo.marca+" ");
	document.write(Vehiculo.modelo+" ");
	document.write(Vehiculo.anio+" ");
	document.write(Vehiculo.color.codigo+" ");
	document.write(Vehiculo.color.nombre+" ");

}