const personas = require("./persona.js")
const funciones = require("../funciones.js")

let cursos = [];

let curso = {
    codigo: "",
    nombre: "",
    alumnos: []
}

const guardarCurso = (curso) => {
    let { codigo, nombre } = curso;

    curso.codigo = codigo;
    curso.nombre = nombre;

    cursos.push(curso);
}

const matricularPersona = (rut, curso) => {
    let { codigo } = curso;

    
}

module.exports = {
    guardarCurso, matricularPersona
}
