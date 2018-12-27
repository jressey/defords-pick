import React, { Component } from 'react';
import styled from 'styled-components';

const LinkBox = styled.div`
  text-align: center;
`
class GameLink extends Component {

  render() {
    return (
      <LinkBox>
        <a href={this.props.link} target="_blank" rel="noopener noreferrer" >Watch</a>
      </LinkBox>
    );
  }
}

export default GameLink;
