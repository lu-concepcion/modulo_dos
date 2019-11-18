
cursos = [];

curso = {

    codigoCurso: "",
    nombreCurso: ""

}

const guardarCurso = (cur) => {

    let {codCurso, nomCurso} = cur

    curso.codigoCurso = codCurso;
    curso.nombreCurso = nomCurso;

    cursos.push(curso);
}


module.exports = {

    guardarCurso

}