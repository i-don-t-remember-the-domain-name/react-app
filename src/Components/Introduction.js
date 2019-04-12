import React from 'react';
import styled from 'styled-components';

//Export default component
export default function Introduction() {
  return (
    <div>
      <SDIntroContainer>
        <SDIntroHeading>About HackerSalt</SDIntroHeading>
        <SDIntroContent>
          HackerSalt lets you see how "salty" any HackerNews commenter is. Search by username or browse the ranks of the "Saltiest". We're using sentiment analysis to create individual scores of
          commenters' interactions as well as creating a score card for the "saltiness" of the activity overall on HackerNews. You can explore users and trends over time.
          <br />
          <br />
          We are taking the open source HN dataset, applying text cleaning and sentiment analysis then generating summaries of usage across commenters' lifetimes.
          <br />
          <br />
          Our hope is that this will be a useful insight into the behavior trends of individual user types and that companies that own and operate social forums like these can utilize a monitoring
          system in the future that will enable them to see how effectively their community policies and moderation systems are functioning.
        </SDIntroContent>
      </SDIntroContainer>
    </div>
  );
}

//Styled components
const SDIntroContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 90vh;
  padding: 10%;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const SDIntroHeading = styled.div`
  width: 49.5%;
  padding: 10px;
  font-size: 2rem;
  &:nth-of-type(2) {
    text-align: right;
  }
`;

const SDIntroContent = styled.div`
  width: 49.5%;
  padding: 10px;
  text-align: left;
  line-height: 1.7;
`;
