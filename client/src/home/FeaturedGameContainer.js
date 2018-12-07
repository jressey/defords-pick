import React, { Component } from 'react';
import Game from '../game/Game';
import styled from 'styled-components';

const HotGameCard = styled.span`
  background-image: linear-gradient(to bottom right, rgb(252, 252, 147), rgb(252, 172, 172));
  background-color: rgb(159, 232, 235);
`
const CardBlock = styled.div`
  padding:10px;
`

class FeaturedGameContainer extends Component {

  state = {
    data: {
      home_team: {},
      away_team: {}
    },
  };

  componentDidMount() {
    fetch('/api/hot_game.json')
      .then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
        this.setState({ data: data });
      }.bind(this)).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {
    return (
      <div className="card">
        <HotGameCard>
          <CardBlock>
          <Game color="pink" />
          {this.state.data.home_team.name}
          </CardBlock> 
        </HotGameCard>
      </div>
    );
  }
}

export default FeaturedGameContainer;
