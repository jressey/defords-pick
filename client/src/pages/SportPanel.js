import React, { Component } from 'react';
import GameContainer from '../shared/game/GameContainer';
import ErrorMessage from '../shared/ErrorMessage'
import FadeIn from 'react-fade-in';
import styled from 'styled-components';
import moment from 'moment-timezone';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 25px;
`


class SportPanel extends Component {

  state = {
    loading: true,
    data: [],
  };

  url = `/api/games/${this.props.league}.json?timezone_offset=${timezoneOffset()}`

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
        <Title>{this.props.league.toUpperCase()} Games Today</Title>
        <div className="row justify-content-center">
          {data.length > 0 ? (
            buildContainers(data)
          ) : (
            <ErrorMessage message="No games for this sport today. Come back later to see what's on."/>
          )}
        </div>
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
    game_containers.push(<div key={i} className="col-sm-12 col-md-6 col-lg-4"><FadeIn><GameContainer game={games[i]} game_type="default" /></FadeIn></div>);
  };
  return game_containers;
}

export default SportPanel;
