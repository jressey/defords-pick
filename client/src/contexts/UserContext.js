import React, { Component } from 'react';
import Cookies from 'js-cookie';

export const UserContext = React.createContext();



class UserProvider extends Component {
  state = {
    user_id: "",
    auth_token: "",
    logged_in: true,
    email: "",
    password: "",
    change: (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    },
    login: (e) => {
      e.preventDefault();

      fetch('api/login.json', {
        method: 'post',
        credentials: 'same-origin',
        mode: 'same-origin',
        headers: {
          'Accept':       'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        if (data.auth_token) {
          Cookies.set("auth_token", data.auth_token);
          Cookies.set("email", data.email);
          this.setState({ logged_in: true, password: "" })
        }
      }.bind(this)).catch(function(ex) {
        console.log('parsing failed', ex)
      });
    },
    logout: (e) => {
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
          Cookies.remove("auth_token");
          Cookies.remove("email", "");
          this.setState(
            { logged_in: false, auth_token: "",
              email: "", user_id: "", password: ""
            }
          );
        }
      }.bind(this)).catch(function(ex) {
        console.log('parsing failed', ex)
      })
    },
  }

  componentDidMount() {
    this.setState(
      {
        auth_token: Cookies.get("auth_token"),
        email: Cookies.get("email"),
        logged_in: this.state.logged_in || Cookies.get("auth_token")
      }
    )
  };

  render() {
    return <UserContext.Provider value={{ state: this.state }}>
      {this.props.children}
    </UserContext.Provider>
  }
}

export default UserProvider;
