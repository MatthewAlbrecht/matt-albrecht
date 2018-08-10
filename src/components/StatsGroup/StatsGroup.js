import React, { Component } from 'react';

import './StatsGroup.css'
class StatsGroup extends Component {
  renderMin() {
    let { min } = this.props.data
    if (!min) return null;
    return (
      <StatsItem value={min} label="min" toFixed={this.props.toFixedMinMax}></StatsItem>
    )
  }
  renderMax() {
    let { max } = this.props.data
    if (!max) return null;
    return (
      <StatsItem value={max} label="max" toFixed={this.props.toFixedMinMax}></StatsItem>
    )
  }
  renderAvg() {
    let { avg } = this.props.data
    if (!avg) return null;
    return (
      <StatsItem value={avg} label="avg" toFixed={this.props.toFixedAvg}></StatsItem>
    )
  }
  renderMode() {
    let { mode } = this.props.data
    if (!mode) return null;
    return (
      <StatsItem value={mode} label="mode" toFixed={this.props.toFixedMode}></StatsItem>
    )
  }
  renderTotal() {
    let { total } = this.props.data
    if (!total) return null;
    return (
      <StatsItem value={total} label="total"></StatsItem>      
    )
  }
  render() {
    return <div className="stats-group">
    <label className="label">{this.props.label}</label>
    <div className="stats-items">
      {this.renderMin()}
      {this.renderMax()}
      {this.renderAvg()}
      {this.renderTotal()}
      {this.renderMode()}
    </div>
  </div>;
  }
}

export default StatsGroup;

const StatsItem = ({label, value, toFixed}) => {
  if (toFixed !== null) {
    value = Number(value).toFixed(toFixed)
  }
  return (
    <div className="stats-item">
      <label className="label">{label}</label>
      <p className="stats-value">{value}</p>
    </div>
  )
}