import React, { Component } from 'react';
import Cookies from 'js-cookie';

export const UserContext = React.createContext();

class UserProvider extends Component {
  state = {
    number: 1,
    user_id: "",
    auth_token: "",
    logged_in: false,
    email: "",
    password: "",
    login: () => {
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
          Cookies.set("user_id", data.user_id);
          Cookies.set("email", data.email);
          this.setState({ logged_in: true })
        }
      }.bind(this)).catch(function(ex) {
        console.log('parsing failed', ex)
      });
    },
    change: (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    },
  }

  render() {
    return <UserContext.Provider value={{ state: this.state}}>
      {this.props.children}
    </UserContext.Provider>
  }
}

export default UserProvider;
