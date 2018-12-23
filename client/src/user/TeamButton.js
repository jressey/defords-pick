import React, { Component } from 'react';

class TeamButton extends Component {

  render() {
    const { team } = this.props;

    return (
      <button className="btn btn-light">
        {team.name}
      </button>
    );
  }

}

export default TeamButton;