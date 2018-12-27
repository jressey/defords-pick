import React, { Component } from 'react';
import Logo from './Logo'
import Name from './Name'
import Record from './Record'
import styled from 'styled-components';

const TextArea = styled.div`
  display: inline-block;
  padding-top: 4px;
`
class Team extends Component {

  render() {
    const { team, league_abbreviation, game_type } = this.props;

    return (
      <div className="row">
        <Logo team={team} league_abbreviation={league_abbreviation} game_type={game_type} />
        <TextArea>
          <Name name={team.name} game_type={game_type}>
          </Name>
          <Record record={team.record} game_type={game_type}>
          </Record>
        </TextArea>
      </div>
    );
  }

}

export default Team;