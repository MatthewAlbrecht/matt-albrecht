import React, { Component } from "react";
import Header from '../Header'
import Skills from '../Skills'

import "./Home.css";
class Home extends Component {
  
  render() {
    return (
      <div className="app">
        <Header />
        <Skills />
      </div>
    );
  }
}

export default Home;
