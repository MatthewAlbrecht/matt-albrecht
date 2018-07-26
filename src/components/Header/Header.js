import React, { Component } from "react";
import $ from "jquery";
import { TweenMax } from "gsap/TweenMax";

import "./Header.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canModify: true
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.parallaxIt = this.parallaxIt.bind(this);
  }

  handleMouseMove(e) {
    if (this.state.canModify) {
      this.parallaxIt(e, ".big.planet", -75, 7);
      this.parallaxIt(e, ".small.planet", -500, 7);
      this.parallaxIt(e, ".medium.planet", -1000, 7);
    }
  }

  parallaxIt(e, target, movement, multiplier) {
    this.setState({ canModify: false });
    setTimeout(() => {
      this.setState({ canModify: true });
    }, 100);

    var $this = $("#app-header");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    console.log("relX, relY, $this =", relX, relY, $this);

    TweenMax.to(target, 1, {
      x: ((relX - $this.width() / 3) / $this.width()) * movement,
      y: (((relY - ($this.height() / 3) * 2) / $this.height()) * movement) /
        multiplier
    });
  }

  render() {
    return (
      <header
        id="app-header"
        onMouseMove={e => this.handleMouseMove(e)}
        className="app-header"
      >
        <div className="big planet" />
        <div className="small planet" />
        <div className="medium planet" />
        <h1 className="name">
          <span />Matt Albrecht
        </h1>
        <h1 className="title">
          <span />Full Stack Developer
        </h1>
        <h3 className="blurb">
          I also consider myself a professionally fun person.
        </h3>
        <div className="landing-ctas">
          <p className="cta-chops">See My Chops<span className="arrow-circle down"></span></p>
          <p className="cta-contact">Contact Me<span className="arrow-circle"></span></p>
        </div>
      </header>
    );
  }
}

export default Header;
