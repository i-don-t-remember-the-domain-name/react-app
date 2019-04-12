import React from 'react';
import styled from 'styled-components';

export default function HackerPageTab(props) {
  const style = {
    color: props.color,
    backgroundColor: `${props.color}1A`
  };
  return (
    <SDHackerPageTab style={style}>
      <SDHackerPageTabHeading>{props.heading}</SDHackerPageTabHeading>
      <SDHackerPageTabContent>{props.data}</SDHackerPageTabContent>
    </SDHackerPageTab>
  );
}

const SDHackerPageTab = styled.div`
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

const SDHackerPageTabHeading = styled.div`
  font-weight: 600;
  padding-bottom: 10px;
  text-align: center;
`;

const SDHackerPageTabContent = styled.div`
  color: black;
`;
