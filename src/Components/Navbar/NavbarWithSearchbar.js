import React from 'react';
import styled from 'styled-components';
import { Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import theme from 'styled-theming';

//Import components
import Searchbar from '../Searchbar/SearchBar';

//Export default component
export default function Navbar(props) {
    return (
        <SDNavbar>
            <SDLeftNav>
                <SDNavItem>
                    <div>
                        <Link to="/">HackerSalt</Link>
                    </div>
                </SDNavItem>
                <SDNavItem className="about-section">
                    <div>
                        <Link to="/about">About</Link>
                    </div>
                </SDNavItem>
            </SDLeftNav>
            <SDMiddleNav>
                <SDNavSearchBar>
                    <Searchbar background={'white'} className="navbar-searchbar" redirectToHackerProfilePage={props.redirectToHackerProfilePage} />
                </SDNavSearchBar>
            </SDMiddleNav>
            {props.loading && (
                <SDRightNav>
                    {' '}
                    <Loader active inline size="small" />
                </SDRightNav>
            )}
            {!props.loading && props.error && (
                <SDRightNav>
                    <SDErrorMessage>User not found. Check spelling and capitalization, and try to search again.</SDErrorMessage>
                </SDRightNav>
            )}
        </SDNavbar>
    );
}

//Theming

const backgroundColor = theme('mode', {
    light: '#white',
    dark: '#0E0179'
});

const boldness = theme('mode', {
    light: '300',
    dark: '600'
});

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
    background-color: ${backgroundColor};
    flex-wrap: wrap;
    font-weight: ${boldness};
    .about-section {
        @media (max-width: 600px) {
            display: none;
        }
    }
    @media (max-width: 600px) {
        height: 50px;
        flex-wrap: wrap;
    }
`;

const SDLeftNav = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
    height: 100%;
    @media (max-width: 600px) {
        width: 100%;
        justify-content: center;
        z-index: 2;
    }
`;

const SDMiddleNav = styled.div`
    display: flex;
    justify-content: center;
    width: 60%;
    height: 100%;
    @media (max-width: 900px) {
        width: 74%;
        justify-content: flex-end;
    }
    @media (max-width: 600px) {
        width: 100%;
        justify-content: center;
        z-index: 2;
        background-color: white;
    }
`;

const SDRightNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    @media (max-width: 900px) {
        width: 100%;
        justify-content: center;
    }
`;
const SDErrorMessage = styled.div`
    font-size: 0.9rem;
    color: #f4a000;
    padding: 0 10px;
    text-align: center;
`;

const SDNavItem = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    font-size: 1rem;
    font-weight: lighter;
    padding-left: 30px;
    @media (max-width: 600px) {
        margin-right: 15px;
        padding: 0;
    }
    cursor: pointer;
    a {
        padding: 0;
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
