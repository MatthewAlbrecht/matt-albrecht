import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import Album from '../Album'

import './AlbumsList.css'
class AlbumsList extends Component {
  constructor(props) {
    super(props);
    this.renderAlbums = this.renderAlbums.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.state.sort !== prevProps.state.sort ||
      this.props.state.search !== prevProps.state.search ||
      this.props.state.lessThanAlbumYear !== prevProps.state.lessThanAlbumYear ||
      this.props.state.greaterThanAlbumYear !== prevProps.state.greaterThanAlbumYear ||
      this.props.state.lessThanAlbumLengthInMinutes !== prevProps.state.lessThanAlbumLengthInMinutes ||
      this.props.state.greaterThanAlbumLengthInMinutes !== prevProps.state.greaterThanAlbumLengthInMinutes ||
      this.props.state.lessThanShortestTrackInSeconds !== prevProps.state.lessThanShortestTrackInSeconds ||
      this.props.state.greaterThanShortestTrackInSeconds !== prevProps.state.greaterThanShortestTrackInSeconds ||
      this.props.state.lessThanLongestTrackInSeconds !== prevProps.state.lessThanLongestTrackInSeconds ||
      this.props.state.greaterThanLongestTrackInSeconds !== prevProps.state.greaterThanLongestTrackInSeconds ||
      this.props.state.lessThanAlbumTotalTracks !== prevProps.state.lessThanAlbumTotalTracks ||
      this.props.state.greaterThanAlbumTotalTracks !== prevProps.state.greaterThanAlbumTotalTracks ||
      this.props.state.genresValue !== prevProps.state.genresValue
    ) {
      this.props.actions.getAlbums()      
    }
  }
  
  handleVisibilityChange(visible) {
    if (visible) {
      this.props.actions.getNextPage()
    }
  }
 
  componentDidMount() {
    this.props.actions.getAlbums()
  }

  renderAlbums() {
    if (this.props.state.albums && !this.props.state.albumsLoading) {
      let totalAlbums = this.props.state.albums.length
      return this.props.state.albums.map((album, i) => {
        if (i === totalAlbums - 1) {
          return (
            <VisibilitySensor key={i} onChange={(visible) => this.handleVisibilityChange(visible)}>
              <Album data={album} index={i}></Album>
            </VisibilitySensor>
          )
        }
        return <Album key={i} data={album} index={i}></Album>
      })
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
