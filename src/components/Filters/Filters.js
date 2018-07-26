import React, { Component } from 'react';

import './Filters.css'
class Filters extends Component {
  render() {
    if (this.props.hide) {
      return null
    }
    return <div>Filters</div>;
  }
}

export default Filters;
