function Datos()
{
	var Nombre; var Edad; var Mayor=0; var Contador=1;  var Nmayor="";
	do
	{
		Nombre=prompt("ingrese un Nombre "+Contador);
		if(Contador>4 &&Nombre=="salir")
		{
			Salir="true";
			break;
		}

		Edad = parseInt(prompt("ingrese la Edad de: "+Nombre));
		if(Edad>Mayor)
		{
			Mayor=Edad;
			Nmayor=Nombre;
		}

		Contador++;

	}while(Contador!=0)

	alert("El mayor es: "+Nmayor+" con: "+Mayor+" anios");
}