import React from 'react';

class HyperLink extends React.Component {
    render () {
        return (
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            {/* { `${this.state.value} ${this._varGoblobal}` } */}
          </a>
        )
    }
}

export default HyperLink;



