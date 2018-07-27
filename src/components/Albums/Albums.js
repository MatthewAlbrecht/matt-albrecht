import React, { Component } from 'react';

import Sidebar from '../Sidebar'
import AlbumsList from '../AlbumsList'

import './Albums.css'
class Albums extends Component {
  
  render() {
    return <div className="albums-page">
      <Sidebar Consumer={this.props.Consumer}></Sidebar>
      <AlbumsList Consumer={this.props.Consumer}></AlbumsList>
    </div>;
  }
}

export default Albums;
