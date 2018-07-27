import React from 'react';
import AlbumsList from './AlbumsList';

export default React.forwardRef((props, ref) => (
  <props.Consumer>
    {({state, actions}) => <AlbumsList {...props} state={state} actions={actions} ref={ref} />}
  </props.Consumer>
));