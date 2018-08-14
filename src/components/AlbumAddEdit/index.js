import React from 'react';
import AlbumAddEdit from './AlbumAddEdit';

export default React.forwardRef((props, ref) => (
  <props.Consumer>
    {({state, actions}) => <AlbumAddEdit {...props} state={state} actions={actions} ref={ref} />}
  </props.Consumer>
));