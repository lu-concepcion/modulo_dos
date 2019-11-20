import React from 'react';
import logo from './logo.svg';
import './App.css';

import Instruction from './components/Instruction.js';
import HyperLink from './components/HyperLink.js';
import AddressLabel from './components/AddressLabel.js';
import Envelope from './components/Envelope.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Learn React (hackeado)',
      compare: ''
    };
    this._varGoblobal = '';
    console.log('constructor');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextProps: ', nextProps);
    const {value, compare} = this.state;
    const should = nextState.value !== value || nextState.compare !== compare;
    console.log('shouldComponentUpdate', should);
    return should;
  }

  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(() => {
      this.setState({value: 'Hackee de nuevo la página'});
    }, 3000)
    setTimeout(() => {
      this._varGoblobal = 'Por favor';
      this.forceUpdate();
    }, 4000)
    setTimeout(() => {
      console.log('setState compare');
      this.setState({compare: ''})
    }, 5000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  render () {
    console.log('render');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Instruction
            nombre = 'Felipe'
            edad = {27}
            hacerClick = {(nombre, edad) => alert(nombre + ' ' + edad)}
          />
          <AddressLabel
            fullName = 'Felipe Pulgar'
            direccion1 = 'La Marina de Chile 1155'
            direccion2 = 'Chiguayante, Chile'
          />
          
          <HyperLink/>          
        </header>
      </div>
    );
  }
}

export default App;
