import React, { Component } from 'react';

const URL = '/users/auth/google_oauth2.json'

class Login extends Component {

  state = {
    loading: true,
    data: []
  };

  componentDidMount() {
    fetch(URL)
      .then(function(response) {
        return response.json();
      }).then(function(data) {
        this.setState({ data: data, loading: false });
      }.bind(this)).catch(function(ex) {
        console.log('parsing failed', ex)
      })
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
