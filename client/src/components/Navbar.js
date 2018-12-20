import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import UserNavbarLink from "./UserNavbarLink";
import styled from 'styled-components';

const NavbarInnerContainer = styled.div`
  width: 100%;
`

const NavLink = styled.div`
  padding: 0 16px;
  a:hover{
    text-decoration: none;
  }
`

class Navbar extends Component {

  render() {
    return (
      <UserContext.Consumer>
        {(context) => (
          <React.Fragment>
          <div>
            <nav className="navbar navbar-light bg-light">
              <NavbarInnerContainer>
                <div className="d-flex justify-content-center">
                  <NavLink>
                    <Link to="/" >Home</Link>
                  </NavLink>
                  <NavLink>
                    <Link to="/nba" >NBA</Link>
                  </NavLink>
                  <NavLink>
                    <Link to="/nfl" >NFL</Link>
                  </NavLink>
                  <NavLink>
                    <Link to="/nhl" >NHL</Link>
                  </NavLink>
                  <NavLink>
                    <UserNavbarLink />
                  </NavLink>
                  { context.state.is_logged_in() ? (
                    <NavLink>
                      <Link to="/" onClick={context.state.logout}>Logout</Link>
                    </NavLink>
                  ) : (
                    ""
                  )}
                </div>
              </NavbarInnerContainer>
            </nav>
          </div>
        </React.Fragment>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Navbar;
