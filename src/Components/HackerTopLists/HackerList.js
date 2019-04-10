import React from 'react';
import styled from 'styled-components';

import HackerRow from './HackerTopListsComponents/HackerRow';
import HackerTopRow from './HackerTopListsComponents/HackerTopRow';
import ExplanationSection from './HackerTopListsComponents/ExplanationSection';

export default function HackerList(props) {
  return (
    <SDHackerList>
      <ExplanationSection color={props.color} />
      <HackerTopRow metric={props.metric} color={props.color} />
      {props.data.map((data, index) => (
        <HackerRow searchHacker={props.searchHacker} key={data.commentor} data={data} index={index} heading={props.heading} color={props.color} />
      ))}
    </SDHackerList>
  );
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
  cursor: pointer;

  h3 {
    margin-bottom: 20px;
  }
`;
