let personas = []

const obtenerPersonas = () => {
    return personas;
}

const guardarPersona = (body) =>{
    personas.push(body)
    return "hola"
}

module.exports = {
    guardarPersona,
    obtenerPersonas
}