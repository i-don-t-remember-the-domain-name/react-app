import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

//Import components
import HackerPageTabs from './HackerPageTabs/HackerPageTabs';
import HackerPageCommentList from './CommentsTable/HackerPageCommentList';
import LineChart from '../Chart/LineChart';
import BarChart from '../Chart/BarChart';

//Default export, exported at the bottom with withRouter
function HackerPage(props) {
  // CURRENTLY NOT USED: Redirect if hacker is not saved in state
  // if (props.hackerName !== props.match.params.hacker) {
  //   props.history.push('/');
  //   return null;
  // }

  const { hackerName } = props;

  return (
    <SDHackerPageEnvContainer>
      <SDHackerPageContainer>
        <SDHackerPageHeading>{hackerName}</SDHackerPageHeading>
        <HackerPageTabs
          dateOfFirstComment={props.dateOfFirstComment}
          countOfAllComments={props.countOfAllComments}
          countOfSaltyComments={props.countOfSaltyComments}
          rankAmountOfSaltiness={props.rankAmountOfSaltiness}
          rankQuantityOfSaltiness={props.rankQuantityOfSaltiness}
          averageSaltiness={props.averageSaltiness}
        />
        {props.monthlyPlot && <SDHackerPageHeading>{hackerName}'s saltiness over the time</SDHackerPageHeading>}
        {props.monthlyPlot && <LineChart monthlyPlot={props.monthlyPlot} />}
        {props.monthlyPlot && <SDHackerPageHeading>{hackerName}'s count of salty comments over the time</SDHackerPageHeading>}
        {props.monthlyPlot && <BarChart monthlyPlot={props.monthlyPlot} />}
        {props.saltiestComments && <SDHackerPageHeading>{hackerName}'s salties comments</SDHackerPageHeading>}
        {props.saltiestComments && <HackerPageCommentList saltiestComments={props.saltiestComments} />}
      </SDHackerPageContainer>
    </SDHackerPageEnvContainer>
  );
}

//Styled components
const SDHackerPageEnvContainer = styled.div`
  width: 100vw;
  padding-top: 70px;
  height: auto;
  min-height: 90vh;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const SDHackerPageContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1100px) {
    width: 90%;
  }
  @media (max-width: 900px) {
    width: 95%;
  }
`;

const SDHackerPageHeading = styled.div`
  font-weight: lighter;
  font-size: 2rem;
  letter-spacing: 0.05rem;
  margin: 0;
  padding: 70px 0 50px 0;
  text-align: center;
`;

export default withRouter(HackerPage);
