import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { UserContext } from "../providers/UserContext";

import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 25px;
`

const FormBox = styled.div`
  margin-top: 40px;
  text-align: center;
`

const LinkBox = styled.div`
  margin-top: 20px;
`

const CenteredInput = styled.input`
  text-align: center;
`

class Login extends Component {

  render() {
    return (
      <UserContext.Consumer>
        {(context) => (
          <React.Fragment>
          { (context.state.logged_in) ?
            (
              <Redirect to="/" />
            ) : (
            <div>
              <Title>Welcome Back</Title>
              <div className="row justify-content-center">
                <FormBox className="col-sm-6 col-lg4">
                  <form>
                    <div className="form-group">
                      <CenteredInput
                        className="form-item form-control"
                        placeholder="email..."
                        name="email"
                        type="text"
                        onChange={context.state.change}
                      />
                    </div>
                    <div className="form-group">
                      <CenteredInput
                        className="form-item form-control"
                        placeholder="password..."
                        name="password"
                        type="password"
                        onChange={context.state.change}
                      />
                    </div>
                  </form>
                  <button onClick={context.state.login} className="btn btn-primary">Login</button>
                  <LinkBox>
                    <Link to="/register">New Here? Register.</Link>
                  </LinkBox>
                </FormBox>
              </div>
            </div>
          )}
        </React.Fragment>
      )}
      </UserContext.Consumer>
    );
  }
}

export default Login;