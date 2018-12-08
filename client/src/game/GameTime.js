import React, { Component } from 'react';
import styled from 'styled-components';

const TimeBox = styled.div`
  padding-top: 6px;
`

const Time = styled.div`
  font-size: .8em;
  color: darkgray;
  text-align: right;
`
class GameTime extends Component {

  render() {
    return (
      <TimeBox className="row">
        <Time className="col-sm-6 offset-sm-6">
          {this.props.time}
        </Time>
      </TimeBox>
    );
  }
}

export default GameTime;
