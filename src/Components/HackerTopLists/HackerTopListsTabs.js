import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

//Import components
import HackerList from './HackerList';
import { Tab } from 'semantic-ui-react';

//Import data
import AMT_Salt_Contributed from '../../data/top100_AMT_Salt_Contributed';
import Overall_Saltiest from '../../data/top100_Overall_Saltiest';
import QTY_Salty_Comments from '../../data/top100_QTY_Salty_Comments';

//Import colors
import { dtWhiteFont, dtGreen, dtLightBlue, ltLightGray, ltBlue, ltBlackFont } from '../../colors.js';

//Data - explanation section
const overallScore = `For Total Overall Score, we add up all the comment scores for each user. Salty comments cancel out positive comments and the overall score is left behind. We then rank all the "salty" users by their overall score, lowest to highest.`;
const saltScore = `For Total Salt Score, we take the total scores across all of a user's "salty" comments and add them up. This gives us the total salt score. We then rank the "salty" users from lowest to highest.`;
const numberOfSaltyComments = `For Number of Salty Comments, we count the number of comments with a "salty" score and tally them up. This gives us the number of salty comments. We then rank the "salty" users from highest to lowest.`;

//Export default component
export default function HackerTopListsTabs(props) {
    const panes = [
        {
            menuItem: 'Top 100: Total Overall Score',
            render: () => <HackerList searchHacker={props.searchHacker} heading={'Top 100: Total Overall Score'} data={Overall_Saltiest} explanation={overallScore} />
        },
        {
            menuItem: 'Top 100: Total Salt Score',
            render: () => <HackerList searchHacker={props.searchHacker} heading={'Top 100: Total Salt Score'} data={AMT_Salt_Contributed} explanation={saltScore} />
        },
        {
            menuItem: 'Top 100: Number of Salty Comments',
            render: () => <HackerList searchHacker={props.searchHacker} heading={'Top 100: Number of Salty Comments'} data={QTY_Salty_Comments} explanation={numberOfSaltyComments} />
        }
    ];

    return (
        <SDTabsEnvContainer>
            <SDTabsContainer>
                <Tab className="tab-container" menu={{ pointing: true }} panes={panes} />
            </SDTabsContainer>
        </SDTabsEnvContainer>
    );
}

//Theming
const headingColor = theme('mode', {
    light: ltBlue,
    dark: dtGreen
});

const textColor = theme('mode', {
    light: ltBlackFont,
    dark: dtWhiteFont
});

const backgroundColor = theme('mode', {
    light: ltLightGray,
    dark: dtLightBlue
});

//Styled components
const SDTabsEnvContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SDTabsContainer = styled.div`
    width: 70%;
    @media (max-width: 1200px) {
        width: 90%;
    }
    @media (max-width: 900px) {
        width: 95%;
    }

    .tab-container {
        /*themed*/
        color: ${textColor};
        /*non-themed*/
        width: 100%;
        justify-content: space-between;
    }

    .ui.menu {
        box-shadow: none;
        border: none;
        justify-content: space-between;
        background: inherit;
        @media (max-width: 600px) {
            flex-direction: column;
        }
    }
    .ui.menu .item {
        /*themed*/
        background-color: ${backgroundColor};
        color: ${textColor};
        /*non-themed*/
        width: 32%;
        line-height: 1.5;
        padding-top: 30px;
        padding-bottom: 30px;
        font-family: 'Sofia Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        font-weight: 600;
        font-size: 1rem;
        @media (max-width: 600px) {
            font-size: 0.9rem;
            margin-top: 5px;
            width: 100%;
        }
    }

    .ui.menu .item:hover {
        background-color: ${backgroundColor};
        color: ${headingColor};
    }
    .ui.menu .active.item {
        background-color: ${backgroundColor};
        color: ${headingColor};
    }
    .ui.menu .item:before {
        display: none;
    }

    .ui.pointing.menu .item:after {
        display: none;
    }
    .ui.menu:after {
        display: none;
    }
`;
