import React, { useRef } from 'react';
import styled from 'styled-components';

//Import images
import scale from '../../img/scale.png';

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
        props.searchHacker(hackerNameRef.current.value);
        clearInput();
      }}>
      <SDInputSearchBar placeholder="Search" ref={hackerNameRef} />
      <input className="submitButton" type="submit" value="" />
    </SDFormSearchBar>
  );
}

const SDInputSearchBar = styled.input`
  height: 100%;
  width: 100%;
  padding-left: 15px;
  background-color: #f8f9fa;
  border-radius: 6px 0 0 6px;
  border: none;

  ::placeholder {
    font-size: 0.9rem;
    color: lightgray;
  }
`;

const SDFormSearchBar = styled.form`
  height: 100%;
  width: 100%;
  display: flex;

  .submitButton {
    border: none;
    border-radius: 0 6px 6px 0;
    width: 35px;
    cursor: pointer;
    background-color: #f8f9fa;
    background-image: url(${scale});
    background-position: center right 15px;
    background-repeat: no-repeat;
    background-size: 0.9rem;
  }
`;
