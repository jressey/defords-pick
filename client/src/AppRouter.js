import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import UserPreferences from './layout/UserPreferences';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SportPanel from './pages/SportPanel';

class AppRouter extends Component {
  render() {
    return (
      <div>
          <Route path="/user_preferences" exact component={UserPreferencesPage} />
          <Route path="/" exact component={Homepage} />
          <Route path="/nba" component={NBA} />
          <Route path="/nfl" component={NFL} />
          <Route path="/nhl" component={NHL} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </div>
    );
  }
}

const UserPreferencesPage = () => (
  <div>
    <UserPreferences />
  </div>
)

const Homepage = () => (
  <div>
    <Home />
  </div>
)

const LoginPage = () => (
  <div>
    <Login />
  </div>
)

const RegisterPage = () => (
  <div>
    <Register />
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
