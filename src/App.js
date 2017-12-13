import React, { Component } from 'react';
import './styles/main.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';

class App extends Component {
  render() {
    return (
      <div className="application">
        <Header />
        <main className="container">
          <Categories />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
