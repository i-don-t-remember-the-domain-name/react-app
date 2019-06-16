import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { Link } from 'react-router-dom';

//Import colors
import { dtLightBlue, dtHover, ltLightGray, ltBlue } from '../../colors.js';
//Import icons
import sunIcon from '../../img/icon-sun-green.svg';
import moonIcon from '../../img/icon-moon-blue.svg';
import closeLight from '../../img/icon-close-blue.svg';
import closeDark from '../../img/icon-close-white.svg';
//
//Export default component
export default function MenuMobile(props) {
    return (
        <SDMenu>
            <SDNavItem className="cancelButton">
                <SDThemeMenu onClick={() => props.setShowMenu(!props.showMenu)} />
            </SDNavItem>
            <SDNavItem onClick={() => props.setShowMenu(!props.showMenu)}>
                <Link to="/">TOXIC HACKERS</Link>
            </SDNavItem>
            <SDNavItem onClick={() => props.setShowMenu(!props.showMenu)}>
                <Link to="/hnstats">HN STATS</Link>
            </SDNavItem>
            <SDNavItem onClick={() => props.setShowMenu(!props.showMenu)}>
                <Link to="/about">ABOUT US</Link>
            </SDNavItem>
            <SDNavItem className="theme-button">
                <SDThemeToggle onClick={() => (props.theme === 'dark' ? props.setTheme('light') : props.setTheme('dark'))} />
            </SDNavItem>
        </SDMenu>
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

const backgroundImageMenu = theme('mode', {
    light: closeLight,
    dark: closeDark
});

const textColor = theme('mode', {
    light: ltBlue,
    dark: dtHover
});

//Styled components
const SDMenu = styled.div`
    /*themed*/
    background-color: ${backgroundColor};
    color: ${textColor};
    /*non-themed*/
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding: 0 20px;
    font-weight: 400;
    .cancelButton {
        position: absolute;
        top: 30px;
        right: 30px;
    }
`;

const SDNavItem = styled.div`
    font-size: 1.5rem;
    font-weight: 400;
    cursor: pointer;
    margin: 25px 0;
    a:hover {
        color: ${textColor};
    }
`;

const SDThemeToggle = styled.div`
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: 100%;
    width: 30px;
    height: 30px;
    background-color: inherit;
    justify-self: flex-end;
    cursor: pointer;
`;

const SDThemeMenu = styled.div`
    display: flex;
    background-image: url(${backgroundImageMenu});
    background-repeat: no-repeat;
    background-size: 100%;
    width: 30px;
    height: 30px;
    background-color: inherit;
    justify-self: flex-end;
    cursor: pointer;
`;
