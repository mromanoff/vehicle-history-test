import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <div className="loader-wrapper">
        <div className="loader">
          <div className="loader-inner" />
        </div>
      </div>
    );
  }
}

export default Loader;
