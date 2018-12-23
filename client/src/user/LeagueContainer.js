import React, { Component } from 'react';
import LeagueTable from './LeagueTable';
import styled from 'styled-components';
import FavoriteTeamContainer from "../user/FavoriteTeamContainer";
import FadeIn from 'react-fade-in';

const LeagueTableLayout = styled.div`
  margin-bottom: 30px;
`

class LeagueContainer extends Component {

  render() {

    return (
      <div className="col-sm-6">
      <FadeIn>
        { this.propsfavorite_football_team ? (
          <FavoriteTeamContainer team={this.props.favorite_football_team} />
        ) : (
          <LeagueTableLayout className="card">
            <div className="card-body">
              <LeagueTable league={this.props.league} />
            </div>
          </LeagueTableLayout>
        ) }
        </FadeIn>
      </div>
    );
  }
}

export default LeagueContainer;
