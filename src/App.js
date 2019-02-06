import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { EndPointContainer }  from './EndPointContainer.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <EndPointContainer />
      </div>
    );
  }
}

export default App;
