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
      <SDTopRowLink>See User</SDTopRowLink>
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
`;

const SDTopRowRank = styled.div`
  width: 5%;
`;

const SDTopRowCommentor = styled.div`
  min-width: 12%;
  display: flex;
  justify-content: flex-start;
`;

const SDTopRowSpecificMetric = styled.div`
  width: 12%;
`;

const SDTopRowSaltiestComment = styled.div`
  width: 60%;
`;

const SDTopRowLink = styled.div`
  width: 8%;
  text-align: center;
`;
