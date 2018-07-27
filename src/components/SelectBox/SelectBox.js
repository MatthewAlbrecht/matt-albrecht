import React, { Component } from "react";

import './SelectBox.css'
class SelectBox extends Component {
  render() {
    return (
      <div>
        <label className="label" htmlFor={this.props.id}> {this.props.label} </label>
        <div className={ this.props.disabled ? "custom-select disabled" : "custom-select" } >
          <select
            id={this.props.id}
            onChange={(e) => this.props.handleChange(this.props.target, e.target)}
            value={this.props.value}
            disabled={this.props.disabled}
          >
            <option default value=""> {this.props.defaultLabel} </option>

            {this.props.data.map(function(option, i) {
                return (
                  <option value={option.value} key={i}>
                    {option.name}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
    );
  }
}

export default SelectBox;
