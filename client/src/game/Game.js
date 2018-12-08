import React, { Component } from 'react';
import Team from '../team/Team';

class Game extends Component {


  render() {
    return (
      <div>
        <div class="row"><Team team={this.props.away_team} /></div>
        <div class="row"><Team team={this.props.home_team} /></div>
      </div>
    );
  }

}

export default Game;