import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from './theme';
import store from './app/store';
import { Provider } from 'react-redux';
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
