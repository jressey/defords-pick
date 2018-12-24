import React, { Component } from 'react';
import GameContainer from '../game/GameContainer';
import ErrorMessage from '../shared/ErrorMessage'
import styled from 'styled-components';
import FadeIn from 'react-fade-in';
import moment from 'moment-timezone';

const Title = styled.h2`
  text-align: center;
  margin-bottom: 50px;
`
class FeaturedGamesSection extends Component {

  state = {
    loading: true,
    data: []
  };

  url = `/api/games/featured.json?timezone_offset=${timezoneOffset()}`

  componentDidMount() {
    fetch(this.url)
      .then(function(response) {
        return response.json();
      }).then(function(data) {
        this.setState({ data: data, loading: false });
      }.bind(this)).catch(function(ex) {
      })
  }

  render() {
    const { loading, data } = this.state;

    if(loading) {
      return null;
    }

    return (
      <div>
        <Title>Featured Upcoming Games</Title>
        <FadeIn>
          {data.length > 0 ? (
            buildContainers(data)
          ) : (
            <ErrorMessage message="There are no upcoming games. Please, check back later."/>
          )}
        </FadeIn>
      </div>
    );
  }
}


function timezoneOffset() {
  return moment(new Date().getTimezoneOffset()).format("Z");
}


function buildContainers(games) {
  var game_containers = [];
  for (var i=0; i < games.length; i++) {
    game_containers.push(<GameContainer key={i} game={games[i]} game_type="default" link={games[i].link}/>);
  };
  return game_containers;
}

export default FeaturedGamesSection;
