import React, { Component, Fragment } from 'react';

import Sidebar from '../Sidebar'
import AlbumAddEdit from '../AlbumAddEdit'

import './SidebarWrap.css'
class SidebarWrap extends Component {

  cnSidebar() {
    let { sidebarClosed } = this.props.state
    return sidebarClosed ? "sidebar" : "sidebar open"
  }

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

    return <Fragment>
      <div className={this.cnSidebar()}>
        {componentToRender}
      </div>
    </Fragment>
  }
}

export default SidebarWrap;
