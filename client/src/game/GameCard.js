import React, { Component } from 'react';
import Game from './Game';
import styled from 'styled-components';

const CardBlock = styled.div`
  background-image: linear-gradient(to bottom right, rgb(252, 252, 147), rgb(252, 172, 172));
  background-color: rgb(159, 232, 235);
  padding: 10px;
`
const Card = styled.div`
  background-color: #f8f9fa;
  font-size: 1.15em;
`

class GameCard extends Component {

  render() {
    return (
      <Card className="card">
        <CardBlock>
          <Game away_team={this.props.game.away_team} home_team={this.props.game.home_team} game_type={this.props.game_type}/>
        </CardBlock>
      </Card>
    );
  }
}

export default GameCard;
