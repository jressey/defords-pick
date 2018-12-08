import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './home/Home';
import SportPanel from './layout/SportPanel';

class AppRouter extends Component {
  render() {
    return (
      <div>
          <Route path="/" exact component={Homepage} />
          <Route path="/nba/" component={NBA} />
          <Route path="/nfl/" component={NFL} />
          <Route path="/nhl/" component={NHL} />
          <Route path="/users/auth/google_oauth2" component={Login} />
        </div>
    );
  }
}

const Homepage = () => (
  <div>
    <Home />
  </div>
)

const Login = () => (
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
