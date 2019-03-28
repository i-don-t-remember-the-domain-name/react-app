import React from 'react';
import styled from 'styled-components';

function Introduction() {
  return (
    <SDIntroContainer>
      <SDIntroHeading>
        <h2>About HackerSalt</h2>
      </SDIntroHeading>
      <SDIntroContent>
        Because all of you potheads are too stoned to get off your asses and kill the people who require killing. you’re all completely pathetic. Moron... it’s not what it’s doing NOW... it’s what it
        ever HAD done, as anyone who visited it THEN is now locked out. how any of you hold jobs is beyond me. i’ll keep coming in and cleaning up your messes. <br />
        <br />
        because all of you potheads are too stoned to get off your asses and kill the people who require killing. you’re all completely pathetic. Moron... it’s not what it’s doing NOW... it’s what it
        ever HAD done, as anyone who visited it THEN is now locked out. how any of you hold jobs is beyond me. i’ll keep coming in and cleaning up your messes.
      </SDIntroContent>
    </SDIntroContainer>
  );
}

const SDIntroContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  padding: 10%;
  display: flex;
  justify-content: space-between;
`;

const SDIntroHeading = styled.div`
  width: 49.5%;
`;

const SDIntroContent = styled.div`
  width: 49.5%;
  text-align: left;
  line-height: 1.7;
`;

export default Introduction;
