import React, { Component } from 'react';
import Game from '../../game/Game'

class NextGameContainer extends Component {

  render() {
    const { game } = this.props;

    return (
      <div>
        <Game game={game} game_type="default" league_abbreviation={game.sport.league_name}/>
      </div>
    );
  }

}

export default NextGameContainer;