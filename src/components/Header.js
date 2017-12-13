import React, { Component } from 'react';
import Logo from './Logo';

class Header extends Component {
  render() {
    return (
      <header role="banner" className="header">
        <h1 className="header__logo">
          <Logo/>
          <span>VehicleHistory code test</span>
        </h1>
      </header>
    );
  }
}

export default Header;
