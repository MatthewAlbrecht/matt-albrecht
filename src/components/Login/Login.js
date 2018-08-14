import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom'

import './Login.css'
class Login extends Component {
  constructor(props) {
    super(props);
    this.renderStep = this.renderStep.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e) {
    let { loginStep } = this.props.state
    if (e.keyCode === 13) {
      if (loginStep + 1 > 1) this.props.actions.login();
      this.props.actions.updateProperty("loginStep", loginStep + 1 )
    }
  } 

  renderStep() {
    let { loginStep, isAuthenticated } = this.props.state
    if (loginStep === 0) {
      return <Fragment>
        <label className="label">Username</label>
        <input className="login-input" type="password" value={this.props.state.username} onChange={(e) => this.props.actions.updateProperty("username", e.target.value)}/>
      </Fragment>
    }
    if (loginStep === 1) {
      return <Fragment>
        <label className="label">Password</label>
        <input className="login-input" type="password" value={this.props.state.password} onChange={(e) => this.props.actions.updateProperty("password", e.target.value)}/>
      </Fragment>
    }
    if (isAuthenticated === true) {
      return <Redirect to="/albums"></Redirect>
    }
  }

  render() {
    return <div className="login-page" onKeyUp={(e) => this.handleKeyUp(e)}>
      {this.renderStep()}
    </div>;
  }
}

export default Login;
