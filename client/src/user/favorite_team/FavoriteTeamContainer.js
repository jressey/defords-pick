import React, { Component } from 'react';
import FavoriteTeamName from "./FavoriteTeamName";
import FavoriteTeamNextGame from "./FavoriteTeamNextGame";
import Logo from "../../shared/team/Logo";
import styled from 'styled-components';

const Card = styled.div`
  margin-bottom: 30px;
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

    if(this.state.loading) {
      return null;
    }

    return (
      <Card className="card">
        <div className="card-body">
        { team.sport ? (
          <div>
            <Logo league_abbreviation={team.sport.league_name} team={team} />
            <FavoriteTeamName team={team} />
            <FavoriteTeamNextGame game={this.state.next_games[0]} />
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