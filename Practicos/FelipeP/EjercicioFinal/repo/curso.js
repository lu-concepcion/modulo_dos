const {cursoExiste} = require('../funciones.js');
let arregloCursos = [];

const setCurso = (body) => {
    const {codigoCurso, nombre} = body;

    if (cursoExiste(codigoCurso, arregloCursos)) {
        return 'Curso ya existe. No agregado';
    } else {

        let curso = {
            codigoCurso: codigoCurso,
            nombre: nombre,
            alumnos: []
        }
        arregloCursos.push(curso);
        return 'Curso agregado';
    }
    
}

const getCurso = (codigoCurso) => {
    let array = [];
    if (codigoCurso) {
        arregloCursos.forEach(curso => {
            if (curso['codigoCurso'] == codigoCurso) {
                array.push(curso);
            }
        });
        return array;
    }
}

const addAlumno = (alumno, codigoCurso) => {
    arregloCursos.forEach(element => {
        if (element['codigoCurso'] == codigoCurso) {
            element['alumnos'].push(alumno);
        }
    });
}
module.exports = {
    setCurso,
    getCurso,
    addAlumno
}
