import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import UserPageTabs from './UserTabs/UserPageTabs';
import UserPageCommentList from './CommentTable/UserPageCommentList';
import LineChart from '../Chart/LineChart';
import BarChart from '../Chart/BarChart';

function UserPage(props) {
  //Redirect if hacker is not saved in state
  // if (props.hackerName !== props.match.params.username) {
  //   props.history.push('/');
  //   return null;
  // }

  const { hackerName } = props;
  return (
    <SDUserPageEnvContainer>
      <SDUserPageContainer>
        <SDUserPageHeading>{hackerName}</SDUserPageHeading>
        <UserPageTabs
          dateOfFirstComment={props.dateOfFirstComment}
          countOfAllComments={props.countOfAllComments}
          countOfSaltyComments={props.countOfSaltyComments}
          rankAmountOfSaltiness={props.rankAmountOfSaltiness}
          rankQuantityOfSaltiness={props.rankQuantityOfSaltiness}
          averageSaltiness={props.averageSaltiness}
        />
        <SDUserPageHeading>{hackerName}'s saltiness over the time</SDUserPageHeading>
        {props.monthlyPlot && <LineChart monthlyPlot={props.monthlyPlot} />}
        <SDUserPageHeading>{hackerName}'s count of salty comments over the time</SDUserPageHeading>
        {props.monthlyPlot && <BarChart monthlyPlot={props.monthlyPlot} />}
        <SDUserPageHeading>{hackerName}'s salties comments</SDUserPageHeading>
        {props.saltiestComments && <UserPageCommentList saltiestComments={props.saltiestComments} />}
      </SDUserPageContainer>
    </SDUserPageEnvContainer>
  );
}

const SDUserPageEnvContainer = styled.div`
  width: 100vw;
  padding-top: 70px;
  height: auto;
  min-height: 90vh;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const SDUserPageContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SDUserPageHeading = styled.div`
  font-weight: lighter;
  font-size: 2rem;
  letter-spacing: 0.05rem;
  margin: 0;
  padding: 70px 0 50px 0;
`;

export default withRouter(UserPage);
