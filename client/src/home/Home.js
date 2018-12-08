import React, { Component } from 'react';
import TopGameContainer from '../game/TopGameContainer';
import FeaturedGamesContainer from '../layout/FeaturedGamesContainer';

class Home extends Component {

  render() {

    return (
      <div>
        <TopGameContainer />
        <FeaturedGamesContainer />
      </div>
    );
  }
}

export default Home;
