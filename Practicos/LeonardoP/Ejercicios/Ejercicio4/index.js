function Ingresar()
{

	var lenguaje; var contador=0; var listadoLenguajes=[]; var control =false;
	do
	{
		lenguaje=prompt("Ingresa un lenguaje"+(contador+1));
		if(lenguaje!="Python")
		{
			listadoLenguajes[contador]=lenguaje;
			contador++;
		}

		if(contador>3 && lenguaje=="Python")
		{
			listadoLenguajes[contador]=lenguaje;
			control=true;
			contador++;
		}

	}while(control==false)

	alert(listadoLenguajes);

	
}