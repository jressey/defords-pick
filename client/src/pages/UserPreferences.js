import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import FadeIn from 'react-fade-in';

class UserPreferences extends Component {

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
                  `${this.state.data.favorite_football_team.name},
                  ${this.state.data.favorite_basketball_team.name},
                  ${this.state.data.favorite_hockey_team.name}`
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

export default UserPreferences;
