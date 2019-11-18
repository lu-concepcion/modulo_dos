var persona = require('./persona')
let cursos = []
const guardarCurso = body => {
    body.alumnos=[]
    cursos.push(body);
}
const obtenerCurso = codigoCurso =>{
    for(let i=0;i<cursos.length;i++){
    if(cursos[i].codigoCurso==codigoCurso)
    {
        return cursos[i]
    }}
}
const objectPositionFinder=(array,propiedad,valorPropiedad)=>
{
    let aux
    let aux2
    for (let i=0;i<=array.length-1;i++)
    {
       aux = Object.keys(array[i]);
       aux2 = Object.values(array[i]);
       for(let j=0;j<=aux.length;j++)
       {
           if(aux[j]==propiedad&&aux2[j]==valorPropiedad)
           return i
       }
    }
    return "no encontrado"
}
const objectFinder=(array,propiedad,valorPropiedad)=>
{
    let aux
    let aux2
    for (let i=0;i<=array.length-1;i++)
    {
       aux = Object.keys(array[i]);
       aux2 = Object.values(array[i]);
       for(let j=0;j<=aux.length;j++)
       {
           if(aux[j]==propiedad&&aux2[j]==valorPropiedad)
           return array[i]
       }
    }
    return(Object())
}
const matricularPersonas =  (body,run) =>{
    let aux=objectPositionFinder(cursos,"codigoCurso",body.codigoCurso)
    const alumno =objectFinder(persona.personas,"run",run)
    delete alumno.fechaNac
    delete alumno.dv
    delete alumno.vehiculo
    delete alumno.profesion
    delete alumno.edad
    cursos[aux].alumnos.push(alumno)
}
module.exports ={
    guardarCurso,
    obtenerCurso,
    cursos,
    matricularPersonas,
    objectPositionFinder
}