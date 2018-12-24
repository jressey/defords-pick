import React, { Component } from 'react';

class FavoriteTeamNextGame extends Component {

  render() {
    const { game } = this.props;

    return (
      <div>
        Next game: {game.start_time}
      </div>
    );
  }

}

export default FavoriteTeamNextGame;