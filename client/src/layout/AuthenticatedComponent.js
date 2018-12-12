import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

class AuthenticatedComponent extends Component {

  state = {
    data: {},
    authenticated: false
  }

  componentDidMount() {
    fetch('api/user_profiles/show.json')
      .then(function(response) {
        if (response.status === 401) {
          this.setState({ authenticated: false })
        }
        return response.json();
      }.bind(this)).then(function(data) {
        this.setState({ data: data, loading: false, authenticated: true });
      }.bind(this)).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {
    return (
      <FadeIn>
        { this.state.authenticated ? (
          this.state.data.team
        ) : (
          <p>Sorry you can't be here</p>
        )}
      </FadeIn>
    );
  }
}

export default AuthenticatedComponent;
