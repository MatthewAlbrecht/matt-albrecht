import React from 'react';
import Album from './Album';

export default React.forwardRef((props, ref) => (
  <props.Consumer>
    {({state, actions}) => <Album {...props} state={state} actions={actions} ref={ref} />}
  </props.Consumer>
));