import React from 'react';
import styled from 'styled-components';

import saltShaker from '../../img/salt-shaker.png';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isTop: true
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
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
        <SDNavItem>
          <div>
            <a href="/about">About</a>
          </div>
        </SDNavItem>
      </SDNavbar>
    );
  }
}

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

export default Navbar;
