import React, { Component } from 'react';

class FavoriteTeamNextGameContainer extends Component {

  render() {
    const { game } = this.props;

    return (
      <div className="card">
        <div className="card-body">
          Next game: {game.start_time}
        </div>
      </div>
    );
  }

}

export default FavoriteTeamNextGameContainer;