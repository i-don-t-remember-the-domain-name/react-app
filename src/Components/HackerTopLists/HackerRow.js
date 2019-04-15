import React from 'react';
import styled from 'styled-components';

//Export default component
export default function HackerRow(props) {
  const rankKey = Object.keys(props.data).find(key => key.startsWith('rank'));
  const style = {
    color: props.color
  };

  return (
    <SDHackerRow>
      <SDRowRank>{props.data[rankKey]}</SDRowRank>
      <SDRowCommentor
        style={style}
        onClick={e => {
          e.preventDefault();
          props.searchHacker(props.data.commentor);
        }}>
        {props.data.commentor}
      </SDRowCommentor>
      {/* 4 specific metrics below */}
      {props.data.sum_slt_s && <SDRowSpecificMetric>{props.data.sum_slt_s.toFixed(2)}</SDRowSpecificMetric>}
      {props.data.sum_slt_oall && <SDRowSpecificMetric>{props.data.sum_slt_oall.toFixed(2)}</SDRowSpecificMetric>}
      {props.data.cnt_slt_s && <SDRowSpecificMetric>{props.data.cnt_slt_s}</SDRowSpecificMetric>}
      {/* 4 specific metrics above */}
      {/* <SDRowSaltiestCommentHeading>Saltiest comment:</SDRowSaltiestCommentHeading> */}
      <SDRowSaltiestComment>{props.data.top_salty_comment[0].cleaned_comment}</SDRowSaltiestComment>
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
  font-size: 1rem;
  cursor: default;
  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const SDRowRank = styled.div`
  width: 10%;
  @media (max-width: 600px) {
    flex-order: 1;
    width: 10%;
  }
`;

const SDRowCommentor = styled.div`
  min-width: 20%;
  cursor: pointer;
  @media (max-width: 600px) {
    order: 2;
    width: 30%;
  }
`;

const SDRowSpecificMetric = styled.div`
  width: 10%;
  @media (max-width: 600px) {
    order: 3;
    width: 55%;
    text-align: right;
  }
`;

const SDRowSaltiestComment = styled.div`
  width: 60%;
  @media (max-width: 600px) {
    width: 100%;
    padding-top: 10px;
    margin-top: 10px;
    order: 6;
    border-top: 1px solid #f8f9fa;
  }
`;
