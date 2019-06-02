import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

//Import colors
import { dtPlaceholder, ltPlaceholder } from '../../colors.js';

//Export default component
export default function Footer() {
    return (
        <SDFooter>
            <div>
                Created by <a href="https://twitter.com/ivanahuckova">Ivana</a> and <a href="https://twitter.com/bwinterrose">Britton</a>. &copy; 2019
            </div>
        </SDFooter>
    );
}

//Theming
const textColor = theme('mode', {
    light: ltPlaceholder,
    dark: dtPlaceholder
});

//Styled components
const SDFooter = styled.footer`
    /*themed*/
    color: ${textColor};
    /*non-themed*/
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    height: 70px;
    width: 100vw;
    padding-bottom: 10px;
    padding-top: 20px;
`;
