import React, { Component } from 'react';
import LeagueTable from './LeagueTable';
import FavoriteTeamContainer from "../user/favorite_team/FavoriteTeamContainer";
import FadeIn from 'react-fade-in';

class LeagueContainer extends Component {

  state = {
    favorite_team: {},
    loading: true,
    setFavorite: (team) => {
      this.setState({ loading: true });
      const url = `/api/user_preferences/set_favorite_team.json`
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
          team_id: team.id,
        })
      }).then(function(response) {
          return response.json();
        }).then(function(data) {
          this.setState({ favorite_team: data, loading: false });
        }.bind(this)).catch(function(ex) {
        })
    },
    unsetFavorite: () => {
      this.setState({ loading: true });
      const url = `/api/user_preferences/unset_favorite_team.json`
      fetch(url, {
        method: 'post',
        credentials: 'same-origin',
        mode: 'same-origin',
        headers: {
          'Accept':       'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          league: this.props.league
        })
      }).then(function(response) {
          return response.json();
        }).then(function() {
          this.setState({ favorite_team: null, loading: false });
        }.bind(this)).catch(function(ex) {
        })
    },
  }

  componentDidMount() {
    const url = `api/user_preferences/favorite_${this.props.league}_team.json`
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(data) {
        this.setState({ favorite_team: data, loading: false });
      }.bind(this)).catch(function(ex) {
      })
  }

  render() {
    const { league } = this.props;

    if(this.state.loading) {
      return <div className="col-sm-12 col-md-6"></div>
    }

    return (
      <div className="col-sm-12 col-md-6">
      <FadeIn>
        { this.state.favorite_team ? (
          <FavoriteTeamContainer team={this.state.favorite_team} unsetFavorite={this.state.unsetFavorite}/>
        ) : (
          <LeagueTable league={league} setFavorite={this.state.setFavorite} />
        ) }
        </FadeIn>
      </div>
    );
  }
}

export default LeagueContainer;
