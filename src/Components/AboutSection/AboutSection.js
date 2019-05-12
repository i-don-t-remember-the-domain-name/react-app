import React from 'react';
import styled from 'styled-components';

//Export default component
export default function AboutSection() {
  return (
    <div>
      <SDIntroContainer>
        <SDIntroHeading>About HackerSalt</SDIntroHeading>
        <SDIntroContent>
          HackerSalt lets you see how "salty" any HackerNews commenter is. Search by username or browse the ranks of the
          "Saltiest". We've taken the open source HackerNews dataset and used sentiment analysis to generate summaries
          of usage across commenters' lifetimes.
          <br />
          <br />
          Please explore and share. We've prepared visualizations &amp; dashboards of commenters' activity for your
          curiosity. Just be prepared there's some really nasty trolls out there.
          <br />
          <br />
          Our hope is that this will be a useful insight into the behavior trends of various user types. We believe
          customers should be free to make their own experiences better and avoid salty trolls. Companies that own and
          operate these platforms should focus more resources on systems that improve and augment moderation system
          effectiveness. We would love to help you build these systems.
          <br />
          <br />
          We're not here to witch hunt. If you would like your data taken down, we're happy to oblige. Please send us
          proof of a kind deed you did for a random stranger and we'll consider your appeal.
          <br />
          sorry@hackersalt.com
        </SDIntroContent>
      </SDIntroContainer>
    </div>
  );
}

//Styled components
const SDIntroContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  min-height: 94vh;
  padding: 10%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const SDIntroHeading = styled.div`
  width: 49.5%;
  height: auto;
  padding: 10px;
  font-size: 2rem;
  &:nth-of-type(2) {
    text-align: right;
  }
  @media (max-width: 900px) {
    width: 70%;
    text-align: center;
  }
  @media (max-width: 600px) {
    width: 95%;
    padding: 0;
    padding-bottom: 10px;
    text-align: center;
    padding-top: 30px;
  }
`;

const SDIntroContent = styled.div`
  width: 49.5%;
  padding: 10px;
  text-align: left;
  line-height: 1.7;
  @media (max-width: 900px) {
    width: 70%;
    text-align: center;
  }
  @media (max-width: 600px) {
    width: 95%;
    padding: 0;
    text-align: center;
  }
`;
