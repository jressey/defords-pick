import React, { Component } from 'react';
import GameContainer from '../game/GameContainer';
import ErrorMessage from '../shared/ErrorMessage'
import styled from 'styled-components';

const Title = styled.h2`
  text-align: center;
  margin-bottom: 50kpx;
`
const URL = '/api/games/featured.json'

class FeaturedGamesSection extends Component {

  state = {
    loading: true,
    data: []
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
    const { loading, data } = this.state;

    if(loading) {
      return null;
    }

    return (
      <div>
        <Title>Featured Games</Title>
        {data.length > 0 ? (
          buildContainers(data)
        ) : (
          <ErrorMessage message="There are no upcoming games. Please, check back later."/>
        )}
      </div>
    );
  }
}

function buildContainers(games) {
  var game_containers = [];
  for (var i=0; i < games.length; i++) {
    game_containers.push(<GameContainer key={i} game={games[i]} game_type="default" link={games[i].link}/>);
  };
  return game_containers;
}

export default FeaturedGamesSection;
