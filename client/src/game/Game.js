import React, { Component } from 'react';
import Team from '../team/Team';

class Game extends Component {


  render() {
    return (
      <div>
        <Team team={this.props.away_team} />
        <Team team={this.props.home_team} />
      </div>
    );
  }

}

export default Game;