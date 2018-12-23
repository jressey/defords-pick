import React, { Component } from 'react';
import LeagueTable from './LeagueTable';
import styled from 'styled-components';
import FavoriteTeamContainer from "../user/FavoriteTeamContainer";
import FadeIn from 'react-fade-in';

const LeagueTableLayout = styled.div`
  margin-bottom: 30px;
`

class LeagueContainer extends Component {


  setFavorite = (e) => {
    console.log("setting favorite");
    debugger;
  }

  unsetFavorite = (e) => {

  }

  render() {
    const { team, league } = this.props;

    return (
      <div className="col-sm-12 col-md-6">
      <FadeIn>
        { team ? (
          <FavoriteTeamContainer team={team} />
        ) : (
          <LeagueTableLayout className="card">
            <div className="card-body">
              <LeagueTable league={league} setFavorite={this.setFavorite} />
            </div>
          </LeagueTableLayout>
        ) }
        </FadeIn>
      </div>
    );
  }
}

export default LeagueContainer;
