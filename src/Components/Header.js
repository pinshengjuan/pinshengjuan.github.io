import React, { Component } from "react";
// https://www.npmjs.com/package/@jsasz/react-typist
import Typist from "react-typist";
import "../../node_modules/react-typist/dist/Typist.css";

// https://www.npmjs.com/package/react-device-detect
import { isMobile, isTablet } from "react-device-detect";

class Header extends Component {
  render() {
    if (this.props.data) {
      var hello = "> Hello,";
      var name = this.props.data.name;
      this.nameGreetings = "> I'm " + name;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    this.h1Style = {
      fontSize: "45px",
    };
    if (isMobile || isTablet) {
      var nameGreetingsLen = this.nameGreetings.length + 1; //Since "_" has to be calculated
      const actualFontSize = Math.floor(
        ((window.screen.width) * 0.85/ nameGreetingsLen)
      );
      this.h1Style = {
        fontSize: actualFontSize,
      };
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">
              <div style={{ fontSize: this.h1Style.fontSize }}>
                <Typist cursor={{ element: "_" }}>
                  {hello}
                  <br />
                  {this.nameGreetings}
                </Typist>
              </div>
            </h1>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          {/* <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a> */}
          <a className="smoothscroll" href="#about">
            <i className="fa fa-angle-down"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
