import React from 'react'
import AdressLabel from './AdressLabel'

class Envelope extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        const {toPerson,fromPerson} = this.props;
        const {}
        console.log(toPerson)
        console.log(fromPerson)
        return <div className ='ContainerEnvelope'>
            <div className = 'ContainerSuperior'>
            <div className = 'Estampilla'>
            </div>
            </div>
        </div>
    }
}



export default Envelope