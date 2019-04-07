import React from 'react';
import { Tab } from 'semantic-ui-react';
import styled from 'styled-components';

import AMT_Salt_Contributed from '../data/top100_AMT_Salt_Contributed';
import Overall_Saltiest from '../data/top100_Overall_Saltiest';
import QTY_Salty_Comments from '../data/top100_QTY_Salty_Comments';
import Saltiest_Trolls from '../data/top100_Saltiest_Trolls';

import HackerList from './HackerList';

const panes = [
  { menuItem: 'Top 100 Salt Contributed', render: () => <HackerList heading={'Top 100 Salt Contributed'} data={AMT_Salt_Contributed} /> },
  { menuItem: 'Top 100 Overall Saltiest', render: () => <HackerList heading={'Top 100 Overall Saltiest'} data={Overall_Saltiest} /> },
  { menuItem: 'Top 100 Saltiest Trolls', render: () => <HackerList heading={'Top 100 Saltiest Trolls'} data={QTY_Salty_Comments} /> },
  { menuItem: 'Top 100 Salty Comments', render: () => <HackerList heading={'Top 100 Salty Comments'} data={Saltiest_Trolls} /> }
];

const TabsList = () => (
  <SDTabsEnvContainer>
    <SDTabsContainer>
      <Tab className="tab-container" menu={{ pointing: true }} panes={panes} />
    </SDTabsContainer>
  </SDTabsEnvContainer>
);

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
  }
  .ui.menu .item {
    width: 25%;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .ui.menu .active.item {
    background-color: #f8f9fa;
  }
`;

export default TabsList;
