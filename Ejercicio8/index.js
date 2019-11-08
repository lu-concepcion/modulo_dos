function DatosPersona()
{
	var bool=false; var n; var e; var repite=true;

	var Persona={
		nombre:"",
		npellidos:"",
		ndad:0,
		profesion:""
	}

	do
	{
		n=prompt("Ingrese nombre");
		if( isNaN(n)==true)
		{
			Persona.nombre=n;
			break;

		}else
		{
			alert("No se admiten numeros!")
			repite=true;
		}

	}while(repite=true)


	do
	{
		n=prompt("Ingrese apellido");
		if( isNaN(n)==true)
		{
			Persona.apellido=n;
			break;

		}else
		{
			alert("No se admiten numeros!")
			repite=true;
		}

	}while(repite=true)


	do
	{
		e=prompt("Ingrese edad");
		if( isNaN(e)!=true)
		{

			Persona.edad=parseInt(e);
			break;

		}else
		{
			alert("la edad debe ser numerica")
			repite=true;
		}

	}while(repite=true)

	do
	{
		n=prompt("Ingrese profesion");
		if( isNaN(n)==true)
		{
			Persona.profesion=n;
			break;

		}else
		{
			alert("No se admiten numeros!")
			repite=true;
		}

	}while(repite=true)

	
	document.write(Persona.nombre+" ");
	document.write(Persona.apellido+" ");
	document.write(Persona.edad+" ");
	document.write(Persona.profesion+ " ");


	

}