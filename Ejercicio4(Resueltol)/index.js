function Ingresar()
{

	var contador=0;
	var listado = " ";
	var lenguaje;
	var p;

	
		do {

			lenguaje = prompt("Ingresa un lenguaje");

			if(lenguaje!="Python")
			{
              listado = listado + " "+lenguaje;
              contador=contador+1;

			}


	

		}while(contador <=3 )

		do
		{
			lenguaje = prompt("Ingresa un lenguaje");
			listado= listado+" "+lenguaje;

		}while(lenguaje!="Python")

		






		alert(listado);

	


	
}