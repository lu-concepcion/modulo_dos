//generar datos de personas

// obtener dv y edad


var funciones = require('../funciones')
var vehiculos=require('./vehiculos')
var profesiones=require('./profesiones')


let listadoCursos=[];
let listadoPersonas=[];

const guardarCurso = body =>{
    const {codigoCurso, nombre}= body;
    let alumnos =[];
    let cursoCreado=false;
    for (let i in listadoCursos){
        if (listadoCursos[i]["codigoCurso"]==codigoCurso)
        cursoCreado=true
    }
    if (!cursoCreado){
        listadoCursos.push({codigoCurso:codigoCurso, nombre:nombre, alumnos:alumnos})
    }    
}

const matricularPersona =(body,run) =>{
    const{codigoCurso}=body;
    let persona=funciones.buscarEnArrayObjeto(listadoPersonas, "run", run)
    const {nombre}=persona;
    let matriculaCreada=false;
    for (let i in listadoCursos){
        if ((listadoCursos[i]["codigoCurso"]==codigoCurso) ){
            for (let j in listadoCursos[i]["alumnos"]){
                if (listadoCursos[i]["alumnos"][j]==persona){
                    matriculaCreada=true
                }
            }
            if (!matriculaCreada){
                listadoCursos[i]["alumnos"].push(persona)
            }
        }
    } 

}

const guardarPersona= body=>{
    const {run, nombre}=body
    let personaCreada=false;
    for (let i in listadoPersonas){
        if (listadoPersonas[i]["run"]==run)
        personaCreada=true
    }
    if (!personaCreada){
        listadoPersonas.push({run:run, nombre:nombre})
    }  
    

}

const obtenerInfoCurso = ( codigo) => {
    let InfoCurso=funciones.filtrarArray(listadoCursos,"codigoCurso", codigo)

    return InfoCurso;
}

const obtenerCursosPersona = run =>{
    let cursosPersona=[];
   // let persona=funciones.filtrarArray(listadoPersonas, "run", run)
   // let filtro= funciones.filtrarArray(listadoCursos, "alumnos", persona)
    //const personas = funciones.filtrarArray(listadoCursos,"codigoCurso", codigo)
    for (let i in listadoCursos){
        for (let j in listadoCursos[i]["alumnos"]){
            if (listadoCursos[i]["alumnos"][j]["run"]==run){
                cursosPersona.push(listadoCursos[i]["codigoCurso"])
            }
        }
    }
    // for (let i in filtro){
    //     let {codigoCurso}=filtro[i]
    //     cursosPersona.push(codigoCurso)
    // }
    return cursosPersona

}





module.exports={
    guardarCurso, obtenerInfoCurso, matricularPersona, obtenerCursosPersona, guardarPersona
}

