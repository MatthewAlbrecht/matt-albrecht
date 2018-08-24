import React, { Component } from 'react';

import './NavBar.css'
import AuthAwareComponent from '../AuthAwareComponent';
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actionsActive: false
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  
  handleMouseEnter(e) {
    console.log('\n=== enter ===\n');
    this.setState({actionsActive: true})
  }
  
  handleMouseLeave(e) {
    console.log('\n=== leave ===\n');
    this.setState({actionsActive: false})
  }

  cnActionsMenu() {
    let result = ["actions-menu"]
    if (this.state.actionsActive) {
      result.push("active")
    }
    return result.join(" ")
  }
  
  cnNav() {
    let { sidebarClosed } = this.props.state
    return sidebarClosed ? "nav" : "nav sidebar-open"
  }

  render() {
    return <nav className={this.cnNav()}>
      <div className="total">
        <span className="total-label">Total Albums</span>
        <span className="total-value">{this.props.state.total}</span>
      </div>
      {/* <div className="list-options">
        <div className={this.cnActionsMenu()} onMouseEnter={(e) => this.handleMouseEnter(e)} onMouseLeave={(e) => this.handleMouseLeave(e)}>
          <div className="list-options-grid"></div>
          <div className="actions-open" style={{display: this.state.actionsActive ? "block": "none"}}>
            <h3 className="actions-label">Display Options</h3>
          </div>
        </div>
      </div> */}
      <div className="add">
        <AuthAwareComponent state={this.props.state}>
          <a className="add-icon" onClick={() => this.props.actions.updateProperty('sidebarComponent', 'addAlbum')}></a>
        </AuthAwareComponent>
        <a className="sidebar-mobile-button" onClick={() => this.props.actions.updateProperty("sidebarClosed", !this.props.state.sidebarClosed)}></a>
      </div>
      
    </nav>;
  }
}

export default NavBar;
