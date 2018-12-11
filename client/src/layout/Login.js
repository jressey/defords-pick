import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Cookies from 'js-cookie';

import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 25px;
`

class Login extends Component {

  state = {
    email: '',
    password: '',
    logged_in: false,
  }

  change = this.change.bind(this);
  processLogin = this.processLogin.bind(this);

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  processLogin(e) {
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
      Cookies.set("access_token", data.access_token);
      Cookies.set("user_id", data.user_id);
      this.setState({ logged_in: true })
    }.bind(this)).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

  render() {
    return (
      <div>
        { (this.state.logged_in) ?
          (
            <Redirect to="/" />
          ) : (
          <div>
            <Title>Login</Title>
            <form onSubmit={this.processLogin}>
              <label>Email</label>
              <input
                className="form-item"
                placeholder="email..."
                name="email"
                type="text"
                onChange={this.change}
              />
              <label>Password</label>
              <input
                className="form-item"
                placeholder="password..."
                name="password"
                type="password"
                onChange={this.change}
              />
              <input
                className="form-submit btn btn-primary"
                value="SUBMIT"
                type="submit"
              />
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Login;