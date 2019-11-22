import React from 'react';

class Envelope extends React.Component {

    constructor (props) {
        super(props);
    }

    componentDidMount(){

        console.log('componentDidMount', this.props)

    }

   render(){
       const { toPerson, fromPerson } = this.props;
       let { nombrePersona1, adireccion1, adireccion2 } = this.toPerson;
       let { nombrePersona2, bdireccion1, bdireccion2 } = this.fromPerson;
       return(
           
            <did>

                <p>{toPerson}</p>
                <p>{fromPerson}</p>
         
            </did>

       )
   }
}

export default Envelope;