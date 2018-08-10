import React, { Component } from 'react';

import './Stats.css'
import StatsGroup from '../StatsGroup';
class Stats extends Component {
  render() {
    if (this.props.hide) {
      return null
    }
    return <div className="stats">
      <StatsGroup
        data={(this.props.state.stats && this.props.state.stats.albumTotalTracks) || {}}
        label="Total Tracks"
        toFixedAvg={1}
      ></StatsGroup>
      <StatsGroup
        data={(this.props.state.stats && this.props.state.stats.rating) || {}}
        label="Rating"
        toFixedAvg={1}
        toFixedMinMax={1}
        toFixedMode={1}
      ></StatsGroup>
      <StatsGroup
        data={(this.props.state.stats && this.props.state.stats.albumYear) || {}}
        label="Album Year"
        toFixedAvg={0}
      ></StatsGroup>
      <StatsGroup
        data={(this.props.state.stats && this.props.state.stats.albumLengthInMinutes) || {}}
        label="Album Length (m)"
        toFixedAvg={0}
      ></StatsGroup>
    </div>;
  }
}

export default Stats;
