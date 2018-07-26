import React, { Component } from 'react';

class Sort extends Component {
  render() {
    if (this.props.hide) {
      return null
    }
    return <div>Sort</div>;
  }
}

export default Sort;
