import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import 'sanitize.css/sanitize.css';

import { CardForm } from './containers/CardForm';
import { theme, GlobalStyle } from './theme';

const MOUNT_NODE = document.getElementById('app');

const render = (): void => {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <CardForm />
      </Fragment>
    </ThemeProvider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./containers/CardForm'], () => {
    if (MOUNT_NODE) ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
