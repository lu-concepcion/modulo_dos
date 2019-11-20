import React from 'react';

class AddressLabel extends React.Component {

constructor(props){
    super(props);
}

componentDidMount(){
    console.log(this.props);
}

    render() {
        const { FullName, Direccion1, Direccion2 } = this.props;
        return(
            <div>
            <p className='App-link'>{`${FullName}`}</p>
            <p>{`${Direccion1}`}</p>
            <p>{`${Direccion2}`}</p>
            </div>
        )
    }
}

export default AddressLabel