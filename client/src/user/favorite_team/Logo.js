import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.img`
  margin-top: -10px;
  max-height: 100px;
  display: inline-block;
  padding: 0 10px;
`

class Logo extends Component {

  render() {
    return (
      <div>
        {this.props.team.abbreviation ? (
          <Content src={logoUrl(this.props.league_abbreviation, this.props.team.abbreviation)} className="img-fluid" />
        ) : (
          <p>sorry</p>
        )}
      </div>
    );
  }
}

function logoUrl(league_abbreviation, team_abbreviation) {
  return `https://a.espncdn.com/i/teamlogos/${league_abbreviation.toLowerCase()}/500/${team_abbreviation.toLowerCase()}.png`
}

export default Logo;