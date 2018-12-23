import React, { Component } from 'react';

class Team extends Component {

  render() {
    const { team } = this.props;

    return (
      <div className="col-sm-4">
        {team.name}
      </div>
    );
  }

}

export default Team;