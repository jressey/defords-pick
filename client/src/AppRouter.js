import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import GamePicker from './layout/GamePicker';
import Home from './layout/Home';
import Login from './authentication/Login';
import Register from './authentication/Register';
import SportPanel from './layout/SportPanel';

class AppRouter extends Component {
  render() {
    return (
      <div>
          <Route path="/game_picker" exact component={GamePickerPage} />
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

const GamePickerPage = () => (
  <div>
    <GamePicker />
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
