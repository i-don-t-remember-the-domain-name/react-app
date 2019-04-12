import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import HackerPageTab from './HackerPageTab';

function HackerPageTabs(props) {
  // If hacker in state doesn't match
  // if (props.hackerName !== props.match.params.username) {
  //   props.history.push('/');
  //   return null;
  // }

  //Deconstructing the props
  const { dateOfFirstComment, countOfAllComments, countOfSaltyComments, rankAmountOfSaltiness, rankQuantityOfSaltiness, averageSaltiness } = props;

  return (
    <SDHackerTabs>
      {dateOfFirstComment && <HackerPageTab color={'#4c6cec'} heading={'First Comments'} data={dateOfFirstComment} />}
      {countOfAllComments && <HackerPageTab color={'#f59f00'} heading={'All Comments'} data={countOfAllComments} />}
      {countOfSaltyComments && <HackerPageTab color={'#4c6cec'} heading={'Salty Comments'} data={countOfSaltyComments} />}
      {rankAmountOfSaltiness && <HackerPageTab color={'#ff5d3e'} heading={'Rank In Amount Of Salty Comments'} data={rankAmountOfSaltiness} />}
      {rankQuantityOfSaltiness && <HackerPageTab color={'#74b816'} heading={'Rank In Qunatity of Brought Saltiness'} data={rankQuantityOfSaltiness} />}
      {averageSaltiness && <HackerPageTab color={'#FBBD05'} heading={'Average Saltiness'} data={averageSaltiness} />}
    </SDHackerTabs>
  );
}

const SDHackerTabs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default withRouter(HackerPageTabs);
