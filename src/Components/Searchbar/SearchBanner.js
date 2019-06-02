import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

//Import components
import SearchBar from './SearchBar';
import { Loader } from 'semantic-ui-react';

//Import colors
import { ltOrange, dtPurple, dtWhiteFont } from '../../colors.js';

//Export default component
export default function SearchBanner(props) {
  return (
    <SDSearchBanner>
      <h1>find the most toxic hackers on internet</h1>
      <SDSearchBarFull>
        <SearchBar searchHacker={props.searchHacker} redirectToHackerProfilePage={props.redirectToHackerProfilePage} loading={props.loading} error={props.error} />
      </SDSearchBarFull>
    </SDSearchBanner>
  );
}

//Theming
const h1Color = theme('mode', {
  light: ltOrange,
  dark: dtWhiteFont
});

const errorTextColor = theme('mode', {
  light: ltOrange,
  dark: dtPurple
});

//Styled components
const SDSearchBanner = styled.div`
  width: 100vw;
  height: 50vh;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    /*themed*/
    color: ${h1Color};
    /*non-themed*/
    font-family: 'Sofia Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-weight: lighter;
    font-size: 2rem;
    font-weight: 400;
  }
`;

const SDSearchBarFull = styled.div`
  margin-top: 80px;
  margin-bottom: 20px;
  height: 40px;
  width: 30%;
  @media (max-width: 1100px) {
    width: 40%;
  }
  @media (max-width: 900px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;
const SDErrorMessage = styled.div`
  /*themed*/
  color: ${errorTextColor};
  /*non-themed*/
  height: 30px;
  font-size: 0.9rem;
  padding: 0 10px;
`;
