import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

//Import colors
import { ltLightGray, dtLightBlue } from '../../../colors.js';

//Import components
import CommentRow from './CommentRow';
import CommentTopRow from './CommentTopRow';

//Export default component
export default function HackerPageCommentList(props) {
  return (
    <SDCommentList>
      <CommentTopRow />
      {props.saltiestComments.map(comment => (
        <CommentRow key={comment.comment_id} comment={comment} />
      ))}
    </SDCommentList>
  );
}

//Theming

const backgroundColor = theme('mode', {
  light: ltLightGray,
  dark: dtLightBlue
});

//Styled components
const SDCommentList = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 40vh;
  padding: 2%;
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
`;
