import React from 'react';
import styled from 'styled-components';

export default function ExplanationSection(props) {
  const style = {
    color: props.color
    // 'background-color': `${props.color}1A`
  };
  return (
    <SDExplanationCard style={style}>
      <SDExplanationHeading style={style}>How do we count this</SDExplanationHeading>
      <div>
        -317.32 JavaScript was supposed to be Scheme not once but twice. JavaScript was supposed to be Scheme not and the reason we use it instead of a Lisp in the browser is the insane competition
        with Microsoft. Source: interviews in Coders at Work. -317.32 JavaScript was supposed to be Scheme not once but twice , and the reason we use it instead of a Lisp in the browser is the insane
        competition with Microsoft. Source: interviews in Coders at Work.
      </div>
    </SDExplanationCard>
  );
}

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
