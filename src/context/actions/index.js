import { qsStringify } from "../../utils/utils";
import { toast } from "react-toastify";
import { getDurationStringFromTotalSeconds } from '../../utils/utils'

export default {
  getAlbums: function(value) {
    this.setState({ albumsLoading: true, page: 1 }, () => {
      fetch(process.env.REACT_APP_API_URL + "albums" + getQsFromState(this.state), {
        method: "get"
      })
      .then(res => res.json())
      .then(json => {
        console.log("\n---> json <---\n", json, "\n");
        if (json.error) {
          toast("Error Fetching Albums", { type: "error", autoClose: 3000 });
          return;
        }
        this.setState({
          albums: json.docs || [],
          albumsLoading: false,
          total: json.total,
          pages: json.pages,
          stats: json.stats
        });
      });
    });
  },
  getNextPage: function() {
    let { page, pages } = this.state;
    if (page < pages) {
      this.setState({page: page + 1}, () => {
        fetch(process.env.REACT_APP_API_URL + "albums" +  getQsFromState(this.state), {
          method: "get"
        })
        .then(res => res.json())
        .then(json => {
          console.log("\n---> json <---\n", json, "\n");
          if (json.error) {
            toast("Error Fetching Albums", { type: "error", autoClose: 3000 });
            return;
          }
          let newAlbums = [...this.state.albums, ...json.docs]
          console.log('\n---> newAlbums <---\n', newAlbums, '\n');
          this.setState({
            albums: newAlbums,
            total: json.total,
            pages: json.pages,
            stats: json.stats 
          });
        });
      })
    }
  },
  getGenres: function() {
    fetch(process.env.REACT_APP_API_URL + "albums/genres"/* + getQsFromState(this.state)*/, {
      method: "get"
    })
    .then(res => res.json())
    .then(json => {
      console.log("\n---> json <---\n", json, "\n");
      if (json.error) {
        toast("Error Fetching Genres", { type: "error", autoClose: 3000 });
        return;
      }
      this.setState({genres: json.docs || []});
    });
  },
  postAlbum: function(e) {
    e.preventDefault()
    fetch(process.env.REACT_APP_API_URL + "albums", {
      method: "post",
      body: JSON.stringify({...this.state.albumValues, spotifyAlbumData: this.state.album}),
      headers: {
        'x-access-token': this.state.local_access_token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      console.log('\n---> json <---\n', json, '\n');
      if (json.error) {
        if (json.error.code === 11000) {
          toast("Album Already Exists", { type: "error", autoClose: 3000 })
        } else {
          toast("Error Saving Album", { type: "error", autoClose: 3000 })
        }
      } else {
        toast("Album Added", { type: "success", autoClose: 3000 })
        this.setState({sidebarComponent: "Sidebar", album: null, albumValues: null, spotifyURI: ""})
      }
    })
    .catch(err => {
      console.log('\n---> err <---\n', err, '\n');
    })
  },
  login: function() {
    // if (this.state.attemptingLogin) return;
    this.setState({attemptingLogin: true})
    fetch(process.env.REACT_APP_API_URL + "login", {
      method: "put",
      body: JSON.stringify({username: this.state.username, password: this.state.password}),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(json => {
      this.setState({isAuthenticated: json.auth, access_token: json.token, attemptingLogin: false, username: "", password: "", loginStep: !json.auth ? 0 : this.state.loginStep})
      if (json.token) {
        localStorage.setItem("local_access_token", json.token)
      }
      if (!json.auth) {
        toast(json.message, { type: "error", autoClose: 3000 });          
      }
    })
    
  },
  handleSortUpdate: function(target, option) {
    this.setState({ [target]: option.value }, () => {
      let {
        primarySort,
        secondarySort,
        primarySortOrder,
        secondarySortOrder
      } = this.state;
      let newSort = "";
      if (!primarySort && !secondarySort) {
        newSort = "-orderNumber";
      }
      if (primarySort) {
        newSort += primarySortOrder === "asc" ? "" : "-";
        newSort += primarySort;
      }
      if (secondarySort) {
        newSort += newSort ? " " : "";
        newSort += secondarySortOrder === "asc" ? "" : "-";
        newSort += secondarySort;
      }
      this.setState({ sort: newSort });
    });
  },
  gatherStateFromLocalStorage: function() {
    let local_access_token = localStorage.getItem("local_access_token")
    let spotify_access_token = localStorage.getItem("spotify_access_token")
    fetch(process.env.REACT_APP_API_URL + "refresh", {
      method: "get",
      headers: {
        "x-access-token": local_access_token
      }
    })
    .then(res => res.json())
    .then(json => {
      console.log('\n---> json <---\n', json, '\n');
      if (json.auth) {
        this.setState({ isAuthenticated: json.auth, local_access_token: json.token, spotify_access_token })
      }
    })
  },
  searchAlbumFromId: function() {
    fetch('https://api.spotify.com/v1/albums/' + this.state.spotifyURI, {
    headers: {
      Authorization: "Bearer " + this.state.spotify_access_token
    }
  })
  .then(res => res.json())
  .then(json => {
    console.log('\n---> json <---\n', json, '\n');
    if (json.error) {
      if (json.error.status === 401) {
        window.location = process.env.REACT_APP_API_URL + "auth-login"
      }
      toast("Enter A Valid ID", { type: "error", autoClose: 3000 })
      return
    }
    
    let result = fashionAlbumData(json, this.state)
    console.log('\n---> result <---\n', result, '\n');

    this.setState({ album: json, albumValues: result})
  })
  .catch(err => {
    console.log('\n---> err <---\n', err, '\n');
  })
  
},
updateProperty: function(target, value) {
  this.setState({ [target]: value });
},
updateSpotifyURI: function(target, value) {
  if (value.length === 36) {
    this.setState({[target]: value.split(":")[2] || value})
  } else {
    this.setState({ [target]: value });
  }
},
rangeUpdate: function(target, value) {
  this.setState({
    ["greaterThan" + target]: value[0],
    ["lessThan" + target]: value[1]
  });
},
updateAlbumProperty: function(target, value) {
  let newAlbumValues = Object.assign({}, this.state.albumValues)
  newAlbumValues[target] = value
  this.setState({albumValues: newAlbumValues})
},
resetSidebarToDefault: function(sidebarValue) {
  this.setState({sidebarComponent: sidebarValue, album: null, albumValues: null, spotifyURI: ""})
},
updateGenres: function(genre) {
  let genres = [...this.state.genresValue]
  let index = genres.indexOf(genre)
  if (index >= 0) {
    console.log('\n---> genres.splice(index, 1) <---\n', genres.splice(index, 1), '\n');
  } else {
    genres.push(genre)
  }
  this.setState({ genresValue: genres })
}
};



function getQsFromState(state) {
  let {
    page,
    limit,
    sort,
    light,
    search,
    startDate,
    genresValue,
    lessThanAlbumYear,
    greaterThanAlbumYear,
    lessThanAlbumLengthInMinutes,
    greaterThanAlbumLengthInMinutes,
    lessThanShortestTrackInSeconds,
    greaterThanShortestTrackInSeconds,
    lessThanLongestTrackInSeconds,
    greaterThanLongestTrackInSeconds,
    lessThanAlbumTotalTracks,
    greaterThanAlbumTotalTracks,
    lessThanListenDate,
    greaterThanListenDate,
  } = state;
  let qs = {
    page,
    limit,
    sort,
    light,
    search,
    genres: genresValue.join(' '),
    lessThanAlbumYear,
    greaterThanAlbumYear,
    lessThanAlbumLengthInMinutes,
    greaterThanAlbumLengthInMinutes,
    lessThanShortestTrackInSeconds,
    greaterThanShortestTrackInSeconds,
    lessThanLongestTrackInSeconds,
    greaterThanLongestTrackInSeconds,
    lessThanAlbumTotalTracks,
    greaterThanAlbumTotalTracks,
    lessThanListenDate: startDate.addDays(lessThanListenDate),
    greaterThanListenDate: startDate.addDays(greaterThanListenDate),
  };
  
  return qsStringify(qs) 
}

// eslint-disable-next-line
Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  date = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  String(date.getFullYear()).substr(2,2)
  return date;
}

// eslint-disable-next-line
Date.prototype.toDateInputValue = (function() { 
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0,10);
});

function fashionAlbumData(album, state) {
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
    orderNumber: 0,
    spotifyURI: state.spotifyURI
  }
  return result
}