import React from 'react';
import styled from 'styled-components';

import saltShaker from '../../img/salt-shaker.png';

import Searchbar from '../Searchbar/SearchBar';

class Navbar extends React.Component {
  style = {
    'background-color': 'white'
  };

  render() {
    return (
      <SDNavbar>
        <SDLeftNav>
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
          <SDNavItem>
            <div>
              <a href="/about">About</a>
            </div>
          </SDNavItem>
        </SDLeftNav>
        <SDMiddleNav>
          <SDNavSearchBar>
            <Searchbar background={'white'} className="navbar-searchbar" />
          </SDNavSearchBar>
        </SDMiddleNav>
      </SDNavbar>
    );
  }
}

const SDNavbar = styled.div`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  top: 0;
  left: 0;
  height: 60px;
  width: 100vw;
  z-index: 2;
  background-color: white;
`;

const SDLeftNav = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  height: 100%;
`;

const SDMiddleNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100%;
`;

const SDNavItem = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  padding-left: 30px;
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

const SDNavSearchBar = styled.div`
  height: 50%;
  width: 40%;
`;

export default Navbar;
