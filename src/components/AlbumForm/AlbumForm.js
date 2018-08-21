import React, { Component } from 'react';

import Input from '../Input'

import './AlbumForm.css'
class AlbumForm extends Component {
  handleSubmit(e) {
    if (this.props.isEditing) {
      this.props.actions.putAlbum(e)
    } else {
      this.props.actions.postAlbum(e)
    }
  }
  renderFooter() {
    if (this.props.isEditing) {
      return <div className="form-footer">
        <button className="primary-button" type="submit">Update Album</button>
        <button className="trash-button" type="button"></button>
      </div>
    } else {
      return <button className="primary-button" type="submit">Submit Album</button>
    }
  }
  render() {
    return <form className="album-form" onSubmit={(e) => this.handleSubmit(e)}>
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
    {this.renderFooter()}
  </form>;
  }
}

export default AlbumForm;
