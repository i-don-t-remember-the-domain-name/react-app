import React, { useRef } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

//Import images
import searchIconDark from '../../img/icon-search-darkblue.svg';
import searchIconLight from '../../img/icon-search-light.svg';

//Import colors
import { ltLightGray, ltBlackFont, ltPlaceholder, dtLightBlue, dtPurple, dtWhiteFont, dtPlaceholder } from '../../colors.js';

//Export default component
export default function SearchBar(props) {
    const hackerNameRef = useRef();
    const clearInput = () => {
        hackerNameRef.current.value = '';
    };
    return (
        <SDFormSearchBar
            onSubmit={e => {
                e.preventDefault();
                props.redirectToHackerProfilePage(hackerNameRef.current.value);
                clearInput();
            }}>
            <SDInputSearchBar placeholder="Search" ref={hackerNameRef} />
            <input className="submitButton" type="submit" value="" />
        </SDFormSearchBar>
    );
}

//Theming
const searchIcon = theme('mode', {
    light: `url(${searchIconLight})`,
    dark: `url(${searchIconDark})`
});

const backgroundColor = theme('mode', {
    light: ltLightGray,
    dark: dtLightBlue
});

const submitBackgroundColor = theme('mode', {
    light: ltLightGray,
    dark: dtPurple
});

const borderStyle = theme('mode', {
    light: `2px solid ${ltLightGray}`,
    dark: `2px solid ${dtPurple}`
});

const textColor = theme('mode', {
    light: ltBlackFont,
    dark: dtWhiteFont
});

const placeholderColor = theme('mode', {
    light: ltPlaceholder,
    dark: dtPlaceholder
});

const SDInputSearchBar = styled.input`
    /*themed */
    background-color: ${backgroundColor};
    border: ${borderStyle};
    color: ${textColor};
    /*non-themed*/
    height: 100%;
    width: 100%;
    padding-left: 15px;
    border-radius: 6px 0 0 6px;
    font-weight: lighter;
    ::placeholder {
        /*themed */
        color: ${placeholderColor};
        /*non-themed*/
        font-size: 0.9rem;
    }
`;

const SDFormSearchBar = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    z-index: 2;

    .submitButton {
        /*themed*/
        border: ${borderStyle};
        background-color: ${submitBackgroundColor};
        background-image: ${searchIcon};
        /*non-themed*/
        border-radius: 0 6px 6px 0;
        width: 35px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 1rem;
        cursor: pointer;
    }
`;
