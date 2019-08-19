// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// Pages
import { Login, Signup, Feed, Profile, NewPassword } from '../pages';
// Instruments
import { book } from './book';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.get('isAuthenticated'),
  };
};

@hot(module)
@withRouter
@connect(mapStateToProps)
export default class App extends Component {
  render() {
    const { isAuthenticated } = this.props;

    return isAuthenticated ? (
      <Switch>
        <Route component={Feed} path={book.feed} />
        <Route component={Profile} path={book.profile} />
        <Route component={NewPassword} path={book.newPassword} />
        <Redirect to={book.feed} />
      </Switch>
    ) : (
      <Switch>
        <Route component={Signup} path={book.signUp} />
        <Route component={Login} path={book.login} />
        <Redirect to={book.login} />
      </Switch>
    );
  }
}
