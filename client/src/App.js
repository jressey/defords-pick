import React, { Component } from 'react';
import AppRouter from './AppRouter'
import Cookies from 'js-cookie';
import Navbar from './layout/Navbar';
import styled from 'styled-components';


const AppBody = styled.div`
  min-height: 100vh;
`

const AppContainer = styled.div`
  margin-top: 20px;
`

class App extends Component {

  componentWillMount() {
    if (Cookies.get("auth_token") === undefined) {
      Cookies.set("auth_token", "");
    }
  }

  render() {
    return (
      <AppBody className="App">
        <Navbar />
        <AppContainer>
          <div className="container">
            <AppRouter />
          </div>
        </AppContainer>
      </AppBody>
    );
  }
}

export default App;
