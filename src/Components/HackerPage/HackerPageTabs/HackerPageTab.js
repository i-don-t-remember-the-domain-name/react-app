import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

//Import colors
import { dtWhiteFont, dtLightBlue, dtGreen, ltBlackFont, ltLightBlue, ltBlue } from '../../../colors.js';

//Export default component
export default function HackerPageTab(props) {
  return (
    <SDHackerPageTab>
      <SDHackerPageTabHeading>{props.heading}</SDHackerPageTabHeading>
      <SDHackerPageTabContent>{props.data}</SDHackerPageTabContent>
    </SDHackerPageTab>
  );
}

//Theming
const textColor = theme('mode', {
  light: ltBlackFont,
  dark: dtWhiteFont
});

const headingColor = theme('mode', {
  light: ltBlue,
  dark: dtGreen
});

const backgroundColor = theme('mode', {
  light: ltLightBlue,
  dark: dtLightBlue
});

//Styled components
const SDHackerPageTab = styled.div`
  /*themed*/
  background-color: ${backgroundColor};
  /*non-themed*/
  width: 26%;
  height: 100px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const SDHackerPageTabHeading = styled.div`
  /*themed*/
  color: ${headingColor};
  /*non-themed*/
  font-weight: 600;
  padding-bottom: 10px;
  text-align: center;
`;

const SDHackerPageTabContent = styled.div`
  /*themed*/
  color: ${textColor};
`;
