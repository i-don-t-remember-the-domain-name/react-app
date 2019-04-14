import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

//Import components
import HackerPageTab from './HackerPageTab';

//Default export, exported at the bottom with withRouter
function HackerPageTabs(props) {
  //CURRENTLY NOT USED: Redirect if hacker is not saved in state
  // if (props.hackerName !== props.match.params.hacker) {
  //   props.history.push('/');
  //   return null;
  // }

  //Deconstructing all props
  const { countOfAllComments, countOfSaltyComments, rankAmountOfSaltiness, rankQuantityOfSaltiness, rankOverallSaltiness, averageSaltiness } = props;

  return (
    <SDHackerTabs>
      {countOfAllComments && <HackerPageTab color={'#f59f00'} heading={'# of Comments Overall'} data={countOfAllComments} />}
      {countOfSaltyComments && <HackerPageTab color={'#4c6cec'} heading={'# Salty Comments'} data={countOfSaltyComments} />}
      {averageSaltiness && <HackerPageTab color={'#FBBD05'} heading={'Average Salt Score'} data={averageSaltiness} />}
      {rankOverallSaltiness && <HackerPageTab color={'#4c6cec'} heading={'Rank: Total Overall Score'} data={rankOverallSaltiness} />}
      {rankAmountOfSaltiness && <HackerPageTab color={'#f59f00'} heading={'Rank: Total Salt Contributed'} data={rankAmountOfSaltiness} />}
      {rankQuantityOfSaltiness && <HackerPageTab color={'#74b816'} heading={'Rank: Number of Salty Comments'} data={rankQuantityOfSaltiness} />}


    </SDHackerTabs>
  );
}

//Styled components
const SDHackerTabs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
`;

export default withRouter(HackerPageTabs);
