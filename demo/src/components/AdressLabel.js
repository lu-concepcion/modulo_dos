import React from 'react'

class AdressLabel extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        const {nombrePersona,direccion1,direccion2}=this.props;
        return(
            <div>
                <p>
                    {`${nombrePersona}`}
                </p>
                <p>
                    {`${direccion1}`}
                </p>
                <p>
                {`${direccion2}`}
                </p>
            </div>
        )
    }
}
export default AdressLabel;
