// Variables a definir
const persona = require('./persona')
let cursos = [];

// Funciones

const crearCurso = body => {
    const { codigoCurso, nombre } = body;
    cursos.push({
        codigoCurso,
        nombre,
        alumnos: []
    });
}


const obtenerCursos = body => {
    return cursos;
}


const matriculaCurso = (codigo, run) => {
    cursos.forEach(curso => {
        if(curso.codigoCurso == codigo){
            curso.alumnos.push(persona.buscarPersona(run))
        }
    })
}


// Exportar los mudulos necesarios
module.exports = {
    crearCurso,
    obtenerCursos,
    matriculaCurso
}

