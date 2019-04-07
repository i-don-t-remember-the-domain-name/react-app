import React from 'react';
import styled from 'styled-components';

import HackerRow from './HackerTopListsComponents/HackerRow';
import HackerTopRow from './HackerTopListsComponents/HackerTopRow';
import ExplanationSection from './HackerTopListsComponents/ExplanationSection';

export default class HackerList extends React.Component {
  render() {
    return (
      <SDHackerList>
        <ExplanationSection color={this.props.color} />
        <HackerTopRow metric={this.props.metric} color={this.props.color} />
        {this.props.data.map((data, index) => (
          <HackerRow key={data.commentor} data={data} index={index} heading={this.props.heading} />
        ))}
      </SDHackerList>
    );
  }
}

const SDHackerList = styled.div`
  box-sizing: border-box;
  width: 70vw;
  min-height: 40vh;
  padding: 2%;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h3 {
    margin-bottom: 20px;
  }
`;
