import React from 'react';
import styled from 'styled-components';
import { Progress } from 'semantic-ui-react';

export default class HackerCard extends React.Component {
  /* 
  QUANTITY SALTY COMMENTS:
    commentor: 'tptacek',
    rank_lifetime_QTY_salty_comments: 1.0, <= used for if statement
    count_saltiness_salty: 11353.0,
  */

  /* 
  OVERALL SALTINESS:
    commentor: 'pg_is_a_butt',
    rank_overall_total_saltiness: 1.0,
    total_saltiness_overall: -88.5228763614,
  */

  /* 
  TOP 100 COMMENTERS:
    commentor: 'tptacek',
    rank_lifetime_QTY_salty_comments: 1.0,
    count_saltiness_salty: 11353.0,
  */

  render() {
    return (
      <SDHackerCard>
        {/*Rank - OVERALL SALTINESS */} {this.props.data.total_saltiness_overall && <SDRowRank>{this.props.data.rank_saltiest_trolls}</SDRowRank>}
        {/*Rank - QUANTITY SALTY COMMENTS & TOP 100 COMMENTERS */} {this.props.data.rank_lifetime_QTY_salty_comments && <SDRowRank>{this.props.data.rank_lifetime_QTY_salty_comments}</SDRowRank>}
        {/*Commentor - ALL */}
        <SDRowCommentor>{this.props.data.commentor}</SDRowCommentor>
        {/*Number of commetns - OVERALL SALTINESS (PLACEHOLDER)*/}
        {this.props.data.total_saltiness_overall && <SDRowComments>123 Comments</SDRowComments>}
        {this.props.data.count_saltiness_salty && <SDRowSaltyComments>{this.props.data.count_saltiness_salty.toLocaleString()} salty comments</SDRowSaltyComments>}
        {this.props.data.total_saltiness_overall && (
          <SDRowChart>
            <Progress id="SDProgressChart" percent={Math.abs(this.props.data.total_saltiness_overall.toFixed(2))} error />
          </SDRowChart>
        )}
        {this.props.data.total_saltiness_overall && <SDRowSaltiness>{this.props.data.total_saltiness_overall.toFixed(2)}</SDRowSaltiness>}
      </SDHackerCard>
    );
  }
}

/*commentor: 'pg_is_a_butt',
    rank_overall_total_saltiness: 1.0,
    total_saltiness_overall: -88.5228763614,
    top_salty_comment: [ */

const SDHackerCard = styled.div`
  width: 100%;
  height: 50px;
  margin: 5px 0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const SDRowRank = styled.div`
  width: 10%;
`;

const SDRowCommentor = styled.div`
  width: 20%;
`;

const SDRowComments = styled.div`
  width: 20%;
`;

const SDRowSaltiness = styled.div`
  width: 5%;
`;

const SDRowSaltyComments = styled.div`
  width: 20%;
`;

const SDRowChart = styled.div`
  width: 20%;
  height: 30%;
  margin: 0;
  .ui.progress .bar {
    height: inherit;
    min-width: 0;
    border-radius: 0 10px 10px 0px;
  }
  .ui.progress {
    background-color: #f8f9fa;
  }
  #SDProgressChart {
    margin: 0;
    font-size: 1rem;
    border-radius: 10px;
    height: 100%;
  }
`;
