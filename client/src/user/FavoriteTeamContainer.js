import React, { Component } from 'react';
import FavoriteTeam from "./FavoriteTeam";
import styled from 'styled-components';

const Card = styled.div`
  margin-bottom: 30px;
`

class FavoriteTeamContainer extends Component {

  render() {
    const { team, unsetFavorite } = this.props;

    return (
      <Card className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <FavoriteTeam team={team} />
            </div>
            <div className="col-sm-6">
              <button className="btn btn-secondary" onClick={unsetFavorite}>Change Favorite Team</button>
            </div>
          </div>
          </div>
      </Card>
    );
  }

}

export default FavoriteTeamContainer;