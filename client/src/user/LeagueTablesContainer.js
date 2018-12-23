import React, { Component } from 'react';
import LeagueTable from './LeagueTable'

class LeagueTablesContainer extends Component {

  render() {

    return (
      <div>
        <LeagueTable league={this.props.league} />
      </div>
    );
  }
}

export default LeagueTablesContainer;
