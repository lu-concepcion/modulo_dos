import React from 'react'; 
import logo from './logo.svg';
import './App.css';

class App extends React.Component {  //clase dentro de una memoria, funcion se genera 
  //dentro de una clase no es necesario declarar function
  constructor(props){ //estado
    super(props);
    this.state = { //this contexto de la clase, con this se ingresa a las propiedades 
      value: 'Learn React',  //puede tener mas de un estado
      compare: ''
    };
    this._varGlobal=''; //_ para diferenciar q es global
    console.log('constructor')
  }
  shouldComponentUpdate(nextProps, nextState){  //no actualizar si la propiedad no cambia/estado
    const {value, compare}=this.state;
    const should = nextState.value !== value || nextState.compare !== compare;
    console.log('shouldComponentUpdate', should)
    return should;


  }

  componentDidMount(){ //aqui se puede por ej cambiar datos
    console.log('componentDidMount')
    setTimeout(()=>{
      console.log('setState')
      this.setState({value: 'Learn React Now!'});   //cambiar estado
    },3000)
    setTimeout(()=>{
      this._varGlobal='Please';
      this.forceUpdate(); //sin esto no se actualiza el Please, pq es global, tpco se hace un setState -> no se renderiza
    },4000)
    setTimeout(()=>{
      console.log('setState compare')
      this.setState({compare:''});
    },5000)
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  render (){ //metodo
    console.log('render')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {`${this.state.value} ${this._varGlobal}`}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
