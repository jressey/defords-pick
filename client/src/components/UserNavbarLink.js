import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

import styled from 'styled-components';

const UserLink = styled.div`
`

class UserNavbarLink extends Component {

  render() {
    return (
      <UserLink>
        {Cookies.get("auth_token").length > 0 ?
        (
          <span>{Cookies.get("email")}</span>
        ) : (
          <Link to="/Login">Login</Link>
        )}
      </UserLink>
    );
  }
}

export default UserNavbarLink;
