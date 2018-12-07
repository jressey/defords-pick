import React, { Component } from 'react';
import styled from 'styled-components';

const NavbarInnerContainer = styled.div`
  width: 100%;
`

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <NavbarInnerContainer>
            <div className="d-flex justify-content-center">
              <a className="nav-link" href="/">Home</a>
              <a className="nav-link" href="/schedules/nba">NBA</a>
              <a className="nav-link" href="/schedules/nfl">NFL</a>
              <a className="nav-link" href="/nhl">NHL</a>
            </div>
          </NavbarInnerContainer>
        </nav>
      </div>
    );
  }
}

export default Navbar;
