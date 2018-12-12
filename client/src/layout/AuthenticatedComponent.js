import React, { Component } from 'react';

class AuthenticatedComponent extends Component {

  state = {
    data: {}
  }

  componentDidMount() {
    fetch('api/user_profiles/show.json')
      .then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
        this.setState({ data: data, loading: false });
      }.bind(this)).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {
    return (
      <div>
        { this.state.data.team ? (
          this.state.data.team
        ) : (
          <p>Sorry you can't be here</p>
        )}
      </div>
    );
  }
}

export default AuthenticatedComponent;
