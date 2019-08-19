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
import { dtWhiteFont, dtGreen, dtLightBlue, ltLightGray, ltBlue, ltLightBlue, ltOrange } from '../../colors.js';

//Data - explanation section
const overallScore = `Just Toxic = User's total "Toxicity" after all comments scores ["Toxicity" < 0 && "Toxicity" >= 0].`;
const saltScore = `Lifetime Toxicity = Users's lifetime total score of comments where ["Toxicity" < 0]`;
const numberOfSaltyComments = `Quantity of Toxic Comments = Quantity of comments where ["Toxicity" < 0] `;

//Export default component
export default function HackerTopListsTabs(props) {
    const panes = [
        {
            menuItem: 'Top 100: Just Toxic',
            render: () => <HackerList searchHacker={props.searchHacker} heading={'Top 100: Just Toxic'} data={Overall_Saltiest} explanation={overallScore} />
        },
        {
            menuItem: 'Top 100: Lifetime Toxicity',
            render: () => <HackerList searchHacker={props.searchHacker} heading={'Top 100: Lifetime Toxicity'} data={AMT_Salt_Contributed} explanation={saltScore} />
        },
        {
            menuItem: 'Top 100: Quantity of Toxic Comments',
            render: () => <HackerList searchHacker={props.searchHacker} heading={'Top 100: Quantity of Toxic Comments'} data={QTY_Salty_Comments} explanation={numberOfSaltyComments} />
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
    light: ltOrange,
    dark: dtWhiteFont
});

const backgroundColor = theme('mode', {
    light: ltLightGray,
    dark: dtLightBlue
});

const backgroundColorActive = theme('mode', {
    light: ltLightBlue,
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
        font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        @media (max-width: 600px) {
            font-size: 0.9rem;
            margin-top: 5px;
            width: 100%;
        }
    }

    .ui.menu .item:hover {
        background-color: ${backgroundColorActive};
        color: ${headingColor};
    }
    .ui.menu .active.item {
        background-color: ${backgroundColorActive};
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
