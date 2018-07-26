import React, { Component } from 'react';

import './AlbumForm.css'
class AlbumForm extends Component {
  render() {
    return <form className="album-form" onSubmit={(e) => this.props.handleSubmit(e)}>
    <div className="input-wrap">
      <label htmlFor="albumName" className="input-label">Album Name</label>
      <input id="albumName" className="album-input" name="albumName" type="text" value={this.props.albumName} onChange={(e) => this.props.handleChange(e)} />
    </div>
    <div className="input-wrap">
      <label htmlFor="artistName" className="input-label">Artist Name</label>
      <input id="artistName" className="album-input" name="artistName" type="text" value={this.props.artistName} onChange={(e) => this.props.handleChange(e)} />
    </div>
    <div className="input-wrap">
      <label htmlFor="albumTotalTracks" className="input-label">Total Tracks</label>
      <input id="albumTotalTracks" className="album-input" name="albumTotalTracks" type="text" value={this.props.albumTotalTracks} onChange={(e) => this.props.handleChange(e)} />
    </div>
    <div className="input-wrap">
      <label htmlFor="albumLengthInMinutes" className="input-label">Album Length</label>
      <input id="albumLengthInMinutes" className="album-input" name="albumLengthInMinutes" type="text" value={this.props.albumLengthInMinutes} onChange={(e) => this.props.handleChange(e)} />
    </div>
    <div className="input-wrap">
      <label htmlFor="albumYear" className="input-label">Year</label>
      <input id="albumYear" className="album-input" name="albumYear" type="text" value={this.props.albumYear} onChange={(e) => this.props.handleChange(e)} />
    </div>
    <div className="input-wrap">
      <label htmlFor="recomendedBy" className="input-label">Recomended By</label>
      <input id="recomendedBy" className="album-input" name="recomendedBy" type="text" value={this.props.recomendedBy} onChange={(e) => this.props.handleChange(e)} />
    </div>
    <div className="input-wrap">
      <label htmlFor="shortestTrackInSeconds" className="input-label">Shortest Track</label>
      <input id="shortestTrackInSeconds" className="album-input" name="shortestTrackInSeconds" type="text" value={this.props.shortestTrackInSeconds} onChange={(e) => this.props.handleChange(e)} />
    </div>
    <div className="input-wrap">
      <label htmlFor="longestTrackInSeconds" className="input-label">Longest Track</label>
      <input id="longestTrackInSeconds" className="album-input" name="longestTrackInSeconds" type="text" value={this.props.longestTrackInSeconds} onChange={(e) => this.props.handleChange(e)} />
    </div>
    <div className="input-wrap">
      <label htmlFor="rating" className="input-label">Rating</label>
      <input id="rating" className="album-input" name="rating" type="number" value={this.props.rating} onChange={(e) => this.props.handleChange(e)} />
    </div>
    <div className="input-wrap">
      <label htmlFor="orderNumber" className="input-label">Order Number</label>
      <input id="orderNumber" className="album-input" name="orderNumber" type="number" value={this.props.orderNumber} onChange={(e) => this.props.handleChange(e)} />
    </div>
    <div className="input-wrap">
      <label htmlFor="hasTitleTrack" className="input-label">Has Title Track</label>
      <input id="hasTitleTrack" className="album-input" name="hasTitleTrack" type="text" value={this.props.hasTitleTrack} onChange={(e) => this.props.handleChange(e)} />
    </div>
    <div className="input-wrap">
      <label htmlFor="genres" className="input-label">Genres</label>
      <input id="genres" className="album-input" name="genres" type="text" value={this.props.genres} onChange={(e) => this.props.handleChange(e)} />
    </div>
    <div className="input-wrap">
      <label htmlFor="spotifyURI" className="input-label">Spotify URI</label>
      <input id="spotifyURI" className="album-input" name="spotifyURI" type="text" value={this.props.spotifyURI} onChange={(e) => this.props.handleChange(e)} />
    </div>
    <div className="input-wrap">
      <label htmlFor="listenDate" className="input-label">Date</label>
      <input id="listenDate" className="album-input" name="listenDate" type="date" value={this.props.listenDate} onChange={(e) => this.props.handleChange(e)} />
    </div>
    <button className="primary-button" type="submit">Submit Album</button>
  </form>;
  }
}

export default AlbumForm;
