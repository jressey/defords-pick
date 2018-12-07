import React, { Component } from 'react';
import styled from 'styled-components';


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
      <div>
        <div className="card hot-game-card">
          <div className="card-block">
            {this.state.data.home_team.name}
            {/* <%= render partial: "shared/game", locals: { game: game } %> */}
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedGameContainer;
