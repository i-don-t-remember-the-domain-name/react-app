import React from 'react';
import styled from 'styled-components';

import UserPageTabs from './UserPageTabs';
import UserPageCommentList from './UserPageCommentList';

export default function UserPage(props) {
  return (
    <SDUserPageEnvContainer>
      <SDUserPageContainer>
        <SDUserPageHeading>{props.commentor_data.commentor}</SDUserPageHeading>
        <UserPageTabs commentor_data={props.commentor_data} />
        <SDUserPageHeading>Salties comments</SDUserPageHeading>
        <UserPageCommentList commentor_data={props.commentor_data.top_cmnts_s} />
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
