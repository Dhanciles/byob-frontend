import React, { Component } from 'react';
import './App.css';
import { EndPointContainer }  from './EndPointContainer.js'

class App extends Component {
  render() { 
    return (
      <div className="app-container">
        <aside className="doc-aside">
        <span className="logo-container">
          <h1 className="logo-text">Taco Restaurants API</h1>
        </span>
          <h3 className="header-subtext">Find Top Taco Restaurants Across the US!</h3>
        </aside>
        <EndPointContainer />
      </div>
    );
  }
}

export default App;
