import React, { Component } from 'react';

const URL = '/users/auth/google_oauth2.json'

class Login extends Component {

  state = {
    loading: true,
    data: []
  };

  componentDidMount() {
  }

  render() {
    if(loading) {
      return null;
    }

    return (
      <div>
        sup yall
      </div>
    );
  }
}

export default Login;
