import React, { Component } from 'react';
import Game from './Game';
import styled from 'styled-components';

const CardBlock = styled.div`
  padding: 10px;
`
const Card = styled.div`
  background-color: #f8f9fa;
  font-size: 1.15em;
`

class GameCard extends Component {

  bgImage = imageFor(this.props.game_type);
  bgColor = bgColorFor(this.props.game_type);

  render() {
    return (
      <Card className="card" style={{backgroundImage: this.bgImage, backgroundColor: this.bgColor}}>
        <CardBlock>
          <Game
            away_team={this.props.game.away_team}
            home_team={this.props.game.home_team}
            game_type={this.props.game_type}
            league_abbreviation={this.props.game.sport.league_name}
          />
        </CardBlock>
      </Card>
    );
  }
}

function imageFor(game_type) {
  if (game_type === "hot") {
    return "linear-gradient(to bottom right, rgb(252, 252, 147), rgb(252, 172, 172))"
  }
  return ""
}

function bgColorFor(game_type) {
  if (game_type === "hot") {
    return "background-color: rgb(159, 232, 235)"
  }
  return ""
}

export default GameCard;
