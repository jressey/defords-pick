import React, { Component } from 'react';
import GameContainer from '../game/GameContainer';
import ErrorMessage from '../shared/ErrorMessage'
import styled from 'styled-components';
import FadeIn from 'react-fade-in';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 25px;
`

const Section = styled.div`
  margin-bottom: 60px;
`

const URL = '/api/games/hot.json'

class TopGameSection extends Component {

  state = {
    loading: true,
    data: {},
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

export default TopGameSection;
