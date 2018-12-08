import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.div`
  font-size: .6em;
  padding-bottom: 4px;
`

class Record extends Component {

  fontColor = fontColorFor(this.props.game_type);

  render() {
    return (
      <Content style={{color: this.fontColor}}>
        ({this.props.record})
      </Content>
    );
  }

}

function fontColorFor(game_type) {
  if (game_type === "hot") {
    return "rgb(56, 56, 56)"
  }
  return "rgb(169, 169, 169)"
}

export default Record;