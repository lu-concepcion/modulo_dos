var funciones = require('../funciones.js')

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
module.exports={
    guardarCurso,filtarPorCodigo
}