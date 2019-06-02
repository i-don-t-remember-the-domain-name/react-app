import React, { useEffect } from 'react';
import styled from 'styled-components';

//Import components
import NavbarWithSearchbar from '../Components/Navbar/NavbarWithSearchbar';
import Navbar from '../Components/Navbar/Navbar';
import Searchbar from '../Components/Searchbar/SearchBar';

import HackerPage from '../Components/HackerPage/HackerPage';

//Export default component
export default function HackerProfilePage(props) {
  useEffect(() => {
    //Dirty fix, need to make sure to create a list of characters that can be included in search, other delete
    const currentHacker = props.match.params.hacker.replace(/\u202C/, '');
    props.searchHacker(currentHacker);
  }, [props.match.params.hacker]);

  return (
    <div>
      <Navbar />
      <SDSearchbarContainer>
        <SDSearchbar>
          <Searchbar searchHacker={props.searchHacker} loading={props.loading} error={props.error} redirectToHackerProfilePage={props.redirectToHackerProfilePage} />
        </SDSearchbar>
      </SDSearchbarContainer>
      <HackerPage
        searchHacker={props.searchHacker}
        averageSaltiness={props.averageSaltiness}
        rankOverallSaltiness={props.rankOverallSaltiness}
        countOfAllComments={props.countOfAllComments}
        countOfSaltyComments={props.countOfSaltyComments}
        hackerName={props.hackerName}
        monthlyPlot={props.monthlyPlot}
        rankAmountOfSaltiness={props.rankAmountOfSaltiness}
        rankQuantityOfSaltiness={props.rankQuantityOfSaltiness}
        dateOfFirstComment={props.dateOfFirstComment}
        saltiestComments={props.saltiestComments}
      />
    </div>
  );
}

const SDSearchbarContainer = styled.div`
  margin-top: 100px;
  width: 100vw;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
`;

const SDSearchbar = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  height: 35px;
`;
