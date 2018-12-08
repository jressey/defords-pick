import React, { Component } from 'react';
import GameContainer from '../game/GameContainer';
import FeaturedGamesContainer from '../layout/FeaturedGamesContainer';
import ErrorMessage from '../shared/ErrorMessage'
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 25px;
`
const URL = '/api/hot_game.json'

class Home extends Component {

  state = {
    data: {
      home_team: {},
      away_team: {}
    },
  };

  componentDidMount() {
    fetch(URL)
      .then(function(response) {
        return response.json();
      }).then(function(data) {
        this.setState({ data: data });
      }.bind(this)).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {
    return (
      <div>
        <Title>Deford's Pick</Title>
        {this.state.data ? (
          <GameContainer game={this.state.data} game_type="hot"/>
        ) : (
          <ErrorMessage message="No games in progress. Come back later to see what's on."/>
        )}
        {/* <FeaturedGamesContainer game={this.state.data} /> */}
      </div>
    );
  }
}

export default Home;
