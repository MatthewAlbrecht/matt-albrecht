import React, { Component } from 'react';

import Sidebar from '../Sidebar'
import AlbumsList from '../AlbumsList'

import './Albums.css'
class Albums extends Component {
  
  render() {
    return <div className="albums-page">
      <Sidebar></Sidebar>
      <AlbumsList></AlbumsList>
    </div>;
  }
}

export default Albums;
