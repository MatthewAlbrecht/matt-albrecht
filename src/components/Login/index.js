import React from 'react';
import Login from './Login';

export default React.forwardRef((props, ref) => (
  <props.Consumer>
    {({state, actions}) => <Login {...props} state={state} actions={actions} ref={ref} />}
  </props.Consumer>
));