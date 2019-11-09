function AgregarPersonas()
{
	var nombre; var edad; var edadMayor=0; var contador=1;  var nombreMayor="";
	do
	{
		nombre=prompt("ingrese un Nombre "+contador);
		if(contador>4 &&nombre=="salir")
		{
			
			break;
		}

		edad = parseInt(prompt("ingrese la Edad de: "+nombre));
		if(edad>edadMayor)
		{
			edadMayor=edad;
			nombreMayor=nombre;
		}

		contador++;

	}while(contador!=0)

	alert("El mayor es: "+nombreMayor+" con: "+edadMayor+" anios");
	

}