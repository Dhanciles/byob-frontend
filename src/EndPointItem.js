import React, { Component } from 'react';  

export default class EndPointItem extends Component {
  constructor(props) {
  super(props)
  this.state = {
    selected: false
    }
  }
  
  render() {
    const { method, path, } = this.props.data
    return (
      <div className="endpoint-item-container">
        <button>{method}</button>
        <span className="endpoint-text-container">
          <p className="url-path">{path}</p>
        </span>
      </div>
    );
  }
}