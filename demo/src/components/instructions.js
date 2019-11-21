import React from 'react';

class Instructions extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        const {nombre,edad,hacerClick}=this.props;
        return(
            <div>
             <button onClick={() => hacerClick(nombre)}>
                click
            </button>
        <p>{`Hola ${nombre} ${edad}`}</p>
            </div>

        )
    }
}

export default Instructions;