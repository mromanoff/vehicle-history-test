import React, { Component } from 'react';
import './styles/main.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './Gallery';
import { CATEGORIES } from './constants';

class App extends Component {
  render() {
    return (
      <div className="application">
        <Header />
        <main className="container">
          <Gallery
            initialCategory="Animals"
            initialPage={1}
            itemsCountPerPage={20}
            categories={CATEGORIES}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
