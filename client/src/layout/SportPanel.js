import React, { Component } from 'react';
import GameContainer from '../game/GameContainer';
import ErrorMessage from '../shared/ErrorMessage'
import styled from 'styled-components';

class SportPanel extends Component {

  state = {
    loading: true,
    data: [],
  };

  url = `/api/games/${this.props.league}.json`

  componentDidMount() {
    fetch(this.url)
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
      <div className="row justify-content-center">
        {data.length > 0 ? (
          buildContainers(data)
        ) : (
          <ErrorMessage message="No games for this sport today. Come back later to see what's on."/>
        )}
      </div>
    );
  }
}

function buildContainers(games) {
  var game_containers = [];
  for (var i=0; i < games.length; i++) {
    game_containers.push(<div className="col-sm-12 col-md-6 col-lg-4"><GameContainer  key={i} game={games[i]} game_type="default" /></div>);
  };
  return game_containers;
}

export default SportPanel;
