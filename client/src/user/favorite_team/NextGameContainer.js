import React, { Component } from 'react';

class NextGameContainer extends Component {

  render() {
    const { game } = this.props;

    return (
      <div>
        {game.home_team.name}
      </div>
    );
  }

}

export default NextGameContainer;