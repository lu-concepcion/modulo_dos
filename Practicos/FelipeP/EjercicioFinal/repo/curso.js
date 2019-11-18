let arregloCursos = [];

const setCurso = (body) => {
    const {codigoCurso, nombre} = body;

    let curso = {
        codigoCurso: codigoCurso,
        nombre: nombre,
        alumnos: []
    }
    arregloCursos.push(curso);
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
