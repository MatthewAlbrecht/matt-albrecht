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
    } else if (sidebarComponent === "addAlbum") {
      componentToRender = <AlbumAddEdit Consumer={this.props.Consumer}></AlbumAddEdit>
    } else if (sidebarComponent === "editAlbum") {
      componentToRender = <AlbumAddEdit Consumer={this.props.Consumer} isEditing={true}></AlbumAddEdit>
    }

    return <div className="sidebar">
      {componentToRender}
    </div>;
  }
}

export default SidebarWrap;
