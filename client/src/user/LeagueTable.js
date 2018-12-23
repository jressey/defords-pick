import React, { Component } from 'react';
import TeamButtonContainer from './TeamButtonContainer';

class LeagueTable extends Component {

  state = {
    loading: true,
    data: []
  };

  url = `/api/teams.json?league_name=${this.props.league}`

  componentDidMount() {
    fetch(this.url)
      .then(function(response) {
        return response.json();
      }).then(function(data) {
        this.setState({ data: data, loading: false });
      }.bind(this)).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {
    const { loading, data, setFavorite } = this.state;

    if(loading) {
      return null;
    }

    return (
      <div>
        {data.length > 0 ? (
          <div className="row justify-content-center">
            {buildContainers(data, setFavorite)}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

function buildContainers(teams, func) {
  var team_containers = [];
  for (var i=0; i < teams.length; i++) {
    team_containers.push(<TeamButtonContainer key={i} team={teams[i]} setFavorite={func}/>);
  };
  return team_containers;
}

export default LeagueTable;
