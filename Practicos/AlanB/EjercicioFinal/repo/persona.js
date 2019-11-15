//generar datos de personas
let personas = []
const guardarPersonas = body =>{
    personas.push(body);
}
for (let i=0;i<personas.length;i++)
{
    personas[i].vehuculoId=vehiculos[personas[i].vehuculoId]
}
const obtenerPersonas = run =>{
    return personas
}
module.exports =
{
    obtenerPersonas,
    guardarPersonas
}
