import React from 'react';
import styled from 'styled-components';

//Export default component
export default function HackerCardTopRow(props) {
  const style = {
    color: props.color
  };
  return (
    <SDTopRowHackerCard style={style}>
      <SDTopRowRank>Rank</SDTopRowRank>
      <SDTopRowCommentor>User</SDTopRowCommentor>
      <SDTopRowSpecificMetric>Total</SDTopRowSpecificMetric>
      <SDTopRowSaltiestComment>Saltiest Comment</SDTopRowSaltiestComment>
    </SDTopRowHackerCard>
  );
}

//Styled components
const SDTopRowHackerCard = styled.div`
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
  font-weight: 600;
  cursor: default;
  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
`;

const SDTopRowRank = styled.div`
  width: 10%;
  @media (max-width: 600px) {
    flex-order: 1;
    width: 15%;
  }
`;

const SDTopRowCommentor = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 600px) {
    order: 2;
    width: 30%;
  }
`;

const SDTopRowSpecificMetric = styled.div`
  width: 10%;
  @media (max-width: 600px) {
    order: 3;
    width: 55%;
    text-align: right;
  }
`;

const SDTopRowSaltiestComment = styled.div`
  width: 60%;
  @media (max-width: 600px) {
    display: none;
  }
`;
