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
      <div>
        <Logo team={this.props.team} />
        <TextArea>
          <Name name={this.props.team.name}>
          </Name>
          <Record record="(6-2-1)">
          </Record>
        </TextArea>
      </div>
    );
  }

}

export default Team;