
cursos = [];

curso = {

    codigoCurso: "",
    nombre: ""

}

const guardarCurso = (cur) => {

    let {codigoCurso, nombreCurso} = cur

    curso.codigoCurso = codigoCurso
    curso.nombreCurso = nombreCurso

    cursos.push(curso);
}


module.exports = {

    guardarCurso

}