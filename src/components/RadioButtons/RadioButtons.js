import React, { Component } from 'react';

import './RadioButtons.css'
class RadioButtons extends Component {
  render() {
    return <div className="radio-box">
      {this.props.data.map(function(option, i) {
        return (
            <label className="radio-wrapper" key={i}>
              <input 
                type="radio" 
                value={option.value} 
                checked={this.props.value === option.value}  
                onChange={() => this.props.handleChange(this.props.target, option)} 
              />
              <span><span></span></span>
              {option.name}
            </label>
        )
      }, this)}
    </div>;
  }
}

export default RadioButtons;
