import React, { Component } from 'react';
//import './styles/main.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './Gallery';
import { ThemeProvider } from 'styled-components';
import { CATEGORIES } from './constants';
import theme from './theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
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
      </ThemeProvider>
    );
  }
}

export default App;
