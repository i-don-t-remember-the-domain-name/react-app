import React from 'react';
import styled from 'styled-components';

import saltShaker from '../img/salt-shaker.png';

function Navbar() {
  return (
    <SDNavbar>
      <SDNavItems>
        <SDLogoImg>
          <img src={saltShaker} alt="salt shaker" />
        </SDLogoImg>
        <div>
          <a href="/">Hacker Salt</a>
        </div>
      </SDNavItems>
    </SDNavbar>
  );
}

const SDNavbar = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  height: 60px;
  width: 100vw;
  padding-bottom: 10px;
`;

const SDNavItems = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
  font-size: 1.2rem;
  padding-left: 10px;
  cursor: pointer;
  a {
    padding: 0;
  }
`;

const SDLogoImg = styled.div`
  height: 45%;
  padding: 0 5px;
  img {
    height: 100%;
  }
`;

export default Navbar;
