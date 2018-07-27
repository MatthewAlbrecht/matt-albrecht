import React, { Component } from "react";
import { withRouter } from 'react-router';
import { toast } from 'react-toastify';
import { getDurationStringFromTotalSeconds, parse } from '../../utils/utils'

import "./AlbumAddEdit.css";
import AlbumForm from "../AlbumForm/AlbumForm";

class AlbumAddEdit extends Component {
  constructor(props) {
    super(props);
    this.initialState = { spotifyURI: "", album: null, listenDate: "", albumName: "", artistName: "", albumLengthInMinutes: "", albumYear: "", albumTotalTracks: "", genres: "", recomendedBy: "", rating: "", hasTitleTrack: "", shortestTrackInSeconds: "", longestTrackInSeconds: "", orderNumber: ""}
    this.state = {
      ...this.initialState, 
      access_token: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.searchAlbumFromId = this.searchAlbumFromId.bind(this)
    this.fashionAlbumData = this.fashionAlbumData.bind(this)
    this.postAlbum = this.postAlbum.bind(this)
  }
  
  componentDidMount() {
    let { access_token } = parse(this.props.location.search.slice(1))
    if (access_token) {
      localStorage.setItem('access_token', access_token)
    } else if (localStorage.getItem('access_token')) {
      access_token = localStorage.getItem('access_token')
    }

    this.setState({access_token})
  }
  
  searchAlbumFromId() {
    fetch('https://api.spotify.com/v1/albums/' + this.state.spotifyURI, {
      headers: {
        Authorization: "Bearer " + this.state.access_token
      }
    })
      .then(res => res.json())
      .then(json => {
        console.log('\n---> json <---\n', json, '\n');
        if (json.error) {
          if (json.error.status === 401) {
            window.location = process.env.REACT_APP_API_URL + "login"
          }
          toast("Enter A Valid ID", { type: "error", autoClose: 3000 })
          return
        }

        this.fashionAlbumData(json)

        // this.setState({ album: json })
      })
      .catch(err => {
        console.log('\n---> err <---\n', err, '\n');
      })
    
  }

  
  postAlbum() {
    fetch(process.env.REACT_APP_API_URL + "albums", {
      method: "post",
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      if (json.error) {
        if (json.error.code === 11000) {
          toast("Album Already Exists", { type: "error", autoClose: 3000 })
        } else {
          toast("Error Saving Album", { type: "error", autoClose: 3000 })
        }
      } else {
        toast("Album Added", { type: "success", autoClose: 3000 })
        this.setState({...this.initialState})
      }
    })
    .catch(err => {
      console.log('\n---> err <---\n', err, '\n');
    })
  }
  
  fashionAlbumData(album) {
    let result = {
      listenDate: new Date().toDateInputValue(),
      albumName: album.name,
      artistName: album.artists.map(artist => artist.name).join(", "),
      albumLengthInMinutes: Math.round(album.tracks.items.reduce((length, track) => length + track.duration_ms, 0) / 1000 / 60),
      albumYear: album.release_date.slice(0,4),
      albumTotalTracks: album.tracks.items.length,
      genres: "",
      recomendedBy: "Matthew Albrecht",
      rating: 0,
      hasTitleTrack: album.tracks.items.reduce((has, track) => has || track.name.toLowerCase().includes(album.name.toLowerCase()), false),
      shortestTrackInSeconds: getDurationStringFromTotalSeconds(Math.round(album.tracks.items.reduce((song, track) => song && song.duration_ms < track.duration_ms ? song : track, null).duration_ms / 1000)),
      longestTrackInSeconds: getDurationStringFromTotalSeconds(Math.round(album.tracks.items.reduce((song, track) => song && song.duration_ms > track.duration_ms ? song : track, null).duration_ms / 1000)),
      orderNumber: 0
    }
    
    this.setState({...this.state, ...result, album}, () => {
      console.log('\n---> this.state <---\n', this.state, '\n');
    })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    this.postAlbum()
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value}, () => {
      if (!this.state.album) {
        if (this.state.spotifyURI.length === 36) {
          this.setState({spotifyURI: this.state.spotifyURI.split(":")[2]}, () => {
            this.searchAlbumFromId()
          })
        } else if (this.state.spotifyURI.length === 22) {
          this.searchAlbumFromId()
        }
      }
    })
  }

  handleBackButtonClick(e) {
    e.preventDefault()
    this.setState({...this.initialState})
  }
  

  renderContent() {
    if (!this.state.access_token) {
      // not authenticated
      return (
        <a className="primary-button" href={process.env.REACT_APP_API_URL + "login"}>Login</a>
      )
    } else if (this.state.access_token && !this.state.album) {
      // authenticated but hasnt search for an album
      return (
        <form className="album-id-form" onSubmit={(e) => e.preventDefault()}>
          <input className="fullscreen-input" id="spotifyURI" name="spotifyURI" type="text" maxLength="36" placeholder="Spotify Album ID" value={this.state.spotifyURI} onChange={(e) => this.handleChange(e)}></input>
        </form>
      )
    } else if (this.state.album) {
      // album found from spotify
      return (
        <AlbumForm {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} ></AlbumForm>
      )
    }
  }

  renderBackButton() {
    if (this.state.album) {
      return <button type="button" className="sticky-button top-left" onClick={(e) => this.handleBackButtonClick(e)}></button>
    }
    return null
  }
  
  render() {
    return (
      <div className="album-add-edit" >
        {this.renderBackButton()}
        {this.renderContent()}
      </div>
    );
  }
}

export default withRouter(AlbumAddEdit);

// eslint-disable-next-line
Date.prototype.toDateInputValue = (function() { 
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0,10);
});