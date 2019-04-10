import React from 'react';
import { Tab } from 'semantic-ui-react';
import styled from 'styled-components';

import AMT_Salt_Contributed from '../../data/top100_AMT_Salt_Contributed';
import Overall_Saltiest from '../../data/top100_Overall_Saltiest';
import QTY_Salty_Comments from '../../data/top100_QTY_Salty_Comments';
// import Saltiest_Trolls from '../../data/top100_Saltiest_Trolls';

import HackerList from './HackerList';

function TabsList(props) {
  const panes = [
    {
      menuItem: 'Top 100 Overall Saltiest',
      render: () => <HackerList searchHacker={props.searchHacker} heading={'Top 100 Overall Saltiest'} color={'#4c6cec'} metric={'sum_slt_oall'} data={Overall_Saltiest} />
    },
    {
      menuItem: 'Top 100 Salt Contributed',
      render: () => <HackerList searchHacker={props.searchHacker} heading={'Top 100 Salt Contributed'} color={'#f59f00'} metric={'sum_slt_s'} data={AMT_Salt_Contributed} />
    },
    {
      menuItem: 'Top 100 Saltiest Trolls',
      render: () => <HackerList searchHacker={props.searchHacker} heading={'Top 100 Saltiest Trolls'} color={'#74b816'} metric={'total salty comments'} data={QTY_Salty_Comments} />
    }
  ];
  return (
    <SDTabsEnvContainer>
      <SDTabsContainer>
        <Tab className="tab-container" menu={{ pointing: true }} panes={panes} />
      </SDTabsContainer>
    </SDTabsEnvContainer>
  );
}

const SDTabsEnvContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SDTabsContainer = styled.div`
  width: 70%;
  .tab-container {
    width: 100%;
    justify-content: space-between;
  }

  .ui.menu {
    box-shadow: none;
    border: none;
    justify-content: space-between;
  }
  .ui.menu .item {
    width: 32%;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #f8f9fa;
    font-family: 'Sofia Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    &:nth-of-type(1) {
      color: #4c6cec;
    }
    &:nth-of-type(2) {
      color: #f59f00;
    }
    &:nth-of-type(3) {
      color: #74b816;
    }
    &:nth-of-type(4) {
      color: #ff5d3e;
    }
  }

  .ui.menu .item:hover {
    &:nth-of-type(1) {
      background-color: #4c6cec1a;
      color: #4c6cec;
    }
    &:nth-of-type(2) {
      background-color: #f59f001a;
      color: #f59f00;
    }
    &:nth-of-type(3) {
      background-color: #74b8161a;
      color: #74b816;
    }
    &:nth-of-type(4) {
      background-color: #ff5d3e1a;
      color: #ff5d3e;
    }
  }
  .ui.menu .active.item {
    &:nth-of-type(1) {
      background-color: #4c6cec1a;
      color: #4c6cec;
    }
    &:nth-of-type(2) {
      background-color: #f59f001a;
      color: #f59f00;
    }
    &:nth-of-type(3) {
      background-color: #74b8161a;
      color: #74b816;
    }
    &:nth-of-type(4) {
      background-color: #ff5d3e1a;
      color: #ff5d3e;
    }
  }
  .ui.menu .item:before {
    display: none;
  }

  .ui.pointing.menu .item:after {
    border: none;
  }
  .ui.menu:after {
    display: none;
  }
`;

export default TabsList;
