function Lenguajes()
{
	var lenguaje; var contador=0; var array=[]; var control ="false";
	do
	{
		lenguaje=prompt("Ingresa un lenguaje");
		if(lenguaje!="Python")
		{
			array[contador]=lenguaje;
			contador++;
		}

		if(contador>3 && lenguaje=="Python")
		{
			array[contador]=lenguaje;
			control="true";
			contador++;
		}

	}while(control=="false")

	alert(array);
}