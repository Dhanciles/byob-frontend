import React, { Component } from 'react';  

export default class EndPointItem extends Component {
  constructor(props) {
  super(props)
  this.state = {
    selected: false
    }
  }

  handleClick = (event) => {
    this.setState({
      selected: !this.state.selected
    })
  }
  
  render() {
    const { method, path, examples, successful_status_code, returns } = this.props.data;
    let itemBody = '';
    let selectedClass = '';
    if(this.state.selected) {
      itemBody = (
        <div className="info-area">
          <h3>Example {Object.keys(examples)[0]}:</h3>
          <pre>{examples.request || 'None'}</pre>
          <p>Successful Status Code: <span>{successful_status_code}</span></p>
          <p>This endpoint returns: {returns}</p>
          <h3>Example {Object.keys(examples)[1]}:</h3>
          <pre>{examples.response}</pre>
        </div>
      )
      selectedClass = 'selected';
    }

    return (
      <div className={`endpoint-item-container ${selectedClass}`}>
        <div className="button-and-path-container">
          <button onClick={this.handleClick}>{method}</button>
          <span className="endpoint-text-container">
            <p className="url-path">{path}</p>
          </span>
        </div>
        {itemBody}
      </div>
    );
  }
}