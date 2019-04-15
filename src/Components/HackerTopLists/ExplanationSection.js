import React from 'react';
import styled from 'styled-components';

//Export default component
export default function ExplanationSection(props) {
  const style = {
    color: props.color
  };
  return (
    <SDExplanationCard style={style}>
      <SDExplanationHeading style={style}>What does the score mean?</SDExplanationHeading>
      <div>We analyzed and scored the sentiment of 15,397,309 Hacker News comments and ranked users by their "saltiness" - a combination of subjective negativity. </div>
      <div></div>
      <div>{props.explanation}</div>
    </SDExplanationCard>
  );
}

//Styled components
const SDExplanationCard = styled.div`
  width: 100%;
  min-height: 50px;
  height: auto;
  margin: 5px 0 30px 0;
  padding: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 900px) {
    font-size: 0.9rem;
  }

  div {
    color: black;
  }
`;

const SDExplanationHeading = styled.div`
  font-weight: 600;
  font-size: 1rem;
  padding-bottom: 10px;
  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
`;
