import React, { Component } from 'react';
import GameCard from '../game/GameCard';
import GameLink from '../game/GameLink';
import ErrorMessage from '../shared/ErrorMessage'
import styled from 'styled-components';

const Title = styled.h2`
  text-align: center;
  margin-bottom: 25px;
`
const URL = '/api/games/featured.json'

class FeaturedGamesContainer extends Component {

  state = {
    loading: true,
    data: [],
  };

  componentDidMount() {
    fetch(URL)
      .then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
        this.setState({ data: data, loading: false });
      }.bind(this)).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {
    const { loading, data } = this.state;

    if(loading) {
      return null;
    }

    return (
      <div>
        <Title>Featured Games</Title>
        {this.state.data ? (
          <div>
            <GameLink link="hey" />
            <GameCard game={data[0]} game_type="default" />
          </div>
        ) : (
          <ErrorMessage message="There are no upcoming games. Please, check back later."/>
        )}
      </div>
    );
  }
}

export default FeaturedGamesContainer;
