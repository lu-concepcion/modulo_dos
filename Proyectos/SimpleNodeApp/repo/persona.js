var funciones = require('../funciones')
var profesiones = require('./profesiones');
var vehiculos = require('./vehiculos');
const personaLista=[];

const guardaPersonas=body=>{

  const {run, fechaNac, tieneProfesion, tieneVehiculo,vehiculoId, profesionId}=body; 
  let objeto={
      run:"",
      dv:0,
      fechaNac:"",
      edad:0,
      tieneProfesion:false,
      tieneVehiculo:false,
      vehiculo:
      {
          marca: "",
          modelo:""
      },

      profesion:
      {
          id:0,
          nombre: ""
      }


  }


  
 


  objeto.run=run;
  objeto.dv = funciones.digitoVerificador(run);
  objeto.fechaNac=fechaNac;
  objeto.edad=funciones.edadG(fechaNac);
  objeto.tieneProfesion=tieneProfesion;
  objeto.tieneVehiculo=tieneVehiculo;


let vehiculos_lista = vehiculos.returnVehiculos();
    let profesiones_lista = profesiones.returnProfesiones();

    let marca, modelo, id, nombre;

    vehiculos_lista.forEach(element => {
        if (element['id'] == vehiculoId) {
            objeto.vehiculo.marca = element['marca'];
            objeto.vehiculo.modelo = element['modelo'];
        }
    });

    profesiones_lista.forEach(element => {
        if (element['id'] == profesionId) {
            id = element['id'];
            objeto.profesion.nombre = element['nombre'];
        }
    });

    personaLista.push(objeto);

}




const retornaPersona =(run)=>
{

    let array = [];
    if (run) {
        personaLista.forEach(element => {
            if (element['run'] == run) {
                array.push(element);
            }
        });
        return array;
    }
    
    return personaLista;
}

module.exports={

    guardaPersonas,
    retornaPersona
}



