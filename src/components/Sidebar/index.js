import React from 'react';
import Sidebar from './Sidebar';

export default React.forwardRef((props, ref) => (
  <props.Consumer>
    {({state, actions}) => <Sidebar {...props} state={state} actions={actions} ref={ref} />}
  </props.Consumer>
));