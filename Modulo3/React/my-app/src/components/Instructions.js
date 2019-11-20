import React from 'react';

class Instructions extends React.Component {

    constructor (props) {
        super(props);
    }

    componentDidMount(){

        console.log('componentDidMount', this.props)

    }

   render(){
       const { nombre, edad, hacerClick } = this.props;
       return(
           
        <did>
        <button onClick= {()=> hacerClick(nombre, edad)}>
            click
        </button>
           <p>{`Hola ${nombre}, con la edad de: ${edad} años`}</p> </did>

       )
   }
}

export default Instructions;