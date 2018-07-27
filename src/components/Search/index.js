import React from 'react';
import Search from './Search';

export default React.forwardRef((props, ref) => (
  <props.Consumer>
    {({state, actions}) => <Search {...props} state={state} actions={actions} ref={ref} />}
  </props.Consumer>
));