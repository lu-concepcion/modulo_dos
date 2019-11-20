//generar datos de personas
var profesiones = require('./profesiones');
var vehiculos = require('./vehiculos');
var funciones = require('../funciones');
var cursos=require('./cursos');





let listadoPersonas=[];


guardaPersonas=(body)=>{

    const {run,fechaNac,tieneProfesion,tieneVehiculo,vehiculoId, profesionId}=body; //recivo y asigno a variables lo que trae el body

    let objPersona ={

        run: "",
        dv: 0,
        fechaNac: "",
        edad:0,
        tieneProfesion: false,
        tieneVehiculo: false,
        vehiculo:{

            id:0,
            marca: "",
            modelo:""
        },
        profesion:{
            id:0,
            nombre:""
        }
        
    }

    objPersona.run=run;
    objPersona.dv=funciones.digitoVerificador(run);
    objPersona.fechaNac=fechaNac;
    objPersona.edad=funciones.edadG(fechaNac);
    objPersona.tieneProfesion=tieneProfesion;
    objPersona.tieneVehiculo=tieneVehiculo;

    profesiones.retornaProfesiones().forEach(objeto=>{

        if(objeto['id']==profesionId)
        {
            objPersona.profesion.nombre=objeto['nombre'];
            objPersona.profesion.id=objeto['id'];
        }
    });

    vehiculos.retornaVehiculos().forEach(objeto=>{

        if(objeto['id']==vehiculoId)
        {
            objPersona.vehiculo.id=objeto['id'];
            objPersona.vehiculo.marca=objeto['marca'];
            objPersona.vehiculo.modelo=objeto['modelo'];
        }
    });

    listadoPersonas.push(objPersona);




}



retornaPersonas=(run)=>{

    let arrayPersonas=[];
    listadoPersonas.forEach(objeto=>{


        if(objeto['run']==run)
        {
            arrayPersonas.push(objeto);
        }
    });

    return arrayPersonas;
}

const matriculaPersona=(body,run)=>{


    const{codigoCurso}=body;


    console.log(body);

    console.log(codigoCurso);
    console.log(run);

    listadoPersonas.forEach(objeto=>{

        if(objeto['run']==run)
        {
           

                cursos.listaCurso.forEach(c=>{

                    if(c['codigoCurso']==codigoCurso)
                    {
                        c['alumnos'].push(objeto);
    
                    }
                });


            

           


        }
    });




}


module.exports={
    guardaPersonas,
    retornaPersonas,
    matriculaPersona
}