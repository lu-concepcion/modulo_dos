import React from 'react';
import AddressLabel from './AddressLabel.js';
import estampilla from '../estampilla.png';

class Envelope extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        const {toPerson, fromPerson} = this.props;
        return (
            <div className='borde'>
                <div className='mueveDerecha'>
                    <img className='estampilla' src={estampilla}/>
                </div>
                <div className='mueveIzquierda'>
                    <p>Nombre completo: {toPerson.fullName}</p>
                    <p>Dirección 1: {toPerson.direccion1}</p>
                    <p>Dirección 2: {toPerson.direccion2}</p>
                </div>
                <div className='mueveCentro'>
                    <p>Nombre completo: {fromPerson.fullName}</p>
                    <p>Dirección 1: {fromPerson.direccion1}</p>
                    <p>Dirección 2: {fromPerson.direccion2}</p>
                </div>
            </div>
            
        )
    }
}

export default Envelope;

