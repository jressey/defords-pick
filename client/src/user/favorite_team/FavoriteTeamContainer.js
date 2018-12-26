import React, { Component } from 'react';
import FavoriteTeamName from "./FavoriteTeamName";
import FavoriteTeamNextGameContainer from "./FavoriteTeamNextGameContainer";
import FavoriteTeamNextGamesPanel from "./FavoriteTeamNextGamesPanel";
import Logo from "./Logo";
import styled from 'styled-components';

const Card = styled.div`
  margin-bottom: 30px;
`

const PaddinglessCol = styled.div`
  padding: 0px;
`

const ImageContainer = styled.div`
  height: 100px;
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
                <ImageContainer>
                  <Logo league_abbreviation={team.sport.league_name} team={team} />
                </ImageContainer>
              </PaddinglessCol>
              <div className="col-sm-6">
                <FavoriteTeamName team={team} />
              </div>
              <div className="col-sm-4">
                <FavoriteTeamNextGameContainer game={next_games[0]} />
              </div>
              <button className="btn btn-sm btn-secondary" onClick={unsetFavorite}>Change Favorite Team</button>
            </div>
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