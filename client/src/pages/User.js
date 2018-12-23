import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import FadeIn from 'react-fade-in';
import LeagueTablesContainer from '../user/LeagueTablesContainer';
import FavoriteTeamContainer from "../user/FavoriteTeamContainer";

class User extends Component {

  state = {
    loading: true,
    data: {}
  }

  componentDidMount() {
    fetch('api/user_preferences.json')
      .then(function(response) {
        return response.json();
      }.bind(this)).then(function(data) {
        this.setState({ data: data, loading: false });
      }.bind(this)).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {

    if(this.state.loading) {
      return null;
    }

    return (
      <FadeIn>
        <UserContext.Consumer>
          {(context) => (
            <React.Fragment>
                { context.state.is_logged_in() ? (
                  <div className="row">
                    <div className="col-sm-6">
                      { this.state.data.favorite_football_team ? (
                        <FavoriteTeamContainer team={this.state.data.favorite_football_team} />
                      ) : (
                        <LeagueTablesContainer league="NFL"/>
                      ) }
                    </div>
                    <div className="col-sm-6">
                      { this.state.data.favorite_basketball_team ? (
                        <FavoriteTeamContainer team={this.state.data.favorite_basketball_team} />
                      ) : (
                        <LeagueTablesContainer league="NBA"/>
                      ) }
                    </div>
                    <div className="col-sm-6">
                      { this.state.data.favorite_hockey_team ? (
                        <FavoriteTeamContainer team={this.state.data.favorite_hockey_team} />
                      ) : (
                        <LeagueTablesContainer league="NHL"/>
                      ) }
                    </div>
                  </div>
                ) : (
                  <Redirect to="/" />
                )}
            </React.Fragment>
          )}
        </UserContext.Consumer>

      </FadeIn>

    );
  }
}

export default User;
