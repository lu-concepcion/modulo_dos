//generar datos de personas
var vehiculos = require('./vehiculos')
let personas = []
const guardarPersonas = body =>{
    personas.push(body);
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
    guardarPersonas,
}
