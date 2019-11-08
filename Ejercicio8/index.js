var persona = new Object ();

persona.nombre = prompt("Ingrese su nombre");
persona.apellido = prompt("Ingrese su apellido");
persona.nombreCompleto = `${persona.nombre} ${persona.apellido}`;

//alert(persona.nombre)
//65-90
//97-122

do 
{
    persona.nombre = prompt("Error, ingrese su nombre");
}
while(!isNaN(persona.nombre))

persona.edad = prompt("Ingrese su edad");
do
{
    persona.edad = prompt("Error, Ingrese su edad"); 
}
while(isNaN(persona.edad))

alert(persona.edad)