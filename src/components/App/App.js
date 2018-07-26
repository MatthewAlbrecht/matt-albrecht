import React, { Component } from "react";
import Header from '../Header'
import Skills from '../Skills'

import "./App.css";
class App extends Component {
  
  render() {
    return (
      <div className="app">
        <Header />
        <Skills />
      </div>
    );
  }
}

export default App;
