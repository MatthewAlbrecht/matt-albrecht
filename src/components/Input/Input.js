import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div className="input-wrap">
        <label htmlFor={this.props.target} className="label">{this.props.label}</label>
        <input id={this.props.target} className="album-input" name={this.props.target} type={this.props.type} value={this.props.value} onChange={(e) => this.props.handleChange(this.props.target, e.target.value)} />
      </div>
    );
  }
}

export default Input;
