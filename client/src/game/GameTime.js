import React, { Component } from 'react';
import moment from 'moment-timezone';
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

  timezoneOffset = getUserTZOffset();

  render() {
    return (
      <TimeBox className="row">
        <Time className="col-sm-6 offset-sm-6">
          {moment(this.props.time).subtract(this.timezoneOffset, 'minutes').format("ddd, MMM D @ hh:mma")}
        </Time>
      </TimeBox>
    );
  }
}

function getUserTZOffset() {
  new Date().getTimezoneOffset();
}

export default GameTime;
