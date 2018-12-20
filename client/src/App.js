import React, { Component } from 'react';
import AppRouter from './AppRouter'
import Cookies from 'js-cookie';
import Navbar from './components/Navbar';
import UserProvider from './contexts/UserContext'
import styled from 'styled-components';


const AppBody = styled.div`
  min-height: 100vh;
`

const AppContainer = styled.div`
  margin-top: 20px;
`

class App extends Component {

  componentDidMount() {
    if (Cookies.get("auth_token") === undefined) {
      Cookies.set("auth_token", "");
    }
    // check for logged in on api with cookie values, update user context state
  }

  render() {
    return (
      <AppBody className="App">
        <UserProvider>
          <Navbar />
          <AppContainer>
            <div className="container">
              <AppRouter />
            </div>
          </AppContainer>
        </UserProvider>
      </AppBody>
    );
  }
}

export default App;
