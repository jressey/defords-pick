import React, { Component } from 'react';
import NextGameContainer from './NextGameContainer';

class FavoriteTeamNextGamesPanel extends Component {

  render() {
    const { games } = this.props;

    return (
      <div className="row">
        {buildGameContainers(games)}
      </div>
    );
  }

}

function buildGameContainers(games) {
  var game_containers = [];
  for (var i=0; i < games.length; i++) {
    game_containers.push(<div className="col-sm-3" key={i}><NextGameContainer game={games[i]} /></div>);
  };
  return game_containers;
}

export default FavoriteTeamNextGamesPanel;