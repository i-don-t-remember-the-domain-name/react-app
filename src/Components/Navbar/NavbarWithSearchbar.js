import React from 'react';
import styled from 'styled-components';
import { Loader } from 'semantic-ui-react';

//Import images
import saltShaker from '../../img/salt-shaker.png';

//Import components
import Searchbar from '../Searchbar/SearchBar';

//Export default component
export default function Navbar(props) {
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
          <Searchbar background={'white'} className="navbar-searchbar" searchHacker={props.searchHacker} />
        </SDNavSearchBar>
      </SDMiddleNav>
      <SDRightNav>{props.loading && <Loader active inline size="small" />}</SDRightNav>
    </SDNavbar>
  );
}

//Styled components
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
  @media (max-width: 900px) {
    width: 74%;
    justify-content: flex-end;
  }
`;

const SDRightNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 18%;
  height: 100%;
  @media (max-width: 900px) {
    width: 5%;
  }
`;

const SDNavItem = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  font-size: 1rem;
  font-weight: lighter;
  padding-left: 30px;
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

const SDNavSearchBar = styled.div`
  padding-top: 10px;
  height: 80%;
  width: 40%;
  @media (max-width: 1100px) {
    width: 60%;
  }
`;
