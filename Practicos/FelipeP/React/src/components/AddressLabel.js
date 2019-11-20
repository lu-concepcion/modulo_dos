import React from 'react';
import Envelope from './Envelope.js';

class AddressLabel extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        const {fullName, direccion1, direccion2} = this.props;
        return (
            <Envelope
            toPerson = {{
              fullName : 'Felipe Pulgar',
              direccion1 : 'La Marina de Chile 1155',
              direccion2 : 'Chiguayante, Chie'
            }}
            fromPerson = {{
              fullName : 'Homero Simpson',
              direccion1 : 'Avenida Siempre Viva 742',
              direccion2 : 'Sprinfield, USA'
            }}
          />
        )
    }
}

export default AddressLabel;
