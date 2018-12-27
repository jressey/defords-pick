import React, { Component } from 'react';
import FavoriteTeamName from "./FavoriteTeamName";
import FavoriteTeamNextGamesPanel from "./FavoriteTeamNextGamesPanel";
import Logo from "./Logo";
import styled from 'styled-components';

const Card = styled.div`
  margin-bottom: 30px;
`

const PaddinglessCol = styled.div`
  padding: 0px;
`

class FavoriteTeamContainer extends Component {

  state = {
    loading: true,
    next_games: [],
  }

  componentDidMount() {
    const url = `api/games/next_games.js?team_id=${this.props.team.id}`
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(data) {
        this.setState({ next_games: data, loading: false });
      }.bind(this)).catch(function(ex) {
    })
  }

  render() {
    const { team, unsetFavorite } = this.props;
    const { next_games } = this.state;

    if(this.state.loading) {
      return null;
    }

    return (
      <Card className="card">
        <div className="card-body">
        { team.sport ? (
          <div>
            <div className="row">
              <PaddinglessCol className="col-sm-2">
                <div>
                  <Logo league_abbreviation={team.sport.league_name} team={team} />
                </div>
              </PaddinglessCol>
              <div className="col-sm-8">
                <FavoriteTeamName team={team} />
              </div>
              <div className="col-sm-2">
              <button className="btn btn-sm btn-secondary" onClick={unsetFavorite}>Change</button>
              </div>
            </div>
            <hr />
            <FavoriteTeamNextGamesPanel games={next_games} />
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