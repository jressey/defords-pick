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
        {Cookies.get("auth_token") ?
        (
          <Link to="/user_schedule">{Cookies.get("email")}</Link>
        ) : (
          <Link to="/Login">Login</Link>
        )}
      </UserLink>
    );
  }
}

export default UserNavbarLink;
