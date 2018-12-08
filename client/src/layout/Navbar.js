import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
              <Link to="/" className="nav-Link">Home</Link>
              <Link to="/nba" className="nav-Link" >NBA</Link>
              <Link to="/nfl" className="nav-Link" >NFL</Link>
              <Link to="/nhl" className="nav-Link" >NHL</Link>
            </div>
          </NavbarInnerContainer>
        </nav>
      </div>
    );
  }
}

export default Navbar;
