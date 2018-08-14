import React from 'react';
import AlbumForm from './AlbumForm';

export default React.forwardRef((props, ref) => (
  <props.Consumer>
    {({state, actions}) => <AlbumForm {...props} state={state} actions={actions} ref={ref} />}
  </props.Consumer>
));