import React, { Component } from 'react';

import Album from '../Album'

import './AlbumsList.css'
class AlbumsList extends Component {
  constructor(props) {
    super(props);
    this.renderAlbums = this.renderAlbums.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.state.sort !== prevProps.state.sort) {
      this.props.actions.getAlbums()      
    }
  }
  

  componentDidMount() {
    this.props.actions.getAlbums()
  }

  renderAlbums() {
    if (this.props.state.albums && !this.props.state.albumsLoading) {
      return this.props.state.albums.map((album, i) => <Album key={i} data={album} index={i}></Album>)
    } else {
      return null
    }
  }

  render() {
    return <div className="albums">
      {this.renderAlbums()}
    </div>;

  }
}

export default AlbumsList;
