import React, { Component } from 'react';

class AuthenticatedComponent extends Component {

  state = {
    user: undefined
  };

  render() {
    return (
      <div>
        Shouldn't see this!
      </div>
    );
  }
}

export default AuthenticatedComponent;
