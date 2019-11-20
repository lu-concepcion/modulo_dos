import React from 'react';

class AddressLabel extends React.Component {

    constructor (props) {
        super(props);
    }

    componentDidMount(){

        console.log('componentDidMount', this.props)

    }

   render(){
       const { nombrePersona, direccion1, direccion2 } = this.props;
       return(
           
            <did>

                <p>{nombrePersona}</p>
                <p>{direccion1}</p>
                <p>{direccion2}</p>
         
            </did>

       )
   }
}

export default AddressLabel;