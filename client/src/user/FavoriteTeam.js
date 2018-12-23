import React, { Component } from 'react';

class FavoriteTeam extends Component {

  render() {
    const { team } = this.props;

    return (
      <div>
        {team.name}
      </div>
    );
  }

}

export default FavoriteTeam;