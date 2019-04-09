import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import UserPageTabs from './UserRank/UserPageTabs';
import UserPageCommentList from './CommentTable/UserPageCommentList';

function UserPage(props) {
  if (props.hacker.commentor !== props.match.params.username) {
    props.history.push('/');
    return null;
  }
  return (
    <SDUserPageEnvContainer>
      <SDUserPageContainer>
        <SDUserPageHeading>{props.hacker.commentor}</SDUserPageHeading>
        <UserPageTabs hacker={props.hacker} />
        <SDUserPageHeading>{props.hacker.commentor}'s salties comments</SDUserPageHeading>
        {/* <UserPageCommentList commentor_data={props.hacker.top_cmnts_s} /> */}
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
