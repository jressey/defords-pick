import React, { Component } from 'react';
import LeagueTable from './LeagueTable'

class LeagueTablesContainer extends Component {

  state = {
    leagues: ["NHL", "NFL", "NBA", "MLB"]
  }

  render() {

    return (
      <div>
        {buildTableContainers(this.state.leagues)}
      </div>
    );
  }
}

function buildTableContainers(leagues) {
  var team_table_containers = [];
  for (var i=0; i < leagues.length; i++) {
    team_table_containers.push(<LeagueTable key={i} league={leagues[i]} />);
  };
  return team_table_containers;
}

export default LeagueTablesContainer;
