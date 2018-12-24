import React, { Component } from 'react';
import FavoriteTeam from "./FavoriteTeam";
import styled from 'styled-components';

const Card = styled.div`
  margin-bottom: 30px;
`

class FavoriteTeamContainer extends Component {

  render() {
    const { team } = this.props;

    return (
      <Card className="card">
        <div className="card-body">
          <FavoriteTeam team={team} />
        </div>
      </Card>
    );
  }

}

export default FavoriteTeamContainer;