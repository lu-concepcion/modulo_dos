var persona = require('./persona')

let listaCursos=[];
let alumnos = [];

let curso = {
    codigo: "",
    nombre: ""
}


const guardarCurso = body =>
{  
    const {codigo, nombre} = body;

    curso.codigo = codigo;
    curso.nombre = nombre;
    curso.alumnos = [];
    listaCursos.push(curso);
}

const matricular = (body, run) =>
{
    
    let { codigo } = body;
    let per = persona.buscarObj(persona.obtenerPersonas(), "run", run);
    //alumnos = borrar(persona);
    listaCursos.forEach(element => {
        if(element["codigo"] == codigo){
            element.alumnos.push(per);
        }
    })


//     let aux
//     let { codigo } = body;
//     alumnos = borrar(persona);
//     for(let j = 0; j<alumnos.length;j++)
//     {
//         if (alumnos[j].run == run)
//         {
//             aux[j] = alumnos[j];
//         }
//     }
//     for(let i = 0; i< listaCursos.length;i++)
//     {
//         if(listaCursos[i].codigoCurso == codigo)
//         {
//              listaCursos[i].push(aux)
//         }
//     }
// return listaCursos
}

const borrar = obj =>
{
    delete obj['fechaNac']
    delete obj ['tieneVehiculo']
    delete obj ['tieneProfesion']
    delete obj ['vehiculoId']
    delete obj ['profesionId']
    return obj
}

const obtenerCursos = (codigoCurso) => 
{
    return listaCursos;
}

module.exports=
{
    guardarCurso, borrar, obtenerCursos, matricular
}