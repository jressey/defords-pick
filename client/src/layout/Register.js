import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Cookies from 'js-cookie';

import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 25px;
`

const FormBox = styled.div`
  margin-top: 40px;
  text-align: center;
`

const CenteredInput = styled.input`
  text-align: center;
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

  processRegistration(e) {
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
        Cookies.set("user_id", data.user_id);
        this.setState({ logged_in: true })
      }
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
            <Title>Register to Enjoy Benefit</Title>
            <div className="row justify-content-center">
            <FormBox className="col-sm-6 col-lg4">
              <form onSubmit={this.processRegistration}>
                <div className="form-group">
                  <CenteredInput
                    className="form-item form-control"
                    placeholder="email..."
                    name="email"
                    type="text"
                    onChange={this.change}
                  />
                </div>
                <div className="form-group">
                  <CenteredInput
                    className="form-item form-control"
                    placeholder="password..."
                    name="password"
                    type="password"
                    onChange={this.change}
                  />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
              </form>
            </FormBox>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Login;