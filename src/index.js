import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import App from './components/App'
import AlbumAddEdit from './components/AlbumAddEdit'
import Albums from './components/Albums'
import registerServiceWorker from "./registerServiceWorker";

require('dotenv').config()



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/albums" component={Albums} />
      <Route path="/albums/new" component={AlbumAddEdit} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
