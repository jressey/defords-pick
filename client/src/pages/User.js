import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import LeagueContainer from '../user/LeagueContainer';

class User extends Component {

  render() {

    return (
      <UserContext.Consumer>
        {(context) => (
          <React.Fragment>
              { context.state.logged_in ? (
                <div className="row">
                  <LeagueContainer league="NFL" />
                  <LeagueContainer league="NBA"  />
                  <LeagueContainer league="NHL" />
                  {/* <LeagueContainer league="MLB" /> */}
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
