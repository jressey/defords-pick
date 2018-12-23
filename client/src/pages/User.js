import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import LeagueContainer from '../user/LeagueContainer';

class User extends Component {

  state = {
    loading: true,
    data: {},
  }

  componentDidMount() {
    fetch('api/user_preferences.json')
      .then(function(response) {
        return response.json();
      }).then(function(data) {
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
      <UserContext.Consumer>
        {(context) => (
          <React.Fragment>
              { context.state.logged_in ? (
                <div className="row">
                  <LeagueContainer team={this.state.data.favorite_football_team} league="NFL" />
                  <LeagueContainer team={this.state.data.favorite_basketball_team} league="NBA" />
                  <LeagueContainer team={this.state.data.favorite_hockey_team} league="NHL" />
                  {/* <LeagueContainer team={this.state.data.favorite_baseball_team} league="MLB" /> */}
                </div>
              ) : (
                <Redirect to="/" />
              )}
          </React.Fragment>
        )}
      </UserContext.Consumer>
    );
  }
}

export default User;
