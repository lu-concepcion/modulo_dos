import React from 'react';
import AddressLabel from './AddressLabel';

class Envelope extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { toPerson, fromPerson } = this.props;
        return(
        <div className="Container-Envelope">
            <div className="Container-Superior">
                <div className="Direccion">
                <AddressLabel
                FullName={fromPerson.nombre}
                Direccion1={fromPerson.direccion1}
                Direccion2={fromPerson.direccion2}
            />
                </div>
                <div className="Estampilla">Estampilla</div></div>
            <div className="Container-Inferior">
                <AddressLabel
                FullName={toPerson.nombre}
                Direccion1={toPerson.direccion1}
                Direccion2={toPerson.direccion2}
            />
            </div>
        </div>
        )
    }

}

export default Envelope