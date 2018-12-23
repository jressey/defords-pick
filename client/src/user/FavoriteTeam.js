import React, { Component } from 'react';

class FavoriteTeam extends Component {

  render() {
    const { team } = this.props;

    return (
      <div className="card">
        {team.name}
      </div>
    );
  }

}

export default FavoriteTeam;