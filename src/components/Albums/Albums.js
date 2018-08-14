import React, { Component } from 'react';

import SidebarWrap from '../SidebarWrap'
import AlbumsList from '../AlbumsList'

import './Albums.css'
import NavBar from '../NavBar';
class Albums extends Component {
  
  render() {
    return <div className="albums-page">
      <SidebarWrap Consumer={this.props.Consumer}></SidebarWrap>
      <NavBar Consumer={this.props.Consumer}></NavBar>
      <AlbumsList Consumer={this.props.Consumer}></AlbumsList>
    </div>;
  }
}

export default Albums;
