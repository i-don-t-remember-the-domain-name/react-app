import React, { useRef } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

//Import images
import searchIconDark from '../../img/icon-search-dark.svg';
import searchIconLight from '../../img/icon-search-light.svg';

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
const placeholderColor = theme('mode', {
    light: 'darkgray',
    dark: '#FD8A2099'
});

const searchIcon = theme('mode', {
    light: `url(${searchIconLight})`,
    dark: `url(${searchIconDark})`
});

const backgroundColor = theme('mode', {
    light: `#f4f4f4`,
    dark: `white`
});

const SDInputSearchBar = styled.input`
    height: 100%;
    width: 100%;
    padding-left: 15px;
    background-color: ${backgroundColor};
    border-radius: 6px 0 0 6px;
    border: none;
    font-weight: lighter;
    ::placeholder {
        font-size: 0.9rem;
        color: ${placeholderColor};
    }
`;

const SDFormSearchBar = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    z-index: 2;

    .submitButton {
        border: none;
        border-radius: 0 6px 6px 0;
        width: 35px;
        cursor: pointer;
        background-color: ${backgroundColor};
        background-image: ${searchIcon};
        background-position: center right 15px;
        background-repeat: no-repeat;
        background-size: 1.2rem;
    }
`;
