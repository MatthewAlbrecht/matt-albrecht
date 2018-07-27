import React from 'react';
import Sort from './Sort';

export default React.forwardRef((props, ref) => (
  <props.Consumer>
    {({state, actions}) => <Sort {...props} state={state} actions={actions} ref={ref} />}
  </props.Consumer>
));