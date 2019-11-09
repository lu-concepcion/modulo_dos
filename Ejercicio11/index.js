function NombreEdad()
{
	var contador=0; 

	var persona = {

	    nombre: "",
		edad: ""

	}

	var mayor={

		nombre: "",
		edad: 0
	}

	

	do
	{
		persona.nombre=prompt("ingresa nombre "+(contador+1));
		persona.edad=(parseInt(prompt("ingresa la edad de: "+persona.nombre)));

		if(persona.edad>mayor.edad)
		{
			mayor.nombre=persona.nombre;
			mayor.edad=persona.edad;
		}
		contador++;

	}while(contador<4)

	alert("El mayor es: "+mayor.nombre+" con: "+mayor.edad+" anios");
}