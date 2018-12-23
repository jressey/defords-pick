import React, { Component } from 'react';
import FavoriteTeam from "./FavoriteTeam";

class FavoriteTeamContainer extends Component {

  render() {
    const { team } = this.props;

    return (
      <FavoriteTeam team={team} />
    );
  }

}

export default FavoriteTeamContainer;