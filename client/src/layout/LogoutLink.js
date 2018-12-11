import React, { Component } from 'react';
import styled from 'styled-components';

const NavLink = styled.div`
  padding: 0 16px;
  a:hover{
    text-decoration: none;
  }
`
class LogoutLink extends Component {

  render() {

    return (
      <NavLink>
        <a onClick={logout}>Logout</a>
      </NavLink>
    );
  }
}

function logout() {

}

export default LogoutLink;
