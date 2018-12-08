import React, { Component } from 'react';
import Team from '../team/Team';

class Game extends Component {


  render() {
    return (
      <div>
        <Team team={this.props.away_team} game_type={this.props.game_type} />
        <Team team={this.props.home_team} game_type={this.props.game_type} />
      </div>
    );
  }

}

export default Game;