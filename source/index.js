import React from 'react';
import { render } from 'react-dom';
import './theme/init';
import App from './navigation/App';
import { Provider } from 'react-redux';
import { store } from './init/store';
import { ConnectedRouter as Router } from 'react-router-redux';
import { history } from './init/middleware/core';

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
