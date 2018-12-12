import React, { Component } from 'react';


const UserContext = React.createContext()

class UserProvider extends Component {
  state = {
    nombre: "jose",
    email: "",
    auth_token: ""
  }

  render() {
    return <UserContext.Provider value={this.state}>
      {this.props.children}
      </UserContext.Provider>
  }
}

export default UserProvider;