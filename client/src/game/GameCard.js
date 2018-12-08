import React, { Component } from 'react';
import Game from '../game/Game';
import styled from 'styled-components';

const HotGameCard = styled.span`
  background-image: linear-gradient(to bottom right, rgb(252, 252, 147), rgb(252, 172, 172));
  background-color: rgb(159, 232, 235);
`
const CardBlock = styled.div`
  padding:10px;
`

class GameCard extends Component {

  render() {
    return (
      <div>
        <div className="card">
          <HotGameCard>
            <CardBlock>
              <Game away_team={this.props.game.away_team} home_team={this.props.game.home_team} />
            </CardBlock>
          </HotGameCard>
        </div>
      </div>
    );
  }
}

export default GameCard;
