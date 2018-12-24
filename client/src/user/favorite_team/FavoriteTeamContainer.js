import React, { Component } from 'react';
import FavoriteTeamName from "./FavoriteTeamName";
import Logo from "../../shared/team/Logo";
import styled from 'styled-components';

const Card = styled.div`
  margin-bottom: 30px;
`

class FavoriteTeamContainer extends Component {

  render() {
    const { team, unsetFavorite } = this.props;
    console.log(team.sport);

    return (
      <Card className="card">
        <div className="card-body">
        { team.sport ? (
          <div>
            <Logo league_abbreviation={team.sport.league_name} team={team} />
            <FavoriteTeamName team={team} />
            {/* <FavoriteTeamUpcoming team={team} /> */}
            {/* <FavoriteTeamNextGame team={team} /> */}
            <button className="btn btn-sm btn-secondary" onClick={unsetFavorite}>Change Favorite Team</button>
          </div>
        ) : (
          <div></div>
        )}
        </div>
      </Card>
    );
  }

}

export default FavoriteTeamContainer;