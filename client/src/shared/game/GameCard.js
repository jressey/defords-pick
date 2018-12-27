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

  render() {
    const { game, game_type } = this.props;

    return (
      <Card className="card" style={{backgroundImage: this.bgImage}}>
        <CardBlock>
          <Game game={game} game_type={game_type} />
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

export default GameCard;
