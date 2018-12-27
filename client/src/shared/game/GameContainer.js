import React, { Component } from 'react';
import GameCard from './GameCard';
import GameLink from './GameLink';
import GameTime from './GameTime';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 25px;
`

class GameContainer extends Component {

  render() {
    const { game, game_type, link} = this.props;

    return (
      <Container>
        {game_type !== "hot" ? (
          <GameTime time={game.start_time} game_type={game_type}/>
        ) : (
          null
        )}
        {game_type === "hot" ? (
          <GameLink link={link} />
        ) : (
          null
        )}
        <GameCard game={game} game_type={game_type} />
      </Container>
    );
  }

}

export default GameContainer;