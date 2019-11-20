import React from 'react';

class Instruction extends React.Component {
    constructor (props) {
        super(props);

    }

    componentDidMount() {
        console.log(this.props.nombre);
        console.log(this.props.edad);
    }
    render () {
        const {nombre,edad, hacerClick} = this.props;
        return (
        <div>
            <button onClick={() => {hacerClick(nombre, edad)}}>Click</button>
            <p>Hola {nombre}, tienes {edad} años</p>
        </div>
        
        )
    }
}

export default Instruction;