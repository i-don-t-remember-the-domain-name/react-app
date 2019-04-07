import React from 'react';
import styled from 'styled-components';

export default function CommentTopRow(props) {
  return (
    <SDCommentRow>
      <SDRowSaltiestComment>Comments</SDRowSaltiestComment>
      <SDRowSaltiness>Saltiness</SDRowSaltiness>
    </SDCommentRow>
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
  color: #ff5d3e;
`;

const SDRowSaltiestComment = styled.div`
  width: 85%;
  font-weight: 600;
`;

const SDRowSaltiness = styled.div`
  width: 8%;
  color: #ff5d3e;
  font-weight: 600;
  text-align: right;
`;
