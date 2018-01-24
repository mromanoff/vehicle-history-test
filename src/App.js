import React, { Component } from 'react';
import './styles/main.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Gallery from './Gallery';
import Gallery2 from './Gallery2';
import { CATEGORIES } from './constants';

class App extends Component {
  render() {
    return (
      <div className="application">
        <Header />
        <main className="container">
          {/*<Gallery initialQuery="dog"/>*/}
          <Gallery2
            initialCategory="Animals"
            initialPage="1"
            categories={CATEGORIES}
          />
          {/*<Categories initialCategory="Animals" />*/}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
