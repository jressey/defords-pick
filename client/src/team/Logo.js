import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.img`
  max-height: 40px;
  display: inline-block;
  padding: 0 10px;
`

class Logo extends Component {

  render() {
    return (
      <div>
        {this.props.team.abbreviation ? (
          <Content src={logoUrl("NHL", this.props.team.abbreviation)} className="img-fluid" />
        ) : (
          <p>sorry</p>
        )}
      </div>
    );
  }
}

function logoUrl(league_abbreviation, team_abbreviation) {
  return `http://a1.espncdn.com/combiner/i?img=/i/teamlogos/${league_abbreviation.toUpperCase()}/500/scoreboard/${team_abbreviation.toUpperCase()}.png&h=55&w=55`
}

export default Logo;