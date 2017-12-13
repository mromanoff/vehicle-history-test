import React, { Component } from 'react';
import Loader from './Loader';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
    };
  }

  render() {
    if (this.state.isLoading) {
      return <Loader/>;
    }

    return (
      <section>
        <ul>
          <li>Tracks</li>
          <li>Sport Cars</li>
          <li>Tanks</li>
        </ul>
      </section>
    );
  }
}

export default Categories;
