import React from 'react';
import logo from './logo.svg';
import './App.css';

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
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            { `${this.state.value} ${this._varGoblobal}` }
          </a>
        </header>
      </div>
    );
  }
}

export default App;
