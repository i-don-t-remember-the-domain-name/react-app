import React from 'react';
import styled from 'styled-components';
import { FacebookIcon, TwitterIcon, FacebookShareButton, TwitterShareButton, RedditShareButton, RedditIcon } from 'react-share';

//Export default component
export default function SocialButtons(props) {
  return (
    <SDButtonContainer>
      <SDSocialHeading>{`share ${props.hackerName}'s result with other hackers`}</SDSocialHeading>
      <SDButton>
        <TwitterShareButton
          url={`https://www.hackersalt.com/${props.hackerName}`}
          title={`HackerSalt lets you check your saltiness on HackerNews. This is ${props.hackerName}'s salt. Check it out!`}
          hashtags={['hackersalt']}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </SDButton>
      <SDButton>
        <RedditShareButton url={`https://www.hackersalt.com/${props.hackerName}`} title={`HackerSalt lets you check your saltiness on HackerNews. This is ${props.hackerName}'s salt. Check it out!`}>
          <RedditIcon size={32} round={true} />
        </RedditShareButton>
      </SDButton>
      <SDButton>
        <FacebookShareButton url={`https://www.hackersalt.com/${props.hackerName}`} quote={`HackerSalt lets you check your saltiness on HackerNews. This is ${props.hackerName}'s. Check it out!`}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
      </SDButton>
    </SDButtonContainer>
  );
}

//Styling
const SDButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px 0 60px 0;
`;

const SDSocialHeading = styled.div`
  width: 100%;
  text-align: center;
`;

const SDButton = styled.div`
  padding: 10px 0 0 10px;
  cursor: pointer;
`;
