import React, { Component } from 'react';
import styled from 'styled-components';

//Main Component For Export
class Search extends Component {
  render() {
    return (
      <SDForm>
        <SDInput placeholder="search hacker" />
        <SDButton>Submit</SDButton>
      </SDForm>
    );
  }
}

//Styling
const SDForm = styled.form`
  display: flex;
`;

const SDInput = styled.input`
  width: 70%;
  margin-right: 10px;
  line-height: 2;
`;

const SDButton = styled.button`
  width: 20%;
`;

//Export
export default Search;
