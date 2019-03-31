import React from 'react';
import styled from 'styled-components';

import HackerCard from './HackerCard';

export default class HackerList extends React.Component {
  render() {
    return (
      <SDHackerList>
        <h3>{this.props.heading}</h3>
        {this.props.data.map((data, index) => (
          <HackerCard key={data.commentor} data={data} index={index} heading={this.props.heading} />
        ))}
      </SDHackerList>
    );
  }
}

const SDHackerList = styled.div`
  box-sizing: border-box;
  width: 100vw;
  min-height: 40vh;
  padding: 5% 20%;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h3 {
    margin-bottom: 20px;
  }
`;
