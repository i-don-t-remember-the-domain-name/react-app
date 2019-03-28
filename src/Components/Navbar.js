import React from 'react';
import styled from 'styled-components';

import saltShaker from '../img/salt-shaker.png';

function Navbar() {
  return (
    <SDNavbar>
      <SDLogoImg>
        <img src={saltShaker} alt="salt shaker" />
      </SDLogoImg>
      <div>Hacker Salt</div>
    </SDNavbar>
  );
}

const SDNavbar = styled.div`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  align-items: flex-end;
  top: 0;
  left: 0;
  height: 70px;
  width: 100vw;
  padding-bottom: 10px;
`;

const SDLogoImg = styled.div`
  height: 40%;
  padding: 10px 10px 0 30px;
  img {
    height: 100%;
  }
`;

export default Navbar;
