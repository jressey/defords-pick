import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import styled from 'styled-components';

const AppContainer = styled.div`
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <AppContainer>
          <Navbar />
        </AppContainer>
      </div>
    );
  }
}

export default App;
