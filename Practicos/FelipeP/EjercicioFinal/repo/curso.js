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

module.exports = {
    setCurso,
    getCurso
}
