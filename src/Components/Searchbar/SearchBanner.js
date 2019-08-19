import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

//Import components
import SearchBar from './SearchBar';

//Import colors
import { ltOrange, dtWhiteFont } from '../../colors.js';

//Export default component
export default function SearchBanner(props) {
    return (
        <SDSearchBanner>
            <h1 data-testid="heading-main-banner">Search by HN username or browse the most Toxic commentors.</h1>
            <SDSearchBarFull>
                <SearchBar searchHacker={props.searchHacker} redirectToHackerProfilePage={props.redirectToHackerProfilePage} loading={props.loading} error={props.error} />
            </SDSearchBarFull>
        </SDSearchBanner>
    );
}

//Theming
const h1Color = theme('mode', {
    light: ltOrange,
    dark: dtWhiteFont
});

//Styled components
const SDSearchBanner = styled.div`
    width: 100vw;
    height: 50vh;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media (max-width: 1100px) {
        padding: 0 10px;
    }
    h1 {
        /*themed*/
        color: ${h1Color};
        /*non-themed*/
        font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        font-size: 2rem;
        font-weight: 400;
    }
`;

const SDSearchBarFull = styled.div`
    margin-top: 80px;
    margin-bottom: 20px;
    height: 40px;
    width: 30%;
    @media (max-width: 1100px) {
        width: 40%;
    }
    @media (max-width: 900px) {
        width: 50%;
    }
    @media (max-width: 600px) {
        width: 80%;
    }
`;
