import React, { Component } from 'react';
import moment from 'moment-timezone';
import styled from 'styled-components';

const Time = styled.div`
  color: darkgray;
  text-align: right;
`

class GameTime extends Component {

  fontSize = fontSizeFor(this.props.game_type);
  time = moment(this.props.time).subtract(userTZOffset(), "minutes").format("ddd, MMM D @ h:mmA");

  render() {

    return (
      <div className="row">
        <Time className="col-sm-12" >
          <span style={{fontSize: this.fontSize}}>{this.time}</span>
        </Time>
      </div>
    );
  }
}

function userTZOffset() {
  new Date().getTimezoneOffset();
}

function fontSizeFor(game_type) {
  if (game_type === "compact") {
    return "0.7em"
  }
  return "0.9em"
}

export default GameTime;
