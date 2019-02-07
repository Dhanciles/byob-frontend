import React, { Component } from 'react';
import './App.css';
import { EndPointContainer }  from './EndPointContainer.js'

class App extends Component {
  render() { 
    return (
      <div className="app-container">
        <header className="doc-header">
        <span className="logo-container">
          <h1 className="logo-text">Taco Restaurants API</h1>
        </span>
          <h3 className="header-subtext">Find Top Taco Restaurants Across the US!</h3>
        </header>
        <section className="about">
          <h2>Welcome!</h2>
          <p>This API is designed to provide data on many of the best taco restaurants in cities all across the US. All of the endpoints below exist at the base URL <a href="https://kylie-joel-byob.herokuapp.com" target="_blank">https://kylie-joel-byob.herokuapp.com</a>. Please enjoy the data we've provided. If you're building an app or website that uses this data, let us know! We'd love to hear from you!</p>
        </section>
        <EndPointContainer />
      </div>
    );
  }
}

export default App;
