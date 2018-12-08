import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import Home from './home/Home';
import styled from 'styled-components';

const AppContainer = styled.div`
  margin-top: 20px;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <AppContainer>
                <Home />
              </AppContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
