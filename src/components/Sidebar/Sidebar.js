import React, { Component, Fragment } from "react";

import Filters from "../Filters";
import Stats from "../Stats";
import Sort from "../Sort";
import Search from "../Search";

import "./Sidebar.css";
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterHidden: true,
      statHidden: true,
      sortHidden: true,
    }
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick(target) {
    this.setState({[target + "Hidden"]: !this.state[target + "Hidden"]})
  }
  
  cnArrow = (target) => this.state[target + "Hidden"] ? "arrow down" : "arrow up"
  cnSidebarContent = (target) => this.state[target + "Hidden"] ? "sidebar-content hide " + target : "sidebar-content " + target

  render() {
    return (
      <Fragment>
        <div className="sidebar-section search">
          <div className="sidebar-content">
            <Search Consumer={this.props.Consumer} target="search"></Search>
          </div>
        </div>
        <div className="sidebar-section">
          <h3 className="sidebar-header" onClick={() => this.handleHeaderClick("sort")}>Sort <span className={this.cnArrow("sort")}></span></h3>
          <div className={this.cnSidebarContent("sort")}>
            <Sort Consumer={this.props.Consumer}></Sort>
          </div>
        </div>
        <div className="sidebar-section">
          <h3 className="sidebar-header" onClick={() => this.handleHeaderClick("filter")}>Filter <span className={this.cnArrow("filter")}></span></h3>
          <div className={this.cnSidebarContent("filter")}>
            <Filters Consumer={this.props.Consumer}></Filters>
          </div>
        </div>
        <div className="sidebar-section">
          <h3 className="sidebar-header" onClick={() => this.handleHeaderClick("stat")}>Stats <span className={this.cnArrow("stat")}></span></h3>
          <div className={this.cnSidebarContent("stat")}>
            <Stats Consumer={this.props.Consumer}></Stats>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Sidebar;
