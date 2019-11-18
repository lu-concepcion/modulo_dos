var funciones = require('../funciones')

let cursos =[ 
    { codigoCurso: "CU-000",
       nombre: "prueba" , 
       alumnos: alumnos=[]
    }
 ]

 const obtenerCurso = (codigoCurso) => {
    let filtrado={};
    for (let i = 0; i < cursos.length; i++) {
        if (Object.values(cursos[i])[0]==codigoCurso) {
            filtrado = cursos[i];
        }   
    }
    return filtrado;
}




const guardarCurso=(body)=>{
   let cursoNuevo={};
   let codCurso, nombreCurso;
   let cantidadPropiedades = Object.keys(body).length;

   for (let i = 0; i < cantidadPropiedades; i++) {
    if (Object.keys(body)[i]== "codigoCurso") {
        codCurso = Object.values(body)[i];
    }   
    if (Object.keys(body)[i]== "nombre") {
        nombreCurso = Object.values(body)[i];
    } 
    
    }

    cursoNuevo ={
        codigoCurso: codCurso,
        nombre: nombreCurso,
        alumnos: alumnos=[]
    }

cursos.push(cursoNuevo)
}
  

 module.exports ={
 cursos, guardarCurso, obtenerCurso
  }