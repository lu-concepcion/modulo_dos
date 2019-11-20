import React from 'react';
import logo from './logo.svg';
import './App.css';
import Instruction from './components/instruction';
import HyperLink from './components/hyperlink';
import AddressLabel from './components/AddressLabel';
import Envelope from './components/envelope'

  class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        value: 'Learn React',
        compare: ''
      };
      this._varGlobal ='';
      console.log('constructor')
    }

shouldComponentUpdate(nextProps, nextState){
  console.log(nextProps);
  const {value, compare} =this.state;

  const should = nextState.value !== value ||
  nextState.compare !== compare;
  console.log('ShouldComponentUpdate', should)
  return should;
}

    componentDidMount(){
      console.log('componentDidMount')
      setTimeout( () => {
        this.setState({value: "Learn React Now!"});
      }, 3000)
      setTimeout( () => {
        this._varGlobal = 'Please';
        console.log('forceUpdate')
        this.forceUpdate();
      }, 4000)
      setTimeout(() => {
        console.log('setState compare')
        this.setState({compare:''});
      }, 5000)
    }

    render() {
      const toPerson = {
        nombre:'Hernán Candia',
        direccion1:'Nogueira 1252',
        direccion2:'Tomé, Chile'
      }
      const fromPerson = {
        nombre:'Javier Calderón',
        direccion1:'Perales 1252',
        direccion2:'Concepción, Chile'
      }

      console.log('render')
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Instruction
          nombre='Jeremy'
          edad='23'
          hacerClick={nombre => alert(nombre)}
        />
        <HyperLink/>
        <AddressLabel
        FullName='Jeremy'
        Direccion1='Pasaje José Joaquin Prieto #65'
        Direccion2='Chiguayante, Chile'        
        />
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
