import React from 'react';
import styled from 'styled-components';

//Import Components
import ListCard from './ListCard';

function ListsBoard() {
  return (
    <SDListsBoard>
      <ListCard content={'Top 100 Saltiest Trolls on HackerNews'} color={'blue'} linkDestination={'top-100-quantity-of-added-salt'} />
      <ListCard content={'Who brought the most saltiness to HN'} color={'orange'} linkDestination={'top-100-quantity-of-added-salt'} />
      <ListCard content={'Who brought the most saltiness to HN'} color={'green'} linkDestination={'top-100-quantity-of-added-salt'} />
    </SDListsBoard>
  );
}

const SDListsBoard = styled.div`
  box-sizing: border-box;
  background-color: #f8f9fa;
  width: 100vw;
  height: 50vh;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default ListsBoard;
