import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

//Import colors
import { ltWhite, ltBlackFont, ltBlue, dtDarkBlue, dtWhiteFont, dtGreen } from '../../colors.js';

//Export default component
export default function ExplanationSection(props) {
    return (
        <SDExplanationCard>
            <SDExplanationHeading>What does the score mean?</SDExplanationHeading>
            <SDExplanationContent>We scored the sentiment of 15,397,309 Hacker News comments. We then ranked users by their "saltiness" or level of subjective negativity. </SDExplanationContent>
            <div />
            <SDExplanationContent>{props.explanation}</SDExplanationContent>
        </SDExplanationCard>
    );
}

//Theming
const backgroundcolor = theme('mode', {
    light: ltWhite,
    dark: dtDarkBlue
});

const textColor = theme('mode', {
    light: ltBlackFont,
    dark: dtWhiteFont
});

const headingColor = theme('mode', {
    light: ltBlue,
    dark: dtGreen
});

//Styled components
const SDExplanationCard = styled.div`
    /*themed*/
    background-color: ${backgroundcolor};
    /*non-themed*/
    width: 100%;
    min-height: 50px;
    height: auto;
    margin: 5px 0 30px 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    cursor: default;
    @media (max-width: 900px) {
        font-size: 0.9rem;
    }
`;

const SDExplanationContent = styled.div`
    /*themed*/
    color: ${textColor};
`;

const SDExplanationHeading = styled.div`
    /*themed*/
    color: ${headingColor};
    /*non-themed*/
    font-weight: 600;
    font-size: 1rem;
    padding-bottom: 10px;
    @media (max-width: 900px) {
        font-size: 0.9rem;
    }
`;
