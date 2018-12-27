import React, { Component } from 'react';
import GameContainer from '../shared/game/GameContainer';
import ErrorMessage from '../shared/ErrorMessage'
import styled from 'styled-components';
import FadeIn from 'react-fade-in';
import moment from 'moment-timezone';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 25px;
`

const Section = styled.div`
  margin-bottom: 60px;
`

class TopGameSection extends Component {

  state = {
    loading: true,
    data: {},
  };

  url = `/api/games/hot.json?timezone_offset=${timezoneOffset()}`

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
      <Section>
        <Title>Deford's Pick</Title>
        <FadeIn>
          {data ? (
            <GameContainer game={data} game_type="hot" link={data.stream_link} />
          ) : (
            <ErrorMessage message="No games in progress. Come back later to see what's on."/>
          )}
        </FadeIn>
      </Section>
    );
  }
}

function timezoneOffset() {
  return moment(new Date().getTimezoneOffset()).format("Z");
}

export default TopGameSection;
