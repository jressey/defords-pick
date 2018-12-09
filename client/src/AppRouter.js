import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AuthenticatedComponent from './layout/AuthenticatedComponent';
import Home from './layout/Home';
import Login from './layout/Login';
import SportPanel from './layout/SportPanel';

class AppRouter extends Component {
  render() {
    return (
      <div>
          <Route path="/secret" exact component={AuthPage} />
          <Route path="/" exact component={Homepage} />
          <Route path="/nba" component={NBA} />
          <Route path="/nfl" component={NFL} />
          <Route path="/nhl" component={NHL} />
          <Route path="/login" component={LoginPage} />
        </div>
    );
  }
}

const Homepage = () => (
  <div>
    <Home />
  </div>
)

const AuthPage = () => (
  <div>
    <AuthenticatedComponent />
  </div>
)

const LoginPage = () => (
  <div>
    <Login />
  </div>
)

const NBA = () => (
  <div>
    <SportPanel league="nba" />
  </div>
)

const NFL = () => (
  <div>
    <SportPanel league="nfl" />
  </div>
)

const NHL = () => (
  <div>
    <SportPanel league="nhl" />
  </div>
)

export default AppRouter;
