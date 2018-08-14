import React, { Component } from 'react';

import Input from '../Input'

import './AlbumForm.css'
class AlbumForm extends Component {
  render() {
    return <form className="album-form" onSubmit={(e) => this.props.actions.postAlbum(e)}>
    <Input
      target="albumName"
      label="Album Name"
      type="text"
      value={this.props.state.albumValues.albumName}
      handleChange={this.props.actions.updateAlbumProperty}
    ></Input>
    <Input
      target="artistName"
      label="Artist Name"
      type="text"
      value={this.props.state.albumValues.artistName}
      handleChange={this.props.actions.updateAlbumProperty}
    ></Input>
    <Input
      target="albumTotalTracks"
      label="Total Tracks"
      type="text"
      value={this.props.state.albumValues.albumTotalTracks}
      handleChange={this.props.actions.updateAlbumProperty}
    ></Input>
    <Input
      target="albumLengthInMinutes"
      label="Album Length"
      type="text"
      value={this.props.state.albumValues.albumLengthInMinutes}
      handleChange={this.props.actions.updateAlbumProperty}
    ></Input>
    <Input
      target="albumYear"
      label="Album Year"
      type="text"
      value={this.props.state.albumValues.albumYear}
      handleChange={this.props.actions.updateAlbumProperty}
    ></Input>
    <Input
      target="recomendedBy"
      label="RecomendedBy"
      type="text"
      value={this.props.state.albumValues.recomendedBy}
      handleChange={this.props.actions.updateAlbumProperty}
    ></Input>
    <Input
      target="shortestTrackInSeconds"
      label="Shortest Track"
      type="text"
      value={this.props.state.albumValues.shortestTrackInSeconds}
      handleChange={this.props.actions.updateAlbumProperty}
    ></Input>
    <Input
      target="longestTrackInSeconds"
      label="Longest Track"
      type="text"
      value={this.props.state.albumValues.longestTrackInSeconds}
      handleChange={this.props.actions.updateAlbumProperty}
    ></Input>
    <Input
      target="rating"
      label="Rating"
      type="text"
      value={this.props.state.albumValues.rating}
      handleChange={this.props.actions.updateAlbumProperty}
    ></Input>
    <Input
      target="orderNumber"
      label="Order Number"
      type="text"
      value={this.props.state.albumValues.orderNumber}
      handleChange={this.props.actions.updateAlbumProperty}
    ></Input>
    <Input
      target="hasTitleTrack"
      label="Title Track"
      type="text"
      value={this.props.state.albumValues.hasTitleTrack}
      handleChange={this.props.actions.updateAlbumProperty}
    ></Input>
    <Input
      target="genres"
      label="Genres"
      type="text"
      value={this.props.state.albumValues.genres}
      handleChange={this.props.actions.updateAlbumProperty}
    ></Input>
    <Input
      target="spotifyURI"
      label="Spotify URI"
      type="text"
      value={this.props.state.albumValues.spotifyURI}
      handleChange={this.props.actions.updateAlbumProperty}
    ></Input>
    <Input
      target="listenDate"
      label="Listen Date"
      type="date"
      value={this.props.state.albumValues.listenDate}
      handleChange={this.props.actions.updateAlbumProperty}
    ></Input>
    {/* <div className="input-wrap">
      <label htmlFor="albumName" className="input-label">Album Name</label>
      <input id="albumName" className="album-input" name="albumName" type="text" value={this.props.albumName} onChange={(e) => this.props.handleChange(e)} />
    </div> */}
    {/* <div className="input-wrap">
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
    </div> */}
    <button className="primary-button" type="submit">Submit Album</button>
  </form>;
  }
}

export default AlbumForm;
