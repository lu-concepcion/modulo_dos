var persona = require('./persona.js')
let cursos = [
     {codigoCurso: "codigo",
      nombreCurso: "prueba",
      alumnos : [] }  ]

const guardarCurso = (body) =>{
    let cursoNuevo = {};
    let codigoCurso, nombreCurso ;
    let cantidadPropiedades = Object.keys(body).length
    
    for (let i = 0; i < cantidadPropiedades; i++) {
        if (Object.keys(body)[i]== "codigoCurso") {
            codigoCurso = Object.values(body)[i];
        }
        if (Object.keys(body)[i]== "nombreCurso") {
            nombreCurso = Object.values(body)[i];
        }
    }
 cursoNuevo.codigoCurso = codigoCurso
 cursoNuevo.nombreCurso = nombreCurso
 cursoNuevo.alumnos = [];
 cursos.push(cursoNuevo)
}
const obtenerCurso = (codigoCurso) =>{
    let filtrado={};
    for (let i = 0; i < cursos.length; i++) {
        if (Object.values(cursos[i])[0]==codigoCurso) {
            filtrado = cursos[i];
        }
        
    }
    return filtrado;
}
module.exports = {obtenerCurso,guardarCurso}
