//generar datos de profesiones
const devuelveProfesion =()=>{   
    let profesion = {}
    let profesiones=[];
    profesiones[0]=  {idProfesion:1,nombre:"Ingeniero"};
    profesiones[1]=  {idProfesion:2,nombre:"Medico"};
    profesiones[2]=  {idProfesion:3,nombre:"Arquitecto"};
    profesiones[3]=  {idProfesion:4,nombre:"Kinesiologo"};
    profesiones[4]=  {idProfesion:5,nombre:"Contador Auditor"};
    return profesiones
}

module.exports ={
    devuelveProfesion
}