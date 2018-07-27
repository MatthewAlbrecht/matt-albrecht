import { qsStringify } from '../../utils/utils';
import { toast } from 'react-toastify'

export default {
  getAlbums: function(value) {
    this.setState({albumsLoading: true})
    let { page, limit, sort, light, search } = this.state
    let qs = { page, limit, sort, light, search }
    fetch(process.env.REACT_APP_API_URL + "albums" + qsStringify(qs), {
      method: "get"
    })
    .then(res => res.json())
    .then(json => {
      console.log('\n---> json <---\n', json, '\n');
      if (json.error) {
        toast("Error Fetching Albums", { type: "error", autoClose: 3000 })
        return
      }
        this.setState({albums: json.docs || [], albumsLoading: false})
      })
  },
  handleSortUpdate: function(target, option){
    this.setState({[target]: option.value}, () => {
      let { primarySort, secondarySort, primarySortOrder, secondarySortOrder } = this.state
      let newSort = ""
      if (!primarySort && !secondarySort) {
        newSort = "-orderNumber"
      }
      if (primarySort){
        newSort += primarySortOrder === "asc" ? "" : "-"
        newSort += primarySort
      }
      if (secondarySort){
        newSort += newSort ? " " : ""
        newSort += secondarySortOrder === "asc" ? "" : "-"
        newSort += secondarySort
      }
      this.setState({sort: newSort})
    })
  },
  updateProperty: function(target, value) {
    this.setState({[target]: value})
  }
}