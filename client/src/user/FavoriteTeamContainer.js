import React, { Component } from 'react';
import FavoriteTeam from "./FavoriteTeam";

class FavoriteTeamContainer extends Component {

  render() {
    const { team } = this.props;

    return (
      <div className="card">
        <div className="card-body">
          <FavoriteTeam team={team} />
        </div>
      </div>
    );
  }

}

export default FavoriteTeamContainer;