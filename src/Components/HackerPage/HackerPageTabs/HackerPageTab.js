import React from 'react';
import styled from 'styled-components';

//Export default component
export default function HackerPageTab(props) {
  const style = {
    color: props.color,
    backgroundColor: `${props.color}1A`
  };
  console.log(props.data);
  return (
    <SDHackerPageTab style={style}>
      <SDHackerPageTabHeading>{props.heading}</SDHackerPageTabHeading>
      <SDHackerPageTabContent>{props.data}</SDHackerPageTabContent>
    </SDHackerPageTab>
  );
}

//Styled components
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
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const SDHackerPageTabHeading = styled.div`
  /* font-weight: 600; */
  padding-bottom: 10px;
  text-align: center;
`;

const SDHackerPageTabContent = styled.div`
  color: black;
`;
