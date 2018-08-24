import React, { Component } from 'react';
import json from '../../utils/colorPalette'

import './Album.css'
class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingBoxStyle: null,
      ratingStyle: null,
      showRating: false,
      backgroundImageUrl: "",
    }

    this.styleRatingBox = this.styleRatingBox.bind(this);
    this.handleAlbumClick = this.handleAlbumClick.bind(this);
    this.myInterval = null
    this.myTimeout1 = null
    this.myTimeout2 = null
    this.myTimeout3 = null
    this.myTimeout4 = null
  }
  
  componentDidMount() {
    let baseNumber = 400 // + (80 * this.props.index)
    this.myTimeout1 = setTimeout(() => {
      this.styleRatingBox()
      this.myTimeout2 = setTimeout(() => {
        clearInterval(this.myInterval)
      }, 2000 );
    }, baseNumber);
    this.myTimeout3 = setTimeout(() => {
      this.styleRatingBox()
      this.setState({showRating: true})
    }, baseNumber + 2000);
    this.myTimeout4 = setTimeout(() => {  
      this.styleRating()
    }, baseNumber + 1000);

    if (this.props.data && this.props.data.spotifyAlbumData) {
      let { images } = this.props.data.spotifyAlbumData
      let image = images
        .filter(image => image.width > 80)
        .reduce((smallest, image) => {
          if (!smallest) return image;
          return image.width < smallest.width ? image : smallest
        }, null)
      if (image) {
        this.setState({backgroundImageUrl: image.url})
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
    clearTimeout(this.myTimeout1)
    clearTimeout(this.myTimeout2)
    clearTimeout(this.myTimeout3)
    clearTimeout(this.myTimeout4)
  }

  handleAlbumClick(_id) {
    console.log('\n---> _id <---\n', _id, '\n');
    this.props.actions.updateProperty('selectedAlbum', _id)
    this.props.actions.updateProperty('sidebarComponent', 'editAlbum')
  }

  styleAlbumImg() {
    if (this.props.data && this.props.data.spotifyAlbumData) {
      let { images } = this.props.data.spotifyAlbumData
      let image = images
        .filter(image => image.width > 80)
        .reduce((smallest, image) => {
          if (!smallest) return image;
          return image.width < smallest.width ? image : smallest
        }, null)
      if (image) {
        return {backgroundImage: `url('${image.url}')`}
      }
    }
    return {}
  }

  styleRatingBox() {
    let { data } = this.props
    if (!this.state.ratingBoxStyle) {
      this.setState({ratingBoxStyle: {transform: `scale(${data.rating/10})`, background: json[Math.round(((data.rating / 10) * 20) - 1)]}}) 
    } else {
      this.setState({ratingBoxStyle: {transform: `scale(${data.rating/10})`, background: json[Math.round(((data.rating / 10) * 20) - 1)], opacity: "0.35"}})
    }
  }

  styleRating() {
    this.setState({ratingStyle: { opacity: "1", transform: "none" }})
  }

  render() {
    let { data } = this.props
    return <div className="album" onClick={() => this.handleAlbumClick(data._id)}>
      <div className="album-img" style={this.styleAlbumImg()}>
      </div>
      <img className="album-img-grid" src={this.state.backgroundImageUrl}></img>
      <div className="album-divider">

      </div>
      <div className="album-details">
        <div className="details">
          <h3 className="album-title">{data.albumName}</h3>
          <h4 className="artist-name">by {data.artistName}</h4>
        </div>
        <div className="album-year">{data.albumYear}</div>
      </div>
      <div className="album-rating">
        <div className="rating-box" style={this.state.ratingBoxStyle}></div>
        <div className="rating-wrap">
          <h3 className="rating" style={this.state.ratingStyle}>{data.rating === 10 ? 10 : data.rating.toFixed(1)}</h3>
        </div>
      </div>
    </div>;
  }
}

export default Album;
