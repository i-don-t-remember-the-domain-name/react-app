import React from 'react';
import styled from 'styled-components';

import SearchBar from './SearchBar';

function SearchBanner() {
  return (
    <SDSearchBanner>
      <h1>Find saltiest users on HackerNews</h1>
      <SDSearchBarFull>
        <SearchBar />
      </SDSearchBarFull>
    </SDSearchBanner>
  );
}

const SDSearchBanner = styled.div`
  width: 100vw;
  height: 35vh;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SDSearchBarFull = styled.div`
  margin-top: 60px;
  height: 40px;
  width: 30%;
`;

export default SearchBanner;
