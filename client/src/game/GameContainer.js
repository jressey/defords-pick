import React, { Component } from 'react';
import GameCard from './GameCard';
import GameLink from './GameLink';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 25px;
`

class GameContainer extends Component {

  render() {
    return (
      <Container>
        {this.props.game_type === "hot" ? (
          <GameLink link={this.props.link} />
        ) : (
          null
        )}
        <GameCard game={this.props.game} game_type={this.props.game_type} />
      </Container>
    );
  }

}

export default GameContainer;