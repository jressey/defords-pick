import React, { Component } from 'react';
import GameCard from '../../shared/game/GameCard'
import GameTime from '../../shared/game/GameTime'

class NextGameContainer extends Component {

  render() {
    const { game } = this.props;

    return (
      <div>
        <GameTime time={game.start_time} game_type="compact" />
        <GameCard game={game} game_type="compact" league_abbreviation={game.sport.league_name}/>
      </div>
    );
  }

}

export default NextGameContainer;