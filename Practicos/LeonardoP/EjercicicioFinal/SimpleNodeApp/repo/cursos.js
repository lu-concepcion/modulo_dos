var funciones = require('../funciones');

let listaCurso=[];
const crearCurso=(body)=>{

const{codigoCurso,nombre}=body;

   let objCurso={

    codigoCurso:"",
    nombre:"",
    alumnos: []

   }

   


  

   objCurso.codigoCurso=codigoCurso;
   objCurso.nombre=nombre;

   listaCurso.push(objCurso);


}



const infoCurso=(codigoCurso)=>{

    let array=[];

    listaCurso.forEach(objeto=>{

        if(objeto['codigoCurso']==codigoCurso)
        {
            array.push(objeto);
        }
    });

    return array

}


const validaAlumnos=(r)=>{

    listaCurso.forEach(alumno=>{

        if(alumno.alumnos['run']==r)
        {
            return true;
        }else{
            return false;
        }




    });
}


module.exports={

    crearCurso,
    infoCurso,
    listaCurso,
    validaAlumnos
}