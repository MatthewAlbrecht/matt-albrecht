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

  render() {
    return <nav className="nav">
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
      <AuthAwareComponent state={this.props.state}>
        <div className="add" onClick={() => this.props.actions.updateProperty('sidebarComponent', 'addEditAlbum')}>
          <span className="add-icon"></span>
        </div>
      </AuthAwareComponent>
    </nav>;
  }
}

export default NavBar;
