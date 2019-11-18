
let listaCursos=[];
let alumnos = [];

const guardarCurso = body =>
{   let {codigoCurso, nombre} = body;
        listaCursos.push({ codigoCurso: codigoCurso, nombre:nombre, alumnos: alumnos})
    
}

module.exports=
{
    guardarCurso
}