var persona = new Object ();

persona.nombre = prompt("Ingrese su nombre");

while(!isNaN(persona.nombre))
{
    persona.nombre = prompt("Error, ingrese su nombre");
    console.log(!isNaN(persona.nombre))
}


persona.apellido = prompt("Ingrese su apellido");

while(!isNaN(persona.apellido)) 
{
    persona.apellido = prompt("Error, ingrese su apellido");
}

persona.nombreCompleto = `${persona.nombre} ${persona.apellido}`;

persona.edad = prompt("Ingrese su edad");

while(isNaN(persona.edad))
{
    persona.edad = prompt("Error, Ingrese su edad"); 
}

persona.profesion = prompt("Ingrese su profesión");

while(!isNaN(persona.profesion)) 
{
    persona.profesion = prompt("Error, ingrese su profesión");
}

var opcion = prompt("Ingrese una de las siguientes opciones para mostrar en pantalla:\n 0:nombre\n 1:apellido\n 2:nombre completo\n 3:edad\n 4:profesión");

switch (opcion)
{
    case "0":
        alert(persona.nombre)
        break;
    
    case "1":
        alert(persona.apellido)
        break;
        
    case "2":
        alert(persona.nombreCompleto)
        break;
        
    case "3":
        alert(persona.edad)
        break;
                
    case "4":
        alert(persona.profesion)
        break;
}