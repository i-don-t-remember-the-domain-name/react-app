import React from 'react';
import styled from 'styled-components';

//Import images
import saltShaker from '../../img/salt-shaker.png';

//Export default component
export default function Navbar() {
  return (
    <SDNavbar>
      <SDNavItem>
        <SDLogoImg>
          <a href="/">
            <img src={saltShaker} alt="salt shaker" />
          </a>
        </SDLogoImg>
        <div>
          <a href="/">HackerSalt</a>
        </div>
      </SDNavItem>
      {/* <SDNavItem>
        <div>
          <a href="/about">About</a>
        </div>
      </SDNavItem> */}
    </SDNavbar>
  );
}

//Styled components
const SDNavbar = styled.div`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  height: 60px;
  width: 100vw;
  background-color: #f8f9fa;
  z-index: 2;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const SDNavItem = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  font-size: 1rem;
  font-weight: lighter;
  padding-left: 30px;
  @media (max-width: 600px) {
    padding-left: 0px;
    margin-right: 30px;
  }
  cursor: pointer;
  a {
    padding: 0;
  }
`;

const SDLogoImg = styled.div`
  height: 35%;
  padding: 0 5px;
  img {
    height: 100%;
  }
`;
