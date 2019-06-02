import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';

//Styling
import './App.scss';

//Import components
import HackerContainer from './Components/HackerContainer';

//Import colors
import { dtDarkBlue, dtWhiteFont, ltWhite, ltBlackFont } from './colors';
//Default export
export default function App() {
    const [averageSaltiness, setAverageSaltiness] = useState(undefined);
    const [countOfAllComments, setCountOfAllComments] = useState(undefined);
    const [countOfSaltyComments, setCountOfSaltyComments] = useState(undefined);
    const [hackerName, setHackerName] = useState(undefined);
    const [monthlyPlot, setMonthlyPlot] = useState(undefined);
    const [rankAmountOfSaltiness, setRankAmountOfSaltiness] = useState(undefined);
    const [rankQuantityOfSaltiness, setRankQuantityOfSaltiness] = useState(undefined);
    const [rankOverallSaltiness, setRankOverallSaltiness] = useState(undefined);
    const [dateOfFirstComment, setDateOfFirstComment] = useState(undefined);
    const [saltiestComments, setSaltiestComments] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    return (
        <Router>
            <ThemeProvider theme={{ mode: 'dark' }}>
                <StyledAppContainer>
                    <HackerContainer
                        averageSaltiness={averageSaltiness}
                        countOfAllComments={countOfAllComments}
                        countOfSaltyComments={countOfSaltyComments}
                        hackerName={hackerName}
                        monthlyPlot={monthlyPlot}
                        rankAmountOfSaltiness={rankAmountOfSaltiness}
                        rankQuantityOfSaltiness={rankQuantityOfSaltiness}
                        rankOverallSaltiness={rankOverallSaltiness}
                        dateOfFirstComment={dateOfFirstComment}
                        saltiestComments={saltiestComments}
                        loading={loading}
                        error={error}
                        setAverageSaltiness={setAverageSaltiness}
                        setCountOfAllComments={setCountOfAllComments}
                        setCountOfSaltyComments={setCountOfSaltyComments}
                        setHackerName={setHackerName}
                        setMonthlyPlot={setMonthlyPlot}
                        setRankAmountOfSaltiness={setRankAmountOfSaltiness}
                        setRankQuantityOfSaltiness={setRankQuantityOfSaltiness}
                        setRankOverallSaltiness={setRankOverallSaltiness}
                        setDateOfFirstComment={setDateOfFirstComment}
                        setSaltiestComments={setSaltiestComments}
                        setLoading={setLoading}
                        setError={setError}
                    />
                </StyledAppContainer>
            </ThemeProvider>
        </Router>
    );
}

//Theming
const backgroundColor = theme('mode', {
    light: ltWhite,
    dark: dtDarkBlue
});

const textColor = theme('mode', {
    light: ltBlackFont,
    dark: dtWhiteFont
});

//Styled components
const StyledAppContainer = styled.div`
    /*themed*/
    background-color: ${backgroundColor};
    color: ${textColor};
    /*non-themed*/
    max-width: 100vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-family: 'Sofia Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-weight: lighter;
    line-height: 1.5;
`;
