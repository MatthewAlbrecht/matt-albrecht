import React from 'react';
import RangeInput from './RangeInput';

export default React.forwardRef((props, ref) => (
  <props.Consumer>
    {({state, actions}) => <RangeInput {...props} state={state} actions={actions} ref={ref} />}
  </props.Consumer>
));