import React, { Component } from 'react';
import TopGameSection from '../home/TopGameSection';
import FeaturedGamesSection from '../home/FeaturedGamesSection';

class Home extends Component {

  render() {

    return (
    <div className="row justify-content-center">
      <div className="col-sm-12 col-md-12 col-lg-8">
        <TopGameSection />
        <FeaturedGamesSection />
      </div>
    </div>
    );
  }
}

export default Home;
