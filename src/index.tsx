// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';
import App from './App';

import {ThemeProvider} from '@mui/material';
import {theme} from './styles/theme.styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
