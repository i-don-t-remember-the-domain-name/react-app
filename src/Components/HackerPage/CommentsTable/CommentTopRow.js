import React from 'react';
import styled from 'styled-components';

//Export default component
export default function CommentTopRow(props) {
  return (
    <SDCommentRow>
      <SDRowSaltiestComment>Comments</SDRowSaltiestComment>
      <SDRowSaltiness>Score</SDRowSaltiness>
      <SDRowLink>See on HN</SDRowLink>
    </SDCommentRow>
  );
}

//Styled components
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
  color: #4c6cec;
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const SDRowSaltiestComment = styled.div`
  width: 78%;
  padding-left: 5px;
  font-weight: 600;
  @media (max-width: 600px) {
    width: 60%;
  }
`;

const SDRowSaltiness = styled.div`
  width: 10%;
  color: #4c6cec;
  font-weight: 600;
  text-align: center;
  padding-left: 20px;
  @media (max-width: 600px) {
    width: 15%;
    padding-left: 0px;
  }
`;

const SDRowLink = styled.div`
  width: 10%;
  color: #4c6cec;
  font-weight: 600;
  text-align: center;

  @media (max-width: 600px) {
    width: 15%;
    text-align: center;
  }
`;
