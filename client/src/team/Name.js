import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.div`
`

class Name extends Component {

  render() {
    return (
      <Content>
        {this.props.name}
      </Content>
    );
  }

}

export default Name;