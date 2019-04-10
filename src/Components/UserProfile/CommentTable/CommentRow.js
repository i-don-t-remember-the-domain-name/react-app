import React from 'react';
import styled from 'styled-components';

export default function CommentRow(props) {
  return (
    <div>
      <SDCommentRow>
        <SDRowSaltiestComment>{props.comment.cleaned_comment}</SDRowSaltiestComment>
        <SDRowSaltiness>{props.comment.comment_saltiness.toFixed(2)}</SDRowSaltiness>
      </SDCommentRow>
    </div>
  );
}

const SDCommentRow = styled.div`
  width: 100%;
  min-height: 50px;
  height: auto;
  margin: 5px 0;
  padding: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SDRowSaltiestComment = styled.div`
  width: 85%;
`;

const SDRowSaltiness = styled.div`
  width: 5%;
  text-align: center;
`;
