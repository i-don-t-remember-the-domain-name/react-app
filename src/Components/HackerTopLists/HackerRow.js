import React from 'react';
import styled from 'styled-components';

//Import images
import searchicon from '../../img/searchicon.png';

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
      {/* <SDRowSaltiestCommentHeading>Saltiest comment:</SDRowSaltiestCommentHeading> */}
      <SDRowSaltiestComment>{props.data.top_salty_comment[0].cleaned_comment}</SDRowSaltiestComment>
      <SDRowLink
        onClick={e => {
          e.preventDefault();
          props.searchHacker(props.data.commentor);
        }}>
        <img src={searchicon} alt="search icon" />
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
  font-size: 1rem;
  cursor: auto;
  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const SDRowRank = styled.div`
  width: 5%;
  @media (max-width: 600px) {
    flex-order: 1;
    width: 20%;
  }
`;

const SDRowCommentor = styled.div`
  min-width: 16%;
  @media (max-width: 600px) {
    order: 2;
    width: 40%;
  }
`;

const SDRowSpecificMetric = styled.div`
  width: 12%;
  @media (max-width: 600px) {
    order: 3;
    width: 25%;
  }
`;

const SDRowSaltiestComment = styled.div`
  width: 54%;
  @media (max-width: 600px) {
    width: 100%;
    padding-top: 10px;
    margin-top: 10px;
    order: 6;
    border-top: 1px solid #f8f9fa;
  }
`;

// const SDRowSaltiestCommentHeading = styled.div`
//   display: none;
//   @media (max-width: 600px) {
//     border-top: 1px solid #f8f9fa;
//     display: flex;
//     width: 100%;
//     margin-top: 10px;
//     padding-top: 10px;
//     order: 5;
//   }
// `;

const SDRowLink = styled.div`
  width: 8%;
  cursor: pointer;
  text-align: center;
  @media (max-width: 600px) {
    order: 4;
    width: 10%;
  }
  img {
    width: 1rem;
  }
  img {
    @media (max-width: 900px) {
      width: 0.9rem;
    }
    @media (max-width: 800px) {
      width: 0.8rem;
    }
  }
`;
