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
    }

    this.styleRatingBox = this.styleRatingBox.bind(this);
    this.myIinterval = null
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.styleRatingBox()
      setTimeout(() => {
        clearInterval(this.myIinterval)
      }, 2000);
    },400);
    setTimeout(() => {
      this.styleRatingBox()
      this.setState({showRating: true})
    }, 2400);
    setTimeout(() => {  
      this.styleRating()
    }, 1400);
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
      let i = 0
      this.myIinterval = setInterval(() => {
        this.setState({ratingBoxStyle: {...this.state.ratingBoxStyle, background: json[i % 20]}})
        i++
      }, 2000 / Math.floor(data.rating * 2))
      this.setState({ratingBoxStyle: {transform: `scale(${data.rating/10})`}}) 
    } else {
      this.setState({ratingBoxStyle: {...this.state.ratingBoxStyle, opacity: "0.35"}})
    }
  }

  styleRating() {
    this.setState({ratingStyle: { opacity: "1", transform: "none" }})
  }

  render() {
    let { data } = this.props
    return <div className="album">
      <div className="album-img" style={this.styleAlbumImg()}>
      </div>
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
          <h3 className="rating" style={this.state.ratingStyle}>{data.rating.toFixed(1)}</h3>
        </div>
      </div>
    </div>;
  }
}

export default Album;
