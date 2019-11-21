import React from 'react';
import logo from './logo.svg';
import './App.css';
import Instructions from './components/instructions';
import HiperLink from './components/HiperLink'
import AdressLabel from './components/AdressLabel'
import Envelope from './components/Envelope'

class App extends React.Component {
  constructor(props){
    super (props);
    this.state = {
      value: 'Learn React'
    };
    this._varGlobal = '';
    console.log('constructor')
  }
  shouldComponentUpdate(nextProps, nextState)
  {
    console.log (nextProps)
    const {value, compare} = this.state;
    const should = nextState.value !== value || nextState.compare !== compare;
    return should;
  }
  componentDidMount(){
    console.log('componentDidMount')
    setTimeout(() => {
      this.setState({value: 'learn React Now!'});
    }, 3000)
    setTimeout(() => {
      this._varGlobal = 'please';
      console.log('forceUpdate')
      this.forceUpdate ();
    }, 4000)
    setTimeout(() => {
      console.log('setState compare')
      this.setState({compare: ''});
    }, 5000)

  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  render (){
    const fromPerson = {
      nombre:'Fulanto Gonzales',
      direccion1:'Los Carrera 241',
      direccion2:'Temuco, Chile'
    }
    const toPerson = {
      nombre:'Juana Perez',
      direccion1:'Los Alamos 722',
      direccion2: 'La Serena, Chile'
    }
    console.log('render')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
         <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div><Instructions
        nombre='Alan'
        edad= {21}
        hacerClick={ (nombre,edad)=> alert (nombre)}
        />
        </div>
        <div><HiperLink/>
        </div>
          <div><AdressLabel
          nombrePersona='Alan Benavente'
          direccion1='Moises Aracena 891'
          direccion2='Coronel, Chile'
          />
        </div>
          <Envelope
          toPerson={toPerson}
          fromPerson={fromPerson}
          />
      </header>
    </div>
  );
}
}

export default App;
