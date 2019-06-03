import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { Link } from 'react-router-dom';

//Import colors
import { dtLightBlue, dtHover, dtWhiteFont, ltLightGray, ltOrange, ltBlue } from '../../colors.js';

//Import icons
import sunIcon from '../../img/icon-sun-green.svg';
import moonIcon from '../../img/icon-moon-blue.svg';

//Export default component
export default function Navbar(props) {
  return (
    <SDNavbar>
      <SDNavRight>
        <SDNavItem>
          <div>
            <Link to="/">TOXIC HACKERS</Link>
          </div>
        </SDNavItem>
        <SDNavItem>
          <div>
            <Link to="/hnstats">HN stats</Link>
          </div>
        </SDNavItem>
        <SDNavItem>
          <div>
            <Link to="/about">about</Link>
          </div>
        </SDNavItem>
      </SDNavRight>
      <SDNavItem className="theme-button">
        <div>
          <SDThemeToggle
            onClick={() => {
              if (props.theme === 'dark') {
                props.setTheme('light');
              } else {
                props.setTheme('dark');
              }
            }}
          />
        </div>
      </SDNavItem>
    </SDNavbar>
  );
}

//Theming
const backgroundColor = theme('mode', {
  light: ltLightGray,
  dark: dtLightBlue
});

const backgroundImage = theme('mode', {
  light: moonIcon,
  dark: sunIcon
});

const hoverColor = theme('mode', {
  light: ltOrange,
  dark: dtHover
});

const textColor = theme('mode', {
  light: ltBlue,
  dark: dtWhiteFont
});

//Styled components
const SDNavbar = styled.div`
  /*themed*/
  background-color: ${backgroundColor};
  color: ${textColor};
  /*non-themed*/
  position: fixed;
  z-index: 2;
  box-sizing: border-box;
  top: 0;
  left: 0;
  height: 60px;
  width: 100vw;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;

  a {
    &:hover {
      /*themed*/
      color: ${hoverColor};
      /*non-themed*/
      cursor: pointer;
    }
  }
  .theme-button {
    button {
      justify-self: flex-end;
    }
  }
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const SDNavRight = styled.div`
  display: flex;
`;

const SDNavItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  padding-left: 20px;
  :nth-child(1) {
    padding-left: 0px;
  }
  @media (max-width: 600px) {
    padding-left: 0px;
    margin-right: 30px;
  }
  cursor: pointer;
  a {
    padding: 0;
  }
`;

const SDThemeToggle = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 30px;
  height: 30px;
  background-color: inherit;
  cursor: pointer;
`;
