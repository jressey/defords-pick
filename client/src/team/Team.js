import React, { Component } from 'react';

class Team extends Component {


  render() {
    return (
      <div>
        {this.props.team.name}
      </div>
    );
  }

}

export default Team;