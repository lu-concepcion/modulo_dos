var persona = require('./persona.js')
let cursos = [
     {codigoCurso: "codigo",
      nombre: "prueba",
      alumnos =[] }  ]
      
const guardarCursos = (body) =>{
    let cursoNuevo = {};
    let codigoCurso, nombre ;
    let cantidadPropiedades = Object.keys(body).length
    
    for (let i = 0; i < cantidadPropiedades; i++) {
        if (Object.keys(body)[i]== "codigoCurso") {
            codigoCurso = Object.values(body)[i];
        }
        if (Object.keys(body)[i]== "nombre") {
            nombre = Object.values(body)[i];
        }
    }
 cursoNuevo.codigoCurso = codigoCurso
 cursoNuevo.nombre = nombre
 cursoNuevo.alumnos = [];
}

