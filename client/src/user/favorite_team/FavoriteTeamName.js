import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  margin-top: -7px;
`

class FavoriteTeamName extends Component {

  render() {
    const { team } = this.props;

    return (
      <Title>
        {team.name}
      </Title>
    );
  }

}

export default FavoriteTeamName;