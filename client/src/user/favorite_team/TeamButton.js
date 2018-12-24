import React, { Component } from 'react';
import styled from 'styled-components';

const Buttin = styled.button`
  margin-bottom: 3px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const ButtonText = styled.span`
  font-size: .9em;
`

class TeamButton extends Component {

  render() {
    const { team, setFavorite } = this.props;

    return (
      <Buttin className="btn btn-light" onClick={() => setFavorite(team)}>
        <ButtonText>{team.name}</ButtonText>
      </Buttin>
    );
  }

}

export default TeamButton;