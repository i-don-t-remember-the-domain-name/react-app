import React from 'react';
import styled from 'styled-components';

//Main Component For Export
function MainHeading() {
  return (
    <SDHeadingContainer>
      <SDMainHeading>Hacker Salt Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</SDMainHeading>
      <SDUnderHeading>
        Hacker Salt Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </SDUnderHeading>
    </SDHeadingContainer>
  );
}

//Styling
const SDHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SDMainHeading = styled.h1`
  color: orange;
  font-weight: light;
  font-size: 1.4rem;
  line-height: 1.5;
`;

const SDUnderHeading = styled.h1`
  font-weight: light;
  font-size: 1rem;
  line-height: 1.5;
`;

//Export
export default MainHeading;
