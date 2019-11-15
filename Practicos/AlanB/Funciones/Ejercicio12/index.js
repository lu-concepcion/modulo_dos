import{
    calculoEdad
}from'../Funciones.js'
let personas=[
    {
        nombre:"Pedro",
        fechaDeNacimiento: new Date(1996,8,11)
    },
    {
        nombre:"Juan",
        fechaDeNacimiento: new Date(2004,3,14)
    },
    {
        nombre:"Diego",
        fechaDeNacimiento: new Date(1987,5,21)
    }
]
const edadLimite = prompt("ingrese limite de edad")
let personasMayores = []
for (let i=0;i<personas.length;i++)
{
    alert(calculoEdad(personas[i].fechaDeNacimiento))
    if(calculoEdad(personas[i].fechaDeNacimiento)>=edadLimite)
    {
        personasMayores.push(personas[i].nombre)
    }
}
alert(personasMayores)


