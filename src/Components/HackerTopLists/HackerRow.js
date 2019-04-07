import React from 'react';
import styled from 'styled-components';

export default class HackerCard extends React.Component {
  render() {
    const rankKey = Object.keys(this.props.data).find(key => key.startsWith('rank'));

    return (
      <SDHackerCard>
        <SDRowRank>{this.props.data[rankKey]}</SDRowRank>
        <SDRowCommentor>{this.props.data.commentor}</SDRowCommentor>
        {/* 4 specific metrics below */}
        {this.props.data.sum_slt_s && <SDRowSpecificMetric>{this.props.data.sum_slt_s.toFixed(2)}</SDRowSpecificMetric>}
        {this.props.data.sum_slt_oall && <SDRowSpecificMetric>{this.props.data.sum_slt_oall.toFixed(2)}</SDRowSpecificMetric>}
        {this.props.data.cnt_slt_s && <SDRowSpecificMetric>{this.props.data.cnt_slt_s}</SDRowSpecificMetric>}
        {/* 4 specific metrics above */}

        <SDRowSaltiestComment>{this.props.data.top_salty_comment[0].cleaned_comment}</SDRowSaltiestComment>
      </SDHackerCard>
    );
  }
}

const SDHackerCard = styled.div`
  width: 100%;
  min-height: 50px;
  height: auto;
  margin: 5px 0;
  padding: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SDRowRank = styled.div`
  width: 5%;
`;

const SDRowCommentor = styled.div`
  min-width: 10%;
`;

const SDRowSpecificMetric = styled.div`
  width: 10%;
`;

const SDRowSaltiestComment = styled.div`
  width: 70%;
`;
