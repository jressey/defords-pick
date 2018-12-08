import React, { Component } from 'react';
import TopGameSection from '../layout/TopGameSection';
import FeaturedGamesSection from '../layout/FeaturedGamesSection';

class Home extends Component {

  render() {

    return (
      <div>
        <TopGameSection />
        <FeaturedGamesSection />
      </div>
    );
  }
}

export default Home;
