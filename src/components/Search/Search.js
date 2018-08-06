import React, { Component } from 'react';

import './Search.css'
class Search extends Component {
  
  render() {
    return <div className="search">
      <input id={"search-" + this.props.target} className="search-input" type="search" value={this.props.state[this.props.target]} onChange={(e) => this.props.actions.updateProperty(this.props.target, e.target.value)}/>
    </div>;
  }
}

export default Search;
