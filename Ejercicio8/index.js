var persona = new Object ();

persona.nombre = prompt("Ingrese su nombre");
persona.apellido = prompt("Ingrese su apellido");
persona.nombreCompleto = `${persona.nombre} ${persona.apellido}`;
``
//alert(persona.nombre)
//65-90
//97-122
persona.edad = prompt("Ingrese su edad");
if (isNaN(persona.edad))
{
    persona.edad = prompt("Error, Ingrese su edad");
}
alert(persona.edad)