import React, { Component } from 'react';
import TeamButton from './TeamButton';

class TeamButtonContainer extends Component {

  render() {
    const { team, setFavorite } = this.props;

    return (
      <div className="col-sm-4">
        <TeamButton team={team} setFavorite={setFavorite}/>
      </div>
    );
  }

}

export default TeamButtonContainer;