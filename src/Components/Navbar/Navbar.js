import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { Link } from 'react-router-dom';

//Import colors
import { dtLightBlue, dtHover, dtWhiteFont, ltLightGray, ltOrange, ltBlue } from '../../colors.js';
//Import icons
import sunIcon from '../../img/icon-sun-green.svg';
import moonIcon from '../../img/icon-moon-blue.svg';
import menuLight from '../../img/icon-menu-blue.svg';
import menuDark from '../../img/icon-menu-white.svg';

//Import components
import MenuMobile from './MenuMobile';
//Export default component
export default function Navbar(props) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <SDNavbar>
            {showMenu && <MenuMobile showMenu={showMenu} setShowMenu={setShowMenu} setTheme={props.setTheme} theme={props.theme} />}
            {/*Rigth side of navbar */}
            <SDNavRight>
                <SDNavItem>
                    <Link to="/">TOXIC HACKERS</Link>
                </SDNavItem>
                <SDNavItem>
                    <Link to="/hnstats">HN stats</Link>
                </SDNavItem>
                <SDNavItem>
                    <Link to="/about">about</Link>
                </SDNavItem>
                <SDNavItemMobile>
                    <Link to="/">TOXIC HACKERS</Link>
                </SDNavItemMobile>
            </SDNavRight>
            {/*Left side of navbar */}
            <SDNavLeft>
                <SDNavItem className="theme-button">
                    <SDThemeToggle onClick={() => (props.theme === 'dark' ? props.setTheme('light') : props.setTheme('dark'))} />
                </SDNavItem>
                <SDNavItemMobile className="theme-button">
                    <SDThemeMenu onClick={() => setShowMenu(!showMenu)} />
                </SDNavItemMobile>
            </SDNavLeft>
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

const backgroundImageMenu = theme('mode', {
    light: menuLight,
    dark: menuDark
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    box-sizing: border-box;
    top: 0;
    left: 0;
    height: 60px;
    width: 100vw;
    padding: 0 20px;
    font-weight: 400;
`;

const SDNavRight = styled.div`
    display: flex;
`;

const SDNavLeft = styled.div`
    display: flex;
`;

const SDNavItem = styled.div`
    font-size: 1rem;
    font-weight: 400;
    padding-left: 20px;
    cursor: pointer;
    a {
        &:hover {
            /*themed*/
            color: ${hoverColor};
        }
    }
    :nth-child(1) {
        padding-left: 0px;
    }
    @media (max-width: 600px) {
        display: none;
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
    @media (max-width: 600px) {
        display: none;
    }
`;

const SDThemeMenu = styled.div`
    @media (max-width: 600px) {
        display: flex;
        background-image: url(${backgroundImageMenu});
        background-repeat: no-repeat;
        background-size: 100%;
        width: 30px;
        height: 30px;
        background-color: inherit;
        justify-self: flex-end;
        cursor: pointer;
    }
`;

const SDNavItemMobile = styled.div`
    display: none;
    @media (max-width: 600px) {
        display: flex;
        font-size: 1rem;
        font-weight: 400;
        cursor: pointer;
        a {
            &:hover {
                /*themed*/
                color: ${hoverColor};
            }
        }
    }
`;
