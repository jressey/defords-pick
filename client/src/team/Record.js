import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.div`
  font-size: .6em;
  padding-bottom: 4px;
`

class Record extends Component {


  render() {
    return (
      <Content style={{color: font_color_for(this.props.game_type)}}>
        ({this.props.record})
      </Content>
    );
  }

}

function font_color_for(game_type) {
  if (game_type == "hot") {
    return "rgb(169, 169, 169)"
  }
  return "rgb(56, 56, 56)"
}

export default Record;