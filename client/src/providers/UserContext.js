import React, { Component } from 'react';

export const UserContext = React.createContext();

class UserProvider extends Component {
  state = {
    number: 1,
    user_id: "",
    auth_token: "",
    add: () => {
      console.log("text");
    }
  }

  render() {
    return <UserContext.Provider value={{ state: this.state}}>
      {this.props.children}
    </UserContext.Provider>
  }
}

export default UserProvider;