//generar datos de personas
var funciones = require('../funciones')
var vehiculos = require('./vehiculos')
var profesiones = require('./profesiones')
let listaPersonas=[];
let vehiculo = {};
let profesion = {};

const guardarPersona= body =>
{   let {nombre, run, fechaNac, tieneVehiculo,tieneProfesion,vehiculoId, profesionId} = body;

    if (tieneVehiculo == true )
       {   
           vehiculo = buscarObj(vehiculos.vehiculos(),"id",vehiculoId)
       
       } 
    if (tieneProfesion == true )
       {   
           profesion = buscarObj(profesiones.profesiones(),"id",profesionId)
       
       } 
        listaPersonas.push({ nombre:nombre,run: run, dv:digitoV(run), fechaNac: fechaNac, edad: calEdad(fechaNac) ,vehiculo:vehiculo,profesion:profesion})
    
}

const obtenerPersonas = (run) => 
{
    return listaPersonas;
}

const digitoV = num =>
{   
    let cadena ="";
    let todo = "";
    let acum =0;
    let aux = 0;
    let digito = 0;
    let i = num.length;
    let serie = [2,3,4,5,6,7];
    num = num.split("-");
    num = num[0];
    while(i>=0)
    {
        if(num.charAt(i)!= ".")
       {
          cadena = cadena+num.charAt(i)
       
       }  
         i--; 
    }
    let diferencia = parseInt(cadena.length)-parseInt(serie.length);

    if(diferencia>0)
    { 
        for(let k = 0; k<diferencia;k++)
        {
            serie.push(serie[k]);
        }  
    }
  
    for(let j = 0;j<cadena.length;j++)
    {
        acum = acum + cadena[j]*serie[j]; 
    }

    aux = acum%11;
    digito = 11-aux;

    if (digito == 11)
    {
        digito = "0";
    }
    else if (digito == 10)
    {
        digito = "k";
   }
    return digito
}

const calEdad = (fechaNac) =>
{
    
    let num = [];
    fechaNac = fechaNac.split("/");

          num[0] =fechaNac[2]
          num[1] =fechaNac[1]
          num[2] =fechaNac[0]
    

    let edades = "";
    let fechaActual = new Date();
    let fecha = new Date(num);
    let years = fechaActual.getFullYear()- fecha.getFullYear();
    
    if ((fechaActual.getMonth() >= fecha.getMonth()) && (fechaActual.getDay() >= fecha.getDay()))
    {
        edades = years;
    }
    else
    {
        edades = years -1;
    }
    return edades
}


const buscarObj = (array, propiedad, valor) =>
{
    let propiedades = [];
    let valores = [];
    for(let i = 0; i<array.length;i++)
    {
        propiedades [i] = Object.keys(array[i]);
        valores [i] = Object.values(array[i]) 

        for(let j = 0;j<propiedades.length;j++)
        {
            if(propiedades[i][j] == propiedad)
            {
            if(valores[i][j] == valor)
                {
                    delete array[i]['id']
                return array[i]

                }            
            }
        }
    }
}

module.exports=
{
    guardarPersona, obtenerPersonas, digitoV, calEdad, buscarObj, listaPersonas
}