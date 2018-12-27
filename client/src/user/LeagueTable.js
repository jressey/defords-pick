import React, { Component } from 'react';
import TeamButtonContainer from './TeamButtonContainer';
import styled from 'styled-components';

const LeagueTableLayout = styled.div`
  margin-bottom: 30px;
`

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
      })
  }

  render() {
    const { loading, data } = this.state;

    if(loading) {
      return <LeagueTableLayout className="card"></LeagueTableLayout>
    }

    return (
      <div>
        {data.length > 0 ? (
           <LeagueTableLayout className="card">
            <div className="card-body">
              <div className="row justify-content-center">
                {buildContainers(data, this.props.setFavorite)}
              </div>
            </div>
          </LeagueTableLayout>
        ) : (
          <LeagueTableLayout className="card"></LeagueTableLayout>
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
