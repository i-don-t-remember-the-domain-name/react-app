import React from 'react';
import styled from 'styled-components';
import { Loader } from 'semantic-ui-react';
import theme from 'styled-theming';

//Import components
import SearchBar from './SearchBar';

//Export default component
export default function SearchBanner(props) {
    return (
        <SDSearchBanner>
            <h1>Find the most toxic hackers on HackerNews</h1>
            <SDSearchBarFull>
                <SearchBar searchHacker={props.searchHacker} redirectToHackerProfilePage={props.redirectToHackerProfilePage} />
            </SDSearchBarFull>
            {!props.loading && props.error && <SDErrorMessage>User not found. Check spelling and capitalization, and search again.</SDErrorMessage>}
            {props.loading && <Loader active inline="centered" size="medium" />}
        </SDSearchBanner>
    );
}

//Theming
const h1Color = theme('mode', {
    light: '#f59f00',
    dark: '#f48c1b'
});

const errorTextColor = theme('mode', {
    light: '#f4a000',
    dark: '#f48c1b'
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
    h1 {
        font-family: 'Sofia Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        font-weight: lighter;
        font-size: 2rem;
        color: ${h1Color};
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
const SDErrorMessage = styled.div`
    height: 30px;
    font-size: 0.9rem;
    color: ${errorTextColor};
    padding: 0 10px;
`;
