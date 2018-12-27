import React, { Component } from 'react';
import NextGameContainer from './NextGameContainer';
import styled from 'styled-components';

const ThinPaddingCol = styled.div`
  padding-left: 4px;
  padding-right: 4px;
`

const Title = styled.h5`
  padding-bottom: 6px;
`

class FavoriteTeamNextGamesPanel extends Component {

  render() {
    const { games } = this.props;

    return (
      <div>
        <Title>Upcoming Games</Title>
        <div className="row">
          {buildGameContainers(games)}
        </div>
      </div>
    );
  }

}

function buildGameContainers(games) {
  var game_containers = [];
  for (var i=0; i < games.length; i++) {
    game_containers.push(<ThinPaddingCol className="col-sm-4" key={i}><NextGameContainer game={games[i]} /></ThinPaddingCol>);
  };
  return game_containers;
}

export default FavoriteTeamNextGamesPanel;