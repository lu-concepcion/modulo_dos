function Nota()
{
	var nota = parseInt(prompt("ingresa una nota"));
	if(nota>=1 && nota<=3){alert("Muy bajo");}
	if(nota>=4 && nota<=5){alert("Regular");}
	if(nota>=6 && nota<=7){alert("Muy bueno");}
}