import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

// Global style
injectGlobal`
  body {
    background-color: white;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
`;
