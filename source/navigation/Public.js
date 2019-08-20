// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// Pages
import { Login, Signup } from '../pages';
// Instruments
import { book } from './book';

export default class Public extends Component {
  render() {
    return (
      <Switch>
        <Route component={Signup} path={book.signUp} />
        <Route component={Login} path={book.login} />
        <Redirect to={book.login} />
      </Switch>
    );
  }
}
