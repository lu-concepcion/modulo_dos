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
              contador++;

			}

			if(contador==3)
			{
				do
				{
					lenguaje = prompt("Ingresa Python");

				}while(lenguaje!="Python")

				
				listado= listado+" "+lenguaje;
				contador++;
				

			}

			

			

			

		}while(contador< 5 )



		alert(listado);

	


	
}