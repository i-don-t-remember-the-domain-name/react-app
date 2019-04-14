import React from 'react';
import styled from 'styled-components';
import { Loader } from 'semantic-ui-react';

//Import components
import SearchBar from './SearchBar';

//Export default component
export default function SearchBanner(props) {
  return (
    <SDSearchBanner>
      <h1>Find saltiest users on HackerNews</h1>
      <SDSearchBarFull>
        <SearchBar searchHacker={props.searchHacker} />
      </SDSearchBarFull>
      {!props.loading && <LoaderReplacement />}
      {props.loading && <Loader active inline="centered" size="medium" />}
    </SDSearchBanner>
  );
}

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
    font-family: 'Sofia Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-weight: lighter;
    font-size: 2rem;
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
`;
const LoaderReplacement = styled.div`
  height: 30px;
`;
