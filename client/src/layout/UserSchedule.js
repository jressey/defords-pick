import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { UserContext } from "../providers/UserContext";
import FadeIn from 'react-fade-in';

class UserSchedule extends Component {

  state = {
    data: {}
  }

  componentDidMount() {
    fetch('api/user_schedules.json')
      .then(function(response) {
        return response.json();
      }.bind(this)).then(function(data) {
        this.setState({ data: data, loading: false, authenticated: true });
      }.bind(this)).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {
    return (
      <UserContext.Consumer>
        {(context) => (
          <React.Fragment>
            <FadeIn>
              { context.state.logged_in ? (
                this.state.data.team
              ) : (
                <Redirect to="/" />
              )}
            </FadeIn>
          </React.Fragment>
        )}
      </UserContext.Consumer>
    );
  }
}

export default UserSchedule;
