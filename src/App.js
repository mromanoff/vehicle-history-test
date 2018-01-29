import React, { Component } from 'react';
//import './styles/main.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './Gallery';
import styled, { ThemeProvider } from 'styled-components';
import media from 'styled-media-query';
import { CATEGORIES } from './constants';
import theme from './theme';

const Main = styled.main`
  padding: 0 ${props => props.theme.size.md};

  ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */
    margin-left: auto;
    margin-right: auto;
    max-width: 1170px; 
  `};
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header />
          <Main>
            <Gallery
              initialCategory="Animals"
              initialPage={1}
              itemsCountPerPage={20}
              categories={CATEGORIES}
            />
          </Main>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
