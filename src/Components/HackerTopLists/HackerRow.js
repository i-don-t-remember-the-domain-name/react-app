import React from 'react';
import styled from 'styled-components';

//Export default component
export default function HackerRow(props) {
  const rankKey = Object.keys(props.data).find(key => key.startsWith('rank'));

  return (
    <SDHackerRow>
      <SDRowRank>{props.data[rankKey]}</SDRowRank>
      <SDRowCommentor>{props.data.commentor}</SDRowCommentor>
      {/* 4 specific metrics below */}
      {props.data.sum_slt_s && <SDRowSpecificMetric>{props.data.sum_slt_s.toFixed(2)}</SDRowSpecificMetric>}
      {props.data.sum_slt_oall && <SDRowSpecificMetric>{props.data.sum_slt_oall.toFixed(2)}</SDRowSpecificMetric>}
      {props.data.cnt_slt_s && <SDRowSpecificMetric>{props.data.cnt_slt_s}</SDRowSpecificMetric>}
      {/* 4 specific metrics above */}
      <SDRowSaltiestComment>{props.data.top_salty_comment[0].cleaned_comment}</SDRowSaltiestComment>
      <SDRowLink
        onClick={e => {
          e.preventDefault();
          props.searchHacker(props.data.commentor);
        }}>
        <i class="fas fa-user-alt" />
      </SDRowLink>
    </SDHackerRow>
  );
}

//Styled components
const SDHackerRow = styled.div`
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
  min-width: 12%;
`;

const SDRowSpecificMetric = styled.div`
  width: 12%;
`;

const SDRowSaltiestComment = styled.div`
  width: 60%;
`;

const SDRowLink = styled.div`
  width: 8%;
  cursor: pointer;
  text-align: center;
`;
