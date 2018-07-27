import React, { Component } from 'react';

import './Filters.css'
class Filters extends Component {
  render() {
    if (this.props.hide) {
      return null
    }
    return <div className="filters">
      
    </div>;
  }
}

export default Filters;
