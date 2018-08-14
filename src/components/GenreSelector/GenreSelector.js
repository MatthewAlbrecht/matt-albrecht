import React, { Component } from 'react';

import './GenreSelector.css'
// import Search from '../Search';
class GenreSelector extends Component {
  componentDidMount() {
    this.props.actions.getGenres()
  }

  renderGenres() {
    if (this.props.state.genres && this.props.state.genresValue && this.props.state.genres.length) {
      return this.props.state.genres.map((genre, i) => (
        <span key={i} className={this.props.state.genresValue.includes(genre) ? "genre selected" : "genre"} onClick={() => this.props.actions.updateGenres(genre)}>{genre}</span>
      ))
    }
  }

  render() {
    return <div className="genre-selector">
      <label htmlFor="search-genre" className="label">Genres</label>
      {/* <Search Consumer={this.props.Consumer} target="genre"></Search> */}
      <div className="genres">
        {this.renderGenres()}
      </div>
    </div>;
  }
}

export default GenreSelector;
