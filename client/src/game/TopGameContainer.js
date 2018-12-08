import React, { Component } from 'react';
import GameCard from '../game/GameCard';
import GameLink from '../game/GameLink';
import ErrorMessage from '../shared/ErrorMessage'
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 25px;
`
const URL = '/api/hot_game.json'

class TopGameContaner extends Component {

  state = {
    loading: true,
    stream_link: "",
    data: {
      TopGameContaner_team: {},
      away_team: {}
    },
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
    const { loading, stream_link, data } = this.state;

    if(loading) {
      return null;
    }

    return (
      <div>
        <Title>Deford's Pick</Title>
        {this.state.data ? (
          <div>
            <GameLink link={stream_link} />
            <GameCard game={data} game_type="hot"/>
          </div>
        ) : (
          <ErrorMessage message="No games in progress. Come back later to see what's on."/>
        )}
      </div>
    );
  }
}

export default TopGameContaner;
