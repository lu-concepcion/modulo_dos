//generar datos de personas

let personas = [];

    const guardarDatos = (body) =>{

        personas.push(body);
        return "ingresado";

    }
    const obtenerDatos = (body) =>{
        return personas;
    }


module.exports = {

    guardarDatos,
    obtenerDatos

}