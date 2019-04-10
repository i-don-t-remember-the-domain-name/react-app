import React from 'react';
import styled from 'styled-components';

export default function CommentRow(props) {
  return (
    <div>
      <SDCommentRow>
        <SDRowSaltiestComment>{props.comment.cleaned_comment}</SDRowSaltiestComment>
        <SDRowSaltiness>{props.comment.comment_saltiness.toFixed(2)}</SDRowSaltiness>
        <SDRowLink>
          <a target="_blank" rel="noopener noreferrer" href={`https://news.ycombinator.com/item?id=${props.comment.parent_id}`}>
            <i className="fas fa-arrow-right" />
          </a>
        </SDRowLink>
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
  width: 8%;
  text-align: center;
`;

const SDRowLink = styled.div`
  width: 2%;
  text-align: center;
  cursor: pointer;
  .fa-arrow-right {
    color: #ff5d3e;
  }
`;
