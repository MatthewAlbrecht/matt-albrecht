import React, { Component, Fragment } from 'react';

class AuthAwareComponent extends Component {
  render() {
    let { isAuthenticated } = this.props.state
    if (isAuthenticated) {
      return <Fragment>{this.props.children}</Fragment>
    }
    return null;
  }
}

export default AuthAwareComponent;
