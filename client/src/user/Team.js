import React, { Component } from 'react';

class Team extends Component {

  render() {
    const { team } = this.props;

    return (
      <div className="form-check">
        <label className="form-check-label">
        <input className="form-check-input" type="radio" name="team-select" id={team.id} value={team.id} />
          {team.name}
        </label>
      </div>
    );
  }

}

export default Team;