//generar datos de profesiones

const returnProfesiones=()=>{
    let profesiones=[
        {
            id:1,
            nombre:"ingeniero"
    
        },
        {
            id:2,
            nombre:"abogado"
        },
        {
            id:3,
            nombre:"medico"
        },
        {
            id:4,
            nombre:"otro"
        }
    ];

    return profesiones;
}

module.exports={

   returnProfesiones
}
