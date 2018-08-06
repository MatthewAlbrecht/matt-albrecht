import { qsStringify } from "../../utils/utils";
import { toast } from "react-toastify";

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
            pages: json.pages
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
              pages: json.pages
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
  updateProperty: function(target, value) {
    this.setState({ [target]: value });
  },
  rangeUpdate: function(target, value) {
    this.setState({
      ["greaterThan" + target]: value[0],
      ["lessThan" + target]: value[1]
    });
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
    greaterThanAlbumTotalTracks
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
    greaterThanAlbumTotalTracks
  };

  return qsStringify(qs) 
}