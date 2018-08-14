import React, { Component } from 'react';

import './Search.css'
class Search extends Component {
  
  render() {
    return <div className="search">
      {this.props.children}
      <input id={"search-" + this.props.target} name={"search-" + this.props.target} className="search-input" type="search" placeholder={this.props.placeholder || ""} value={this.props.state[this.props.target]} onChange={(e) => this.props.handleChange ? this.props.handleChange(this.props.target, e.target.value) : this.props.actions.updateProperty(this.props.target, e.target.value)}/>
    </div>;
  }
}

export default Search;
