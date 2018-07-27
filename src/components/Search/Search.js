import React, { Component } from 'react';

import './Search.css'
class Search extends Component {
  render() {
    return <div className="search">
      <input id="search-box" className="search-input" type="search" value={this.props.state.search} onChange={(e) => this.props.actions.updateProperty("search", e.target.value)}/>
    </div>;
  }
}

export default Search;
