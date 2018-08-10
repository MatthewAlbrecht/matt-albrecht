import React from 'react';
import Stats from './Stats';

export default React.forwardRef((props, ref) => (
  <props.Consumer>
    {({state, actions}) => <Stats {...props} state={state} actions={actions} ref={ref} />}
  </props.Consumer>
));