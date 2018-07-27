import React, { Component } from 'react';

class Stats extends Component {
  render() {
    if (this.props.hide) {
      return null
    }
    return <div className="stats">
      
    </div>;
  }
}

export default Stats;
