import React, { Component } from 'react';
//import './styles/main.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './Gallery';
import styled, { ThemeProvider } from 'styled-components';
import media from 'styled-media-query';
import { CATEGORIES } from './constants';
import theme from './theme';

const Layout = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 50px;

  ${media.between('medium', 'large')`
    /* screen width is between 768px (medium) and 1170px (large) */
      padding-top: 130px;
  `} ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */
    padding-top: 60px;
  `};
`;

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
        <Layout>
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
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
