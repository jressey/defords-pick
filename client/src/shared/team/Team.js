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
    return (
      <div className="row">
        <Logo team={this.props.team} league_abbreviation={this.props.league_abbreviation} />
        <TextArea>
          <Name name={this.props.team.name}>
          </Name>
          <Record record={this.props.team.record} game_type={this.props.game_type}>
          </Record>
        </TextArea>
      </div>
    );
  }

}

export default Team;