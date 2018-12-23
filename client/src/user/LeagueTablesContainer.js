import React, { Component } from 'react';
import LeagueTable from './LeagueTable';
import styled from 'styled-components';

const LeagueTableLayout = styled.div`
  margin-bottom: 30px;
`

class LeagueTablesContainer extends Component {

  render() {

    return (
      <LeagueTableLayout className="card">
        <div className="card-body">
          <LeagueTable league={this.props.league} />
        </div>
      </LeagueTableLayout>
    );
  }
}

export default LeagueTablesContainer;
