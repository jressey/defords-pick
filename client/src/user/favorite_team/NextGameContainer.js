import React, { Component } from 'react';
import GameCard from '../../shared/game/GameCard'

class NextGameContainer extends Component {

  render() {
    const { game } = this.props;

    return (
      <div>
        <GameCard game={game} game_type="default" league_abbreviation={game.sport.league_name}/>
      </div>
    );
  }

}

export default NextGameContainer;