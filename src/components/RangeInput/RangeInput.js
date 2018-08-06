import React, { Component } from 'react';

import Tooltip from "rc-tooltip";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import './RangeInput.css'

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

class RangeInput extends Component {
  componentDidMount() {
    this.props.actions.rangeUpdate(this.props.target, this.props.defaultValue)
  }
  
  render() {
    return <div className="range-wrap">
    <div className="range-info">
      <label className="label range">{this.props.label}</label>
      <label className="label range">{this.props.labelFormatter(this.props.state["greaterThan" + this.props.target])} - {this.props.labelFormatter(this.props.state["lessThan" + this.props.target])}</label>
    </div>
    <Range
      min={this.props.min}
      max={this.props.max}
      handle={handle}
      defaultValue={this.props.defaultValue}
      onAfterChange={(value) => this.props.actions.rangeUpdate(this.props.target, value)}
      tipFormatter={this.props.tipFormatter}
    />
  </div>;
  }
}

export default RangeInput;
