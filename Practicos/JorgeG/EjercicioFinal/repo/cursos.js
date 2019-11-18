// datos de curso
var funciones = require('../funciones')
var personas = require('./persona')
let cursos= [];
let alumnos=[];

const guardarCurso=(body)=>{
    let curso ={codigoCurso,nombre}=body;
    curso={
        codigoCurso:codigoCurso,
        nombre:nombre,
        alumnos
    }
    cursos.push(curso);
    return cursos
}

const filtrarCursos = (codigo) =>{
    return funciones.filtrarArray(cursos,"codigoCurso",codigo)
}

const matriculaCurso = (run,body) =>{
    let objetoPersona = funciones.filtrarArray(,"run",run)
    let objetoCurso = cursos.filtrarCursos(body.codigoCurso)
    objetoCurso.alumnos=alumnos.push(objetoPersona)
}

module.exports={
    guardarCurso, filtrarCursos, matriculaCurso
}