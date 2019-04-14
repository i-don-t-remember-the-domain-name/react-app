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
      <div>The HackerNews commentros are ranked from the saltiest to less salty based on the specific criteria for each rank.</div>
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

  div {
    color: black;
  }
`;

const SDExplanationHeading = styled.div`
  font-weight: 600;
  font-size: 1rem;
  padding-bottom: 10px;
`;
