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
            <SDExplanationContent>We processed 19.3+ million HN comments to score comments with abusive contents according to "Toxicity".<br/>What is Toxicity? We score 6 different attributes: Toxic, Severe Toxic, Obscene, Threat, Insult, and Identity Hate. We then weight and combine these scores into one: Toxicity. This keeps the focus on intentionally harmful speech. Not just spicy rants.<br/>Our scoring model is a a BERT Large classifier. We fine-tuned BERT on the "Jigsaw Toxic Comments" dataset as transfer-learning.</SDExplanationContent>
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
    font-weight: 400;
    font-size: 1rem;
    padding-bottom: 10px;
    @media (max-width: 900px) {
        font-size: 0.9rem;
    }
`;
