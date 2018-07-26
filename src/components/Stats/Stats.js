import React, { Component } from 'react';

class Stats extends Component {
  render() {
    if (this.props.hide) {
      return null
    }
    return <div>Stats</div>;
  }
}

export default Stats;
