import React, { Component } from 'react';
import styled from 'styled-components';

const LinkBox = styled.div`
  text-align: center;
`
class GameLink extends Component {

  render() {
    return (
      <LinkBox>
        <a href={this.props.link} target="_blank">Watch</a>
      </LinkBox>
    );
  }
}

export default GameLink;
