import React, { Component } from 'react';
import styled from 'styled-components';

function logoUrl(league_abbrev, team_abbrev) {
  return `http://a1.espncdn.com/combiner/i?img=/i/teamlogos/${league_abbrev.toUpperCase()}/500/scoreboard/${team_abbrev.toUpperCase()}.png&h=55&w=55`
}

const LogoContainer = styled.div`
  display: inline-block;
  padding: 0 10px;
`

const Content = styled.img`
  max-height: 40px;
`

class Logo extends Component {

  render() {
    return (
      <LogoContainer>
        <Content src={logoUrl("NFL", "PIT")} className="img-fluid"/>
      </LogoContainer>
    );
  }

}

export default Logo;