let cursos = []
const guardarCurso = body => {
    body.alumnos=[]
    cursos.push(body);
}
module.exports ={
    guardarCurso
}