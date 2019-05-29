import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

//Export default component
export default function ExplanationSection(props) {
    const style = {
        color: props.color
    };
    return (
        <SDExplanationCard style={style}>
            <SDExplanationHeading id="dark-test" style={style}>
                What does the score mean?
            </SDExplanationHeading>
            <div>We scored the sentiment of 15,397,309 Hacker News comments. We then ranked users by their "saltiness" or level of subjective negativity. </div>
            <div />
            <div>{props.explanation}</div>
        </SDExplanationCard>
    );
}

//Theming
const backgroundcolor = theme('mode', {
    light: 'white',
    dark: '#0E017A'
});

const color = theme('mode', {
    light: 'black',
    dark: 'white'
});

const heading = theme('mode', {
    dark: '#FD8A20 !important'
});

//Styled components
const SDExplanationCard = styled.div`
    width: 100%;
    min-height: 50px;
    height: auto;
    margin: 5px 0 30px 0;
    padding: 10px;
    color: ${heading};
    background-color: ${backgroundcolor};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    cursor: default;
    @media (max-width: 900px) {
        font-size: 0.9rem;
    }

    div {
        color: ${color};
    }
`;

const SDExplanationHeading = styled.div`
    font-weight: 600;
    font-size: 1rem;
    padding-bottom: 10px;
    @media (max-width: 900px) {
        font-size: 0.9rem;
    }
`;
