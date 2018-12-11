import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import LogoutLink from "./LogoutLink";
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
      <div>
        <nav className="navbar navbar-light bg-light">
          <NavbarInnerContainer>
            <div className="d-flex justify-content-center">
              <NavLink>
                <Link to="/secret" >Secretpage</Link>
              </NavLink>
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
                { Cookies.get("Authorization").length > 0 ? (
                  <Link to="" onClick={logout}>Logout</Link>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </NavLink>
            </div>
          </NavbarInnerContainer>
        </nav>
      </div>
    );
  }
}

function logout() {
  console.log("logout");
  Cookies.set("Authorization", "");
}


export default Navbar;
