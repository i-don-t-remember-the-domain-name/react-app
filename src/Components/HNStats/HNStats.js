import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

//Import components
import DarkHNStatsLineChartCommentsSentiment from '../Chart/DarkHNStatsLineChartCommentsSentiment';
import DarkHNStatsBarChartCommentsAmount from '../Chart/DarkHNStatsBarChartCommentsAmount';
import DarkHNStatsBarChartCommentsPercentage from '../Chart/DarkHNStatsBarChartCommentsPercentage';

import LightHNStatsLineChartCommentsSentiment from '../Chart/LightHNStatsLineChartCommentsSentiment';
import LightHNStatsBarChartCommentsAmount from '../Chart/LightHNStatsBarChartCommentsAmount';
import LightHNStatsBarChartCommentsPercentage from '../Chart/LightHNStatsBarChartCommentsPercentage';

//Import colors
import { dtWhiteFont, dtDarkBlue, ltBlackFont, ltWhite } from '../../colors.js';

export default function HNStats(props) {
    return (
        <SDHackerPageEnvContainer>
            <SDHackerPageContainer>
                <SDHackerPageHeading>HN averge saltiness in time</SDHackerPageHeading>
                {props.theme === 'dark' && <DarkHNStatsLineChartCommentsSentiment data-testid="chart-dark-line-sentiment" />}
                {props.theme === 'light' && <LightHNStatsLineChartCommentsSentiment data-testid="chart-light-line-sentiment" />}
                <SDHackerPageHeading>HN growth of salty comments</SDHackerPageHeading>
                {props.theme === 'dark' && <DarkHNStatsBarChartCommentsAmount data-testid="chart-dark-bar-comments-amount" />}
                {props.theme === 'light' && <LightHNStatsBarChartCommentsAmount data-testid="chart-light-bar-comments-amount" />}
                <SDHackerPageHeading>HN percentage of salty comments</SDHackerPageHeading>
                {props.theme === 'dark' && <DarkHNStatsBarChartCommentsPercentage data-testid="chart-dark-bar-comments-percentage" />}
                {props.theme === 'light' && <LightHNStatsBarChartCommentsPercentage data-testid="chart-light-bar-comments-percentage" />}
            </SDHackerPageContainer>
        </SDHackerPageEnvContainer>
    );
}

//Theming
const textColor = theme('mode', {
    light: ltBlackFont,
    dark: dtWhiteFont
});

const backgroundColor = theme('mode', {
    light: ltWhite,
    dark: dtDarkBlue
});

//Styled components
const SDHackerPageEnvContainer = styled.div`
    /*themed*/
    color: ${textColor};
    background-color: ${backgroundColor};
    /*non-themed*/
    width: 100vw;
    height: auto;
    min-height: 90vh;
    margin-top: 100px;
    display: flex;
    justify-content: center;
`;

const SDHackerPageContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    div.focus,
    div:focus {
        outline: 0;
        box-shadow: none !important;
    }
    @media (max-width: 1100px) {
        width: 90%;
    }
    @media (max-width: 900px) {
        width: 95%;
    }
`;

const SDHackerPageHeading = styled.div`
    font-weight: 400;
    font-size: 2rem;
    letter-spacing: 0.05rem;
    margin: 5vh 0 0 0;
    padding: 70px 0 50px 0;
    text-align: center;
    @media (max-width: 600px) {
        margin: 5vh 0 0 0;
    }
`;
