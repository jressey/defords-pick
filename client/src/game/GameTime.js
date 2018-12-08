import React, { Component } from 'react';
import moment from 'moment-timezone';
import styled from 'styled-components';

const TimeBox = styled.div`
  padding-top: 20px;
`

const Time = styled.div`
  font-size: .9em;
  color: darkgray;
  text-align: right;
`

class GameTime extends Component {

  time = moment(this.props.time).subtract(userTZOffset(), "minutes").format("ddd, MMM D @ h:mmA");

  render() {
    return (
      <TimeBox className="row">
        <Time className="col-sm-12">
          {this.time}
        </Time>
      </TimeBox>
    );
  }
}

function userTZOffset() {
  new Date().getTimezoneOffset();
}

export default GameTime;
