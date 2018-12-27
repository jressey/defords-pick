import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.img`
  max-height: 40px;
  display: inline-block;
  padding: 0 10px;
`

class Logo extends Component {

  maxHeight = maxHeightFor(this.props.game_type);

  render() {
    return (
      <div>
        {this.props.team.abbreviation ? (
          <Content src={logoUrl(this.props.league_abbreviation, this.props.team.abbreviation)} style={{maxHeight: this.maxHeight}} className="img-fluid" />
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


function maxHeightFor(game_type) {
  if (game_type === "compact") {
    return "30px"
  }
  return ""
}

export default Logo;