const personas = require("./persona.js")
const funciones = require("../funciones.js")

let cursos = [];

let curso = {
    codigo: "",
    nombre: "",
    alumnos: []
}

const guardarCurso = (cur) => {
    let { codigo, nombre } = cur;

    curso.codigo = codigo;
    curso.nombre = nombre;
    curso.alumnos = [];

    cursos.push(curso);
}

const borrarElementos = (per) => {
    delete per['fechaNac'];
    delete per['edad'];
    delete per['tieneProfesion']
    delete per['tieneVehiculo']
    delete per['vehiculo']
    delete per['profesion']
}

const matricularPersona = (rut, cur) => {
    const { codigo } = cur;
    const persona = funciones.buscarEnArray(personas.personas, "rut", rut);
    cursos.forEach(element => {
        if(element["codigo"] == codigo){
            if(funciones.searchInArray(element.alumnos, "rut",rut) == false){
                element.alumnos.push(persona)
            }
            else{
                return "Ya se a registrado el alumno";
            }
        }
    })  
}

const buscarCurso = (codigo) => {
    let array = [];
    if(funciones.searchInArray(cursos,"codigo",codigo)){
        array = funciones.searchArray(cursos, "codigo", codigo);
        return array;
    }else {
        return "No se a podido encontrar el curso";
    }
}

const obtenerCursos = () => {
    return cursos;
}

const buscarPerEnCurso = (rut) => {
    let res = [];
    const curs = obtenerCursos();
    curs.forEach(element => {
        if(funciones.searchArray(element.alumnos, "rut", rut).length){
            res.push(curso);
        }
    })  
}

module.exports = {
    guardarCurso, matricularPersona, obtenerCursos, buscarCurso 
}
