import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

//Import components
import { Loader } from 'semantic-ui-react';

//Import colors
import { ltOrange, dtPurple, dtWhiteFont } from '../../colors.js';

//Export default component
export default function SearchBanner(props) {
  return (
    <SDSearchContainer>
      {!props.loading && props.error && <SDErrorMessage>User not found. Check spelling and capitalization, and search again.</SDErrorMessage>}
      {props.loading && <Loader active inline="centered" size="medium" />}
    </SDSearchContainer>
  );
}

//Theming
const errorTextColor = theme('mode', {
  light: ltOrange,
  dark: dtPurple
});

//Styled components
const SDSearchContainer = styled.div`
  width: 100vw;
  height: 200px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SDErrorMessage = styled.div`
  /*themed*/
  color: ${errorTextColor};
  /*non-themed*/
  height: 30px;
  font-size: 0.9rem;
  padding: 0 10px;
`;
