import React, { Component } from 'react';

import RadioButtons from '../RadioButtons/RadioButtons';
import SelectBox from '../SelectBox/SelectBox';

import './Sort.css'
class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primarySortOrder: "desc",
      primarySort: "orderNumber",
      secondarySortOrder: "asc",
      secondarySort: "",
      radioOptions: [
        {
          name: "Ascending",
          value: "asc",
          string: ""
        },
        {
          name: "Descending",
          value: "desc",
          string: "-"
        },
      ],
      sortOptions: [
        { 
          value: "rating",
          name: "Rating"
        },
        { 
          value: "albumYear",
          name: "Album Year"
        },
        { 
          value: "albumLengthInMinutes",
          name: "Album Length"
        },
        { 
          value: "albumTotalTracks",
          name: "Total Tracks"
        },
        { 
          value: "orderNumber",
          name: "Listen Order"
        },
        { 
          value: "listenDate",
          name: "Listen Date"
        },
        { 
          value: "albumName",
          name: "Album Name"
        },
        { 
          value: "artistName",
          name: "Artist Name"
        },
        // { 
        //   value: "shortestTrackInSeconds",
        //   name: "Shortest Track"
        // },
        // { 
        //   value: "longestTrackInSeconds",
        //   name: "Longest Track"
        // }
      ]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(target, option) {
    this.props.actions.handleSortUpdate(target, option)
    console.log('\n---> this.props.state <---\n', this.props.state, '\n');
    // this.props.actions.getAlbums()
  }
  
  render() {
    if (this.props.hide) {
      return null
    }
    return <div className="sort-wrap">
      <div className="sort-item primary">
        <div className="sort-item-dropdown">
          <SelectBox
            id="primary-sort"
            label="Primary Sort"
            defaultLabel="None Selected"
            disabled={false}
            target="primarySort"
            value={this.props.state.primarySort}
            data={this.state.sortOptions}
            handleChange={this.handleChange}
            ></SelectBox>
        </div>
        <div className="sort-item-radio">
          <RadioButtons 
            data={this.state.radioOptions} 
            value={this.props.state.primarySortOrder} 
            handleChange={this.handleChange}
            target="primarySortOrder"
          ></RadioButtons>
        </div>
      </div>
      <div className="sort-item secondary">
        <div className="sort-item-dropdown">
          <SelectBox
            id="secondary-sort"
            label="Secondary Sort"
            defaultLabel="None Selected"
            disabled={false}
            target="secondarySort"
            value={this.props.state.secondarySort}
            data={this.state.sortOptions}
            handleChange={this.handleChange}
            ></SelectBox>
        </div>
        <div className="sort-item-radio">
          <RadioButtons 
            data={this.state.radioOptions} 
            value={this.props.state.secondarySortOrder} 
            handleChange={this.handleChange}
            target="secondarySortOrder"
          ></RadioButtons>
        </div>
      </div>
    </div>;
  }
}

export default Sort;
