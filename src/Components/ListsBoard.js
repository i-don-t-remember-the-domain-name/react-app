import React from 'react';
import styled from 'styled-components';

//Import Components
import ListCard from './ListCard';

function ListsBoard() {
  return (
    <SDListsBoard>
      <ListCard content={'List of Saltiest Hackers in 2018'} color={'blue'} />
      <ListCard content={'Who brought the most saltiness to HN'} color={'orange'} />
      <ListCard content={'Who brought the most saltiness to HN'} color={'green'} />
    </SDListsBoard>
  );
}

const SDListsBoard = styled.div`
  box-sizing: border-box;
  background-color: #f8f9fa;
  width: 100vw;
  height: 40vh;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default ListsBoard;
