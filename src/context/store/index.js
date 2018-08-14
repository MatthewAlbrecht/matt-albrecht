export default {
  // For context API store data...
  user: "Hello",
  page: 1,
  limit: 25,
  sort: "-orderNumber",
  light: "true",
  album: null,
  albumValues: null,
  albums: [],
  stats: {},
  primarySortOrder: "desc",
  primarySort: "orderNumber",
  secondarySortOrder: "asc",
  secondarySort: "",
  albumsLoading: false,
  startDate: new Date("06/01/18"),
  search: "",
  genre: "",
  genres: [],
  genresValue: [],
  lessThanAlbumYear: "",
  greaterThanAlbumYear: "",
  lessThanAlbumLengthInMinutes: "",
  greaterThanAlbumLengthInMinutes: "",
  lessThanShortestTrackInSeconds: "",
  greaterThanShortestTrackInSeconds: "",
  lessThanLongestTrackInSeconds: "",
  greaterThanLongestTrackInSeconds: "",
  lessThanAlbumTotalTracks: "",
  greaterThanAlbumTotalTracks: "",
  lessThanListenDate: "",
  greaterThanListenDate: "",
  username: "",
  password: "",
  local_access_token: "",
  spotify_access_token: "",
  isAuthenticated: null,
  attemptingLogin: false,
  loginStep: 0,
  sidebarComponent: "Sidebar",
  spotifyURI: ""
}