var funciones = require('../funciones');
var index = require('../index');
let arrayCurso = [];

const reciboCurso = (body) => {
    const { codigoCurso, nombre } = body;
    let datosGuardar = new Object();
    datosGuardar.codigoCurso = codigoCurso;
    datosGuardar.nombre = nombre;
    datosGuardar.alumnos = [];

    arrayCurso.push(datosGuardar);
}

const buscarCurso = codigo => {
    let curso;
    if (codigo) {
        for(let i=0; i<arrayCurso.length; i++){
            if (arrayCurso[i]['codigoCurso'] == codigo){
                curso = arrayCurso[i];
            }
        }
    }
    return curso;
}

module.exports = {
    reciboCurso,
    buscarCurso
}