import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Cookies from 'js-cookie';

class UserNavbarLink extends Component {

  render() {
    return (
      <UserContext.Consumer>
        {(context) => (
          <React.Fragment>
            <div>
              {context.state.logged_in ?
              (
                <Link to="/user">{Cookies.get("email")}</Link>
              ) : (
                <Link to="/Login">Login</Link>
              )}
            </div>
          </React.Fragment>
        )}
      </UserContext.Consumer>
    );
  }
}

export default UserNavbarLink;
