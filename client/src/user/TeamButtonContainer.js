import React, { Component } from 'react';
import TeamButton from './TeamButton';

class TeamButtonContainer extends Component {

  render() {
    const { team } = this.props;

    return (
      <div className="col-sm-4">
        <TeamButton team={team} />
      </div>
    );
  }

}

export default TeamButtonContainer;