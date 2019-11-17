//generar datos de profesiones

const retornaProfesiones=()=>{

    let listadoProfesiones=[

        {
            id: 1,
            nombre: "ingeniero"
        },
        {
            id: 2,
            nombre: "abogado"
        },
        {
            id: 3,
            nombre: "medico"
        }
    ];

    return(listadoProfesiones);
}

module.exports={
    retornaProfesiones
}