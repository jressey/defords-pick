import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Cookies from 'js-cookie';

import styled from 'styled-components';

const UserLink = styled.div`
`

class UserNavbarLink extends Component {

  render() {
    return (
      <UserContext.Consumer>
        {(context) => (
          <React.Fragment>
            <UserLink>
              {context.state.is_logged_in() ?
              (
                <Link to="/user_preferences">{Cookies.get("email")}</Link>
              ) : (
                <Link to="/Login">Login</Link>
              )}
            </UserLink>
          </React.Fragment>
        )}
      </UserContext.Consumer>
    );
  }
}

export default UserNavbarLink;
