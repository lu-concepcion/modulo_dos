import React from 'react';
import logo from './logo.svg';
import './App.css';
import Instructions from './components/Instructions';
import Hyperlink from './components/Hyperlink';
import AddressLabel from './components/AddressLabel';
import Envelope from './components/Envelope';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

      value: 'Learn React',
      compare: ''
      
    };
    this._varGlobal = '';
    console.log('constructor')
  }
shouldComponentUpdate(nextProps, nextState){

  const { value, compare } = this.state;

  const should = nextState.value !== value || 
         nextState.compare !== compare;
  console.log('shouldComponentUpdate', should)
  return should;

}


componentDidMount(){

  console.log ('componentDidMount')
  setTimeout(() => {

    this.setState({

      value: 'Learn React Now!!!'

    });

  }, 3000)

  setTimeout(() => {

    this._varGlobal = 'Please';
    console.log('forceUpdate')
    this.forceUpdate();

  }, 4000)
  setTimeout(() => {

    console.log('setState compare')
    this.setState({compare: ''});

  }, 5000)
  

}

componentDidUpdate (){

  console.log ('componentDidUpdate');

}


  render(){
    console.log('render')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p>
              <code>Bienvenido a React</code>
            </p>
            {/* <Instructions
            
            nombre = 'Esteban'
            edad = {21}
            hacerClick = {(nombre, edad) => alert(nombre + edad)}
            
            /> */}
            
            {/* <Hyperlink/> */
          
            <AddressLabel
            
            nombrePersona = 'Esteban Larenas Fuentes'
            direccion1 = 'Burgos 14'
            direccion2 = 'Valle Noble, Concepción'
            hacerClick2 = {(nombrePersona, direccion1, direccion2) => alert(nombrePersona +" "+ direccion1 +" "+ direccion2)}
            
            /> }

            <Envelope
            
            toPerson = {

            nombrePersona = 'Esteban Larenas Fuentes',
            direccion1 = 'Burgos 14',
            direccion2 = 'Valle Noble, Concepción'

            }
            fromPerson = {

            nombrePersona = 'Vicente ',
            direccion1 = 'Burgos 14',
            direccion2 = 'Valle Noble, Concepción'

            }
            
            />
           
        </header>
      </div>
    );
  }
}

export default App;
