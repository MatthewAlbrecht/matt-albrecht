import React, { PureComponent, createContext, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Home from './components/Home'
import AlbumAddEdit from './components/AlbumAddEdit'
import Albums from './components/Albums'
import Login from './components/Login'


// Import context store
import store from './context/store/'
import actions from './context/actions/'

// Initialize a context
const Context = createContext()
const { Provider, Consumer } = Context


class App extends PureComponent {
  constructor() {
    super();
    this.state = store
  }

  componentDidMount() {
    actions.gatherStateFromLocalStorage()
  }
  

  render() {
    for(let f in actions) {
      if(typeof actions[f] === "function"){
        actions[f] = actions[f].bind(this);
      }
    }

    return (
      <Provider value={{
        state: this.state,
        actions
      }}>
      <ToastContainer />
        <Router>
          <Fragment>
            <Route exact path="/" render={() => <Home Consumer={Consumer} />} />
            <Route exact path="/albums" render={() => <Albums Consumer={Consumer} />} />
            <Route path="/albums/new" render={() => <AlbumAddEdit Consumer={Consumer} />} />
            <Route path="/albums/login" render={() => <Login Consumer={Consumer} />} />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;