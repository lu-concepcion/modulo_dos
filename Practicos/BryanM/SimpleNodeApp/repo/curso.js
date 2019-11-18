const personas = require("./persona.js")
const funciones = require("../funciones.js")

let cursos = [];

let curso = {
    codigo: "",
    nombre: "",
    alumnos: []
}

const guardarCurso = (cur) => {
    let { codigo, nombre } = cur;

    curso.codigo = codigo;
    curso.nombre = nombre;
    curso.alumnos = [];

    cursos.push(curso);
}

const matricularPersona = (rut, cur) => {
    let { codigo, alumnos } = cur;

    const persona = funciones.buscarEnArray(personas.personas, "rut", rut);
    cursos.forEach(element => {
        if(element["codigo"] == codigo){
            alumnos.push(persona);
        }
    })
}

module.exports = {
    guardarCurso, matricularPersona
}
