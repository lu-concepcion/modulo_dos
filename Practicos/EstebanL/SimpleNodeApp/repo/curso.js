
cursos = [];

curso = {

    codigoCurso: "",
    nombreCurso: ""

}

const guardarCurso = (cur) => {

    let {codCurso, nomCurso} = cur

    curso.codigoCurso = codCurso;
    curso.nombreCurso = nomCurso;
    curso.alumnos = [];
    cursos.push(curso);
}


module.exports = {

    guardarCurso

}