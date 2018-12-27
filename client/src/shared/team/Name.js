import React, { Component } from 'react';

class Name extends Component {

  fontSize = fontSizeFor(this.props.game_type);

  render() {
    return (
      <div style={{fontSize: this.fontSize}}>
        {this.props.name}
      </div>
    );
  }
}

function fontSizeFor(game_type) {
  if (game_type === "compact") {
    console.log("yes")
    return "0.7em"
  }
  return ""
}

export default Name;