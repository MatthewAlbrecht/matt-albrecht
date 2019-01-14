import React, { Component } from "react";

import "./Filters.css";
import RangeInput from "../RangeInput";
import GenreSelector from "../GenreSelector";

class Filters extends Component {
  constructor(props) {
    super(props);
    this.formatDaysFromStartToDate = this.formatDaysFromStartToDate.bind(this);
  }
  
  formatMinutesToHoursTip = (minutes) => Math.floor(minutes / 60) + " hr " + ("0" + String(minutes - Math.floor(minutes / 60) * 60)).slice(-2) + " min" 
  formatMinutesToHoursLabel = (minutes) => Math.floor(minutes / 60) + ":" + ("0" + String(minutes - Math.floor(minutes / 60) * 60)).slice(-2) 
  formatSecondsToMinutes = (seconds) => Math.floor(seconds / 60) + ":" + ("0" + String(seconds - Math.floor(seconds / 60) * 60)).slice(-2) 
  formatDaysFromStartToDate = (daysFromStart) => this.props.state.startDate.addDays(daysFromStart)
  render() {
    if (this.props.hide) {
      return null;
    }
    return (
      <div className="filters">
        <div className="filter-group">
          <div className="filter-item">
            <RangeInput
              min={1960}
              max={2019}
              defaultValue={[1960, 2019]}
              label="Album Year"
              Consumer={this.props.Consumer}
              target="AlbumYear"
              labelFormatter={val => val}
            ></RangeInput>
          </div>
        </div>
        <div className="filter-group">
          <div className="filter-item">
            <RangeInput
              min={0}
              max={180}
              defaultValue={[0, 180]}
              label="Album Length"
              Consumer={this.props.Consumer}
              target="AlbumLengthInMinutes"
              tipFormatter={this.formatMinutesToHoursTip}
              labelFormatter={this.formatMinutesToHoursLabel}
            ></RangeInput>
          </div>
        </div>
        <div className="filter-group">
          <div className="filter-item">
            <RangeInput
              min={1}
              max={36}
              defaultValue={[1, 36]}
              label="Total Tracks"
              Consumer={this.props.Consumer}
              target="AlbumTotalTracks"
              labelFormatter={val => val}
            ></RangeInput>
          </div>
        </div>
        <div className="filter-group">
          <div className="filter-item">
            <RangeInput
              min={0}
              max={520}
              defaultValue={[0, 520]}
              label="Shortest Track"
              Consumer={this.props.Consumer}
              target="ShortestTrackInSeconds"
              tipFormatter={this.formatSecondsToMinutes}
              labelFormatter={this.formatSecondsToMinutes}
            ></RangeInput>
          </div>
        </div>
        <div className="filter-group">
          <div className="filter-item">
            <RangeInput
              min={0}
              max={2045}
              defaultValue={[0, 2045]}
              label="Longest Track"
              Consumer={this.props.Consumer}
              target="LongestTrackInSeconds"
              tipFormatter={this.formatSecondsToMinutes}
              labelFormatter={this.formatSecondsToMinutes}
            ></RangeInput>
          </div>
        </div>
        <div className="filter-group">
          <div className="filter-item">
            <RangeInput
              min={0}
              max={365}
              defaultValue={[0, 365]}
              label="Listen Date"
              Consumer={this.props.Consumer}
              target="ListenDate"
              tipFormatter={this.formatDaysFromStartToDate}
              labelFormatter={this.formatDaysFromStartToDate}
            ></RangeInput>
          </div>
        </div>
        <div className="filter-group">
          <div className="filter-item">
            <GenreSelector
              Consumer={this.props.Consumer}
            >
            </GenreSelector>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;

// eslint-disable-next-line
Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  date = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  String(date.getFullYear()).substr(2,2)
  return date;
}