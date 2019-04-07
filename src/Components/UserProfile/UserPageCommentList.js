import React from 'react';
import styled from 'styled-components';

import CommentRow from './CommentRow';
import CommentTopRow from './CommentTopRow';

export default function UserPageCommentList(props) {
  return (
    <SDCommentList>
      <CommentTopRow />
      {props.commentor_data.map(data => {
        return <CommentRow key={data.comment_id} data={data} />;
      })}
    </SDCommentList>
  );
}

const SDCommentList = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 40vh;
  padding: 2%;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
`;
