import React, { Component } from 'react';
import AppRouter from './AppRouter'
import Navbar from './layout/Navbar';
import styled from 'styled-components';

const AppContainer = styled.div`
  margin-top: 20px;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <AppContainer>
          <div className="container">
            <AppRouter />
          </div>
        </AppContainer>
      </div>
    );
  }
}

export default App;
