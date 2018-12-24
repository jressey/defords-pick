import React, { Component } from 'react';
import LeagueTable from './LeagueTable';
import styled from 'styled-components';
import FavoriteTeamContainer from "../user/FavoriteTeamContainer";
import FadeIn from 'react-fade-in';

const LeagueTableLayout = styled.div`
  margin-bottom: 30px;
`

class LeagueContainer extends Component {

  setFavorite = (team_id) => {
    const url = `/api/user_preferences/set_favorite_team.json`
    console.log("setting favorite to ", team_id);
    fetch(url, {
      method: 'post',
      credentials: 'same-origin',
      mode: 'same-origin',
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        league: this.props.league,
        team_id: team_id,
      })
    }).then(function(response) {
        return response.json();
      }).then(function(data) {
        this.setState({ data: data });
      }.bind(this)).catch(function(ex) {
        console.log('parsing failed', ex)
      })
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
