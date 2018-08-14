import React from 'react';
import NavBar from './NavBar';

export default React.forwardRef((props, ref) => (
  <props.Consumer>
    {({state, actions}) => <NavBar {...props} state={state} actions={actions} ref={ref} />}
  </props.Consumer>
));