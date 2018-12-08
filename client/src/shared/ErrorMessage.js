import React, { Component } from 'react';
import styled from 'styled-components';

const Message = styled.div`
    margin-bottom: 50px;
    color: rgb(250, 96, 96);
    text-align: center;
`

class ErrorMessage extends Component {

  render() {
    return (
      <div>
        <Message>{this.props.message}</Message>
      </div>
    );
  }
}

export default ErrorMessage;