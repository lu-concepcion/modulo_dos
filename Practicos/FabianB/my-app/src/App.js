import React from 'react';
import logo from './piñera.jpg';
import './App.css';


import Instructions from './components/Instructions'
import Link from './components/Link';
import AdressLabel from './components/AdressLabel';
import Envelope from './components/Envelope';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Karol Depravado',
      compare: ''
    };
    this._varGlobal = '';
    console.log('constructor')
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextProps')
    const { value, compare } = this.state;
    const should = nextState.value !== value ||
      nextState.compare !== compare;
    console.log('shouldComponentUpdate', should)
    return should
  }

  componentDidMount() {
    console.log('componentDidMount')
    setTimeout(() => {
      console.log('setState')
      this.setState({ value: 'Karol Depravado Cochino' })
    }, 3000);
    setTimeout(() => {
      this._varGlobal = 'Renuncia'
      this.forceUpdate();
    }, 4000);
    setTimeout(() => {
      console.log('setState compare')
      this.setState({ compare: '' });

    }, 5000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  render() {
    console.log('render')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      
          <AdressLabel
          fullName= 'Fabián Beltrán'
          direccion1= 'Calle nueva uno #45'
          direccion2= 'San Pedro de La Paz, Chile'

          />
          <Envelope
          toPerson = {{ nombre: "Fabián Beltrán", 
                      direccion1: "Calle nueva uno #45",  
                      direccion2: "San Pedro de La Paz, Chile"}}
           fromPerson = {{ nombre: "Fabián Beltrán", 
                          direccion1: "Calle nueva uno #45",  
                          direccion2: "San Pedro de La Paz, Chile"}}
          />


        </header>
      </div>
    );
  }
}

export default App;
