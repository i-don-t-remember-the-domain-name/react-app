import React from 'react';
import styled from 'styled-components';

export default class HackerCard extends React.Component {
  render() {
    return (
      <SDHackerCard>
        <div>Number</div>
        <div>Username</div>
        <div>#Comments</div>
        <div>Graph</div>
        <div>Score</div>
      </SDHackerCard>
    );
  }
}

const SDHackerCard = styled.div`
  width: 100%;
  height: 50px;
  margin: 10px 0;
  background-color: white;
  display: flex;
`;
