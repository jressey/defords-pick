import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import SportPanel from './layout/SportPanel';
import styled from 'styled-components';

const NavbarInnerContainer = styled.div`
  width: 100%;
`

const AppContainer = styled.div`
  margin-top: 20px;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <NavbarInnerContainer>
            <div className="d-flex justify-content-center">
              <Link to="/" className="nav-Link">Home</Link>
              <Link to="/nba" className="nav-Link" >NBA</Link>
              <Link to="/nfl" className="nav-Link" >NFL</Link>
              <Link to="/nhl" className="nav-Link" >NHL</Link>
            </div>
          </NavbarInnerContainer>
        </nav>
        <AppContainer className="container">
          <Route path="/" exact component={Homepage} />
          <Route path="/nba/" component={NBA} />
          <Route path="/nfl/" component={NFL} />
          <Route path="/nhl/" component={NHL} />
        </AppContainer>
      </div>
    );
  }
}

const Homepage = () => (
  <div>
    <Home />
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

export default App;
