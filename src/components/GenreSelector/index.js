import React from 'react';
import GenreSelector from './GenreSelector';

export default React.forwardRef((props, ref) => (
  <props.Consumer>
    {({state, actions}) => <GenreSelector {...props} state={state} actions={actions} ref={ref} />}
  </props.Consumer>
));