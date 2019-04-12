import React from 'react';
import styled from 'styled-components';

export default function UserPageTab(props) {
  const style = {
    color: props.color,
    backgroundColor: `${props.color}1A`
  };
  return (
    <SDUserPageTab style={style}>
      <SDUserPageTabHeading>{props.heading}</SDUserPageTabHeading>
      <SDUserPageTabContent>{props.data}</SDUserPageTabContent>
    </SDUserPageTab>
  );
}

const SDUserPageTab = styled.div`
  width: 26%;
  height: 100px;
  padding: 10px;
  background-color: #f8f9fa;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SDUserPageTabHeading = styled.div`
  font-weight: 600;
  padding-bottom: 10px;
  text-align: center;
`;

const SDUserPageTabContent = styled.div`
  color: black;
`;
