import React, { Component } from 'react';
import Team from '../team/Team';

class Game extends Component {


  render() {
    const { game, game_type } = this.props;

    return (
      <div>
        <Team team={game.away_team} game_type={game_type} league_abbreviation={game.sport.league_name}/>
        <Team team={game.home_team} game_type={game_type} league_abbreviation={game.sport.league_name} />
      </div>
    );
  }

}

export default Game;