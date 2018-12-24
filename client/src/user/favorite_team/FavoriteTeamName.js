import React, { Component } from 'react';

class FavoriteTeamName extends Component {

  render() {
    const { team } = this.props;

    return (
      <div>
        {team.name}
      </div>
    );
  }

}

export default FavoriteTeamName;