import React, { Component } from 'react';
import GameCard from './GameCard';

class GameContainer extends Component {

  render() {
    return (
      <div>
        <GameCard game={this.props.game} gameType={this.props.gameType} />
      </div>
    );
  }

}

export default GameContainer;