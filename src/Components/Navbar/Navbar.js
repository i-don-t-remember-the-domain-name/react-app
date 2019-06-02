import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from 'styled-theming';

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
    light: '#f4f4f4',
    dark: '#16163E'
});

const hoverColor = theme('mode', {
    light: 'darkgray',
    dark: '#1FDA02'
});

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
    font-weight: 600;
    background-color: ${backgroundColor};
    z-index: 2;
    a {
        &:hover {
            color: ${hoverColor};
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
