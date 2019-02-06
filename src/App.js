import React, { Component } from 'react';
import './App.css';
import { EndPointContainer }  from './EndPointContainer.js'
import image from './images/taco.jpg'

class App extends Component {
  render() { 
    return (
      <div className="app-container">
        <header className="doc-header">
        <span className="logo-container">
          <h1 className="logo-text">Taco Restaurant API</h1>
        </span>
          <h3 className="header-subtext">Find Top Tacos Across the US!</h3>
        </header>
        <div className="taco-image-container">
          <img className="tacos-image" src={image} alt="A plate full of tacos"/>
        </div>
        <EndPointContainer />
      </div>
    );
  }
}

export default App;
