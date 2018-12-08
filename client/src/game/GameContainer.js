import React, { Component } from 'react';
import GameCard from '../game/GameCard';

class GameContainer extends Component {


  render() {
    return (
      <div>
        <GameCard game={this.props.game} />
      </div>
    );
  }

}

export default GameContainer;