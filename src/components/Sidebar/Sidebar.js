import React, { Component } from "react";

import "./Sidebar.css";
import Filters from "../Filters";
import Stats from "../Stats";
import Sort from "../Sort";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterHidden: true,
      statsHidden: true,
      sortHidden: true,
    }
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick(target) {
    this.setState({[target + "Hidden"]: !this.state[target + "Hidden"]})
  }
  
  cnArrow = (target) => this.state[target + "Hidden"] ? "arrow down" : "arrow up"

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-section">
          <h3 className="sidebar-header" onClick={() => this.handleHeaderClick("filter")}>Filter <span className={this.cnArrow("filter")}></span></h3>
          <div className="sidebar-content">
            <Filters hide={this.state.filterHidden}></Filters>
          </div>
        </div>
        <div className="sidebar-section">
          <h3 className="sidebar-header" onClick={() => this.handleHeaderClick("stats")}>Stats <span className={this.cnArrow("stats")}></span></h3>
          <div className="sidebar-content">
            <Stats hide={this.state.statsHidden}></Stats>
          </div>
        </div>
        <div className="sidebar-section">
          <h3 className="sidebar-header" onClick={() => this.handleHeaderClick("sort")}>Sort <span className={this.cnArrow("sort")}></span></h3>
          <div className="sidebar-content">
            <Sort hide={this.state.sortHidden}></Sort>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
