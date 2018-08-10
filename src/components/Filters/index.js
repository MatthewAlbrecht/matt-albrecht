import React from 'react';
import Filters from './Filters';

export default React.forwardRef((props, ref) => (
  <props.Consumer>
    {({state, actions}) => <Filters {...props} state={state} actions={actions} ref={ref} />}
  </props.Consumer>
));