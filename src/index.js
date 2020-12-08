import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import CssBaseline from "@material-ui/core/CssBaseline";

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
  <App />
  </ThemeProvider>,
  document.getElementById('app')
);

module.hot.accept();