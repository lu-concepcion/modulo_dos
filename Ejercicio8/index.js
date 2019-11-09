function DatosPersona()
{
	var bool=false; var inputTexto; var inputEdad; var repite=true;

	var persona={
		nombre:"",
		apellidos:"",
		edad:0,
		profesion:""
	}

	do
	{
		inputTexto=prompt("Ingrese nombre");
		if( isNaN(inputTexto)==true)
		{
			persona.nombre=inputTexto;
			break;

		}else
		{
			alert("No se admiten numeros!")
			repite=true;
		}

	}while(repite=true)


	do
	{
		inputTexto=prompt("Ingrese apellido");
		if( isNaN(inputTexto)==true)
		{
			persona.apellido=inputTexto;
			break;

		}else
		{
			alert("No se admiten numeros!")
			repite=true;
		}

	}while(repite=true)


	do
	{
		inputEdad=prompt("Ingrese edad");
		if( isNaN(inputEdad)!=true)
		{

			persona.edad=parseInt(inputEdad);
			break;

		}else
		{
			alert("la edad debe ser numerica")
			repite=true;
		}

	}while(repite=true)

	do
	{
		inputTexto=prompt("Ingrese profesion");
		if( isNaN(inputTexto)==true)
		{
			persona.profesion=inputTexto;
			break;

		}else
		{
			alert("No se admiten numeros!")
			repite=true;
		}

	}while(repite=true)

	
	document.write(persona.nombre+" ");
	document.write(persona.apellido+" ");
	document.write(persona.edad+" ");
	document.write(persona.profesion+ " ");


	

}