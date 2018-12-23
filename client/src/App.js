import React, { Component } from 'react';
import AppRouter from './AppRouter'
import Navbar from './layout/Navbar';
import UserProvider from './contexts/UserContext'
import styled from 'styled-components';


const AppBody = styled.div`
  min-height: 100vh;
`

const AppContainer = styled.div`
  margin-top: 20px;
`

class App extends Component {

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
