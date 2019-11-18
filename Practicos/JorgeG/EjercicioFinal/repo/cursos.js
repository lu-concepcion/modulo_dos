//generar datos de cursos
const devuelveCursos =()=>{   
    let cursos=[];
    cursos[0]=  {codigoCurso:1,nombre:"Ingeniero"};
    cursos[1]=  {codigoCurso:2,nombre:"Medico"};
    cursos[2]=  {codigoCurso:3,nombre:"Arquitecto"};
    cursos[3]=  {codigoCurso:4,nombre:"Kinesiologo"};
    cursos[4]=  {codigoCurso:5,nombre:"Contador Auditor"};
    return cursos
}

module.exports ={
    devuelveCursos
}