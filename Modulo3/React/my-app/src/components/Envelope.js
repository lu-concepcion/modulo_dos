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
       return(
           
            <did>

                <p>{toPerson}</p>
                <p>{fromPerson}</p>
         
            </did>

       )
   }
}

export default Envelope;