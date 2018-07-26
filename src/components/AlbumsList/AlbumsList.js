import React, { Component } from 'react';
import { toast } from 'react-toastify';
import queryString from 'query-string'

import Album from '../Album'

import './AlbumsList.css'
class AlbumsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }
    this.getAlbums = this.getAlbums.bind(this);
    this.renderAlbums = this.renderAlbums.bind(this);
  }

  componentDidMount() {
    this.getAlbums()
  }
  
  getAlbums() {
    let qs = {
      page: 1,
      limit: 25,
      sort: "-orderNumber"
    }
    fetch(process.env.REACT_APP_API_URL + "albums?" + queryString.stringify(qs), {
      method: "get"
    })
      .then(res => res.json())
      .then(json => {
        console.log('\n---> json <---\n', json, '\n');
        if (json.error) {
          toast("Error Fetching Albums", { type: "error", autoClose: 3000 })
          return
        }
        this.setState({albums: json.docs || []})
      })
  }

  renderAlbums() {
    if (this.state.albums) {
      return this.state.albums.map((album, i) => <Album key={i} data={album}></Album>)
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
