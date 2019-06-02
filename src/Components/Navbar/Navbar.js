import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { Link } from 'react-router-dom';

//Import colors
import { dtLightBlue, dtHover, ltLightGray, ltHover } from '../../colors.js';

//Export default component
export default function Navbar() {
    return (
        <SDNavbar>
            <SDNavItem>
                <div>
                    <Link to="/">toxic hackers</Link>
                </div>
            </SDNavItem>
            <SDNavItem className="about-section">
                <div>
                    <Link to="/about">about</Link>
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

const hoverColor = theme('mode', {
    light: ltHover,
    dark: dtHover
});

//Styled components
const SDNavbar = styled.div`
    /*themed*/
    background-color: ${backgroundColor};
    /*non-themed*/
    position: fixed;
    z-index: 2;
    box-sizing: border-box;
    top: 0;
    left: 0;
    height: 60px;
    width: 100vw;
    display: flex;
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
    .about-section {
        @media (max-width: 600px) {
            display: none;
        }
    }
    @media (max-width: 600px) {
        justify-content: center;
    }
`;

const SDNavItem = styled.div`
    height: 100%;
    display: flex;
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
