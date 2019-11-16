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
    for(let i=0;i<personas.length;i++){
    if(personas[i].run==run)
    {
        return personas[i]

    }}
}
module.exports =
{
    obtenerPersonas,
    guardarPersonas
}
