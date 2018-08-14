import React from 'react';
import SidebarWrap from './SidebarWrap';

export default React.forwardRef((props, ref) => (
  <props.Consumer>
    {({state, actions}) => <SidebarWrap {...props} state={state} actions={actions} ref={ref} />}
  </props.Consumer>
));