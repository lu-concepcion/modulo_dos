var funciones = require('../funciones.js')
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


const filtarPorCodigo=(codigo)=>{
     return funciones.encontrarEnArray(cursos,"codigoCurso",codigo)
    
}

const matriculaCurso=(run,body)=>{
    
    let objetoPersona= funciones.encontrarEnArray(personas.listaPersonas(),"run",run)
    console.log(objetoPersona)
    let objetoCurso = cursos.filtarPorCodigo(body.codigoCurso)
    // alumnos.push(objetoPersona)
    objetoCurso.alumnos=alumnos.push(objetoPersona)

    return objetoCurso

}


module.exports={
    guardarCurso,filtarPorCodigo,matriculaCurso
}