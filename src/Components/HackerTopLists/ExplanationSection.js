import React from 'react';
import styled from 'styled-components';

//Export default component
export default function ExplanationSection(props) {
  const style = {
    color: props.color
  };
  return (
    <SDExplanationCard style={style}>
      <SDExplanationHeading style={style}>How do we count this</SDExplanationHeading>
      <div>
      Ranking - From way bad to less bad.
      </div>
      <div>
      Overall Saltiest: We take the total overall score by adding up all the comment scores for each user. Salty comments negate positive comments and the overall score is left behind. We then rank all the "salty" commentors by their overall score, highest to lowest. 
      </div>
      <div>
      Salt Contributed: We take the total scores across all of a user's SALTY comments and add them up. This gives us the total salt score. We then rank the users from highest to lowest. 
      </div>
      <div>
      Number of Salty Comments: We count the number of comments with a "salty" score  and tally them up. This gives us the number of salty comments. We then rank the users from highest to lowest. 
      </div>
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
