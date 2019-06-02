import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

//Import components
import HackerRow from './HackerRow';
import HackerTopRow from './HackerTopRow';
import ExplanationSection from './ExplanationSection';

//Import colors
import { dtLightBlue, ltLightGray } from '../../colors.js';

//Export default component
export default function HackerList(props) {
    return (
        <SDHackerList>
            <ExplanationSection explanation={props.explanation} />
            <HackerTopRow metric={props.metric} />
            {props.data.map((data, index) => (
                <HackerRow searchHacker={props.searchHacker} key={data.commentor} data={data} index={index} heading={props.heading} />
            ))}
        </SDHackerList>
    );
}

//Theming
const backgroundcolor = theme('mode', {
    light: ltLightGray,
    dark: dtLightBlue
});

//Styled components
const SDHackerList = styled.div`
    /*themed*/
    background-color: ${backgroundcolor};
    /*non-themed*/
    box-sizing: border-box;
    min-height: 40vh;
    padding: 2%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    h3 {
        margin-bottom: 20px;
    }
`;
