import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
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

  processLogout = this.processLogout.bind(this);

  processLogout(e) {
    e.preventDefault();

    fetch('api/login.json', {
      method: 'delete',
      credentials: 'same-origin',
      mode: 'same-origin',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json',
      }
    }).then(function(response) {
      return response;
    }).then(function(response) {
      if (response.status === 200) {
        Cookies.set("auth_token", "");
        Cookies.set("user_id", "");
        this.forceUpdate();
      }
    }.bind(this)).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

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
                { Cookies.get("auth_token").length != "" ? (
                  <Link to="/" onClick={this.processLogout}>Logout</Link>
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

export default Navbar;
