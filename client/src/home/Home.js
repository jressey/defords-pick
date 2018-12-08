import React, { Component } from 'react';
import GameCard from '../game/GameCard';
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
    loading: true,
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
        this.setState({ data: data, loading: false });
      }.bind(this)).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {
    const { loading } = this.state;

    if(loading) {
      return null;
    }

    return (
      <div>
        <Title>Deford's Pick</Title>
        {this.state.data ? (
          <GameCard game={this.state.data} game_type="hot"/>
        ) : (
          <ErrorMessage message="No games in progress. Come back later to see what's on."/>
        )}
        {/* <FeaturedGamesContainer game={this.state.data} /> */}
      </div>
    );
  }
}

export default Home;
