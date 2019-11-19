//genera datos de cursos
const funciones = require('../funciones')
const personas = require('./persona') 

let listaCursos = [];

let curso = {
    codigo: "",
    nombre: "",
    alumnos: []
}

const guardarCursos = body => {
    let {codigoCurso, nombreCurso} = body;
    curso.codigo = codigoCurso;
    curso.nombre = nombreCurso;
    curso.alumnos = [];

    listaCursos.push(curso);
}

const matricularAlumno = (run, body) => {
    const { codigoCurso: codigo } = body;
    const persona = funciones.buscarEnArray(personas.listaPersona, "run", run);
    const cantidadPropiedades = Object.keys(persona).length;
    let matriculado={};

    for (let i = 0; i < cantidadPropiedades; i++) {
        if (Object.keys(persona)[i]=="run") {
            matriculado.run = Object.values(persona)[i]
        }
        if (Object.keys(persona)[i]=="nombre") {
            matriculado.nombre = Object.values(persona)[i]
        }
        
    }

    listaCursos.forEach(element => {
        if(element["codigo"] == codigo){
            element.alumnos.push(matriculado);
        }
    })
}

const obtenerCursos = (query) => {
    const {codigoCurso}=query;
    return funciones.buscarEnArray(listaCursos,"codigoCurso",codigoCurso);
}

module.exports={guardarCursos, obtenerCursos, matricularAlumno}