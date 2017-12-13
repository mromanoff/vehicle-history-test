import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header role="banner" className="header">
        <h1 className="header__logo">
          <a
            href="/"
            className="header__link--exact-active header__link--active"
          >
            <img src="/" alt="logo" className="full-width" />
          </a>
        </h1>
      </header>
    );
  }
}

export default Header;
