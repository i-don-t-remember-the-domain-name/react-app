import React from 'react';
import styled from 'styled-components';
import { Progress } from 'semantic-ui-react';

export default class HackerCard extends React.Component {
  /* 
{
    commentor: 'dredmorbius',
    rank_lt_amt_slt: 52.0,
    sum_slt_s: -179.5516921356,
    top_salty_comment: [
      {
        commentor: 'dredmorbius',
        comment_time: 1392870604,
        comment_saltiness: -1.0,
        comment_polarity: -1.0,
        comment_subjectivity: 1.0,
        subjectivity_spectrum: -1.0,
        is_salty: true,
        is_subjective: true,
        is_negative: true,
        parent_type: 'comment',
        parent_author: '6cxs2hd6',
        parent_title: 'Another Comment',
        cleaned_comment: 'What an amazingly awful website.',
        comment_rank: 0.0,
        comment_id: 7268883,
        parent_id: 7268699
      }
    ]
  },
  */

  render() {
    const rankKey = Object.keys(this.props.data).find(key => key.startsWith('rank'));

    return (
      <SDHackerCard>
        <SDRowRank>{this.props.data[rankKey]}</SDRowRank>
        <SDRowCommentor>{this.props.data.commentor}</SDRowCommentor>
        <SDRowSpecificMetric>{this.props.data.commentor}</SDRowSpecificMetric>
        <SDRowSaltiestComment>{this.props.data.top_salty_comment[0].cleaned_comment.substr(0, 50) + '...'}</SDRowSaltiestComment>
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
  padding: 0 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SDRowRank = styled.div`
  width: 5%;
`;

const SDRowCommentor = styled.div`
  width: 20%;
`;

const SDRowSpecificMetric = styled.div`
  width: 20%;
`;

const SDRowSaltiestComment = styled.div`
  width: 50%;
`;
