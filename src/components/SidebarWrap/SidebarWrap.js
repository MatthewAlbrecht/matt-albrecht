import React, { Component } from 'react';

import Sidebar from '../Sidebar'
import AlbumAddEdit from '../AlbumAddEdit'

import './SidebarWrap.css'
class SidebarWrap extends Component {
  render() {
    let componentToRender
    let {sidebarComponent} = this.props.state
    if (sidebarComponent === "Sidebar") {
      componentToRender = <Sidebar Consumer={this.props.Consumer}></Sidebar>
    } else if (sidebarComponent === "addEditAlbum") {
      componentToRender = <AlbumAddEdit Consumer={this.props.Consumer}></AlbumAddEdit>
    }

    return <div className="sidebar">
      {componentToRender}
    </div>;
  }
}

export default SidebarWrap;
