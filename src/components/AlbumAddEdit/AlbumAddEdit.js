import React, { Component } from "react";
import { withRouter } from 'react-router';
import { toast } from 'react-toastify';
import { getDurationStringFromTotalSeconds, parse } from '../../utils/utils'

import "./AlbumAddEdit.css";
import AlbumForm from "../AlbumForm";
import Search from "../Search";

class AlbumAddEdit extends Component {
  componentDidMount() {
    let { access_token } = parse(this.props.location.search.slice(1))
    if (access_token) {
      localStorage.setItem('spotify_access_token', access_token)
      this.props.actions.updateProperty('spotify_access_token', access_token)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.state.spotifyURI != this.props.state.spotifyURI) {
      if (this.props.state.spotifyURI.length === 22) {
        this.props.actions.searchAlbumFromId()
      } else if(this.props.state.spotifyURI.length === 0) {
        this.props.actions.updateProperty('albumValues', null)
        this.props.actions.updateProperty('album', null)
      }
    }
  }
  
  renderAlbum() {
    let { spotifyURI, album, albumValues } = this.props.state
    if (albumValues) {
      return (<AlbumForm Consumer={this.props.Consumer}></AlbumForm>)
    }
  }

  render() {
    return <div>
      <h2 className="sidebar-header-alt">
        Add Album
        <span className="close" onClick={e => this.props.actions.resetSidebarToDefault("Sidebar")}></span>
      </h2>
      <div className="sidebar-section search">
        <div className="sidebar-content">
          <Search Consumer={this.props.Consumer} placeholder="Spotify URI" target="spotifyURI" handleChange={this.props.actions.updateSpotifyURI}>
          </Search>
        </div>
      </div>    
      {this.renderAlbum()}
    </div>
  }
}
export default withRouter(AlbumAddEdit)